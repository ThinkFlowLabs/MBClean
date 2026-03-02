/**
 * MB Clean Solutions -- Round 3: Reference-based Image Generation
 *
 * 6 items to generate based on client reference photos:
 *   1. Floor Waxing (before/after) - VCT tile school hallway, worn wax vs fresh glossy wax
 *   2. Post Construction (before/after) - Raw construction space with debris vs cleaned
 *   3. Marble Polishing (before/after) - Dull cloudy marble vs mirror-polished
 *   4. Commercial Deep Cleaning (SINGLE image) - 3-panel collage with cleaning crew
 *   5. Pressure Washing (before/after) - Commercial concrete, subtle dirt
 *   6. Floor Scrubbing & Wax (before/after) - Same as floor waxing approach
 *
 * Rules from client:
 *   - NO people in images (except commercial deep cleaning)
 *   - Same angle, space, lighting between before/after
 *   - Realistic, not exaggerated
 *   - Before doesn't need to be dark/damaged -- just needs service
 *   - After shows the improvement clearly
 */

import { fal } from '@fal-ai/client';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', '..', 'generated-images', 'before-after');

fal.config({ credentials: process.env.FAL_KEY });

const MODEL = 'fal-ai/nano-banana-2';
const MODEL_EDIT = 'fal-ai/nano-banana-2/edit';

// Realistic photo style -- phone camera, no dramatic lighting
const REAL = 'realistic photo, smartphone camera quality, standard fluorescent indoor lighting, no filters, no HDR, no dramatic lighting, candid documentary photo, no people, no persons visible';
const REAL_WITH_PEOPLE = 'realistic photo, smartphone camera quality, standard indoor lighting, no filters, no HDR, candid job-site photo';

// ── BEFORE/AFTER PAIRS ──
// Strategy: generate AFTER first, then use /edit to create BEFORE from same scene

const PAIRS = [
  {
    service: 'floor-waxing',
    seed: 66001,
    // Reference: school hallway with blue-painted lower walls, VCT tile, bulletin boards, fluorescent lights
    afterPrompt: `A long school hallway with VCT vinyl composite tile floor that has been freshly stripped and waxed. The floor has a beautiful high-gloss wet-look shine with clear reflections of the fluorescent ceiling lights visible on the surface. Blue-painted lower half of walls with white upper walls. Bulletin boards and classroom doors along both sides. Standard rectangular fluorescent ceiling light panels. The floor tiles are light gray-white speckled pattern. Empty hallway, no people. Straight-on perspective looking down the length of the hallway. ${REAL}`,
    beforeEditPrompt: `Make this floor look like the wax coats are worn and need to be redone. The floor should still have SOME shine but it's dull and uneven compared to fresh wax. The wax looks yellowed and hazy in some areas. There are scuff marks from shoes in the traffic path. The floor has lost its reflective quality -- you can no longer see ceiling light reflections clearly. It's not damaged or filthy, just worn wax that needs stripping and re-coating. Keep the EXACT same hallway, same blue walls, same angle, same fluorescent lighting.`,
  },
  {
    service: 'scrubbing-wax',
    seed: 66006,
    // Same approach as floor waxing but in a commercial/retail setting
    afterPrompt: `A wide commercial building hallway or corridor with VCT vinyl composite tile floor that has been freshly scrubbed and waxed. The floor has a high-gloss finish with visible reflections of the overhead fluorescent lights. Light-colored speckled VCT tiles in a clean uniform appearance. Neutral colored walls, some office doors or glass partitions visible. Standard drop ceiling with fluorescent light panels. Empty corridor, no people. Straight perspective looking down the corridor. ${REAL}`,
    beforeEditPrompt: `Make this floor look like the wax is old and worn. The shine is dull and uneven -- some areas still have a slight sheen while others look completely flat and hazy. Scuff marks from foot traffic down the center. The wax has yellowed slightly and looks tired. Some areas near walls show wax buildup. The floor is not dirty or damaged, it just needs a good scrub and fresh wax application. Keep the EXACT same corridor, same walls, same angle, same fluorescent lighting.`,
  },
  {
    service: 'post-construction',
    seed: 66007,
    // Reference: raw construction space with drywall, exposed framing, dust, paint buckets, debris
    // BEFORE is the messy construction scene, AFTER is the same space cleaned
    // For this one, generate BEFORE first (construction mess), then edit to make it clean
    reverseOrder: true, // Flag: generate BEFORE first, then edit to clean
    beforePrompt: `Interior of a newly constructed commercial office space that hasn't been cleaned yet. Drywall dust covering the concrete floor, paint buckets and construction materials scattered around, cardboard and packing materials on the floor, some sawdust and drywall scraps. Walls have fresh unpainted drywall. Windows are in but have construction film residue. Exposed ceiling infrastructure with new ductwork. Natural daylight coming through windows. The space is mid-construction with typical debris. No people visible. Wide angle showing the full room. ${REAL}`,
    afterEditPrompt: `Make this construction space look like it has been professionally cleaned for move-in. Remove ALL the dust, debris, paint buckets, cardboard, construction materials from the floor. The concrete floor should be clean and swept. The drywall should look clean and ready for paint or freshly painted white. Windows should be clean and clear. The space should look empty, clean, and ready for a tenant to move in furniture. Keep the EXACT same room, same windows, same angle, same natural daylight.`,
  },
  {
    service: 'marble-polishing',
    seed: 66003,
    // Reference: marble floor, before is dull/cloudy, after is mirror-polished with reflections
    afterPrompt: `A commercial building lobby with a large natural marble floor that has been professionally polished to a mirror-like finish. The marble is cream and white colored with natural gray veining patterns. The polished surface shows beautiful reflections of the room -- you can see reflections of the walls, windows, and light fixtures in the floor surface like a mirror. An elegant lobby space with glass doors or large windows letting in natural light. Clean, bright, luxurious appearance. No people visible. Wide angle from standing height looking across the marble floor. ${REAL}`,
    beforeEditPrompt: `Make this marble floor look dull, cloudy, and unpolished. The surface should look flat and hazy with no reflections visible -- the mirror-like quality is completely gone. The marble appears faded and worn with a matte cloudy appearance. Some areas show light scratches and etching from foot traffic. The natural veining is less visible because of the cloudy surface. The marble looks like it hasn't been polished in years and needs professional restoration. Keep the EXACT same lobby, same walls, same windows, same angle, same lighting.`,
  },
  {
    service: 'pressure-washing',
    seed: 66002,
    // Reference: commercial concrete/pavers, subtle difference, not exaggerated
    afterPrompt: `A commercial building exterior walkway or parking area with concrete pavers or stamped concrete that has been freshly pressure washed. The surface is a clean, uniform light gray-tan color. A commercial building entrance visible in background -- standard South Florida strip mall or office building with stucco walls. Daytime with natural overcast lighting. Some landscaping visible at edges. No people visible. The concrete surface looks clean and evenly colored. ${REAL}`,
    beforeEditPrompt: `Make this concrete surface look like it needs pressure washing. Add subtle dark discoloration from accumulated dirt and mild mildew, especially in the joints between pavers and along shaded edges near the building. The surface should look dingy and slightly dark compared to fresh concrete. Some areas have green algae tinge. The overall tone is darker and uneven. Don't exaggerate -- it should look like normal outdoor wear from a few years without cleaning, not destroyed. Keep the EXACT same building, same walkway, same angle, same daylight.`,
  },
];

