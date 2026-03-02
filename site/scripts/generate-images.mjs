/**
 * MB Clean Solutions -- Image Generation Script
 * Uses Fal AI Nano Banana 2 (fal-ai/nano-banana-2) to generate all site images
 *
 * Usage: node scripts/generate-images.mjs [category]
 * Categories: all, heroes, services, industries, areas, before-after, misc
 *
 * Before/after pairs use the /edit endpoint for consistency:
 *   1. Generate the "after" (clean) image
 *   2. Use the after image as reference + edit prompt to create "before" (dirty) version
 */

import { fal } from '@fal-ai/client';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// Save to a separate review folder outside /site so user can review before placing
const PUBLIC_DIR = join(__dirname, '..', '..', 'generated-images');

// ─── Config ───────────────────────────────────────────────────────────────
fal.config({ credentials: process.env.FAL_KEY });

const MODEL = 'fal-ai/nano-banana-2';
const MODEL_EDIT = 'fal-ai/nano-banana-2/edit';

// Shared style tokens for consistency across all images
const STYLE = {
  photo: 'professional commercial photography, ultra-sharp focus, natural lighting, high-end editorial quality, 8K detail',
  southFL: 'South Florida setting, bright natural light, modern architecture, warm tones',
  clean: 'immaculately clean, polished, gleaming, professional results',
  dirty: 'visibly dirty, stained, worn, neglected, needs professional cleaning',
  interior: 'commercial interior, wide-angle perspective, professional real estate photography',
};

// ─── Image Definitions ───────────────────────────────────────────────────

const HOMEPAGE_HERO = {
  path: 'hero/homepage-hero.webp',
  prompt: `A stunning panoramic view of a modern commercial building lobby in South Florida with pristine polished marble floors reflecting overhead lighting, floor-to-ceiling windows showing palm trees outside, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, dramatic perspective, luxury commercial space, golden hour light streaming through windows`,
  aspect_ratio: '16:9',
  resolution: '2K',
};

const SERVICE_HEROES = [
  {
    path: 'services/commercial-deep-cleaning-hero.webp',
    prompt: `Professional cleaning crew performing deep cleaning of a large modern commercial office space, team wearing navy blue uniforms using industrial cleaning equipment, sparkling clean floors and surfaces, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.interior}, action shot, team at work`,
  },
  {
    path: 'services/commercial-floor-deep-cleaning-hero.webp',
    prompt: `Professional floor cleaning technician operating an industrial floor scrubber machine on a large commercial VCT tile floor, half the floor dirty and half gleaming clean showing the transformation, ${STYLE.photo}, ${STYLE.interior}, dramatic before-after visible in single shot`,
  },
  {
    path: 'services/stripping-and-waxing-hero.webp',
    prompt: `Close-up of a professional floor technician applying fresh wax coat to a commercial floor using an industrial buffer machine, the freshly waxed section gleaming like glass reflecting overhead fluorescent lights, ${STYLE.photo}, ${STYLE.interior}, glossy reflective floor surface`,
  },
  {
    path: 'services/scrubbing-and-wax-hero.webp',
    prompt: `Industrial floor scrubbing machine in action on a commercial floor, cleaning solution visible, half of the floor being transformed from dull to shining, professional cleaning technician guiding the machine, ${STYLE.photo}, ${STYLE.interior}, wide angle`,
  },
  {
    path: 'services/carpet-cleaning-hero.webp',
    prompt: `Professional carpet cleaning technician using a truck-mounted hot water extraction machine on commercial office carpet, steam rising, visible clean path behind the wand on dark commercial carpet, ${STYLE.photo}, ${STYLE.interior}, professional equipment`,
  },
  {
    path: 'services/pressure-washing-hero.webp',
    prompt: `Professional pressure washing technician cleaning the exterior concrete walkway of a South Florida commercial building, high-pressure water spray visible creating a dramatic clean line on dirty concrete, palm trees in background, ${STYLE.photo}, ${STYLE.southFL}, outdoor action shot`,
  },
  {
    path: 'services/tile-grout-cleaning-hero.webp',
    prompt: `Close-up of professional tile and grout cleaning in progress on a commercial kitchen or bathroom floor, rotary tool with cleaning solution restoring white grout lines between ceramic tiles, dramatic transformation visible, ${STYLE.photo}, macro detail shot`,
  },
  {
    path: 'services/marble-terrazzo-polishing-hero.webp',
    prompt: `Professional marble floor polishing in a luxury South Florida condo lobby, diamond grinding machine creating a mirror-like finish on natural marble, reflection of crystal chandelier visible in the polished surface, ${STYLE.photo}, ${STYLE.southFL}, luxury setting`,
  },
  {
    path: 'services/air-duct-cleaning-hero.webp',
    prompt: `Professional HVAC technician performing commercial air duct cleaning, inserting industrial vacuum hose into a large commercial ductwork access panel, wearing safety gear, clean modern commercial building mechanical room, ${STYLE.photo}, technical professional setting`,
  },
  {
    path: 'services/post-construction-cleaning-hero.webp',
    prompt: `Professional post-construction cleaning crew working in a newly built South Florida commercial space, cleaning dust and debris from construction, windows being polished, modern commercial interior with construction materials still visible, ${STYLE.photo}, ${STYLE.southFL}, transformation in progress`,
  },
];

