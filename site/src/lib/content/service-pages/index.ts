import type { ServicePageContent } from './types';
import { commercialDeepCleaning } from './commercial-deep-cleaning';
import { commercialFloorDeepCleaning } from './commercial-floor-deep-cleaning';
import { strippingAndWaxing } from './stripping-and-waxing';
import { scrubbingAndWax } from './scrubbing-and-wax';
import { carpetCleaning } from './carpet-cleaning';
import { pressureWashing } from './pressure-washing';
import { tileGroutCleaning } from './tile-grout-cleaning';
import { marbleTerrazzoPolishing } from './marble-terrazzo-polishing';
import { airDuctCleaning } from './air-duct-cleaning';
import { postConstructionCleaning } from './post-construction-cleaning';

export type { ServicePageContent } from './types';

const servicePageContentMap: Record<string, ServicePageContent> = {
  'commercial-deep-cleaning': commercialDeepCleaning,
  'commercial-floor-deep-cleaning': commercialFloorDeepCleaning,
  'stripping-and-waxing': strippingAndWaxing,
  'scrubbing-and-wax': scrubbingAndWax,
  'carpet-cleaning': carpetCleaning,
  'pressure-washing': pressureWashing,
  'tile-grout-cleaning': tileGroutCleaning,
  'marble-terrazzo-polishing': marbleTerrazzoPolishing,
  'air-duct-cleaning': airDuctCleaning,
  'post-construction-cleaning': postConstructionCleaning,
};

export function getServicePageContent(slug: string): ServicePageContent | undefined {
  return servicePageContentMap[slug];
}

export { servicePageContentMap };
