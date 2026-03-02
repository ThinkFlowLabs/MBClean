const { fal } = require('./site/node_modules/@fal-ai/client/src/index.js');
const { readFileSync, writeFileSync } = require('fs');

const envContent = readFileSync('./site/.env', 'utf-8');
const FAL_KEY = envContent.match(/FAL_KEY=(.+)/)?.[1]?.trim();

fal.config({ credentials: FAL_KEY });

async function main() {
  console.log('Generating bonnet carpet cleaning image (v3)...');
  const result = await fal.subscribe('fal-ai/nano-banana-2', {
    input: {
      prompt: 'A professional janitor in a navy uniform pushing a large round floor polishing machine with a circular spinning pad across gray commercial office carpet in a clean modern office building. The machine is a low circular disc-shaped floor buffer on wheels with a long handle, the round rotating pad is pressing flat against the carpet. No hoses, no steam, no water spray. Bright open-plan office interior with glass walls and desks in background. Wide angle, photorealistic, no text.',
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
