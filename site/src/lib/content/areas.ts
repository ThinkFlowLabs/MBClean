import type { County, City } from '@/types';

export const counties: County[] = [
  {
    slug: 'miami-dade',
    name: 'Miami-Dade County',
    shortDescription:
      'Comprehensive commercial cleaning services across Miami-Dade County. From Downtown Miami to Doral, Coral Gables to Homestead.',
    shortDescriptionEs:
      'Servicios integrales de limpieza comercial en todo el Condado de Miami-Dade. Desde el centro de Miami hasta Doral, Coral Gables hasta Homestead.',
    image: '/images/areas/miami-dade-hero.webp',
    cities: [
      {
        slug: 'miami',
        name: 'Miami',
        county: 'miami-dade',
        population: 449514,
        shortDescription:
          'Professional commercial cleaning services in Miami. Deep cleaning, floor care, marble polishing, and pressure washing for offices, retail spaces, and commercial properties throughout the city.',
        shortDescriptionEs:
          'Servicios profesionales de limpieza comercial en Miami. Limpieza profunda, cuidado de pisos, pulido de mármol y lavado a presión para oficinas, comercios y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Miami | MB Clean Solutions',
        metaDescription:
          'Top-rated commercial cleaning company in Miami. Deep cleaning, floor stripping & waxing, carpet cleaning, marble polishing & pressure washing. Free estimates.',
      },
      {
        slug: 'doral',
        name: 'Doral',
        county: 'miami-dade',
        population: 83288,
        shortDescription:
          'Expert commercial cleaning services in Doral, FL. Serving the business hub of Miami-Dade with deep cleaning, floor care, and specialty services for offices, warehouses, and retail spaces.',
        shortDescriptionEs:
          'Servicios expertos de limpieza comercial en Doral, FL. Sirviendo el centro de negocios de Miami-Dade con limpieza profunda, cuidado de pisos y servicios especializados.',
        metaTitle: 'Commercial Cleaning Doral FL | MB Clean Solutions',
        metaDescription:
          'Professional cleaning services in Doral, FL. Office deep cleaning, floor waxing, carpet cleaning & pressure washing for businesses. $0.40-$9.00/sqft.',
      },
      {
        slug: 'coral-gables',
        name: 'Coral Gables',
        county: 'miami-dade',
        population: 50631,
        shortDescription:
          'Premium commercial cleaning services in Coral Gables. Marble and terrazzo polishing, deep cleaning, and floor restoration for the City Beautiful\'s upscale offices, hotels, and commercial properties.',
        shortDescriptionEs:
          'Servicios premium de limpieza comercial en Coral Gables. Pulido de mármol y terrazo, limpieza profunda y restauración de pisos para oficinas, hoteles y propiedades comerciales de alta gama.',
        metaTitle: 'Commercial Cleaning Coral Gables | MB Clean Solutions',
        metaDescription:
          'Premium commercial cleaning in Coral Gables. Marble polishing, terrazzo restoration, deep cleaning & floor care for upscale properties. Free estimates.',
      },
      {
        slug: 'hialeah',
        name: 'Hialeah',
        county: 'miami-dade',
        population: 223109,
        shortDescription:
          'Reliable commercial cleaning services in Hialeah. Floor stripping and waxing, deep cleaning, carpet care, and pressure washing for warehouses, offices, and retail throughout Miami-Dade\'s second-largest city.',
        shortDescriptionEs:
          'Servicios confiables de limpieza comercial en Hialeah. Decapado y encerado de pisos, limpieza profunda, cuidado de alfombras y lavado a presión para almacenes, oficinas y comercios.',
        metaTitle: 'Commercial Cleaning Hialeah FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning services in Hialeah. Floor waxing, deep cleaning, carpet cleaning & pressure washing for businesses. Serving Miami-Dade. Free estimates.',
      },
      {
        slug: 'miami-beach',
        name: 'Miami Beach',
        county: 'miami-dade',
        population: 82890,
        shortDescription:
          'Specialized commercial cleaning services in Miami Beach. Marble and terrazzo polishing, post-construction cleaning, and deep floor care for hotels, condos, and commercial properties along the beach.',
        shortDescriptionEs:
          'Servicios especializados de limpieza comercial en Miami Beach. Pulido de mármol y terrazo, limpieza post-construcción y cuidado de pisos para hoteles, condominios y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Miami Beach | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning company in Miami Beach. Hotel cleaning, marble polishing, pressure washing & post-construction cleanup. Serving the beach corridor.',
      },
      {
        slug: 'aventura',
        name: 'Aventura',
        county: 'miami-dade',
        population: 40242,
        shortDescription:
          'Professional commercial cleaning services in Aventura. Floor care, deep cleaning, and marble polishing for offices, retail centers, and luxury condo lobbies in the Aventura area.',
        shortDescriptionEs:
          'Servicios profesionales de limpieza comercial en Aventura. Cuidado de pisos, limpieza profunda y pulido de mármol para oficinas, centros comerciales y lobbies de condominios de lujo.',
        metaTitle: 'Commercial Cleaning Aventura FL | MB Clean Solutions',
        metaDescription:
          'Professional commercial cleaning in Aventura. Lobby marble polishing, floor waxing, carpet cleaning & deep cleaning for businesses. Free estimates.',
      },
      {
        slug: 'kendall',
        name: 'Kendall',
        county: 'miami-dade',
        population: 77371,
        shortDescription:
          'Trusted commercial cleaning services in Kendall. Deep cleaning, floor stripping and waxing, carpet care, and pressure washing for offices, medical facilities, and retail spaces in South Miami-Dade.',
        shortDescriptionEs:
          'Servicios confiables de limpieza comercial en Kendall. Limpieza profunda, decapado y encerado de pisos, cuidado de alfombras y lavado a presión para oficinas, instalaciones médicas y comercios.',
        metaTitle: 'Commercial Cleaning Kendall FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning services in Kendall. Floor care, deep cleaning, carpet cleaning & pressure washing. Serving South Miami-Dade businesses. Free quotes.',
      },
      {
        slug: 'homestead',
        name: 'Homestead',
        county: 'miami-dade',
        population: 80010,
        shortDescription:
          'Commercial cleaning services in Homestead, FL. Deep floor cleaning, pressure washing, post-construction cleanup, and specialty services for businesses in South Miami-Dade County.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Homestead, FL. Limpieza profunda de pisos, lavado a presión, limpieza post-construcción y servicios especializados para negocios del sur de Miami-Dade.',
        metaTitle: 'Commercial Cleaning Homestead FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning in Homestead, FL. Floor care, pressure washing, post-construction cleaning & deep cleaning for businesses. Free estimates available.',
      },
      {
        slug: 'north-miami',
        name: 'North Miami',
        county: 'miami-dade',
        population: 62468,
        shortDescription:
          'Professional commercial cleaning services in North Miami. Floor care, deep cleaning, tile and grout restoration, and pressure washing for businesses and commercial properties.',
        shortDescriptionEs:
          'Servicios profesionales de limpieza comercial en North Miami. Cuidado de pisos, limpieza profunda, restauración de azulejos y lechada, y lavado a presión para negocios.',
        metaTitle: 'Commercial Cleaning North Miami | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning services in North Miami. Deep cleaning, floor waxing, tile & grout, pressure washing for businesses. Miami-Dade County. Free estimates.',
      },
      {
        slug: 'miami-gardens',
        name: 'Miami Gardens',
        county: 'miami-dade',
        population: 111378,
        shortDescription:
          'Commercial cleaning services in Miami Gardens. Deep cleaning, floor stripping and waxing, carpet cleaning, and pressure washing for offices, warehouses, and commercial spaces.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Miami Gardens. Limpieza profunda, decapado y encerado de pisos, limpieza de alfombras y lavado a presión para oficinas, almacenes y espacios comerciales.',
        metaTitle: 'Commercial Cleaning Miami Gardens | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning in Miami Gardens. Floor care, deep cleaning, carpet cleaning & pressure washing for businesses. Serving Miami-Dade. Free estimates.',
      },
    ],
    metaTitle: 'Commercial Cleaning Miami-Dade County | MB Clean Solutions',
    metaDescription:
      'Professional commercial cleaning in Miami-Dade County. Serving Miami, Doral, Coral Gables, Hialeah & more. Floor care, deep cleaning, pressure washing.',
  },
  {
    slug: 'broward',
    name: 'Broward County',
    shortDescription:
      'Expert commercial cleaning throughout Broward County. Fort Lauderdale, Pompano Beach, Hollywood, and surrounding cities.',
    shortDescriptionEs:
      'Limpieza comercial experta en todo el Condado de Broward. Fort Lauderdale, Pompano Beach, Hollywood y ciudades aledañas.',
    image: '/images/areas/broward-hero.webp',
    cities: [
      {
        slug: 'fort-lauderdale',
        name: 'Fort Lauderdale',
        county: 'broward',
        population: 182760,
        shortDescription:
          'Expert commercial cleaning services in Fort Lauderdale. From Las Olas to the commercial corridors along I-95, we provide deep cleaning, floor stripping and waxing, marble polishing, carpet cleaning, tile and grout restoration, air duct cleaning, pressure washing, and post-construction cleanup for offices, hotels, retail, and commercial properties throughout Fort Lauderdale.',
        shortDescriptionEs:
          'Servicios expertos de limpieza comercial en Fort Lauderdale. Desde Las Olas hasta los corredores comerciales a lo largo de la I-95, proporcionamos limpieza profunda, decapado y encerado de pisos, pulido de mármol, limpieza de alfombras, restauración de azulejos y lechada, limpieza de ductos de aire, lavado a presión y limpieza post-construcción para oficinas, hoteles, comercios y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Fort Lauderdale | MB Clean Solutions',
        metaDescription:
          'Professional commercial cleaning services in Fort Lauderdale. Deep cleaning, floor waxing, marble polishing, carpet & tile cleaning. Free estimates. (954) 482-5008.',
      },
      {
        slug: 'pompano-beach',
        name: 'Pompano Beach',
        county: 'broward',
        population: 112118,
        shortDescription:
          'Professional commercial cleaning services in Pompano Beach. Deep cleaning, floor care, pressure washing, and specialty services for businesses, warehouses, and commercial properties.',
        shortDescriptionEs:
          'Servicios profesionales de limpieza comercial en Pompano Beach. Limpieza profunda, cuidado de pisos, lavado a presión y servicios especializados para negocios, almacenes y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Pompano Beach | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning services in Pompano Beach. Floor waxing, deep cleaning, pressure washing & carpet cleaning for businesses. Serving Broward County.',
      },
      {
        slug: 'hollywood-fl',
        name: 'Hollywood',
        county: 'broward',
        population: 153627,
        shortDescription:
          'Reliable commercial cleaning services in Hollywood, FL. Floor stripping and waxing, deep cleaning, tile and grout restoration, and pressure washing for offices, retail, and commercial properties.',
        shortDescriptionEs:
          'Servicios confiables de limpieza comercial en Hollywood, FL. Decapado y encerado de pisos, limpieza profunda, restauración de azulejos y lechada, y lavado a presión para oficinas, comercios y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Hollywood FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning in Hollywood, FL. Floor care, deep cleaning, tile & grout, pressure washing for businesses. Broward County. Free estimates.',
      },
      {
        slug: 'plantation',
        name: 'Plantation',
        county: 'broward',
        population: 94689,
        shortDescription:
          'Commercial cleaning services in Plantation, FL. Deep cleaning, floor waxing, carpet care, and specialty cleaning for offices, medical facilities, and commercial spaces in central Broward County.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Plantation, FL. Limpieza profunda, encerado de pisos, cuidado de alfombras y limpieza especializada para oficinas, instalaciones médicas y espacios comerciales.',
        metaTitle: 'Commercial Cleaning Plantation FL | MB Clean Solutions',
        metaDescription:
          'Professional commercial cleaning in Plantation, FL. Floor waxing, deep cleaning, carpet cleaning for businesses. Serving Broward County. Free estimates.',
      },
      {
        slug: 'sunrise',
        name: 'Sunrise',
        county: 'broward',
        population: 97335,
        shortDescription:
          'Commercial cleaning services in Sunrise, FL. Deep floor cleaning, carpet care, pressure washing, and post-construction cleanup for offices, retail, and commercial spaces near Sawgrass Mills.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Sunrise, FL. Limpieza profunda de pisos, cuidado de alfombras, lavado a presión y limpieza post-construcción para oficinas, comercios y espacios comerciales.',
        metaTitle: 'Commercial Cleaning Sunrise FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning services in Sunrise, FL. Floor care, deep cleaning, carpet cleaning & pressure washing for businesses. Broward County. Free estimates.',
      },
      {
        slug: 'weston',
        name: 'Weston',
        county: 'broward',
        population: 71166,
        shortDescription:
          'Premium commercial cleaning services in Weston, FL. Floor care, marble polishing, deep cleaning, and specialty services for offices, medical practices, and commercial properties in western Broward.',
        shortDescriptionEs:
          'Servicios premium de limpieza comercial en Weston, FL. Cuidado de pisos, pulido de mármol, limpieza profunda y servicios especializados para oficinas, consultorios médicos y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Weston FL | MB Clean Solutions',
        metaDescription:
          'Premium commercial cleaning in Weston, FL. Marble polishing, floor waxing, deep cleaning for businesses. Western Broward County. Free estimates.',
      },
      {
        slug: 'pembroke-pines',
        name: 'Pembroke Pines',
        county: 'broward',
        population: 171178,
        shortDescription:
          'Commercial cleaning services in Pembroke Pines. Deep cleaning, floor stripping and waxing, carpet care, and pressure washing for offices, retail, and commercial spaces in South Broward.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Pembroke Pines. Limpieza profunda, decapado y encerado de pisos, cuidado de alfombras y lavado a presión para oficinas, comercios y espacios comerciales.',
        metaTitle: 'Commercial Cleaning Pembroke Pines | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning in Pembroke Pines. Floor waxing, deep cleaning, carpet cleaning & pressure washing for businesses. South Broward. Free estimates.',
      },
      {
        slug: 'davie',
        name: 'Davie',
        county: 'broward',
        population: 105691,
        shortDescription:
          'Commercial cleaning services in Davie, FL. Floor care, deep cleaning, post-construction cleanup, and pressure washing for businesses, universities, and commercial properties.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Davie, FL. Cuidado de pisos, limpieza profunda, limpieza post-construcción y lavado a presión para negocios, universidades y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Davie FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning services in Davie, FL. Floor care, deep cleaning, pressure washing & post-construction cleanup for businesses. Free estimates.',
      },
      {
        slug: 'coral-springs',
        name: 'Coral Springs',
        county: 'broward',
        population: 134394,
        shortDescription:
          'Professional commercial cleaning services in Coral Springs. Floor waxing, deep cleaning, carpet care, and tile restoration for offices, medical facilities, and commercial properties.',
        shortDescriptionEs:
          'Servicios profesionales de limpieza comercial en Coral Springs. Encerado de pisos, limpieza profunda, cuidado de alfombras y restauración de azulejos para oficinas, instalaciones médicas y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Coral Springs | MB Clean Solutions',
        metaDescription:
          'Professional commercial cleaning in Coral Springs. Floor care, deep cleaning, carpet cleaning & tile restoration for businesses. Free estimates.',
      },
      {
        slug: 'miramar',
        name: 'Miramar',
        county: 'broward',
        population: 134721,
        shortDescription:
          'Commercial cleaning services in Miramar, FL. Deep cleaning, floor stripping and waxing, carpet care, and pressure washing for offices, warehouses, and commercial spaces along the Miramar Parkway corridor.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Miramar, FL. Limpieza profunda, decapado y encerado de pisos, cuidado de alfombras y lavado a presión para oficinas, almacenes y espacios comerciales.',
        metaTitle: 'Commercial Cleaning Miramar FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning in Miramar, FL. Floor waxing, deep cleaning, carpet cleaning & pressure washing for businesses. South Broward County. Free estimates.',
      },
    ],
    metaTitle: 'Commercial Cleaning Broward County | MB Clean Solutions',
    metaDescription:
      'Professional commercial cleaning in Broward County. Fort Lauderdale, Pompano Beach, Hollywood & more. Floor care, deep cleaning, specialty services.',
  },
  {
    slug: 'palm-beach',
    name: 'Palm Beach County',
    shortDescription:
      'Premium commercial cleaning services in Palm Beach County. West Palm Beach, Boca Raton, Boynton Beach, and more.',
    shortDescriptionEs:
      'Servicios premium de limpieza comercial en el Condado de Palm Beach. West Palm Beach, Boca Raton, Boynton Beach y más.',
    image: '/images/areas/palm-beach-hero.webp',
    cities: [
      {
        slug: 'west-palm-beach',
        name: 'West Palm Beach',
        county: 'palm-beach',
        population: 117415,
        shortDescription:
          'Professional commercial cleaning services in West Palm Beach. Deep cleaning, floor restoration, marble polishing, and pressure washing for downtown offices, retail spaces, and commercial properties.',
        shortDescriptionEs:
          'Servicios profesionales de limpieza comercial en West Palm Beach. Limpieza profunda, restauración de pisos, pulido de mármol y lavado a presión para oficinas, comercios y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning West Palm Beach | MB Clean Solutions',
        metaDescription:
          'Professional commercial cleaning in West Palm Beach. Floor care, marble polishing, deep cleaning & pressure washing for businesses. Free estimates.',
      },
      {
        slug: 'boca-raton',
        name: 'Boca Raton',
        county: 'palm-beach',
        population: 99805,
        shortDescription:
          'Premium commercial cleaning services in Boca Raton. Marble and terrazzo polishing, deep cleaning, floor care, and specialty services for offices, medical practices, retail, and luxury commercial properties.',
        shortDescriptionEs:
          'Servicios premium de limpieza comercial en Boca Raton. Pulido de mármol y terrazo, limpieza profunda, cuidado de pisos y servicios especializados para oficinas, consultorios, comercios y propiedades de lujo.',
        metaTitle: 'Commercial Cleaning Boca Raton | MB Clean Solutions',
        metaDescription:
          'Premium commercial cleaning in Boca Raton. Marble polishing, floor waxing, deep cleaning & specialty services for businesses. Free estimates.',
      },
      {
        slug: 'boynton-beach',
        name: 'Boynton Beach',
        county: 'palm-beach',
        population: 80380,
        shortDescription:
          'Commercial cleaning services in Boynton Beach. Deep cleaning, floor care, carpet cleaning, and pressure washing for offices, retail spaces, and commercial properties in central Palm Beach County.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Boynton Beach. Limpieza profunda, cuidado de pisos, limpieza de alfombras y lavado a presión para oficinas, comercios y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Boynton Beach | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning services in Boynton Beach. Floor care, deep cleaning, carpet cleaning & pressure washing for businesses. Palm Beach County.',
      },
      {
        slug: 'delray-beach',
        name: 'Delray Beach',
        county: 'palm-beach',
        population: 69451,
        shortDescription:
          'Professional commercial cleaning services in Delray Beach. Floor restoration, deep cleaning, tile and grout care, and pressure washing for businesses along Atlantic Avenue and throughout the city.',
        shortDescriptionEs:
          'Servicios profesionales de limpieza comercial en Delray Beach. Restauración de pisos, limpieza profunda, cuidado de azulejos y lechada, y lavado a presión para negocios.',
        metaTitle: 'Commercial Cleaning Delray Beach | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning in Delray Beach. Floor restoration, deep cleaning, tile & grout, pressure washing for businesses. Palm Beach County. Free estimates.',
      },
      {
        slug: 'palm-beach-gardens',
        name: 'Palm Beach Gardens',
        county: 'palm-beach',
        population: 56502,
        shortDescription:
          'Commercial cleaning services in Palm Beach Gardens. Deep cleaning, floor waxing, marble polishing, and specialty services for offices, medical practices, and commercial properties in northern Palm Beach County.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Palm Beach Gardens. Limpieza profunda, encerado de pisos, pulido de mármol y servicios especializados para oficinas, consultorios médicos y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Palm Beach Gardens | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning in Palm Beach Gardens. Floor waxing, marble polishing, deep cleaning for businesses. Northern Palm Beach County. Free estimates.',
      },
      {
        slug: 'jupiter',
        name: 'Jupiter',
        county: 'palm-beach',
        population: 65791,
        shortDescription:
          'Commercial cleaning services in Jupiter, FL. Deep cleaning, floor care, pressure washing, and specialty cleaning for offices, retail spaces, and commercial properties in northern Palm Beach County.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Jupiter, FL. Limpieza profunda, cuidado de pisos, lavado a presión y limpieza especializada para oficinas, comercios y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Jupiter FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning services in Jupiter, FL. Floor care, deep cleaning, pressure washing for businesses. Northern Palm Beach County. Free estimates.',
      },
      {
        slug: 'wellington',
        name: 'Wellington',
        county: 'palm-beach',
        population: 64980,
        shortDescription:
          'Commercial cleaning services in Wellington, FL. Floor stripping and waxing, deep cleaning, carpet care, and pressure washing for offices and commercial properties in western Palm Beach County.',
        shortDescriptionEs:
          'Servicios de limpieza comercial en Wellington, FL. Decapado y encerado de pisos, limpieza profunda, cuidado de alfombras y lavado a presión para oficinas y propiedades comerciales.',
        metaTitle: 'Commercial Cleaning Wellington FL | MB Clean Solutions',
        metaDescription:
          'Commercial cleaning in Wellington, FL. Floor waxing, deep cleaning, carpet cleaning & pressure washing for businesses. Palm Beach County. Free estimates.',
      },
    ],
    metaTitle: 'Commercial Cleaning Palm Beach County | MB Clean Solutions',
    metaDescription:
      'Professional commercial cleaning in Palm Beach County. West Palm Beach, Boca Raton, Delray Beach & more. Floor restoration, deep cleaning services.',
  },
];

export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
  for (const county of counties) {
    const city = county.cities.find((c) => c.slug === slug);
    if (city) return city;
  }
  return undefined;
}

export function getCountyForCity(citySlug: string): County | undefined {
  return counties.find((county) =>
    county.cities.some((city) => city.slug === citySlug)
  );
}

export function getAllCities(): City[] {
  return counties.flatMap((c) => c.cities);
}

export function getCitiesByCounty(countySlug: string): City[] {
  const county = getCountyBySlug(countySlug);
  return county?.cities ?? [];
}
