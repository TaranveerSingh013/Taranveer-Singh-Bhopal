import { ProductItem, CommissionOrder, VaultCertificate, SalonAppointment, PatronProfile, BagItem } from '../types';

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-01',
    title: "L'Eclipse Draped Evening Gown",
    house: 'western',
    categoryLabel: 'Western Couture',
    price: '$4,850 USD',
    priceNum: 4850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyvMmOznx2Zxvc5xSNgBt-RXQNOLBsbaSOkp2iGLTDcb_agzPV_u5YuZwrUW-Ann346RBA_2jRupBAvKs7BA16C0Xo7RLCIGOwvDOc6wnfTStpytXplgnmzw6K37dtlkDFJBojGb1MxGhNh6XsAZ0H_52q4QumrTyEr2Kk0rotRkh2I5wT0vSdm4rALt_So6cXkx2TIQa9J0Dl4CvvAuoz0MJhjoSRNCQsF6235iCugazRrC4L3Onw',
    lookbookBadge: 'RUNWAY LOOK 04',
    editionNote: 'LIMITED ATELIER (12/25)',
    description: 'Pure silk crepe de chine and liquid gold satin foil accent drape with interior boned couture corset. Hand-molded over 90 atelier hours in our Paris Place Vendôme salon.',
    hoursCrafted: 90,
    serialAllocation: 'XR-W25-04/12',
    availableSizes: ['EU 36', 'EU 38', 'EU 40', 'CUSTOM MTM'],
    swatchColors: ['#0D0E11', '#D4AF37'],
    featuredFabric: 'Pure Silk Crepe de Chine & 24K Liquid Satin Foil',
    fullSpecs: [
      'Internal galvanized steel boned architectural corset',
      'Removable ceremonial duchess satin side-swept drape',
      'Concealed Swiss hand-stitched zipper closure',
      'Lined in 100% cupro anti-static breathable twill'
    ]
  },
  {
    id: 'prod-02',
    title: 'Obsidian Velvet Smoking Tuxedo',
    house: 'mens',
    categoryLabel: "Men's Atelier",
    price: '$3,400 USD',
    priceNum: 3400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp9Fsj965RhqSjwdZ1_k99gNpXZReFD0Y73AyOF3m6XA_fBof491YoIGHRXVoPB_faO4I1C4ZRHrp0DPUBZRt0hGXGfsFIRxoqGUOWWFqpql_qNb1NyKMNv-H6j1K294RBhXYq0cL7mhj7nAu7XtKAIQ8JgS3SN6MCmIvtzqRhJcaakIZ9eQhAFsOwDKTuGnoUT8P2Ns8dG4YeIGiHY8tBiSK5jD5XBfPChEvv1jnmI07zzlCORfeO',
    lookbookBadge: 'BESPOKE SIZING',
    editionNote: 'SUPER 160S ITALIAN WOOL',
    description: 'Midnight cotton-silk velvet jacket paired with structured Italian wool trousers, high-gorge grosgrain silk peak lapels, and custom carved water buffalo horn buttons.',
    hoursCrafted: 78,
    serialAllocation: 'XR-M25-02/18',
    availableSizes: ['IT 48', 'IT 50', 'IT 52', 'ATELIER FIT'],
    swatchColors: ['#121316', '#292A2D'],
    featuredFabric: 'Biella Cotton-Silk Velvet & Super 160s Worsted Wool',
    fullSpecs: [
      'Hand-padded floating canvas chest piece',
      'Full silk grosgrain facing on sharp peak lapels',
      'Single button front stance with functional surgeon cuffs',
      'Double forward pleat trousers with side adjusters'
    ]
  },
  {
    id: 'prod-03',
    title: 'Imperial Zardozi Regal Sherwani',
    house: 'ethnic',
    categoryLabel: 'Modern Ethnic',
    price: '$5,200 USD',
    priceNum: 5200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdXOLDtPf4I_c693h097X9a8bceaZPjZovw-t9j5-wPfj7TZ0UsJvSbiqhU62UKlHmTiZH0NpjJqo5kcGU_RD4zuDsWhXrGcdlewDtSk2CH_dBUbpEmNlPuCTEO2hl4SZkERySs9HSSHRTOh0aQpJ-zGEbmPfSIoxkw8iGD5-D54DxOazYluo5HuT5LH2oy8tO75lU6iWh28FFh-s0I5vyGNz9bgnxNbQg3afP8-VkvUU0a30WInAf',
    lookbookBadge: 'ARTISAN CRAFTED (120 HRS)',
    editionNote: 'ANTIQUE METALLIC THREAD',
    description: 'Antique matte gold bullion threadwork on raw noir mulberry silk with a cascading asymmetric fluid shoulder cowl. Hand-embroidered by 3rd-generation heritage zardozi artisans.',
    hoursCrafted: 120,
    serialAllocation: 'XR-E25-01/09',
    availableSizes: ['38R', '40R', '42R', 'CUSTOM SIZING'],
    swatchColors: ['#1B1B1F', '#A38C4B'],
    featuredFabric: 'Noir Raw Mulberry Silk & Antique French Bullion Thread',
    fullSpecs: [
      'Over 120 hours of intricate dabka, nakshi, and sequin hand embroidery',
      'Integrated fluid georgette shoulder drape with micro-pleats',
      'Handmade gilded button closures along concealed placket',
      'Includes tailored tapered silk churidar and ceremonial stole'
    ]
  },
  {
    id: 'prod-04',
    title: 'Aurelia Sculptural Pleated Dress',
    house: 'western',
    categoryLabel: 'Western Couture',
    price: '$3,850 USD',
    priceNum: 3850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOMS2Hfjdk-y5geVAXx4_EUIYuxsKYyC1WcigAwIWnUcVvgvA53NgukRQgimiQ1-bF0tSWm2ChvuG3uVZ--vXI8TGmY9EOXmBGpN8uG8g6D8wvJMSB-wJrKvCsoXnbXDPYtAx_4Pr3akD4zrKURC_MDHo1_x93ObW6b-BhmCBTg5-HMC38uYs-Aj8ON6cFiQLH8W4yJvCs520t56X3OKZOg58PfWi3kFnR8SoqlnXOXTUrwMlCMpEW',
    lookbookBadge: 'RUNWAY LOOK 12',
    editionNote: 'ATELIER SILK ORGANZA',
    description: 'Hand-pleated architectural champagne organza bodice with liquid black silk faille micro-draping and internal corset structure. Worn at Paris Fashion Week Salon.',
    hoursCrafted: 84,
    serialAllocation: 'XR-W25-12/15',
    availableSizes: ['EU 34', 'EU 36', 'EU 38', 'CUSTOM MTM'],
    swatchColors: ['#1B1B1F', '#D4AF37'],
    featuredFabric: 'Champagne Silk Organza & Noir Silk Faille',
    fullSpecs: [
      'Sculptural asymmetric pleated fan architecture across shoulder',
      'Micro-knife pleating along lower flared skirt',
      'Interior grosgrain stay belt for weightless silhouette support',
      'Crafted in Paris with numbered serial authentication label'
    ]
  },
  {
    id: 'prod-05',
    title: 'Sovereign Bullion Double Trench',
    house: 'mens',
    categoryLabel: "Men's Atelier",
    price: '$4,200 USD',
    priceNum: 4200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfUuABMjqPU1Wj8laqhqUgSJWLfyw7fY5Y0NHOdaoeHLI8shlYm9Z3aMn89Iucm2OXfLOzj65KCQ931QtkH_v9K23pJXADzz_Q5McTWQoESDxQludrKMMyTvCF2DQZPgU5Y8pcfejgPSgJGBUelm0HVEEdjiy3xVR533xntAu4YXWiw5Oa2AsXdHYeGyO94HjmJg-EiVtaH2InJnq1T1MfUhn315pw9uojBDyNiEGEZfJOPdiC3kwz',
    lookbookBadge: 'BESPOKE TAILORED',
    editionNote: '1/25 VAULT RELEASE',
    description: 'Midnight heavy double-faced wool trench with hand-stitched 24k gold bullion lapels, horn buttons, and military-inspired high collar structured tailoring.',
    hoursCrafted: 96,
    serialAllocation: 'XR-M25-05/08',
    availableSizes: ['IT 46', 'IT 48', 'IT 50', 'BESPOKE FIT'],
    swatchColors: ['#121316', '#F2CA50'],
    featuredFabric: 'Heavyweight Melton Wool & 24K Gold Wire Gimp',
    fullSpecs: [
      'Intricate bullion thread foliage crest along double peak lapels',
      'Double-breasted stance with reinforced horn toggles',
      'Deep interior flask and document pockets in emerald duchess silk',
      'Storm flap with architectural sharp lines and edge top-stitching'
    ]
  },
  {
    id: 'prod-06',
    title: 'Noor-i-Zuhur Ivory Corset Lehenga',
    house: 'ethnic',
    categoryLabel: 'Modern Ethnic',
    price: '$6,400 USD',
    priceNum: 6400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD45J8bghSf6Vzt5xArjTJYcNmC3gD1x9j8fWaZyKbeXkAuWqb43m6hfwx98g7IK42EFPB6EosdEEnXUOarXS-LBLN2yw9fqknRNo6uFn0Ik2kgD2ciHHwExCRfNo1UDIVzgtx1QB9gDvdME6mvbpK7NggFpornr-Imo456qIt5UW1PXj1Sl5AeU9YikK1JTp24lOC0IvbUdm8HBn1LE1IRvs5ubSAiWltxt6Y7dJJNWhIjgjOnnY6v',
    lookbookBadge: 'HAUTE COUTURE FW25',
    editionNote: '140H HANDWORK ARCHIVE',
    description: 'Featured on the cover of Harper’s Bazaar. Architectural silk corsetry paired with fluted ivory gher, hand-embroidered antique marodi and pita zari, finished with floor-grazing tissue organza cape.',
    hoursCrafted: 140,
    serialAllocation: 'XR-E25-03/04',
    availableSizes: ['XS', 'S', 'M', 'L', 'CUSTOM FIT'],
    swatchColors: ['#F4EDE4', '#D4AF37'],
    featuredFabric: 'Pure Chanderi Silk Tissue & Antique Marodi Gold Thread',
    fullSpecs: [
      'Hourglass boned corseted blouse with gold wire honeycomb embroidery',
      '36-kali flared flared skirt with layered organza under-canvasing',
      'Detachable floor-length royal cape drape with scalloped border',
      'Archival heirloom preservation garment case included'
    ]
  },
  {
    id: 'prod-07',
    title: 'Shahzada Asymmetrical Bandhgala',
    house: 'ethnic',
    categoryLabel: 'Modern Ethnic',
    price: '$4,800 USD',
    priceNum: 4800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkyeuJwchIxsxqJONt7wxX96hQBaqpxicHZf33kwckcB846Ucz-gLUn7NSeVddNmxQKZ54fkGKAIiVXT9HW-G0PMhUPlGG5GxOzra-TcbDBvzscgtvWkTh-Kbw-TJaml-4rznPVpcBlp8UlUsj_8-pu-pKoe5Fslr0KF68HEtq9n4dWWrEwOKHNbnEY1rEYmMc-Qrb6mWxdQ6D708xn97HuX6uEzmpBqD0eEGMeAsjzFbZB6p8zVam',
    lookbookBadge: 'ROYAL HERITAGE',
    editionNote: 'MASTER ARCHIVE 2025',
    description: 'Raw mulberry silk structured jacket with antique gold zardozi motifs and an integrated dramatic cascading navy georgette shoulder drape. Completed with signature crest brooches.',
    hoursCrafted: 105,
    serialAllocation: 'XR-E25-07/11',
    availableSizes: ['38', '40', '42', '44', 'CUSTOM FIT'],
    swatchColors: ['#0A1128', '#D4AF37'],
    featuredFabric: 'Midnight Navy Raw Mulberry Silk & Micro Pearls',
    fullSpecs: [
      'High Mandarin bandhgala collar with miniature seed-pearl inlay',
      'Angrakha-style diagonal buttoning with antique engraved brass buttons',
      'Cascading pleated georgette cowl drape securely pinned with gold filigree',
      'Reinforced internal canvas shoulder pads for imperial posture'
    ]
  },
  {
    id: 'prod-08',
    title: 'Aura Sculpted Corset Blazer',
    house: 'western',
    categoryLabel: 'Western Couture',
    price: '$2,950 USD',
    priceNum: 2950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCEJ2Hj2PBw7-KtBJAE5Qgc_VlFEkqJ_nkUmyTxT3tJhAGhGV-bCwHgbiess6WJrSJdxyrQ874ZNYH5oUhiLTd0xCiLu-kQezW2LxIfGsP4mLWp0sZJWr7XSegIj7CYzQptG5hdnb76zVf4eGodAAuW9kJlvTEkiY3BSJOBXZ-mG18sP1gRkMy-mjriPJzg9hAJhyOTDyf-KI_dOyIOZMamEuhYGNXWXG1c0L92qZ7fxms15Bn65bM',
    lookbookBadge: 'NEW ARRIVAL',
    editionNote: 'CORSET REINFORCED',
    description: 'Tailored hourglass silhouette with champagne-tone hardware, structured shoulders, and high back slit. Sculpted in virgin wool crepe.',
    hoursCrafted: 64,
    serialAllocation: 'XR-W25-08/25',
    availableSizes: ['US 2', 'US 4', 'US 6', 'US 8', 'CUSTOM'],
    swatchColors: ['#1B1B1F'],
    featuredFabric: 'Italian Virgin Wool Crepe & Silk Habotai Lining',
    fullSpecs: [
      'Exaggerated pagodine architectural shoulder construction',
      'Hidden interior waist cinch ribbon with hook-and-eye clasp',
      'Champagne plated custom sculptural button hardware',
      'Dry clean only by specialized haute couture atelier'
    ]
  },
  {
    id: 'prod-09',
    title: 'Minimalist Cashmere Kimono Coat',
    house: 'mens',
    categoryLabel: "Men's Atelier",
    price: '$3,800 USD',
    priceNum: 3800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCEJ2Hj2PBw7-KtBJAE5Qgc_VlFEkqJ_nkUmyTxT3tJhAGhGV-bCwHgbiess6WJrSJdxyrQ874ZNYH5oUhiLTd0xCiLu-kQezW2LxIfGsP4mLWp0sZJWr7XSegIj7CYzQptG5hdnb76zVf4eGodAAuW9kJlvTEkiY3BSJOBXZ-mG18sP1gRkMy-mjriPJzg9hAJhyOTDyf-KI_dOyIOZMamEuhYGNXWXG1c0L92qZ7fxms15Bn65bM',
    lookbookBadge: '100% CASHMERE',
    editionNote: 'TRENDING ARCHIVE',
    description: 'Double-faced charcoal Mongolian cashmere with magnetic horn closures, architectural kimono lapels, and custom sash belt.',
    hoursCrafted: 72,
    serialAllocation: 'XR-M25-09/14',
    availableSizes: ['S', 'M', 'L', 'XL', 'MADE-TO-ORDER'],
    swatchColors: ['#1B1B1F', '#343538'],
    featuredFabric: '100% Double-Faced Grade A Mongolian Cashmere',
    fullSpecs: [
      'Unlined construction with hand-finished split-seam edges',
      'Dual hidden magnetic closures embedded within lapel facing',
      'Deep slash welt pockets with silk-lined interiors',
      'Removable wide cashmere belt with geometric tonal stitching'
    ]
  },
  {
    id: 'prod-10',
    title: 'Contemporary Chikankari Royal Kurta',
    house: 'ethnic',
    categoryLabel: 'Modern Ethnic',
    price: '$2,100 USD',
    priceNum: 2100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdXOLDtPf4I_c693h097X9a8bceaZPjZovw-t9j5-wPfj7TZ0UsJvSbiqhU62UKlHmTiZH0NpjJqo5kcGU_RD4zuDsWhXrGcdlewDtSk2CH_dBUbpEmNlPuCTEO2hl4SZkERySs9HSSHRTOh0aQpJ-zGEbmPfSIoxkw8iGD5-D54DxOazYluo5HuT5LH2oy8tO75lU6iWh28FFh-s0I5vyGNz9bgnxNbQg3afP8-VkvUU0a30WInAf',
    lookbookBadge: 'EXCLUSIVE DROP',
    editionNote: 'CHANDERI NOIR SILK',
    description: 'Subtle tone-on-tone champagne needle embroidery with geometric motifs on fluid pure raw silk, accompanied by slim trousers.',
    hoursCrafted: 58,
    serialAllocation: 'XR-E25-10/20',
    availableSizes: ['38', '40', '42', '44', 'CUSTOM SIZING'],
    swatchColors: ['#121316', '#8C7B50'],
    featuredFabric: 'Noir Chanderi Raw Silk & Hand-Spun Resham Thread',
    fullSpecs: [
      'Shadow-work bakhiya and phanda floral-geometric motifs',
      'Hand-carved mother of pearl button studs along neckline',
      'Comfortable side vents with reinforced herringbone gussets',
      'Matched with tailored straight trousers in matching noir silk'
    ]
  }
];

