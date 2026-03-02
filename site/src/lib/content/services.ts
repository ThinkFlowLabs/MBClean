import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'commercial-deep-cleaning',
    name: 'Commercial Deep Cleaning',
    nameEs: 'Limpieza Profunda Comercial',
    shortDescription:
      'Comprehensive deep cleaning for offices, warehouses, and commercial spaces. We tackle every surface, corner, and hidden area.',
    shortDescriptionEs:
      'Limpieza profunda integral para oficinas, almacenes y espacios comerciales. Abordamos cada superficie, esquina y área oculta.',
    icon: 'Sparkles',
    image: '/images/services/commercial-deep-cleaning-hero.webp',
    priceMin: 0.4,
    priceMax: 1.5,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'commercial deep cleaning Miami',
      'commercial deep cleaning South Florida',
      'office deep cleaning Miami',
      'warehouse deep cleaning',
    ],
    relatedSlugs: ['commercial-floor-deep-cleaning', 'post-construction-cleaning'],
    metaTitle: 'Commercial Deep Cleaning Miami | South Florida Specialists',
    metaDescription:
      'Professional commercial deep cleaning in Miami-Dade, Broward & Palm Beach. Offices, warehouses & retail spaces restored. Free estimates.',
    metaTitleEs: 'Limpieza Profunda Comercial Miami | Especialistas del Sur de Florida',
    metaDescriptionEs:
      'Limpieza profunda comercial profesional en Miami-Dade, Broward y Palm Beach. Oficinas, almacenes y espacios comerciales restaurados.',
  },
  {
    slug: 'commercial-floor-deep-cleaning',
    name: 'Commercial Floor Deep Cleaning',
    nameEs: 'Limpieza Profunda de Pisos Comerciales',
    shortDescription:
      'Industrial-grade floor scrubbing and deep cleaning for VCT, vinyl, concrete, and hard surface floors.',
    shortDescriptionEs:
      'Limpieza profunda y fregado de pisos de grado industrial para VCT, vinilo, concreto y pisos de superficie dura.',
    icon: 'Layers',
    image: '/images/services/commercial-floor-deep-cleaning-hero.webp',
    priceMin: 0.4,
    priceMax: 2.0,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'commercial floor cleaning Miami',
      'commercial floor deep cleaning South Florida',
      'VCT floor cleaning',
      'industrial floor scrubbing Miami',
    ],
    relatedSlugs: ['stripping-and-waxing', 'scrubbing-and-wax'],
    metaTitle: 'Commercial Floor Deep Cleaning Miami | South Florida Pros',
    metaDescription:
      'Expert commercial floor deep cleaning in Miami-Dade, Broward & Palm Beach. Industrial scrubbing, VCT care & hard surface restoration. Call for a free quote.',
    metaTitleEs: 'Limpieza Profunda de Pisos Comerciales Miami | Profesionales',
    metaDescriptionEs:
      'Limpieza profunda de pisos comerciales en Miami-Dade, Broward y Palm Beach. Fregado industrial, cuidado VCT y restauración de superficies.',
  },
  {
    slug: 'stripping-and-waxing',
    name: 'Floor Stripping & Waxing',
    nameEs: 'Decapado y Encerado de Pisos',
    shortDescription:
      'Complete strip-down and fresh wax application for VCT, vinyl, and hard surface commercial floors. Restore that showroom shine.',
    shortDescriptionEs:
      'Decapado completo y aplicación de cera nueva para pisos comerciales VCT, vinilo y superficies duras. Restaure ese brillo de sala de exhibición.',
    icon: 'Sun',
    image: '/images/services/stripping-and-waxing-hero.webp',
    priceMin: 0.85,
    priceMax: 1.8,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'floor stripping and waxing Miami',
      'VCT floor stripping and waxing',
      'commercial floor waxing South Florida',
      'floor waxing service near me',
    ],
    relatedSlugs: ['scrubbing-and-wax', 'commercial-floor-deep-cleaning'],
    metaTitle: 'Floor Stripping & Waxing Miami | Commercial Floor Care',
    metaDescription:
      'Professional floor stripping and waxing for South Florida businesses. VCT, vinyl & hard floors restored. Serving Miami, Fort Lauderdale & West Palm Beach.',
    metaTitleEs: 'Decapado y Encerado de Pisos Miami | Cuidado de Pisos Comerciales',
    metaDescriptionEs:
      'Decapado y encerado profesional de pisos para negocios del Sur de Florida. VCT, vinilo y pisos duros restaurados.',
  },
  {
    slug: 'scrubbing-and-wax',
    name: 'Scrubbing & Wax',
    nameEs: 'Fregado y Encerado',
    shortDescription:
      'Maintenance scrub and wax service to keep floors looking great between full strip jobs. Extend the life of your floor finish.',
    shortDescriptionEs:
      'Servicio de fregado y encerado de mantenimiento para mantener los pisos en excelente estado entre trabajos de decapado completo.',
    icon: 'RotateCw',
    image: '/images/services/scrubbing-and-wax-hero.webp',
    priceMin: 0.6,
    priceMax: 1.5,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'commercial floor scrubbing and wax Miami',
      'floor scrubbing service South Florida',
      'floor maintenance waxing',
    ],
    relatedSlugs: ['stripping-and-waxing', 'commercial-floor-deep-cleaning'],
    metaTitle: 'Commercial Floor Scrubbing & Wax | South Florida Service',
    metaDescription:
      'Commercial floor scrubbing and wax services in South Florida. Maintain shine between full strip jobs. Miami-Dade, Broward & Palm Beach. Schedule service now.',
    metaTitleEs: 'Fregado y Encerado Comercial | Servicio del Sur de Florida',
    metaDescriptionEs:
      'Servicios de fregado y encerado comercial en el Sur de Florida. Mantenga el brillo entre trabajos de decapado.',
  },
  {
    slug: 'carpet-cleaning',
    name: 'Commercial Carpet Cleaning',
    nameEs: 'Limpieza de Alfombras Comerciales',
    shortDescription:
      'Professional bonnet carpet cleaning for offices, hotels, and commercial facilities. Fast drying, minimal disruption, results in hours not days.',
    shortDescriptionEs:
      'Limpieza profesional de alfombras con bonnet para oficinas, hoteles e instalaciones comerciales. Secado rápido, mínima interrupción.',
    icon: 'Waves',
    image: '/images/services/carpet-cleaning-bonnet.webp',
    priceMin: 0.3,
    priceMax: 0.8,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'commercial carpet cleaning Miami',
      'bonnet carpet cleaning South Florida',
      'office carpet cleaning Miami',
      'commercial carpet cleaning service Florida',
    ],
    relatedSlugs: ['commercial-deep-cleaning', 'tile-grout-cleaning'],
    metaTitle: 'Commercial Carpet Cleaning South Florida | Bonnet Cleaning',
    metaDescription:
      'Professional bonnet carpet cleaning for commercial facilities in South Florida. Fast dry times, minimal disruption. Miami-Dade, Broward & Palm Beach.',
    metaTitleEs: 'Limpieza de Alfombras Comerciales Sur de Florida | Bonnet',
    metaDescriptionEs:
      'Limpieza profesional de alfombras con bonnet para instalaciones comerciales en el Sur de Florida. Secado rápido, mínima interrupción.',
  },
  {
    slug: 'pressure-washing',
    name: 'Commercial Pressure Washing',
    nameEs: 'Lavado a Presión Comercial',
    shortDescription:
      'High-powered pressure washing for building exteriors, parking lots, sidewalks, and storefronts across South Florida.',
    shortDescriptionEs:
      'Lavado a presión de alta potencia para exteriores de edificios, estacionamientos, aceras y frentes de tiendas.',
    icon: 'Droplets',
    image: '/images/services/pressure-washing-hero.webp',
    priceMin: 0.15,
    priceMax: 0.7,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'commercial pressure washing Miami',
      'pressure washing South Florida',
      'building pressure washing Fort Lauderdale',
      'parking lot pressure washing',
    ],
    relatedSlugs: ['commercial-deep-cleaning', 'post-construction-cleaning'],
    metaTitle: 'Commercial Pressure Washing Miami | South Florida',
    metaDescription:
      'Commercial pressure washing in South Florida. Buildings, parking lots, sidewalks & storefronts. Serving Miami-Dade, Broward & Palm Beach County businesses.',
    metaTitleEs: 'Lavado a Presión Comercial Miami | Sur de Florida',
    metaDescriptionEs:
      'Lavado a presión comercial en el Sur de Florida. Edificios, estacionamientos, aceras y frentes de tiendas.',
  },
  {
    slug: 'tile-grout-cleaning',
    name: 'Tile & Grout Cleaning',
    nameEs: 'Limpieza de Azulejos y Lechada',
    shortDescription:
      'Professional tile and grout restoration for commercial properties. Remove embedded grime, mildew, and stains in South Florida\'s humid climate.',
    shortDescriptionEs:
      'Restauración profesional de azulejos y lechada para propiedades comerciales. Elimine suciedad incrustada, moho y manchas.',
    icon: 'Grid3X3',
    image: '/images/services/tile-grout-cleaning-hero.webp',
    priceMin: 0.8,
    priceMax: 3.0,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'tile and grout cleaning Miami',
      'commercial tile cleaning South Florida',
      'grout restoration',
      'tile deep cleaning commercial',
    ],
    relatedSlugs: ['marble-terrazzo-polishing', 'commercial-floor-deep-cleaning'],
    metaTitle: 'Tile & Grout Cleaning Miami | Commercial South Florida',
    metaDescription:
      'Professional tile and grout cleaning for commercial properties. Remove grime, mildew & stains in South Florida\'s humid climate. Miami to West Palm Beach.',
    metaTitleEs: 'Limpieza de Azulejos y Lechada Miami | Comercial Sur de Florida',
    metaDescriptionEs:
      'Limpieza profesional de azulejos y lechada para propiedades comerciales. Elimine suciedad, moho y manchas.',
  },
  {
    slug: 'marble-terrazzo-polishing',
    name: 'Marble & Terrazzo Polishing',
    nameEs: 'Pulido de Mármol y Terrazo',
    shortDescription:
      'Expert marble and terrazzo floor polishing and restoration. Remove scratches, restore shine, and bring lobby floors back to life.',
    shortDescriptionEs:
      'Pulido y restauración experta de pisos de mármol y terrazo. Elimine rayones, restaure el brillo y devuelva la vida a los pisos del lobby.',
    icon: 'Diamond',
    image: '/images/services/marble-terrazzo-polishing-hero.webp',
    priceMin: 2.0,
    priceMax: 9.0,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'marble polishing Miami',
      'terrazzo polishing South Florida',
      'marble floor restoration',
      'terrazzo restoration Miami',
      'lobby marble floor polishing',
    ],
    relatedSlugs: ['tile-grout-cleaning', 'commercial-floor-deep-cleaning'],
    metaTitle: 'Marble & Terrazzo Polishing Miami | Floor Restoration',
    metaDescription:
      'Expert marble and terrazzo polishing in South Florida. Restore lobby floors, remove scratches & bring back shine. Miami-Dade, Broward & Palm Beach Counties.',
    metaTitleEs: 'Pulido de Mármol y Terrazo Miami | Restauración de Pisos',
    metaDescriptionEs:
      'Pulido experto de mármol y terrazo en el Sur de Florida. Restaure pisos de lobby, elimine rayones y devuelva el brillo.',
  },
  {
    slug: 'air-duct-cleaning',
    name: 'Commercial Air Duct Cleaning',
    nameEs: 'Limpieza de Ductos de Aire Comerciales',
    shortDescription:
      'Improve indoor air quality with professional commercial air duct cleaning. Remove dust, mold, and allergens from your HVAC system.',
    shortDescriptionEs:
      'Mejore la calidad del aire interior con limpieza profesional de ductos de aire comerciales. Elimine polvo, moho y alérgenos.',
    icon: 'Wind',
    image: '/images/services/air-duct-cleaning-hero.webp',
    priceMin: 25,
    priceMax: 65,
    priceUnit: 'per vent',
    priceUnitEs: 'por ventila',
    keywords: [
      'commercial air duct cleaning Miami',
      'air duct cleaning South Florida',
      'HVAC cleaning commercial',
      'duct cleaning Fort Lauderdale',
    ],
    relatedSlugs: ['commercial-deep-cleaning', 'post-construction-cleaning'],
    metaTitle: 'Commercial Air Duct Cleaning Miami | South Florida HVAC',
    metaDescription:
      'Commercial air duct cleaning in South Florida. Improve indoor air quality, remove mold & dust. Offices, warehouses & retail. Miami, Fort Lauderdale, Boca Raton.',
    metaTitleEs: 'Limpieza de Ductos de Aire Comerciales Miami | HVAC Sur de Florida',
    metaDescriptionEs:
      'Limpieza de ductos de aire comerciales en el Sur de Florida. Mejore la calidad del aire, elimine moho y polvo.',
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    nameEs: 'Limpieza Post-Construcción',
    shortDescription:
      'Thorough post-construction cleanup for commercial projects. Debris removal, dust elimination, and final detail cleaning for move-in readiness.',
    shortDescriptionEs:
      'Limpieza exhaustiva post-construcción para proyectos comerciales. Eliminación de escombros, polvo y limpieza final de detalles.',
    icon: 'HardHat',
    image: '/images/services/post-construction-cleaning-hero.webp',
    priceMin: 0.3,
    priceMax: 1.1,
    priceUnit: 'per sq ft',
    priceUnitEs: 'por pie²',
    keywords: [
      'post construction cleaning Miami',
      'post construction cleaning South Florida',
      'commercial punch list cleaning',
      'construction cleanup service',
    ],
    relatedSlugs: ['commercial-deep-cleaning', 'pressure-washing'],
    metaTitle: 'Post Construction Cleaning Miami | South Florida Cleanup',
    metaDescription:
      'Post construction cleaning for South Florida commercial projects. Debris removal, dust cleanup & final detail. Miami-Dade, Broward & Palm Beach contractors.',
    metaTitleEs: 'Limpieza Post-Construcción Miami | Limpieza del Sur de Florida',
    metaDescriptionEs:
      'Limpieza post-construcción para proyectos comerciales del Sur de Florida. Eliminación de escombros, limpieza de polvo y detalles finales.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => s !== undefined);
}