// ── STANDALONE IMAGE (not a before/after pair) ──
const STANDALONE = {
  service: 'commercial-deep-cleaning',
  seed: 66004,
  // Reference: collage of cleaning crew in blue uniforms doing different cleaning tasks
  // 3-panel or 4-panel image showing: bathroom cleaning, window cleaning, floor scrubbing
  prompt: `A photo collage of three side-by-side panels showing a commercial cleaning crew at work. Panel 1: A cleaning worker in a blue uniform shirt using a floor-cleaning machine (floor scrubber) on a commercial floor in an office space. Panel 2: A cleaning worker in a blue uniform shirt cleaning a bathroom using a commercial cleaning machine, tile floor and fixtures visible. Panel 3: A cleaning worker in a blue uniform shirt cleaning interior glass windows or glass partitions in an office building, using a cloth and spray bottle. All three scenes show real working people in matching blue work uniforms, inside commercial buildings with standard fluorescent lighting. ${REAL_WITH_PEOPLE}`,
  aspect_ratio: '16:9', // Wide format for the collage
};

async function ensureDir(dirPath) {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

async function downloadImage(url, filename) {
  const fullPath = join(OUTPUT_DIR, filename);
  await ensureDir(OUTPUT_DIR);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed: ${response.statusText}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(fullPath, buffer);
  console.log(`  ✓ ${filename} (${(buffer.length / 1024).toFixed(0)}KB)`);
  return fullPath;
}

async function generateImage(prompt, options = {}) {
  const result = await fal.subscribe(MODEL, {
    input: {
      prompt,
      num_images: 1,
      output_format: 'webp',
      aspect_ratio: options.aspect_ratio || '4:3',
      resolution: options.resolution || '1K',
      ...(options.seed ? { seed: options.seed } : {}),
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === 'IN_QUEUE') process.stdout.write('.');
    },
  });
  return result.data.images[0].url;
}

