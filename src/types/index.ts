export type ScreenView = 'landing' | 'dashboard' | 'settings' | 'contact';

export type HouseCategory = 'western' | 'mens' | 'ethnic' | 'vault';

export interface ProductItem {
  id: string;
  title: string;
  house: 'western' | 'mens' | 'ethnic';
  categoryLabel: string;
  price: string;
  priceNum: number;
  image: string;
  lookbookBadge: string;
  editionNote: string;
  description: string;
  hoursCrafted: number;
  serialAllocation: string;
  availableSizes: string[];
  swatchColors: string[];
  featuredFabric: string;
  fullSpecs?: string[];
}

export interface BagItem {
  id: string;
  productId: string;
  title: string;
  house: string;
  priceNum: number;
  priceFormatted: string;
  size: string;
  quantity: number;
  image: string;
}

export interface CommissionOrder {
  id: string;
  title: string;
  house: string;
  commissionDate: string;
  status: 'pattern_scanned' | 'hand_structuring' | 'embroidery_draping' | 'master_fitting' | 'vault_transit' | 'delivered';
  statusLabel: string;
  progressPercent: number;
  handworkHoursLogged: number;
  handworkHoursTotal: number;
  masterTailor: string;
  estimatedCompletion: string;
  trackingVaultCode: string;
  image: string;
  priceNum: number;
  courierEscort: string;
  currentMilestoneNote: string;
}

export interface VaultCertificate {
  id: string;
  serialNumber: string;
  title: string;
  house: string;
  acquisitionDate: string;
  cryptographicHash: string;
  image: string;
  masterCraftsmanSignature: string;
  limitedEditionIndex: string;
  insuranceValuation: string;
  archivalState: string;
}

export interface SalonAppointment {
  id: string;
  salonLocation: string;
  date: string;
  timeSlot: string;
  tailorName: string;
  serviceType: string;
  status: 'confirmed' | 'pending_verification' | 'completed';
  notes: string;
}

export interface BespokeMeasurements {
  heightCm: number;
  chestBustCm: number;
  naturalWaistCm: number;
  hipSeatCm: number;
  shoulderWidthCm: number;
  sleeveLengthCm: number;
  neckCollarCm: number;
  trouserInseamCm: number;
  postureStance: string;
  drapePreference: string;
  last3DScanDate: string;
  scanLocation: string;
  fabricPreferences: string;
  liningRequirement: string;
}

export interface PatronResidence {
  id: string;
  label: string;
  addressLine1: string;
  city: string;
  country: string;
  postalCode: string;
  gateAccessNotes: string;
  courierEscortInstructions: string;
  isPrimary: boolean;
}

export interface PatronProfile {
  titleHonorific: string;
  fullName: string;
  email: string;
  phone: string;
  tier: string;
  memberId: string;
  assignedConcierge: string;
  primarySalonCity: string;
  currency: string;
  language: string;
  measurements: BespokeMeasurements;
  residences: PatronResidence[];
  preferences: {
    confidentialSms: boolean;
    secretTrunkShowInvites: boolean;
    frontRowRunwayAllocations: boolean;
    directTailorLine: boolean;
    privateLedgerVisibility: boolean;
  };
}
