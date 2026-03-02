import { fal } from '@fal-ai/client';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', '..', 'generated-images', 'before-after');

fal.config({ credentials: process.env.FAL_KEY });

const prompt = `A seamless triptych photograph of a commercial cleaning crew at work, three scenes joined edge-to-edge with no borders, no gaps, no text, no labels, no captions, no brand names. Left scene: a worker in a blue uniform shirt operating a yellow and black commercial restroom cleaning machine with black hoses and a tall metal wand with a brush attachment, cleaning a commercial bathroom with beige tile walls and white fixtures. The machine is a tall yellow plastic body on wheels with black base, coiled black hoses, and a clear chemical bottle on top -- no logos or brand text visible. Center scene: a worker in a blue uniform shirt kneeling and wiping down cubicle surfaces inside a commercial office with carpet. Right scene: a worker in a blue uniform shirt cleaning an interior glass window or glass partition in an office building with a spray bottle and cloth. All three scenes flow together seamlessly as one continuous wide photograph. Real people, candid job-site photo, smartphone camera quality, standard indoor fluorescent lighting, no filters, no HDR, no text overlays, no white borders, no separators, no brand logos, no brand names anywhere.`;

console.log('Generating commercial deep cleaning collage (no text, no borders)...');

const result = await fal.subscribe('fal-ai/nano-banana-2', {
  input: {
    prompt,
    num_images: 1,
    output_format: 'webp',
    aspect_ratio: '16:9',
    resolution: '1K',
    seed: 66024,
  },
  logs: true,
  onQueueUpdate: (update) => {
    if (update.status === 'IN_QUEUE') process.stdout.write('.');
  },
});

const url = result.data.images[0].url;
const response = await fetch(url);
const buffer = Buffer.from(await response.arrayBuffer());

if (!existsSync(OUTPUT_DIR)) await mkdir(OUTPUT_DIR, { recursive: true });
await writeFile(join(OUTPUT_DIR, 'commercial-deep-cleaning.webp'), buffer);
console.log(`Done! ${(buffer.length / 1024).toFixed(0)}KB`);