export const INITIAL_COMMISSIONS: CommissionOrder[] = [
  {
    id: 'COMM-8492',
    title: 'Custom Obsidian Imperial Sherwani & Cape',
    house: 'Modern Ethnic',
    commissionDate: 'Sep 14, 2026',
    status: 'embroidery_draping',
    statusLabel: 'Master Zardozi Handwork in Progress',
    progressPercent: 72,
    handworkHoursLogged: 86,
    handworkHoursTotal: 120,
    masterTailor: 'Maître Jean-Luc Girard (Paris) & Ustad Farhan (Jaipur)',
    estimatedCompletion: 'Oct 24, 2026',
    trackingVaultCode: 'XOR-VAULT-FR-9942-881',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdXOLDtPf4I_c693h097X9a8bceaZPjZovw-t9j5-wPfj7TZ0UsJvSbiqhU62UKlHmTiZH0NpjJqo5kcGU_RD4zuDsWhXrGcdlewDtSk2CH_dBUbpEmNlPuCTEO2hl4SZkERySs9HSSHRTOh0aQpJ-zGEbmPfSIoxkw8iGD5-D54DxOazYluo5HuT5LH2oy8tO75lU6iWh28FFh-s0I5vyGNz9bgnxNbQg3afP8-VkvUU0a30WInAf',
    priceNum: 5800,
    courierEscort: 'Armored White-Glove Trunk Delivery • Paris to London Mayfair',
    currentMilestoneNote: 'Shoulder bullion gold crest completed. 34 meters of antique French thread applied to left chest lapel.'
  },
  {
    id: 'COMM-8310',
    title: "L'Eclipse Architectural Evening Corset Gown",
    house: 'Western Couture',
    commissionDate: 'Aug 28, 2026',
    status: 'master_fitting',
    statusLabel: 'Second Atelier Salon Fitting Scheduled',
    progressPercent: 90,
    handworkHoursLogged: 82,
    handworkHoursTotal: 90,
    masterTailor: 'Madame Cecile Vaneau (Place Vendôme Atelier)',
    estimatedCompletion: 'Oct 12, 2026',
    trackingVaultCode: 'XOR-VAULT-FR-7712-402',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyvMmOznx2Zxvc5xSNgBt-RXQNOLBsbaSOkp2iGLTDcb_agzPV_u5YuZwrUW-Ann346RBA_2jRupBAvKs7BA16C0Xo7RLCIGOwvDOc6wnfTStpytXplgnmzw6K37dtlkDFJBojGb1MxGhNh6XsAZ0H_52q4QumrTyEr2Kk0rotRkh2I5wT0vSdm4rALt_So6cXkx2TIQa9J0Dl4CvvAuoz0MJhjoSRNCQsF6235iCugazRrC4L3Onw',
    priceNum: 4850,
    courierEscort: 'Direct Private Suite Fitting • Place Vendôme Flagship',
    currentMilestoneNote: 'Waistboning adjusted to 63.5cm per recent 3D millimeter scan. Train drape steamed and framed.'
  }
];

