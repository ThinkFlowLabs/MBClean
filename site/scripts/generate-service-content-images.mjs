/**
 * MB Clean Solutions -- Service Content Image Generation
 * Generates one content image per service page (placed before the first H2)
 * Uses Fal AI Nano Banana 2 (fal-ai/nano-banana-2)
 *
 * Usage: node scripts/generate-service-content-images.mjs
 */

import { fal } from '@fal-ai/client';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', '..', 'generated-images', 'services');

// ─── Config ───────────────────────────────────────────────────────────────
fal.config({ credentials: process.env.FAL_KEY });

const MODEL = 'fal-ai/nano-banana-2';

const STYLE = {
  photo: 'professional commercial photography, ultra-sharp focus, natural lighting, high-end editorial quality, 8K detail',
  southFL: 'South Florida setting, bright natural light, modern architecture, warm tones',
  clean: 'immaculately clean, polished, gleaming, professional results',
  interior: 'commercial interior, wide-angle perspective, professional real estate photography',
};

// ─── Service Content Image Definitions ────────────────────────────────────

const SERVICE_CONTENT_IMAGES = [
  {
    slug: 'commercial-deep-cleaning',
    filename: 'commercial-deep-cleaning-content.webp',
    prompt: `Professional cleaning team methodically deep cleaning a large open-plan commercial office at night, close-up of technician using microfiber system on stainless steel surfaces, spray bottles and organized caddy visible, navy blue uniform, dramatic directional lighting highlighting the gleaming results, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, environmental portrait style`,
  },
  {
    slug: 'commercial-floor-deep-cleaning',
    filename: 'commercial-floor-deep-cleaning-content.webp',
    prompt: `Overhead cinematic shot of an industrial auto-scrubber machine in motion on a massive commercial warehouse floor, clean solution trail visible behind it, the transformation from dusty gray concrete to a bright sealed surface clearly shown, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, dramatic top-down perspective`,
  },
  {
    slug: 'stripping-and-waxing',
    filename: 'stripping-and-waxing-content.webp',
    prompt: `Close-up detail shot of a freshly waxed VCT tile floor in a long commercial hallway, perfect mirror-like reflection of fluorescent ceiling lights stretching into the distance, multiple coats of high-gloss finish visible, wet-look shine, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, low-angle dramatic perspective`,
  },
  {
    slug: 'scrubbing-and-wax',
    filename: 'scrubbing-and-wax-content.webp',
    prompt: `Professional floor care technician operating a high-speed burnishing machine on a commercial retail floor, sparks of shine trailing behind the pad, polished floor reflecting product displays, action shot capturing the machine in motion, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, dynamic action photography`,
  },
  {
    slug: 'carpet-cleaning',
    filename: 'carpet-cleaning-content.webp',
    prompt: `Close-up of professional hot water extraction carpet cleaning wand working on dark commercial office carpet, visible steam rising, dramatic contrast between the cleaned bright strip and the surrounding soiled carpet, professional truck-mounted equipment hose visible, ${STYLE.photo}, ${STYLE.interior}, macro detail of transformation in progress`,
  },
  {
    slug: 'pressure-washing',
    filename: 'pressure-washing-content.webp',
    prompt: `Dramatic action shot of high-pressure water jet cleaning a commercial building's concrete loading dock area, powerful fan spray pattern visible cutting through years of grime, the clean concrete behind is bright white contrasting with dark stained concrete ahead, palm trees and South Florida sky in background, ${STYLE.photo}, ${STYLE.southFL}, outdoor commercial setting`,
  },
  {
    slug: 'tile-grout-cleaning',
    filename: 'tile-grout-cleaning-content.webp',
    prompt: `Extreme close-up of a rotary tile and grout cleaning tool in action on a commercial kitchen floor, cleaning solution foaming in the grout lines, the dramatic transformation visible where pristine white grout meets discolored brown grout, professional detail shot, ${STYLE.photo}, macro photography, ${STYLE.clean}, split before-after visible in single frame`,
  },
  {
    slug: 'marble-terrazzo-polishing',
    filename: 'marble-terrazzo-polishing-content.webp',
    prompt: `Diamond grinding and polishing machine creating a perfect mirror finish on a natural marble floor in a luxury South Florida condo lobby, the reflection of a crystal chandelier and tropical plants visible in the polished surface, fine mist from water-cooled grinding, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, luxury commercial setting, artistic composition`,
  },
  {
    slug: 'air-duct-cleaning',
    filename: 'air-duct-cleaning-content.webp',
    prompt: `Professional HVAC technician using a high-powered vacuum and rotating brush system inside a large commercial air duct, LED inspection light illuminating the clean metallic interior, before-and-after contrast visible in the duct with clean section and dusty section, safety goggles and PPE, ${STYLE.photo}, technical documentation style, detailed close-up`,
  },
  {
    slug: 'post-construction-cleaning',
    filename: 'post-construction-cleaning-content.webp',
    prompt: `Professional post-construction cleaning crew working in a brand-new South Florida commercial space, one technician polishing floor-to-ceiling windows revealing palm trees outside, another vacuuming fine construction dust from new flooring, the space transitioning from construction mess to move-in ready, natural golden hour light streaming through cleaned windows, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, wide-angle environmental shot`,
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────

async function ensureDir(dirPath) {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

async function downloadImage(url, outputPath) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(outputPath, buffer);
  console.log(`  ✓ Saved: ${outputPath} (${(buffer.length / 1024).toFixed(0)}KB)`);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Main ─────────────────────────────────────────────────────────────────

async function main() {
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║  MB Clean Solutions -- Service Content Images    ║');
  console.log('║  Model: fal-ai/nano-banana-2                    ║');
  console.log('║  Images: 10 service content images (16:9, 1K)   ║');
  console.log('╚══════════════════════════════════════════════════╝');

  if (!process.env.FAL_KEY) {
    console.error('\n✗ FAL_KEY environment variable not set!');
    console.error('  Set it in .env or export FAL_KEY=your-key');
    process.exit(1);
  }

  await ensureDir(OUTPUT_DIR);

  const startTime = Date.now();

  try {
    for (const image of SERVICE_CONTENT_IMAGES) {
      console.log(`\n  Generating: ${image.filename}`);
      process.stdout.write('  ');

      const result = await fal.subscribe(MODEL, {
        input: {
          prompt: image.prompt,
          num_images: 1,
          output_format: 'webp',
          aspect_ratio: '16:9',
          resolution: '1K',
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === 'IN_QUEUE') {
            process.stdout.write('.');
          }
        },
      });

      const imageUrl = result.data.images[0].url;
      const outputPath = join(OUTPUT_DIR, image.filename);
      await downloadImage(imageUrl, outputPath);

      await sleep(500); // Rate limiting
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n\n✓ All 10 service content images generated in ${elapsed}s`);
    console.log(`  Images saved to: generated-images/services/`);
    console.log('  Review the images, then copy them to site/public/images/services/ when ready.');
    console.log('\n  Copy command:');
    console.log('  cp ../../generated-images/services/*-content.webp public/images/services/');

  } catch (error) {
    console.error('\n✗ Generation failed:', error.message);
    if (error.body) console.error('  API response:', JSON.stringify(error.body, null, 2));
    process.exit(1);
  }
}

main();
