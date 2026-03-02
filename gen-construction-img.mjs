import * as fal from './site/node_modules/@fal-ai/client/src/index.js';
import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';

// Load env manually
const envPath = './site/.env';
const envContent = readFileSync(envPath, 'utf-8');
const FAL_KEY = envContent.match(/FAL_KEY=(.+)/)?.[1]?.trim();

fal.config({ credentials: FAL_KEY });

const result = await fal.subscribe('fal-ai/nano-banana-2', {
  input: {
    prompt: 'Professional post-construction cleaning of a brand new modern commercial building interior. Large open space with polished concrete floors, floor-to-ceiling windows, fresh white walls, construction dust visible on surfaces being cleaned by a professional cleaning crew in uniform with industrial equipment. South Florida commercial construction, bright natural daylight, photorealistic, no text.',
    aspect_ratio: '16:9',
    resolution: '2K',
    output_format: 'jpeg',
    num_images: 1,
  },
  logs: true,
});

const imageUrl = result.data?.images?.[0]?.url;
if (!imageUrl) {
  console.error('No image URL in result:', JSON.stringify(result.data));
  process.exit(1);
}

console.log('Image URL:', imageUrl);

// Download the image
const response = await fetch(imageUrl);
const buffer = await response.arrayBuffer();
writeFileSync('./site/public/images/industries/new-construction.webp', Buffer.from(buffer));
console.log('Saved to: ./site/public/images/industries/new-construction.webp');