export const INITIAL_VAULT_CERTIFICATES: VaultCertificate[] = [
  {
    id: 'CERT-001',
    serialNumber: 'XR-W25-04/12',
    title: "L'Eclipse Draped Evening Gown (2025 Edition)",
    house: 'Western Couture',
    acquisitionDate: 'June 18, 2026',
    cryptographicHash: '0x8f2a991c4d9e03478bf11e4f9b8c0287a419eb5c328',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyvMmOznx2Zxvc5xSNgBt-RXQNOLBsbaSOkp2iGLTDcb_agzPV_u5YuZwrUW-Ann346RBA_2jRupBAvKs7BA16C0Xo7RLCIGOwvDOc6wnfTStpytXplgnmzw6K37dtlkDFJBojGb1MxGhNh6XsAZ0H_52q4QumrTyEr2Kk0rotRkh2I5wT0vSdm4rALt_So6cXkx2TIQa9J0Dl4CvvAuoz0MJhjoSRNCQsF6235iCugazRrC4L3Onw',
    masterCraftsmanSignature: 'Henri Delaunay • Directeur Technique, Paris',
    limitedEditionIndex: 'Number 12 of 25 Worldwide',
    insuranceValuation: '$6,200 USD (Appraised Archival Value)',
    archivalState: 'Climate Regulated Vault • Pristine State A+'
  },
  {
    id: 'CERT-002',
    serialNumber: 'XR-M25-02/18',
    title: 'Obsidian Velvet Smoking Tuxedo & Silk Trousers',
    house: "Men's Atelier",
    acquisitionDate: 'April 02, 2026',
    cryptographicHash: '0x3c77e2194a0f8812c3b88df302914ba998c41d1e709',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp9Fsj965RhqSjwdZ1_k99gNpXZReFD0Y73AyOF3m6XA_fBof491YoIGHRXVoPB_faO4I1C4ZRHrp0DPUBZRt0hGXGfsFIRxoqGUOWWFqpql_qNb1NyKMNv-H6j1K294RBhXYq0cL7mhj7nAu7XtKAIQ8JgS3SN6MCmIvtzqRhJcaakIZ9eQhAFsOwDKTuGnoUT8P2Ns8dG4YeIGiHY8tBiSK5jD5XBfPChEvv1jnmI07zzlCORfeO',
    masterCraftsmanSignature: 'Matteo Bellini • Master Tailor, Biella',
    limitedEditionIndex: 'Number 02 of 18 Worldwide',
    insuranceValuation: '$4,100 USD (Appraised Archival Value)',
    archivalState: 'Client Residence Suite • Seasonally Steamed'
  }
];