const INDUSTRY_IMAGES = [
  {
    path: 'industries/warehouses.webp',
    prompt: `Modern South Florida warehouse interior with massive polished concrete floors, high ceilings with industrial lighting, organized shelving systems, immaculately clean commercial space, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, industrial scale`,
  },
  {
    path: 'industries/restaurants.webp',
    prompt: `Upscale South Florida restaurant interior with gleaming kitchen-visible concept, spotlessly clean tile floors, polished stainless steel surfaces, modern dining area with clean tables, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, hospitality setting`,
  },
  {
    path: 'industries/medical-facilities.webp',
    prompt: `Modern medical clinic waiting room and corridor in South Florida, immaculate glossy floors, sterile clean environment, medical equipment visible, bright LED lighting, healthcare facility, ${STYLE.photo}, ${STYLE.clean}, clinical precision`,
  },
  {
    path: 'industries/condos-hoa.webp',
    prompt: `Luxury South Florida high-rise condo building common area with polished marble lobby floor, elegant lighting, tropical landscaping visible through glass walls, pristine condition, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, luxury residential`,
  },
  {
    path: 'industries/gyms-fitness.webp',
    prompt: `Modern fitness center with clean rubber flooring, organized exercise equipment, bright lighting, mirrors along walls, immaculate condition throughout, South Florida gym facility, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, athletic facility`,
  },
  {
    path: 'industries/houses-of-worship.webp',
    prompt: `Beautiful South Florida church interior with polished hardwood and tile floors, wooden pews, stained glass windows casting colorful light, immaculately maintained worship space, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, sacred space`,
  },
  {
    path: 'industries/retail-stores.webp',
    prompt: `Modern South Florida retail store interior with gleaming polished floors reflecting display lighting, organized merchandise displays, clean glass storefronts, luxury shopping environment, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, commercial retail`,
  },
  {
    path: 'industries/office-buildings.webp',
    prompt: `Modern South Florida corporate office building lobby and corridor, polished floors reflecting overhead lighting, glass partitions, contemporary furniture, professional clean environment, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, corporate setting`,
  },
  {
    path: 'industries/hotels-hospitality.webp',
    prompt: `Luxury South Florida hotel lobby with polished marble floors, elegant fountain or art installation, tropical plants, immaculate grand entrance, palm trees visible outside, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, luxury hospitality`,
  },
  {
    path: 'industries/schools.webp',
    prompt: `Modern South Florida school hallway with gleaming VCT tile floors freshly waxed, lockers along walls, bright fluorescent lighting, clean educational environment, wide corridor, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, educational facility`,
  },
];

const AREA_HEROES = [
  {
    path: 'areas/miami-dade-hero.webp',
    prompt: `Stunning aerial view of Miami downtown skyline and Brickell at golden hour, modern glass skyscrapers reflecting sunset, Biscayne Bay in background, palm tree lined streets below, commercial district, ${STYLE.photo}, ${STYLE.southFL}, cinematic cityscape`,
  },
  {
    path: 'areas/broward-hero.webp',
    prompt: `Beautiful aerial view of Fort Lauderdale downtown skyline at golden hour, New River waterway below, modern commercial buildings and office towers, Broward County commercial district, ${STYLE.photo}, ${STYLE.southFL}, cinematic cityscape`,
  },
  {
    path: 'areas/palm-beach-hero.webp',
    prompt: `Stunning aerial view of West Palm Beach downtown skyline at golden hour, Intracoastal Waterway, luxury high-rise buildings, palm tree lined boulevards, Palm Beach County commercial area, ${STYLE.photo}, ${STYLE.southFL}, cinematic cityscape`,
  },
];