async function editImage(prompt, imageUrls, options = {}) {
  const result = await fal.subscribe(MODEL_EDIT, {
    input: {
      prompt,
      image_urls: imageUrls,
      num_images: 1,
      output_format: 'webp',
      aspect_ratio: options.aspect_ratio || '4:3',
      resolution: options.resolution || '1K',
      ...(options.seed ? { seed: options.seed } : {}),
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === 'IN_QUEUE') process.stdout.write('.');
    },
  });
  return result.data.images[0].url;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║  Round 3: Reference-Based Image Generation              ║');
  console.log('║  5 before/after pairs + 1 standalone collage            ║');
  console.log('║  Based on client reference photos                       ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  if (!process.env.FAL_KEY) {
    console.error('✗ FAL_KEY not set');
    process.exit(1);
  }

  const start = Date.now();
  let generated = 0;

  // ── Generate before/after pairs ──
  for (const pair of PAIRS) {
    console.log(`\n── ${pair.service} ──`);

    if (pair.reverseOrder) {
      // Post-construction: generate BEFORE (messy) first, then edit to make clean AFTER
      console.log('  Generating BEFORE (construction mess)...');
      const beforeUrl = await generateImage(pair.beforePrompt, {
        seed: pair.seed,
      });
      await downloadImage(beforeUrl, `${pair.service}-before.webp`);
      generated++;

      await sleep(1000);

      console.log('  Generating AFTER (cleaned) via edit...');
      try {
        const afterUrl = await editImage(
          pair.afterEditPrompt,
          [beforeUrl],
          { seed: pair.seed },
        );
        await downloadImage(afterUrl, `${pair.service}-after.webp`);
        generated++;
      } catch (err) {
        console.log(`  ⚠ Edit failed (${err.message}), trying standalone...`);
        const fallbackPrompt = `A newly constructed commercial office space that has been professionally cleaned and is ready for move-in. Clean concrete floor, fresh white drywall walls, clean windows with natural daylight, exposed ceiling with clean ductwork. The space is empty, clean, and pristine. No construction debris, no dust. No people visible. ${REAL}`;
        const afterUrl = await generateImage(fallbackPrompt, {
          seed: pair.seed + 1,
        });
        await downloadImage(afterUrl, `${pair.service}-after.webp`);
        generated++;
      }
    } else {
      // Normal order: generate AFTER (clean) first, then edit to create BEFORE (worn)
      console.log('  Generating AFTER (clean)...');
      const afterUrl = await generateImage(pair.afterPrompt, {
        seed: pair.seed,
      });
      await downloadImage(afterUrl, `${pair.service}-after.webp`);
      generated++;

      await sleep(1000);

      console.log('  Generating BEFORE (worn) via edit...');
      try {
        const beforeUrl = await editImage(
          pair.beforeEditPrompt,
          [afterUrl],
          { seed: pair.seed },
        );
        await downloadImage(beforeUrl, `${pair.service}-before.webp`);
        generated++;
      } catch (err) {
        console.log(`  ⚠ Edit failed (${err.message}), trying standalone...`);
        // Fallback: generate a standalone before image
        const fallbackPrompt = pair.afterPrompt
          .replace('freshly stripped and waxed', 'with worn, dull wax')
          .replace('freshly scrubbed and waxed', 'with worn, dull wax')
          .replace('freshly pressure washed', 'that is dirty and needs pressure washing')
          .replace('professionally polished to a mirror-like finish', 'that looks dull and cloudy, needing polishing')
          .replace('high-gloss wet-look shine', 'dull, hazy appearance')
          .replace('high-gloss finish', 'dull, worn finish')
          .replace('beautiful reflections', 'no reflections')
          .replace('clean, uniform', 'dirty, uneven');
        const beforeUrl = await generateImage(fallbackPrompt, {
          seed: pair.seed + 1,
        });
        await downloadImage(beforeUrl, `${pair.service}-before.webp`);
        generated++;
      }
    }

    await sleep(1000);
  }

  // ── Generate standalone commercial deep cleaning collage ──
  console.log(`\n── ${STANDALONE.service} (collage) ──`);
  console.log('  Generating cleaning crew collage...');
  const collageUrl = await generateImage(STANDALONE.prompt, {
    seed: STANDALONE.seed,
    aspect_ratio: STANDALONE.aspect_ratio,
  });
  await downloadImage(collageUrl, `${STANDALONE.service}.webp`);
  generated++;

  const elapsed = ((Date.now() - start) / 1000).toFixed(0);
  console.log(`\n\n✓ Done! ${generated} images generated in ${elapsed}s`);
  console.log('  Output: mb-clean-solutions/generated-images/before-after/');
  console.log('\n  Files generated:');
  console.log('  - floor-waxing-before.webp / floor-waxing-after.webp');
  console.log('  - scrubbing-wax-before.webp / scrubbing-wax-after.webp');
  console.log('  - post-construction-before.webp / post-construction-after.webp');
  console.log('  - marble-polishing-before.webp / marble-polishing-after.webp');
  console.log('  - pressure-washing-before.webp / pressure-washing-after.webp');
  console.log('  - commercial-deep-cleaning.webp (collage)');
}

main().catch((err) => {
  console.error('✗ Fatal:', err.message);
  process.exit(1);
});
