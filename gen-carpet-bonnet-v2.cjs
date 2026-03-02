const { fal } = require('./site/node_modules/@fal-ai/client/src/index.js');
const { readFileSync, writeFileSync } = require('fs');

const envContent = readFileSync('./site/.env', 'utf-8');
const FAL_KEY = envContent.match(/FAL_KEY=(.+)/)?.[1]?.trim();

fal.config({ credentials: FAL_KEY });

async function main() {
  console.log('Generating bonnet carpet cleaning image (v2)...');
  const result = await fal.subscribe('fal-ai/nano-banana-2', {
    input: {
      prompt: 'Commercial cleaning worker operating a large round orbital floor scrubber buffer machine on blue-gray low-pile office carpet. The machine is a circular disc floor polisher with a round absorbent pad on the bottom, pushed by a handle. No hose, no steam, no wand, no spray. Clean modern corporate office hallway with carpet, neutral walls, fluorescent lighting. Worker wearing navy blue uniform. Close-up angle showing the round pad machine on carpet. Photorealistic commercial cleaning, no text.',
      negative_prompt: 'steam, hose, wand, spray nozzle, water, extraction machine, Prochem, truckmount, carpet extractor, upright vacuum, soap bubbles, mop',
      aspect_ratio: '16:9',
      resolution: '2K',
      output_format: 'jpeg',
      num_images: 1,
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === 'IN_PROGRESS') process.stdout.write('.');
    },
  });

  const imageUrl = result.data?.images?.[0]?.url;
  if (!imageUrl) { console.error('\nNo image URL:', JSON.stringify(result.data)); process.exit(1); }

  console.log('\nURL:', imageUrl);
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  writeFileSync('./site/public/images/services/carpet-cleaning-hero.webp', Buffer.from(buffer));
  console.log('Saved: carpet-cleaning-hero.webp');
}

main().catch(console.error);