// Before/After pairs -- we generate "after" first, then use /edit to create consistent "before"
const BEFORE_AFTER_PAIRS = [
  {
    service: 'floor-waxing',
    seed: 42001,
    afterPrompt: `Commercial VCT tile floor in an office hallway that has been freshly stripped and waxed to a mirror-like glossy finish, overhead fluorescent lights reflecting perfectly in the surface, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, straight-on hallway perspective`,
    beforePrompt: `The exact same commercial VCT tile floor hallway but in neglected dirty condition, scuff marks, yellowed old wax buildup, dull matte surface with no reflection, stains and heel marks, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.dirty}, same angle and perspective`,
  },
  {
    service: 'carpet-cleaning',
    seed: 42002,
    afterPrompt: `Commercial office carpet that has been professionally deep cleaned, rich uniform color throughout, fresh clean appearance, modern office setting with desk legs visible at edges, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, overhead angled view of carpet`,
    beforePrompt: `The exact same commercial office carpet but heavily soiled with dark traffic lanes, coffee stains, ground-in dirt, visible wear patterns, same angle, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.dirty}`,
  },
  {
    service: 'pressure-washing',
    seed: 42003,
    afterPrompt: `Commercial building concrete sidewalk and entrance area that has been freshly pressure washed, bright clean concrete, South Florida commercial building with palm trees, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, exterior wide angle`,
    beforePrompt: `The exact same commercial building concrete sidewalk and entrance covered in dark mold, mildew stains, algae growth, grime buildup typical of South Florida humidity, same angle, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.dirty}`,
  },
  {
    service: 'tile-grout',
    seed: 42004,
    afterPrompt: `Commercial bathroom floor with white ceramic tiles and bright white clean grout lines, freshly restored to like-new condition, gleaming under bright lighting, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, close-up overhead view`,
    beforePrompt: `The exact same commercial bathroom floor with white ceramic tiles but severely discolored dark brown and black grout lines, dingy tiles, soap scum buildup, same angle, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.dirty}`,
  },
  {
    service: 'marble-polishing',
    seed: 42005,
    afterPrompt: `Luxury marble lobby floor polished to a mirror finish, natural marble veining visible, reflection of overhead chandelier in the surface, South Florida condo lobby, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, elegant perspective`,
    beforePrompt: `The exact same marble lobby floor but dull, scratched, etched from years of foot traffic, no reflection visible, hazy cloudy surface, same angle and setting, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.dirty}`,
  },
  {
    service: 'commercial-deep-cleaning',
    seed: 42006,
    afterPrompt: `Large open commercial office space that has been professionally deep cleaned, pristine desks, sparkling windows, clean carpets, organized and fresh, bright natural light from windows, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, wide angle office view`,
    beforePrompt: `The exact same large commercial office space but dusty, grimy surfaces, dirty windows blocking light, stained carpet, cluttered and neglected appearance, same angle, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.dirty}`,
  },
  {
    service: 'commercial-floor',
    seed: 42007,
    afterPrompt: `Large commercial warehouse concrete floor that has been professionally cleaned and sealed, smooth uniform surface with a subtle sheen, wide open industrial space, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, wide angle warehouse perspective`,
    beforePrompt: `The exact same large commercial warehouse concrete floor covered in oil stains, tire marks, ground-in dirt, dusty and neglected, same angle, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.dirty}`,
  },
  {
    service: 'scrubbing-wax',
    seed: 42008,
    afterPrompt: `Commercial retail store floor freshly scrubbed and waxed with a high-gloss finish, product display shelves reflected in the shiny surface, bright store lighting, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.clean}, store aisle perspective`,
    beforePrompt: `The exact same commercial retail store floor looking dull and worn with scuff marks, old yellowed wax, uneven sheen, dirty edges along shelves, same angle, ${STYLE.photo}, ${STYLE.interior}, ${STYLE.dirty}`,
  },
  {
    service: 'air-duct',
    seed: 42009,
    afterPrompt: `Interior view of a clean commercial HVAC air duct, bright metallic surface visible, clean air vent register on ceiling showing pristine ductwork behind it, professional result, ${STYLE.photo}, close-up technical detail, ${STYLE.clean}`,
    beforePrompt: `The exact same commercial HVAC air duct but caked with thick dust, debris, and mold growth visible inside, dirty air vent register with dust bunnies hanging, same angle, ${STYLE.photo}, close-up technical detail, ${STYLE.dirty}`,
  },
  {
    service: 'post-construction',
    seed: 42010,
    afterPrompt: `Newly constructed South Florida commercial space after professional post-construction cleaning, sparkling clean windows, dust-free surfaces, polished floors ready for move-in, modern interior, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.clean}, wide angle new space`,
    beforePrompt: `The exact same newly constructed commercial space before cleaning, covered in construction dust, drywall powder on floors, paint splatters, protective paper partially removed, debris, same angle, ${STYLE.photo}, ${STYLE.southFL}, ${STYLE.dirty}`,
  },
];