export const INITIAL_APPOINTMENTS: SalonAppointment[] = [
  {
    id: 'APT-1094',
    salonLocation: 'Paris Flagship (34 Rue du Faubourg / Place Vendôme)',
    date: 'Friday, Oct 16, 2026',
    timeSlot: '15:30 CET (90-Minute Private Salon Session)',
    tailorName: 'Maître Jean-Luc Girard',
    serviceType: 'Haute Couture Second Fitting & Stole Draping Calibration',
    status: 'confirmed',
    notes: 'Private champagne reception & 3D body camera scan refresh.'
  },
  {
    id: 'APT-1095',
    salonLocation: 'London Mayfair Suite (14 New Bond Street)',
    date: 'Wednesday, Nov 04, 2026',
    timeSlot: '11:00 GMT (Bespoke Capsule Review)',
    tailorName: 'Sarah Sterling, Senior Couture Stylist',
    serviceType: 'Winter 2026 Private Vault Capsule Preview & Fabric Swatch Selection',
    status: 'confirmed',
    notes: 'Preview of exclusive heavy vicuña & 24k bullion samples.'
  }
];

export const INITIAL_PATRON_PROFILE: PatronProfile = {
  titleHonorific: 'Lady',
  fullName: 'Elena Rostova-Vance',
  email: 'elena.rostova@privateoffice.eu',
  phone: '+33 6 42 98 11 00',
  tier: 'Black Obsidian Private Ledger',
  memberId: 'XOR-0842-PARIS',
  assignedConcierge: 'Philippe de Montmirail (Place Vendôme Desk)',
  primarySalonCity: 'Paris • Place Vendôme',
  currency: 'USD ($)',
  language: 'English (UK / Haute Couture)',
  measurements: {
    heightCm: 178,
    chestBustCm: 88,
    naturalWaistCm: 63.5,
    hipSeatCm: 92,
    shoulderWidthCm: 41,
    sleeveLengthCm: 61,
    neckCollarCm: 34,
    trouserInseamCm: 84,
    postureStance: 'Erect Architectural Posture • High Neck Stance',
    drapePreference: 'Dramatic Asymmetric Cowl Drape (Left Shoulder Bias)',
    last3DScanDate: 'Sep 02, 2026',
    scanLocation: 'Place Vendôme Suite 4, Paris',
    fabricPreferences: 'Grade 6A Mulberry Raw Silk, Biella 160s Wool, Heavy Silk Crepe',
    liningRequirement: '100% Breathable Anti-Static Bemberg Cupro in Noir'
  },
  residences: [
    {
      id: 'res-1',
      label: 'Primary Penthouse • Paris',
      addressLine1: '28 Avenue Montaigne, 6th Floor Penthouse',
      city: 'Paris',
      country: 'France',
      postalCode: '75008',
      gateAccessNotes: 'Private elevator code #8492. Concierge concierge@montaigne28.fr notified.',
      courierEscortInstructions: 'White-glove courier delivery only in sealed XORAC trunk box.',
      isPrimary: true
    },
    {
      id: 'res-2',
      label: 'Villa Residence • Dubai',
      addressLine1: 'Frond N, Villa 14, Palm Jumeirah',
      city: 'Dubai',
      country: 'United Arab Emirates',
      postalCode: '00000',
      gateAccessNotes: 'Security gate clearance under patron name.',
      courierEscortInstructions: 'Temperature-controlled van required due to summer climates.',
      isPrimary: false
    },
    {
      id: 'res-3',
      label: 'Yacht Berth • Monaco',
      addressLine1: 'Quai des États-Unis, Berth #19',
      city: 'Monaco',
      country: 'Monaco',
      postalCode: 'MC 98000',
      gateAccessNotes: 'Notify Captain directly via yacht communications.',
      courierEscortInstructions: 'Dispatched directly to chief stewardess on board.',
      isPrimary: false
    }
  ],
  preferences: {
    confidentialSms: true,
    secretTrunkShowInvites: true,
    frontRowRunwayAllocations: true,
    directTailorLine: true,
    privateLedgerVisibility: true
  }
};

