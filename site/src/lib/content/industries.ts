import type { Industry } from '@/types';

export const industries: Industry[] = [
  // ─── Warehouse & Industrial ───────────────────────────────────────────────
  {
    slug: 'warehouse-industrial',
    name: 'Warehouse & Industrial',
    nameEs: 'Almacenes e Industrial',
    shortDescription:
      'Deep cleaning and floor restoration for warehouses, distribution centers, and industrial facilities.',
    shortDescriptionEs:
      'Limpieza profunda y restauración de pisos para almacenes, centros de distribución e instalaciones industriales.',
    longDescription:
      'South Florida warehouses and distribution centers operate 24/7 under intense foot and forklift traffic, generating grease, dust, and chemical residue that standard janitorial crews simply cannot handle. MB Clean Solutions brings commercial-grade floor scrubbers, industrial pressure washers, and proven protocols that keep your facility safe, compliant, and inspection-ready without ever disrupting your operations.',
    icon: 'Warehouse',
    image: '/images/industries/warehouses.webp',
    relevantServiceSlugs: [
      'commercial-deep-cleaning',
      'commercial-floor-deep-cleaning',
      'pressure-washing',
      'stripping-and-waxing',
    ],
    stats: [
      { value: '180K+', label: 'Avg sq ft per South FL warehouse' },
      { value: '40%', label: 'Slip-and-fall risk reduced with clean floors' },
      { value: '18%', label: 'Growth in FL industrial facilities since 2021' },
      { value: '3×', label: 'Faster inspection pass with documented cleaning' },
    ],
    challenges: [
      {
        title: 'Forklift & Pallet Traffic Damage',
        description:
          'Constant forklift movement leaves tire marks, gouges, and oil drips on concrete and epoxy floors that accumulate into a slip hazard if not addressed with commercial scrubbing equipment.',
        icon: 'AlertTriangle',
      },
      {
        title: 'Loading Dock Grime',
        description:
          'Loading docks accumulate road grime, diesel residue, bird droppings, and organic matter from constant truck traffic. Standard mopping is ineffective. High-pressure washing is what it takes.',
        icon: 'Truck',
      },
      {
        title: 'OSHA Compliance Pressure',
        description:
          'OSHA 29 CFR 1910.22 mandates clean, dry, orderly walking surfaces. Dirty warehouse floors with pooled liquids or debris expose you to citations and workers\' comp liability.',
        icon: 'Shield',
      },
      {
        title: 'Dust & Air Quality',
        description:
          'Warehouses accumulate silica dust, cardboard particulate, and pollen that settles on racking and floors. Poor air quality affects worker productivity and can trigger HVAC maintenance requirements.',
        icon: 'Wind',
      },
    ],
    benefits: [
      {
        title: 'Industrial-Grade Equipment',
        description:
          'We use commercial ride-on scrubbers and industrial pressure washers, not the mop-and-bucket approach. Our machines clean 10× the area in half the time.',
      },
      {
        title: 'Off-Hours Scheduling',
        description:
          'We coordinate around your shift schedule, cleaning during overnight hours or weekends so your operations never stop.',
      },
      {
        title: 'Floor Restoration & Protection',
        description:
          'Beyond cleaning, we restore worn VCT and concrete floors with stripping, waxing, and sealant applications that extend floor life and reduce long-term maintenance costs.',
      },
      {
        title: 'Full Facility Coverage',
        description:
          'From the loading dock and receiving area to the office breakroom and restrooms, we handle the entire facility so you have one vendor and one point of contact.',
      },
    ],
    faq: [
      {
        question: 'Can you clean a warehouse without interrupting operations?',
        answer:
          'Yes. We schedule around your shifts: nights, weekends, or section-by-section during low-traffic periods. Our team coordinates with your facility manager to ensure zero operational disruption.',
      },
      {
        question: 'What type of flooring do you handle in warehouses?',
        answer:
          'We clean polished concrete, epoxy-coated floors, VCT tile, and rubber flooring. We also repair wax buildup on VCT floors and re-coat epoxy areas with protective sealants.',
      },
      {
        question: 'Do you handle loading dock and exterior pressure washing?',
        answer:
          'Absolutely. Loading docks, truck bays, parking aprons, and building exteriors are part of our warehouse cleaning packages. We use commercial-grade pressure washers rated for industrial grime.',
      },
      {
        question: 'How often should an industrial facility be deep cleaned?',
        answer:
          'Most South Florida warehouses benefit from monthly deep floor scrubbing, quarterly loading dock pressure washing, and semi-annual full facility deep cleans. We customize the schedule to your traffic levels.',
      },
    ],
    metaTitle: 'Warehouse & Industrial Cleaning Miami | South Florida',
    metaDescription:
      'Commercial cleaning for warehouses and industrial facilities in South Florida. Floor restoration, deep cleaning, pressure washing. Miami-Dade, Broward, Palm Beach.',
  },

  // ─── Restaurant & Commercial Kitchen ────────────────────────────────────
  {
    slug: 'restaurant-commercial-kitchen',
    name: 'Restaurant & Commercial Kitchen',
    nameEs: 'Restaurante y Cocina Comercial',
    shortDescription:
      'Specialized deep cleaning for restaurant kitchens, dining areas, and food service facilities.',
    shortDescriptionEs:
      'Limpieza profunda especializada para cocinas de restaurantes, áreas de comedor e instalaciones de servicio de alimentos.',
    longDescription:
      'Miami-Dade and Broward county health inspectors do not give second chances. A failed inspection can cost you thousands in lost revenue, damage your reputation on Google, and even trigger a temporary closure. MB Clean Solutions understands the unique demands of commercial kitchens: grease-soaked tile, buildup behind equipment, clogged floor drains. We deliver deep cleaning that is health-code ready, every time.',
    icon: 'UtensilsCrossed',
    image: '/images/industries/restaurants.webp',
    relevantServiceSlugs: [
      'commercial-deep-cleaning',
      'tile-grout-cleaning',
      'commercial-floor-deep-cleaning',
      'pressure-washing',
    ],
    stats: [
      { value: '8,500+', label: 'Licensed restaurants in South Florida' },
      { value: '3–4×', label: 'Grease buildup growth rate in humid FL kitchens' },
      { value: '87%', label: 'Of failed inspections tied to sanitation issues' },
      { value: '$12K+', label: 'Average cost of a temporary closure' },
    ],
    challenges: [
      {
        title: 'Health Code Compliance',
        description:
          'Florida Division of Hotels and Restaurants conducts unannounced inspections. Grease accumulation on tile, behind equipment, and in floor drains are the top cited violations in Miami-Dade.',
        icon: 'ClipboardCheck',
      },
      {
        title: 'Grease-Saturated Tile & Grout',
        description:
          'Kitchen floors in South Florida restaurants see a cycle of cooking oils, food debris, and high-pressure water that embeds grease deep into porous tile grout, creating a breeding ground for bacteria.',
        icon: 'Droplet',
      },
      {
        title: 'Floor Drain & Trap Buildup',
        description:
          'Floor drains in commercial kitchens accumulate grease, organic matter, and bacteria that creates foul odors and attracts pests, which is a guaranteed health code write-up.',
        icon: 'Layers',
      },
      {
        title: 'Dining Area Impression',
        description:
          'Diners notice everything: sticky floors, stained grout between tiles, and scuffed floors in high-traffic areas. First impressions drive reviews and repeat business.',
        icon: 'Eye',
      },
    ],
    benefits: [
      {
        title: 'Health-Code Ready Results',
        description:
          'Our tile and grout cleaning process uses commercial steam extraction and EPA-registered degreasers that eliminate bacteria, grease, and odor, ensuring your kitchen passes every inspection.',
      },
      {
        title: 'Deep Equipment Line Cleaning',
        description:
          'We clean behind and beneath commercial equipment: fryers, prep tables, walk-in coolers. These are the spots where grease accumulates and routine cleaning never reaches.',
      },
      {
        title: 'Before-Open & After-Close Scheduling',
        description:
          'We work around your hours: late nights after close, or early mornings before the breakfast rush. Zero disruption to your service or revenue.',
      },
      {
        title: 'Exterior & Patio Pressure Washing',
        description:
          'Grease traps, dumpster areas, sidewalks, and patio spaces are part of the package. Clean exteriors prevent pest attraction and maintain curb appeal.',
      },
    ],
    faq: [
      {
        question: 'Will your cleaning process make our kitchen pass a health inspection?',
        answer:
          'Our restaurant cleaning is specifically designed to address the areas most cited by Florida health inspectors: tile and grout, floor drains, behind equipment, and exhaust ventilation. Most clients report passing subsequent inspections with zero sanitation violations.',
      },
      {
        question: 'Do you clean after hours to avoid disrupting service?',
        answer:
          'Yes. We schedule all restaurant kitchen deep cleans during off-hours, typically late evening after close through early morning before prep begins. We coordinate with your kitchen manager on timing.',
      },
      {
        question: 'How often should a restaurant kitchen be deep cleaned?',
        answer:
          'High-volume restaurants in South Florida should deep clean tile and grout monthly, with full equipment line cleaning quarterly. Dining areas benefit from professional floor care every 6–8 weeks depending on foot traffic.',
      },
      {
        question: 'Do you pressure wash dumpster areas and grease trap surroundings?',
        answer:
          'Yes. Dumpster pads, grease trap surroundings, and back-of-house areas are part of our restaurant packages. These areas are critical for pest control and passing health inspections.',
      },
    ],
    metaTitle: 'Restaurant & Kitchen Cleaning Miami | Commercial Deep Clean',
    metaDescription:
      'Deep cleaning for restaurants and commercial kitchens in South Florida. Tile, grout, floor, and full facility cleaning. Health code ready.',
  },

  // ─── Medical & Dental ────────────────────────────────────────────────────
  {
    slug: 'medical-dental-facilities',
    name: 'Medical & Dental Facilities',
    nameEs: 'Instalaciones Médicas y Dentales',
    shortDescription:
      'Thorough cleaning and disinfection for medical offices, dental practices, and healthcare facilities.',
    shortDescriptionEs:
      'Limpieza y desinfección exhaustiva para consultorios médicos, prácticas dentales e instalaciones de salud.',
    longDescription:
      'Healthcare-associated infections (HAIs) cost the U.S. healthcare system $28.4 billion annually and affect 1 in 31 hospital patients. In medical and dental offices across South Florida, the risk of surface contamination is ever-present, and the standard for cleanliness is far higher than any other industry. MB Clean Solutions applies hospital-grade protocols, EPA-registered disinfectants, and infection-control trained technicians to ensure your facility protects both patients and staff.',
    icon: 'Heart',
    image: '/images/industries/medical-facilities.webp',
    relevantServiceSlugs: [
      'commercial-deep-cleaning',
      'carpet-cleaning',
      'tile-grout-cleaning',
      'air-duct-cleaning',
    ],
    stats: [
      { value: '$28.4B', label: 'Annual cost of HAIs in U.S. healthcare' },
      { value: '70%', label: 'HAI reduction with proper cleaning protocols' },
      { value: '1 in 31', label: 'Hospital patients affected by HAIs nationally' },
      { value: '3,200+', label: 'Licensed medical facilities in South Florida' },
    ],
    challenges: [
      {
        title: 'Infection Control Standards',
        description:
          'Medical and dental offices must meet CDC, OSHA, and state DOH cleaning standards. Cross-contamination between exam rooms is a serious patient safety risk that requires systematic disinfection protocols.',
        icon: 'Shield',
      },
      {
        title: 'Indoor Air Quality',
        description:
          'Waiting rooms and treatment areas recirculate air through HVAC systems. Dirty air ducts spread airborne pathogens and allergens, which has become a critical concern since the pandemic.',
        icon: 'Wind',
      },
      {
        title: 'High-Traffic Waiting Room Floors',
        description:
          'Carpeted waiting rooms in medical offices accumulate bacteria, allergens, and pathogens from sick patients. Standard vacuuming is not enough. Hot water extraction is required.',
        icon: 'Users',
      },
      {
        title: 'Restroom & Treatment Room Tile',
        description:
          'Tile and grout in restrooms and procedure areas is a primary vector for microbial growth in South Florida\'s humid climate. Regular deep cleaning prevents biofilm formation.',
        icon: 'Droplet',
      },
    ],
    benefits: [
      {
        title: 'EPA-Registered Disinfectants',
        description:
          'We use hospital-grade disinfectants on EPA List N (effective against SARS-CoV-2 and other pathogens) for all surface cleaning in medical and dental environments.',
      },
      {
        title: 'HIPAA-Conscious Operations',
        description:
          'Our technicians respect patient confidentiality: no photos taken, no identifying information collected. We operate within your facility\'s privacy protocols at all times.',
      },
      {
        title: 'Air Duct Cleaning for IAQ',
        description:
          'Our commercial air duct cleaning removes accumulated dust, mold spores, and biofilm from HVAC systems, dramatically improving indoor air quality in waiting rooms and treatment areas.',
      },
      {
        title: 'Patient-Hours Scheduling',
        description:
          'We clean around your appointment schedule, whether that means early mornings, evenings, or weekends, so your patients experience a spotless facility every day without service interruption.',
      },
    ],
    faq: [
      {
        question: 'Do your cleaning products meet healthcare disinfection standards?',
        answer:
          'Yes. We use EPA-registered, hospital-grade disinfectants rated effective against MRSA, C. diff, SARS-CoV-2, and other healthcare pathogens. All products meet CDC and OSHA guidelines for healthcare facility cleaning.',
      },
      {
        question: 'Can you work around our patient appointment schedule?',
        answer:
          'Absolutely. We schedule all medical and dental facility cleaning outside of patient hours: before the office opens, after last appointments, or on weekend closures. Your patients always arrive to a clean, disinfected environment.',
      },
      {
        question: 'Do you handle air duct cleaning in medical offices?',
        answer:
          'Yes. Our commercial air duct cleaning service is particularly important for healthcare settings. We remove accumulated dust, allergens, and mold from HVAC systems to improve indoor air quality and reduce airborne infection risk.',
      },
      {
        question: 'Are your technicians background-checked and trained in healthcare protocols?',
        answer:
          'Yes. All MB Clean Solutions technicians undergo background screening and are trained in healthcare-specific infection control protocols, proper PPE use, and HIPAA-conscious operations.',
      },
    ],
    metaTitle: 'Medical & Dental Facility Cleaning | South Florida',
    metaDescription:
      'Professional cleaning for medical and dental offices in South Florida. Deep disinfection, carpet, tile, and air duct cleaning. HIPAA-conscious protocols.',
  },

  // ─── Condo & HOA ─────────────────────────────────────────────────────────
  {
    slug: 'condo-hoa-common-areas',
    name: 'Condo & HOA Common Areas',
    nameEs: 'Condominios y Áreas Comunes HOA',
    shortDescription:
      'Floor polishing, deep cleaning, and restoration for condo lobbies, hallways, and common areas.',
    shortDescriptionEs:
      'Pulido de pisos, limpieza profunda y restauración para lobbies de condominios, pasillos y áreas comunes.',
    longDescription:
      'With over one million condominium units across Miami-Dade, Broward, and Palm Beach counties, South Florida has one of the highest concentrations of condo and HOA properties in the nation. Lobby floors, hallways, pool decks, and parking garages are the first thing residents and guests see, and their condition directly affects property values and HOA board satisfaction. MB Clean Solutions specializes in the marble, terrazzo, and tile surfaces that define South Florida condominium lobbies.',
    icon: 'Building2',
    image: '/images/industries/condos-hoa.webp',
    relevantServiceSlugs: [
      'marble-terrazzo-polishing',
      'commercial-floor-deep-cleaning',
      'carpet-cleaning',
      'pressure-washing',
    ],
    stats: [
      { value: '1M+', label: 'Condo units in South Florida tri-county area' },
      { value: '85%', label: 'Of condo lobbies feature marble or terrazzo' },
      { value: '$50K+', label: 'Property value impact of restored lobby floors' },
      { value: '4–6×/yr', label: 'Recommended lobby deep clean frequency' },
    ],
    challenges: [
      {
        title: 'Marble & Terrazzo Wear',
        description:
          'South Florida condo lobbies feature marble and terrazzo floors that dull, scratch, and pit from daily foot traffic, luggage carts, and cleaning with the wrong products. Restoration requires diamond polishing equipment, not a mop.',
        icon: 'Diamond',
      },
      {
        title: 'Resident & Board Expectations',
        description:
          'HOA boards and property managers face direct pressure from residents when lobbies and hallways look neglected. Common area cleanliness is consistently the #1 complaint in condo association meetings.',
        icon: 'Users',
      },
      {
        title: 'Pool Deck & Exterior Grime',
        description:
          'Pool decks, parking garage floors, and building exteriors in South Florida\'s climate accumulate algae, mold, salt air deposits, and tire marks that require pressure washing to remove safely.',
        icon: 'Layers',
      },
      {
        title: 'Elevator & Hallway Carpet',
        description:
          'Elevator floors and hallway carpets endure thousands of steps daily. South Florida humidity accelerates odor and mold growth in carpeted corridors if not deep cleaned regularly.',
        icon: 'ArrowUp',
      },
    ],
    benefits: [
      {
        title: 'Marble & Terrazzo Restoration Specialists',
        description:
          'Our diamond polishing process restores dull, scratched lobby floors to their original mirror finish, dramatically improving the first impression of your property without costly replacement.',
      },
      {
        title: 'HOA-Friendly Scheduling',
        description:
          'We work with HOA management companies on scheduling that minimizes resident disruption: section closures, weekend deep cleans, and phased corridor cleaning.',
      },
      {
        title: 'Full Building Exterior Pressure Washing',
        description:
          'Pool decks, parking garages, building exteriors, and sidewalks get commercial-grade pressure washing that removes algae, mold, salt deposits, and stains.',
      },
      {
        title: 'Single Vendor for the Whole Building',
        description:
          'Lobby marble polishing, hallway carpet cleaning, garage pressure washing. One company, one invoice, one account manager. Simplified vendor management for property managers.',
      },
    ],
    faq: [
      {
        question: 'How long does marble or terrazzo lobby restoration take?',
        answer:
          'Most condo lobby marble restoration projects take 1–2 days depending on square footage. We section off areas and coordinate with building management to maintain access for residents throughout the process.',
      },
      {
        question: 'Do you work directly with HOA management companies?',
        answer:
          'Yes. We regularly partner with HOA management companies and property managers across Miami-Dade, Broward, and Palm Beach. We provide detailed service reports and documentation for board meetings.',
      },
      {
        question: 'How often should condo common areas be professionally cleaned?',
        answer:
          'Lobby deep cleaning every 2–3 months, marble/terrazzo polishing 2–3 times per year, hallway carpet cleaning quarterly, pool deck pressure washing monthly, and parking garage pressure washing twice yearly.',
      },
      {
        question: 'Can you restore terrazzo floors that have been heavily damaged?',
        answer:
          'In most cases, yes. Our diamond grinding and polishing process can remove deep scratches, re-open clogged pores, fill chips, and restore terrazzo to a like-new finish without replacement.',
      },
    ],
    metaTitle: 'Condo & HOA Common Area Cleaning | South Florida',
    metaDescription:
      'Lobby floor polishing, carpet cleaning, and pressure washing for South Florida condos and HOAs. Marble, terrazzo, and common area restoration.',
  },

  // ─── Gym & Fitness Centers ───────────────────────────────────────────────
  {
    slug: 'gym-fitness-centers',
    name: 'Gym & Fitness Centers',
    nameEs: 'Gimnasios y Centros de Fitness',
    shortDescription:
      'Deep cleaning and floor care for gyms, fitness studios, and recreational facilities.',
    shortDescriptionEs:
      'Limpieza profunda y cuidado de pisos para gimnasios, estudios de fitness e instalaciones recreativas.',
    longDescription:
      'Gym floors endure 1,000+ contact points per day from sneakers, weights, and equipment. In South Florida\'s humid climate, sweat, skin cells, and moisture create an ideal environment for bacteria, fungal growth, and MRSA on rubber flooring, locker room tile, and shower grout. Member retention is directly tied to cleanliness. A 2024 IHRSA study found that cleanliness is the #1 factor in gym membership cancellations. MB Clean Solutions keeps your fitness facility hygienic, odor-free, and member-ready.',
    icon: 'Dumbbell',
    image: '/images/industries/gyms-fitness.webp',
    relevantServiceSlugs: [
      'commercial-deep-cleaning',
      'commercial-floor-deep-cleaning',
      'carpet-cleaning',
      'tile-grout-cleaning',
    ],
    stats: [
      { value: '#1', label: 'Cleanliness is top reason members cancel' },
      { value: '362×', label: 'More bacteria on gym equipment vs toilet seat' },
      { value: '4.5%', label: 'Annual fitness industry growth in South Florida' },
      { value: '1K+', label: 'Floor contact points per day in active gyms' },
    ],
    challenges: [
      {
        title: 'Rubber Floor Bacteria & Odor',
        description:
          'Rubber flooring in weight rooms and functional fitness areas absorbs sweat and develops bacteria colonies that cause persistent odor. Standard mopping only addresses the surface.',
        icon: 'AlertTriangle',
      },
      {
        title: 'Locker Room Mold & Fungus',
        description:
          'Tile and grout in South Florida gym locker rooms and showers are prime environments for mold, mildew, and fungal growth due to constant moisture and Florida\'s humidity.',
        icon: 'Droplet',
      },
      {
        title: 'High-Traffic Studio Carpet',
        description:
          'Yoga studios, group fitness rooms, and stretching areas with carpet accumulate allergens, skin cells, and bacteria that require hot water extraction, not just vacuuming.',
        icon: 'Layers',
      },
      {
        title: 'MRSA & Staph Risk',
        description:
          'Gyms are documented hotspots for MRSA transmission through shared equipment and surfaces. A single outbreak can trigger media coverage, membership cancellations, and liability exposure.',
        icon: 'Shield',
      },
    ],
    benefits: [
      {
        title: 'Anti-Microbial Rubber Floor Treatment',
        description:
          'We use specialized rubber floor cleaners and EPA-registered disinfectants that penetrate porous rubber to eliminate bacteria, fungal spores, and odor at the source.',
      },
      {
        title: 'Locker Room & Shower Tile Restoration',
        description:
          'Commercial tile and grout cleaning with steam extraction removes biofilm, mold, and embedded mineral deposits from shower tiles, restoring their appearance and eliminating health hazards.',
      },
      {
        title: 'Before-Open & After-Close Availability',
        description:
          'We schedule cleaning around your gym\'s operating hours, whether early morning before the 5am crowd or late night after closing, so members always experience a fresh facility.',
      },
      {
        title: 'Documented Sanitation for Liability',
        description:
          'We provide cleaning logs and service reports, useful documentation if a member ever raises health concerns and a strong marketing tool to showcase your commitment to hygiene.',
      },
    ],
    faq: [
      {
        question: 'How do you clean rubber gym flooring without damaging it?',
        answer:
          'We use pH-neutral, rubber-safe cleaning solutions combined with commercial scrubbing equipment designed for rubber flooring. We never use harsh chemicals that degrade rubber compounds or strip protective coatings.',
      },
      {
        question: 'Can you eliminate the persistent odor in our weight room?',
        answer:
          'Yes. Persistent gym odor comes from bacteria embedded in rubber flooring and equipment surfaces. Our deep extraction cleaning eliminates the bacteria causing the odor rather than masking it with fragrance.',
      },
      {
        question: 'How often should a gym be professionally deep cleaned?',
        answer:
          'For active gyms in South Florida, we recommend monthly rubber floor deep scrubbing, quarterly locker room tile restoration, and bi-annual carpet extraction for studio floors. High-volume 24-hour gyms may need bi-monthly deep cleans.',
      },
      {
        question: 'Do you clean pool areas at fitness centers?',
        answer:
          'We pressure wash pool deck areas, locker room entrances, and exterior walkways. Pool chemical treatments and water management are outside our scope, but all surrounding surfaces are included.',
      },
    ],
    metaTitle: 'Gym & Fitness Center Cleaning | South Florida',
    metaDescription:
      'Commercial cleaning for gyms and fitness centers in South Florida. Floor care, deep cleaning, and tile restoration. Clean, healthy workout environments.',
  },

  // ─── Church & Religious Facilities ──────────────────────────────────────
  {
    slug: 'church-religious-facilities',
    name: 'Church & Religious Facilities',
    nameEs: 'Iglesias e Instalaciones Religiosas',
    shortDescription:
      'Respectful deep cleaning and floor restoration for churches, temples, and community worship spaces.',
    shortDescriptionEs:
      'Limpieza profunda respetuosa y restauración de pisos para iglesias, templos y espacios de culto comunitarios.',
    longDescription:
      'South Florida is home to over 3,000 places of worship, ranging from historic Catholic churches with marble sanctuary floors to large evangelical megachurches with commercial carpet in fellowship halls. These facilities face a unique challenge: high occupancy on weekends and near-zero cleaning budget on weekdays. MB Clean Solutions offers flexible, budget-conscious deep cleaning plans that keep worship spaces, fellowship halls, and children\'s ministries spotless for the families and communities who depend on them.',
    icon: 'Church',
    image: '/images/industries/houses-of-worship.webp',
    relevantServiceSlugs: [
      'commercial-deep-cleaning',
      'carpet-cleaning',
      'stripping-and-waxing',
      'marble-terrazzo-polishing',
    ],
    stats: [
      { value: '3,000+', label: 'Places of worship in South Florida' },
      { value: '500–5K', label: 'Weekly attendance range per congregation' },
      { value: '85%', label: 'Of churches use carpet in sanctuary or fellowship hall' },
      { value: '2×/yr', label: 'Minimum deep clean frequency recommended' },
    ],
    challenges: [
      {
        title: 'Weekend-Only High Traffic',
        description:
          'Churches and temples see their entire weekly foot traffic concentrated in 6–8 hours on weekends. This creates intense floor wear, food debris in fellowship halls, and compressed carpet fibers that regular vacuuming cannot restore.',
        icon: 'Calendar',
      },
      {
        title: 'Sanctuary Marble & Terrazzo',
        description:
          'Many historic South Florida churches feature original marble or terrazzo floors in sanctuaries and narthex areas that require diamond polishing, not floor wax, to maintain their appearance.',
        icon: 'Diamond',
      },
      {
        title: 'Children\'s Ministry & Nursery Areas',
        description:
          'Nurseries and children\'s classrooms require the highest cleaning standards: safe disinfectants, allergen removal from carpet, and sanitized surfaces that protect the youngest congregation members.',
        icon: 'Baby',
      },
      {
        title: 'Fellowship Hall VCT Floors',
        description:
          'Fellowship halls and multipurpose rooms with VCT flooring see heavy use from dinners, events, and community programs. Proper stripping and waxing maintains the appearance and protects the floor investment.',
        icon: 'Layers',
      },
    ],
    benefits: [
      {
        title: 'Respectful, Discreet Service',
        description:
          'Our teams work with quiet professionalism in sacred spaces. We train all technicians on respectful conduct in places of worship: proper dress, quiet operation, and careful handling of religious items.',
      },
      {
        title: 'Weekday Scheduling Available',
        description:
          'We schedule all work during weekdays when the facility is empty, so worship services, Bible studies, and community events are never interrupted.',
      },
      {
        title: 'Child-Safe Cleaning Products',
        description:
          'All cleaning products used in nurseries, classrooms, and children\'s ministry areas are non-toxic, fragrance-free, and safe for contact with children and infants.',
      },
      {
        title: 'Seasonal Deep Clean Packages',
        description:
          'We offer Easter, Christmas, and High Holiday preparation packages timed to your biggest services of the year, so your space looks its best when attendance is highest.',
      },
    ],
    faq: [
      {
        question: 'Can you work around our service and event schedule?',
        answer:
          'Yes. We coordinate with your administrative office to schedule all cleaning during times when the facility is not in use. We have experience working around Sunday services, Wednesday programs, and special events.',
      },
      {
        question: 'Are your cleaning products safe for children in nursery areas?',
        answer:
          'Absolutely. All products used in nurseries and children\'s classrooms are EPA-approved, non-toxic, and free from harsh chemicals. We use fragrance-free options when requested.',
      },
      {
        question: 'Can you restore the marble floors in our sanctuary?',
        answer:
          'Yes. Historic marble and terrazzo floors in sanctuaries are one of our specialties. Our diamond polishing process removes years of wear and dulling without harmful chemicals, restoring the original shine.',
      },
      {
        question: 'Do you offer annual maintenance plans for churches?',
        answer:
          'Yes. We offer annual maintenance agreements tailored to church budgets, typically covering quarterly carpet cleaning, bi-annual floor polishing, and a pre-Christmas and pre-Easter deep clean.',
      },
    ],
    metaTitle: 'Church & Religious Facility Cleaning | South Florida',
    metaDescription:
      'Professional cleaning for churches and religious facilities in South Florida. Floor waxing, carpet cleaning, and deep cleaning services.',
  },

  // ─── Retail & Shopping Centers ───────────────────────────────────────────
  {
    slug: 'retail-shopping-centers',
    name: 'Retail & Shopping Centers',
    nameEs: 'Comercios y Centros Comerciales',
    shortDescription:
      'Floor care, deep cleaning, and maintenance for retail stores, malls, and shopping centers.',
    shortDescriptionEs:
      'Cuidado de pisos, limpieza profunda y mantenimiento para tiendas, centros comerciales y plazas.',
    longDescription:
      'In South Florida\'s $38 billion retail market, the condition of your floors is directly tied to customer dwell time, conversion, and brand perception. Scuffed VCT floors, dirty grout in food court tile, stained storefronts. Customers notice all of it. MB Clean Solutions delivers the high-traffic floor care, storefront pressure washing, and food court tile cleaning that keeps retail environments looking their best, day after day.',
    icon: 'ShoppingBag',
    image: '/images/industries/retail-stores.webp',
    relevantServiceSlugs: [
      'commercial-floor-deep-cleaning',
      'stripping-and-waxing',
      'pressure-washing',
      'tile-grout-cleaning',
    ],
    stats: [
      { value: '$38B', label: 'Annual retail sales in South Florida' },
      { value: '67%', label: 'Shoppers judge store quality by floor cleanliness' },
      { value: '3–5×', label: 'More foot traffic than office buildings per sq ft' },
      { value: '18mo', label: 'Average VCT floor life without proper waxing' },
    ],
    challenges: [
      {
        title: 'High-Traffic Floor Wear',
        description:
          'Retail floors, especially VCT and polished vinyl, lose their finish quickly under constant foot traffic, shopping carts, and seasonal events. Dull, scuffed floors signal neglect to shoppers.',
        icon: 'TrendingDown',
      },
      {
        title: 'Food Court Tile & Grout',
        description:
          'Food courts accumulate grease, food stains, and beverage spills in tile grout that standard mopping spreads but cannot remove. This creates health code risk and an unpleasant dining environment.',
        icon: 'Droplet',
      },
      {
        title: 'Storefront & Exterior Grime',
        description:
          'South Florida\'s sun, humidity, and tropical rains accelerate algae and mold growth on storefronts, sidewalks, and parking areas. Stained exteriors deter foot traffic and reduce perceived value.',
        icon: 'Eye',
      },
      {
        title: 'Fitting Room & Restroom Maintenance',
        description:
          'High-use restrooms and fitting room areas require deep tile and grout cleaning to maintain the hygiene and brand standards that national retail tenants require in their lease agreements.',
        icon: 'Layers',
      },
    ],
    benefits: [
      {
        title: 'Showroom-Quality Floor Finish',
        description:
          'Our commercial floor stripping and waxing process restores VCT and vinyl floors to a high-gloss finish that makes merchandise displays pop and tells customers your store cares about quality.',
      },
      {
        title: 'Overnight & After-Close Service',
        description:
          'We work during non-business hours: overnight, before mall opening, or on dark days, so floors get done without disrupting customers or sales staff.',
      },
      {
        title: 'Multi-Tenant Shopping Center Management',
        description:
          'We coordinate with property management companies to service multiple tenants, common areas, parking lots, and food courts under a single contract. One call handles the whole center.',
      },
      {
        title: 'Exterior Pressure Washing',
        description:
          'Building facades, parking garages, sidewalks, and dumpster areas are pressure washed to remove algae, mold, gum, and staining, protecting your center\'s curb appeal year-round.',
      },
    ],
    faq: [
      {
        question: 'Can you strip and wax floors overnight without closing the store?',
        answer:
          'Yes. We specifically design our retail floor care programs to operate during overnight hours, after stores close and before mall opening. Most strip-and-wax jobs are completed in one overnight session.',
      },
      {
        question: 'Do you service food courts and restaurant tenants inside retail centers?',
        answer:
          'Yes. Food court tile and grout deep cleaning is one of our specialties. We coordinate with individual food vendors and property management to schedule around operating hours.',
      },
      {
        question: 'How often should retail floors be stripped and rewaxed?',
        answer:
          'High-traffic retail floors typically need full stripping and waxing every 6–12 months, with scrubbing and wax maintenance every 3–4 months in between to maintain the finish.',
      },
      {
        question: 'Can you handle a large shopping center with 50+ tenants?',
        answer:
          'Yes. We regularly service multi-tenant retail centers across Miami-Dade, Broward, and Palm Beach. We work with property management to coordinate access, tenant schedules, and phased service delivery.',
      },
    ],
    metaTitle: 'Retail & Shopping Center Cleaning | South Florida',
    metaDescription:
      'Commercial cleaning for retail spaces and shopping centers in South Florida. Floor restoration, pressure washing, and deep cleaning services.',
  },

  // ─── Office Buildings ─────────────────────────────────────────────────────
  {
    slug: 'office-buildings',
    name: 'Office Buildings',
    nameEs: 'Edificios de Oficinas',
    shortDescription:
      'Complete deep cleaning and floor care for office buildings, corporate campuses, and coworking spaces.',
    shortDescriptionEs:
      'Limpieza profunda completa y cuidado de pisos para edificios de oficinas, campus corporativos y espacios de coworking.',
    longDescription:
      'Miami\'s office market holds over 47 million square feet of commercial inventory across Class A, B, and C buildings in Brickell, Downtown, Coral Gables, Doral, and Fort Lauderdale\'s CBD. Property managers and facility directors in this market face constant tenant retention pressure, and cleanliness is consistently cited as the #2 driver of tenant satisfaction, right behind HVAC performance. MB Clean Solutions delivers the carpet care, air duct cleaning, and hard floor restoration that keeps office tenants renewing and prospects impressed.',
    icon: 'Building',
    image: '/images/industries/office-buildings.webp',
    relevantServiceSlugs: [
      'commercial-deep-cleaning',
      'carpet-cleaning',
      'commercial-floor-deep-cleaning',
      'air-duct-cleaning',
    ],
    stats: [
      { value: '47M', label: 'Sq ft of office space in South Florida market' },
      { value: '#2', label: 'Cleanliness as driver of tenant satisfaction' },
      { value: '80%', label: 'Average office occupancy in Miami metro' },
      { value: '$120', label: 'Average annual cost per employee for office cleaning' },
    ],
    challenges: [
      {
        title: 'High-Traffic Corridor Carpet',
        description:
          'Office building hallways, elevator lobbies, and common corridors experience some of the highest foot traffic of any commercial space. Matted, stained carpet communicates neglect to tenants and visitors.',
        icon: 'Layers',
      },
      {
        title: 'Air Quality & HVAC Ducts',
        description:
          'Poorly maintained air ducts circulate dust, allergens, and mold spores through office buildings. Post-pandemic, tenants expect documented air quality management as part of building services.',
        icon: 'Wind',
      },
      {
        title: 'Lobby & Reception First Impressions',
        description:
          'The lobby is every prospect\'s first impression of your building. Dull hard floors, dirty grout in restrooms, and smudged glass elevator panels directly affect lease conversions.',
        icon: 'Eye',
      },
      {
        title: 'Multi-Tenant Coordination',
        description:
          'Managing cleaning for 10–50 tenants across multiple floors requires scheduling precision, after-hours access, and clear communication with building management. That level of coordination is beyond what most vendors can deliver.',
        icon: 'Building',
      },
    ],
    benefits: [
      {
        title: 'Tenant Satisfaction Focus',
        description:
          'We understand that your tenants are your customers. Our cleaning standards are designed to maintain the appearance that justifies premium Class A rents and drives renewal decisions.',
      },
      {
        title: 'Commercial Carpet Care Programs',
        description:
          'We offer ongoing carpet maintenance programs that extend carpet life and maintain professional appearance: quarterly hot water extraction, monthly spot treatment, and annual deep restoration.',
      },
      {
        title: 'Air Duct & HVAC Cleaning',
        description:
          'Our commercial air duct cleaning removes accumulated dust, mold, and debris from office building HVAC systems, improving indoor air quality and reducing HVAC maintenance costs.',
      },
      {
        title: 'Building Management Partnership',
        description:
          'We work directly with property management companies, providing service documentation, before/after reports, and flexible scheduling that fits within complex multi-tenant access windows.',
      },
    ],
    faq: [
      {
        question: 'Can you handle a multi-floor office building with multiple tenants?',
        answer:
          'Yes. We regularly service multi-tenant office buildings from 5,000 to 200,000+ square feet. We coordinate with building management on access cards, elevator scheduling, and tenant notification for after-hours service.',
      },
      {
        question: 'How often should office building carpets be professionally cleaned?',
        answer:
          'High-traffic corridors and lobbies should be deep cleaned every 3–4 months. Individual tenant suites typically benefit from semi-annual hot water extraction. We customize frequency based on foot traffic and carpet condition.',
      },
      {
        question: 'Do you clean air ducts in occupied office buildings?',
        answer:
          'Yes. Our commercial air duct cleaning can be performed while the building is occupied, though we recommend scheduling over a weekend for minimal disruption. The process typically takes 1 day per floor.',
      },
      {
        question: 'Do you provide service documentation for building management records?',
        answer:
          'Yes. We provide detailed service reports after every visit, including areas serviced, products used, and any issues observed. This documentation is valuable for tenant communications and building audits.',
      },
    ],
    metaTitle: 'Office Building Cleaning | South Florida Commercial',
    metaDescription:
      'Deep cleaning for office buildings in South Florida. Carpet, floor, air duct, and full facility cleaning. Miami, Fort Lauderdale, West Palm Beach.',
  },

  // ─── Hotels & Hospitality ─────────────────────────────────────────────────
  {
    slug: 'hotels-hospitality',
    name: 'Hotels & Hospitality',
    nameEs: 'Hoteles y Hospitalidad',
    shortDescription:
      'Premium cleaning and floor restoration for hotels, resorts, and hospitality venues across South Florida.',
    shortDescriptionEs:
      'Limpieza premium y restauración de pisos para hoteles, resorts y establecimientos de hospitalidad.',
    longDescription:
      'South Florida welcomes over 40 million visitors annually, sustaining one of the most competitive hospitality markets in the world. In an industry where TripAdvisor reviews can make or break a property and brand standards demand perfection, the condition of lobby marble floors, ballroom carpet, pool decks, and kitchen tile is not a maintenance afterthought. It is a revenue driver. MB Clean Solutions delivers hospitality-grade cleaning that meets the standards of luxury hotel brands and independent properties alike.',
    icon: 'Hotel',
    image: '/images/industries/hotels-hospitality.webp',
    relevantServiceSlugs: [
      'commercial-deep-cleaning',
      'marble-terrazzo-polishing',
      'carpet-cleaning',
      'pressure-washing',
    ],
    stats: [
      { value: '40M+', label: 'Annual visitors to South Florida' },
      { value: '85%', label: 'Of 5-star reviews mention cleanliness' },
      { value: '365', label: 'Days per year of operational cleaning pressure' },
      { value: '4.2×', label: 'ROI on lobby restoration vs. competitive displacement' },
    ],
    challenges: [
      {
        title: 'Lobby Marble Wear & Etching',
        description:
          'Hotel lobbies feature high-end marble flooring that dulls, etches, and scratches from luggage wheels, high heels, and cleaning with acidic products. Diamond restoration is required to maintain the luxury appearance.',
        icon: 'Diamond',
      },
      {
        title: 'Ballroom & Banquet Carpet',
        description:
          'Ballroom carpet endures events, weddings, conferences, and galas that leave food, beverage, and high-traffic damage. Standard vacuuming cannot address embedded soiling in event-grade carpet.',
        icon: 'Layers',
      },
      {
        title: 'Pool Deck & Exterior Surfaces',
        description:
          'Pool decks, outdoor dining areas, and building exteriors in South Florida accumulate algae, salt air deposits, and mold that create slip hazards and detract from the resort appearance.',
        icon: 'Sun',
      },
      {
        title: 'Kitchen & Food Service Areas',
        description:
          'Hotel kitchens serving breakfast, room service, and banquets require regular tile and grout deep cleaning, floor drain maintenance, and equipment line cleaning to meet health code standards.',
        icon: 'UtensilsCrossed',
      },
    ],
    benefits: [
      {
        title: 'Luxury-Grade Marble Restoration',
        description:
          'Our multi-step diamond polishing process (grind, hone, polish, crystallize) restores hotel lobby marble to mirror-finish quality that meets five-star brand standards.',
      },
      {
        title: 'Event-Ready Ballroom Cleaning',
        description:
          'We schedule ballroom carpet deep cleaning and floor restoration between events, working overnight or during changeover windows, so your venue always impresses attendees from the moment they walk in.',
      },
      {
        title: 'Pool Deck & Outdoor Pressure Washing',
        description:
          'Regular pressure washing of pool decks, outdoor dining areas, and walkways removes algae and slip hazards while maintaining the resort aesthetic your guests expect.',
      },
      {
        title: 'Brand Standard Compliance',
        description:
          'We have experience working with brand standards for major hotel flags. Our documentation, service reports, and before/after photography support your quality assurance programs.',
      },
    ],
    faq: [
      {
        question: 'Can you restore our lobby marble without closing the hotel?',
        answer:
          'Yes. We section the lobby and work one area at a time, maintaining a clear path for guests at all times. Most hotel lobby marble restoration projects are completed in 2–4 nights depending on size.',
      },
      {
        question: 'How do you schedule around events and high-occupancy periods?',
        answer:
          'We coordinate with your event calendar and sales team to schedule deep cleans during low-occupancy windows, event changeovers, or overnight periods. We never work during active events.',
      },
      {
        question: 'Do you provide service documentation for brand audits?',
        answer:
          'Yes. We provide detailed service reports, before/after photography, and product documentation, covering everything needed for brand standard audits, liability management, and internal quality records.',
      },
      {
        question: 'Can you handle large resort properties with multiple buildings?',
        answer:
          'Yes. We have experience servicing large hospitality properties with multiple buildings, restaurants, pools, and event venues. We assign a dedicated project manager for multi-building properties.',
      },
    ],
    metaTitle: 'Hotel & Hospitality Cleaning | South Florida',
    metaDescription:
      'Professional cleaning for South Florida hotels and resorts. Marble polishing, carpet care, pressure washing, and deep cleaning services.',
  },

  // ─── New Construction ─────────────────────────────────────────────────────
  {
    slug: 'new-construction',
    name: 'New Construction',
    nameEs: 'Nueva Construcción',
    shortDescription:
      'Post-construction cleanup and final detail cleaning for new commercial builds and renovations.',
    shortDescriptionEs:
      'Limpieza post-construcción y limpieza final de detalles para nuevas construcciones y renovaciones comerciales.',
    longDescription:
      'South Florida permitted over $12 billion in new construction in 2025 alone, one of the highest volumes in the nation. Behind every completed commercial build is a critical final step: post-construction cleaning that transforms a job site into a move-in-ready space. Drywall dust, adhesive residue, concrete splatter, construction debris, and window film are invisible until the client walks in. MB Clean Solutions is the trusted final stage of South Florida commercial construction, delivering the detail cleaning that gets you to your Certificate of Occupancy and impresses the client on day one.',
    icon: 'Hammer',
    image: '/images/industries/new-construction.webp',
    relevantServiceSlugs: [
      'post-construction-cleaning',
      'commercial-deep-cleaning',
      'pressure-washing',
      'commercial-floor-deep-cleaning',
    ],
    stats: [
      { value: '$12B+', label: 'Construction permitted in South FL in 2025' },
      { value: '3-phase', label: 'Cleaning process: rough, detail, touch-up' },
      { value: '48hr', label: 'Typical turnaround for final detail clean' },
      { value: '100%', label: 'Client satisfaction guarantee or we return' },
    ],
    challenges: [
      {
        title: 'Pervasive Construction Dust',
        description:
          'Drywall dust, sawdust, and silica particulate settles on every surface: inside cabinets, on window sills, in HVAC ducts, and deep in grout lines. Standard vacuuming recirculates it rather than removing it.',
        icon: 'Wind',
      },
      {
        title: 'Adhesive & Paint Residue',
        description:
          'Construction adhesive, overspray paint, caulk smears, and grout haze on tile, windows, and hard surfaces require specialized removal techniques to avoid scratching or damaging new finishes.',
        icon: 'Layers',
      },
      {
        title: 'Deadline & CO Pressure',
        description:
          'General contractors face Certificate of Occupancy timelines and client walkthroughs with zero room for cleaning delays. A cleaning team that misses deadlines or delivers substandard work can delay the entire project close.',
        icon: 'Clock',
      },
      {
        title: 'Multiple Trade Damage',
        description:
          'Post-construction spaces have materials tracked through by multiple trades: paint on tile, silicone on chrome, mortar on glass. Effective post-construction cleaning requires knowledge of material-safe removal for each substrate.',
        icon: 'AlertTriangle',
      },
    ],
    benefits: [
      {
        title: 'Three-Phase Cleaning Process',
        description:
          'We follow the industry-standard rough clean → detail clean → touch-up process: initial debris removal, full surface cleaning, and final detail pass before client walkthrough.',
      },
      {
        title: 'GC Partnership & Fast Mobilization',
        description:
          'We work directly with general contractors and project managers, mobilizing quickly at project completion. We understand your punch list process and deliver documentation to support project close.',
      },
      {
        title: 'Substrate-Safe Cleaning',
        description:
          'Our technicians are trained in material-safe cleaning techniques, removing construction residue from tile, glass, chrome, wood, and stone without scratching or damaging new finishes.',
      },
      {
        title: 'Certificate of Occupancy Ready',
        description:
          'Our post-construction deep clean meets the cleanliness standards required for CO inspections, health department sign-offs, and first-day client walkthroughs.',
      },
    ],
    faq: [
      {
        question: 'What phases of construction cleaning do you offer?',
        answer:
          'We offer three phases: (1) Rough clean: initial debris removal and general cleaning during or immediately after construction; (2) Detail clean: thorough surface-by-surface cleaning of all rooms; (3) Touch-up: final pass before client walkthrough or CO inspection.',
      },
      {
        question: 'How quickly can you mobilize after construction completes?',
        answer:
          'We can typically mobilize within 24–48 hours of project completion. For large projects, we coordinate timing with the general contractor during the final construction phase so we are ready to begin immediately.',
      },
      {
        question: 'Do you remove construction adhesive and grout haze from tile?',
        answer:
          'Yes. Adhesive residue, grout haze, caulk smears, and paint overspray on tile are common post-construction issues. We use substrate-safe chemical removers and tools that clean without scratching new tile surfaces.',
      },
      {
        question: 'Do you provide documentation for the project close-out package?',
        answer:
          'Yes. We provide a written service completion certificate, before/after photographs, and a list of products used, all of which GCs and owners can include in their project close-out packages.',
      },
    ],
    metaTitle: 'New Construction Cleaning | South Florida',
    metaDescription:
      'Post-construction cleaning for new commercial builds in South Florida. Debris removal, final detail cleaning, and floor prep for move-in.',
  },
  // ─── Schools, Daycares & Educational Facilities ───────────────────────────
  {
    slug: 'schools-daycares-educational',
    name: 'Schools, Daycares & Educational Facilities',
    nameEs: 'Escuelas, Guarderías e Instalaciones Educativas',
    shortDescription:
      'Deep cleaning and floor restoration for South Florida daycares, private schools, and educational facilities. Project-based services that keep children safe and facilities inspection-ready.',
    shortDescriptionEs:
      'Limpieza profunda y restauración de pisos para guarderías, escuelas privadas e instalaciones educativas en el Sur de Florida. Servicios por proyecto que mantienen a los niños seguros.',
    longDescription:
      'South Florida\'s childcare facilities face some of the most demanding sanitation standards in any commercial sector. Florida\'s Department of Children and Families requires licensed daycares to maintain documented cleaning and sanitation protocols, and a single failed inspection can mean citations, fines, or suspension. Beyond compliance, the density of children in classrooms and playrooms creates year-round pressure on floors, carpets, air ducts, and high-touch surfaces that in-house staff simply cannot keep pace with. MB Clean Solutions delivers project-based deep cleaning, floor restoration, and specialty services scheduled entirely around your academic calendar. Summer break, winter recess, spring break, or any long weekend closure, we mobilize when children are not in the building, so your facility reopens spotless, inspection-ready, and safe.',
    icon: 'GraduationCap',
    image: '/images/industries/schools.webp',
    relevantServiceSlugs: [
      'stripping-and-waxing',
      'scrubbing-and-wax',
      'carpet-cleaning',
      'tile-grout-cleaning',
      'commercial-air-duct-cleaning',
      'commercial-deep-cleaning',
    ],
    stats: [
      { value: '4,800+', label: 'Licensed childcare facilities in Miami-Dade, Broward & Palm Beach' },
      { value: '85%', label: 'Of illness-causing germs in childcare settings spread via surfaces' },
      { value: '100%', label: 'Scheduled during closures, zero disruption to operating hours' },
      { value: 'DCF', label: 'Documented service records provided after every project' },
    ],
    challenges: [
      {
        title: 'DCF Compliance Risk',
        description:
          'Florida\'s Department of Children and Families requires daycares to maintain documented cleaning protocols. Visible sanitation failures or missing records trigger citations, fines, or suspension of your operating license.',
        icon: 'ClipboardCheck',
      },
      {
        title: 'High Germ Load from Children',
        description:
          'Toddlers and young children spread pathogens at rates far exceeding any adult workplace. Floors, restrooms, nap areas, and eating surfaces require a level of deep cleaning that daily in-house staff cannot realistically deliver.',
        icon: 'Baby',
      },
      {
        title: 'Floor Deterioration',
        description:
          'VCT tile in classrooms and hallways degrades rapidly under heavy foot traffic, furniture drag, and repeated cleaning chemical exposure. Without annual stripping and waxing, floors become porous, dull, and impossible to fully sanitize.',
        icon: 'Layers',
      },
      {
        title: 'Poor Indoor Air Quality',
        description:
          'South Florida\'s humidity accelerates mold growth inside HVAC systems. Dirty air ducts in classrooms and nap rooms circulate allergens, mold spores, and bacteria directly at children\'s breathing level throughout the school day.',
        icon: 'Wind',
      },
    ],
    benefits: [
      {
        title: 'DCF-Ready Documentation',
        description:
          'We provide a signed service completion record after every project, documenting scope of work, products used, and date of service. Exactly what a DCF inspector needs to see in your facility files.',
      },
      {
        title: 'Child-Safe Product Selection',
        description:
          'We use commercial-grade, low-VOC products with rapid off-gassing times, appropriate for environments where children eat, sleep, and play. All surfaces are product-free well before re-entry.',
      },
      {
        title: 'Break-Time Scheduling',
        description:
          'Every project is scheduled during summer break, winter recess, spring break, or weekend closures. We have never once interrupted a business day or disrupted child supervision ratios.',
      },
      {
        title: 'Floor Restoration Expertise',
        description:
          'Our VCT stripping and waxing service restores classroom floors to a sealed, sanitary surface that\'s far easier to maintain all year and passes any health or licensing inspection.',
      },
    ],
    faq: [
      {
        question: 'Do you work with daycares that need to pass DCF inspections?',
        answer:
          'Yes. After every project we provide a signed service completion record documenting the scope of work, the products used, and the date of service. That documentation is exactly what DCF inspectors want to see in your facility files, and it takes the guesswork out of your compliance paperwork.',
      },
      {
        question: 'Can you schedule around our school or daycare calendar?',
        answer:
          'Absolutely. We plan every project around your closure schedule, whether that is summer break, winter recess, spring break, or a long weekend. We have never disrupted an operating school day, and we coordinate the timeline well in advance so your facility reopens ready.',
      },
      {
        question: 'What floor services do you offer for schools?',
        answer:
          'We offer VCT stripping and waxing, scrubbing and wax maintenance, carpet deep cleaning, and tile and grout restoration. Most South Florida schools and daycares run VCT floors that benefit from annual stripping and two to three scrub-and-wax maintenance visits per year.',
      },
      {
        question: 'Are the products you use safe for children?',
        answer:
          'Yes. We select commercial-grade, low-VOC products with fast off-gassing profiles. All treated surfaces are completely dry and residue-free well before children re-enter the building. We can share product safety data sheets with your facility director on request.',
      },
    ],
    metaTitle: 'Daycare & School Deep Cleaning Services | South Florida | MB Clean',
    metaDescription:
      'Professional deep cleaning and floor restoration for daycares, private schools, and educational facilities in Miami-Dade, Broward, and Palm Beach. DCF inspection-ready.',
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