const MISC_IMAGES = [
  {
    path: 'team/team-photo.webp',
    prompt: `Professional group photo of a diverse commercial cleaning team of 8 people wearing matching navy blue polo shirts and khaki pants, standing in front of a modern South Florida commercial building entrance, confident professional poses, team leader in center, bright sunny day, ${STYLE.photo}, ${STYLE.southFL}, corporate team portrait`,
    aspect_ratio: '16:9',
    resolution: '2K',
  },
  {
    path: 'og-default.webp',
    prompt: `Professional banner image for MB Clean Solutions commercial cleaning company, split composition showing a gleaming polished commercial floor on the left and professional cleaning crew on the right, navy blue and orange brand colors, South Florida commercial building, ${STYLE.photo}, ${STYLE.southFL}, social media banner format`,
    aspect_ratio: '16:9',
    resolution: '1K',
  },
  {
    path: 'logo/mb-clean-logo.webp',
    prompt: `Professional minimalist logo design for "MB Clean Solutions" commercial cleaning company, navy blue and orange color scheme, clean modern typography, water droplet or sparkle icon element, white background, vector-style clean edges, corporate professional logo, centered composition`,
    aspect_ratio: '1:1',
    resolution: '1K',
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────

async function ensureDir(filePath) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function downloadImage(url, outputPath) {
  const fullPath = join(PUBLIC_DIR, outputPath);
  await ensureDir(fullPath);

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(fullPath, buffer);
  console.log(`  ✓ Saved: generated-images/${outputPath} (${(buffer.length / 1024).toFixed(0)}KB)`);
}

async function generateImage(prompt, options = {}) {
  const input = {
    prompt,
    num_images: 1,
    output_format: 'webp',
    aspect_ratio: options.aspect_ratio || '16:9',
    resolution: options.resolution || '1K',
    ...(options.seed ? { seed: options.seed } : {}),
  };

  const result = await fal.subscribe(MODEL, {
    input,
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === 'IN_QUEUE') {
        process.stdout.write('.');
      }
    },
  });

  return result.data.images[0].url;
}

async function generateEditImage(prompt, imageUrls, options = {}) {
  const input = {
    prompt,
    image_urls: imageUrls,
    num_images: 1,
    output_format: 'webp',
    aspect_ratio: options.aspect_ratio || '4:3',
    resolution: options.resolution || '1K',
    ...(options.seed ? { seed: options.seed } : {}),
  };

  const result = await fal.subscribe(MODEL_EDIT, {
    input,
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === 'IN_QUEUE') {
        process.stdout.write('.');
      }
    },
  });

  return result.data.images[0].url;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Generation Functions ─────────────────────────────────────────────────

async function generateHeroes() {
  console.log('\n═══ HOMEPAGE HERO ═══');
  const url = await generateImage(HOMEPAGE_HERO.prompt, {
    aspect_ratio: HOMEPAGE_HERO.aspect_ratio,
    resolution: HOMEPAGE_HERO.resolution,
  });
  await downloadImage(url, HOMEPAGE_HERO.path);
}

async function generateServices() {
  console.log('\n═══ SERVICE HERO IMAGES (10) ═══');
  for (const service of SERVICE_HEROES) {
    console.log(`\n  Generating: ${service.path}`);
    const url = await generateImage(service.prompt, {
      aspect_ratio: '16:9',
      resolution: '2K',
    });
    await downloadImage(url, service.path);
    await sleep(500); // Rate limiting
  }
}