export const INITIAL_BAG_ITEMS: BagItem[] = [
  {
    id: 'bag-item-1',
    productId: 'prod-01',
    title: "L'Eclipse Draped Evening Gown",
    house: 'Western Couture',
    priceNum: 4850,
    priceFormatted: '$4,850 USD',
    size: 'EU 38',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyvMmOznx2Zxvc5xSNgBt-RXQNOLBsbaSOkp2iGLTDcb_agzPV_u5YuZwrUW-Ann346RBA_2jRupBAvKs7BA16C0Xo7RLCIGOwvDOc6wnfTStpytXplgnmzw6K37dtlkDFJBojGb1MxGhNh6XsAZ0H_52q4QumrTyEr2Kk0rotRkh2I5wT0vSdm4rALt_So6cXkx2TIQa9J0Dl4CvvAuoz0MJhjoSRNCQsF6235iCugazRrC4L3Onw'
  },
  {
    id: 'bag-item-2',
    productId: 'prod-02',
    title: 'Obsidian Velvet Smoking Tuxedo',
    house: "Men's Atelier",
    priceNum: 3400,
    priceFormatted: '$3,400 USD',
    size: 'IT 50',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp9Fsj965RhqSjwdZ1_k99gNpXZReFD0Y73AyOF3m6XA_fBof491YoIGHRXVoPB_faO4I1C4ZRHrp0DPUBZRt0hGXGfsFIRxoqGUOWWFqpql_qNb1NyKMNv-H6j1K294RBhXYq0cL7mhj7nAu7XtKAIQ8JgS3SN6MCmIvtzqRhJcaakIZ9eQhAFsOwDKTuGnoUT8P2Ns8dG4YeIGiHY8tBiSK5jD5XBfPChEvv1jnmI07zzlCORfeO'
  }
];