async function generateIndustries() {
  console.log('\n═══ INDUSTRY IMAGES (10) ═══');
  for (const industry of INDUSTRY_IMAGES) {
    console.log(`\n  Generating: ${industry.path}`);
    const url = await generateImage(industry.prompt, {
      aspect_ratio: '16:9',
      resolution: '1K',
    });
    await downloadImage(url, industry.path);
    await sleep(500);
  }
}

async function generateAreas() {
  console.log('\n═══ AREA HERO IMAGES (3) ═══');
  for (const area of AREA_HEROES) {
    console.log(`\n  Generating: ${area.path}`);
    const url = await generateImage(area.prompt, {
      aspect_ratio: '16:9',
      resolution: '2K',
    });
    await downloadImage(url, area.path);
    await sleep(500);
  }
}

async function generateBeforeAfter() {
  console.log('\n═══ BEFORE/AFTER PAIRS (10 pairs = 20 images) ═══');

  for (const pair of BEFORE_AFTER_PAIRS) {
    console.log(`\n  ── ${pair.service} pair ──`);

    // Step 1: Generate "after" (clean) image with seed
    console.log(`  Generating AFTER (clean)...`);
    const afterUrl = await generateImage(pair.afterPrompt, {
      aspect_ratio: '4:3',
      resolution: '1K',
      seed: pair.seed,
    });
    await downloadImage(afterUrl, `before-after/${pair.service}-after.webp`);

    await sleep(1000);

    // Step 2: Use /edit with the after image as reference to create the "before" (dirty) version
    console.log(`  Generating BEFORE (dirty) using edit endpoint for consistency...`);
    try {
      const beforeUrl = await generateEditImage(
        pair.beforePrompt,
        [afterUrl],
        {
          aspect_ratio: '4:3',
          resolution: '1K',
          seed: pair.seed,
        }
      );
      await downloadImage(beforeUrl, `before-after/${pair.service}-before.webp`);
    } catch (editErr) {
      // Fallback: generate standalone if edit fails
      console.log(`  Edit failed, generating standalone BEFORE...`);
      const beforeUrl = await generateImage(pair.beforePrompt, {
        aspect_ratio: '4:3',
        resolution: '1K',
        seed: pair.seed + 1,
      });
      await downloadImage(beforeUrl, `before-after/${pair.service}-before.webp`);
    }

    await sleep(1000);
  }
}

async function generateMisc() {
  console.log('\n═══ MISC IMAGES (team, OG, logo) ═══');
  for (const img of MISC_IMAGES) {
    console.log(`\n  Generating: ${img.path}`);
    const url = await generateImage(img.prompt, {
      aspect_ratio: img.aspect_ratio,
      resolution: img.resolution,
    });
    await downloadImage(url, img.path);
    await sleep(500);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────

const CATEGORIES = {
  heroes: generateHeroes,
  services: generateServices,
  industries: generateIndustries,
  areas: generateAreas,
  'before-after': generateBeforeAfter,
  misc: generateMisc,
};

async function main() {
  const category = process.argv[2] || 'all';

  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║  MB Clean Solutions -- Image Generation          ║');
  console.log('║  Model: fal-ai/nano-banana-2                    ║');
  console.log(`║  Category: ${category.padEnd(38)}║`);
  console.log('╚══════════════════════════════════════════════════╝');

  if (!process.env.FAL_KEY) {
    console.error('\n✗ FAL_KEY environment variable not set!');
    console.error('  Set it in .env or export FAL_KEY=your-key');
    process.exit(1);
  }

  const startTime = Date.now();

  try {
    if (category === 'all') {
      await generateHeroes();
      await generateServices();
      await generateIndustries();
      await generateAreas();
      await generateBeforeAfter();
      await generateMisc();
    } else if (CATEGORIES[category]) {
      await CATEGORIES[category]();
    } else {
      console.error(`\n✗ Unknown category: ${category}`);
      console.error(`  Available: all, ${Object.keys(CATEGORIES).join(', ')}`);
      process.exit(1);
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n\n✓ All images generated successfully in ${elapsed}s`);
    console.log('  Images saved to: Projects/mb-clean-solutions/generated-images/');
    console.log('  Review the images, then copy them to site/public/images/ when ready.');

  } catch (error) {
    console.error('\n✗ Generation failed:', error.message);
    if (error.body) console.error('  API response:', JSON.stringify(error.body, null, 2));
    process.exit(1);
  }
}

main();
