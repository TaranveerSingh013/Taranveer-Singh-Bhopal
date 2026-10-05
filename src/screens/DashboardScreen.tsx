import React, { useState } from 'react';
import { CommissionOrder, VaultCertificate, SalonAppointment, ProductItem } from '../types';
import {
  INITIAL_COMMISSIONS,
  INITIAL_VAULT_CERTIFICATES,
  INITIAL_APPOINTMENTS,
  PRODUCTS
} from '../data/mockData';
import {
  Crown,
  ShieldCheck,
  Calendar,
  Clock,
  Sparkles,
  Truck,
  CheckCircle2,
  Sliders,
  ExternalLink,
  Download,
  ShoppingBag,
  Heart,
  ChevronRight,
  FileCheck
} from 'lucide-react';

interface DashboardScreenProps {
  onNavigateToSettings: () => void;
  onOpenAppointmentModal: () => void;
  onQuickView: (product: ProductItem) => void;
  onShowToast: (msg: string) => void;
  wishlistedIds: Set<string>;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  onNavigateToSettings,
  onOpenAppointmentModal,
  onQuickView,
  onShowToast,
  wishlistedIds
}) => {
  const [activeTab, setActiveTab] = useState<'commissions' | 'vault' | 'fittings' | 'wishlist'>('commissions');
  const [commissions] = useState<CommissionOrder[]>(INITIAL_COMMISSIONS);
  const [certificates] = useState<VaultCertificate[]>(INITIAL_VAULT_CERTIFICATES);
  const [appointments, setAppointments] = useState<SalonAppointment[]>(INITIAL_APPOINTMENTS);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistedIds.has(p.id));

  const handleDownloadCert = (certTitle: string, serial: string) => {
    onShowToast(`Cryptographic Certificate for ${certTitle} (${serial}) downloaded. Vault verification authenticated.`);
  };

  const handleRequestRefresh = (title: string) => {
    onShowToast(`Archival refresh and steam preservation requested for ${title}. White-glove courier will collect from your primary residence.`);
  };

  return (
    <div className="w-full bg-[#121316] text-[#e3e2e6] pt-28 pb-24 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* PATRON BANNER HEADER */}
        <div className="relative bg-[#1b1b1f] border border-[#292a2d] p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#d4af37]/15 text-[#f2ca50] border border-[#d4af37]/40 text-[9px] uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" />
                  <span>BLACK OBSIDIAN PRIVATE LEDGER</span>
                </span>
                <span className="text-[10px] text-[#99907c] font-mono tracking-widest">
                  MEMBER #XOR-0842-PARIS
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#e3e2e6] tracking-tight">
                Lady Elena Rostova-Vance
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#d0c5af]">
                <div>
                  <span className="text-[#99907c] uppercase text-[10px] tracking-wider block">Assigned Concierge</span>
                  <span className="font-medium text-[#e3e2e6]">Philippe de Montmirail (Place Vendôme Desk)</span>
                </div>
                <div>
                  <span className="text-[#99907c] uppercase text-[10px] tracking-wider block">Primary Salon City</span>
                  <span className="font-medium text-[#e3e2e6]">Paris • Place Vendôme Flagship</span>
                </div>
                <div>
                  <span className="text-[#99907c] uppercase text-[10px] tracking-wider block">3D Silhouette Scan</span>
                  <span className="text-[#f2ca50] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified (Sep 2026)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Header Direct Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Salon Fitting</span>
              </button>
              <button
                onClick={onNavigateToSettings}
                className="bg-[#121316] text-[#e3e2e6] hover:text-[#f2ca50] border border-[#292a2d] px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Manage 3D Profile</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#292a2d]">
            <div className="p-3 bg-[#121316] border border-[#292a2d]">
              <span className="text-[9px] uppercase tracking-widest text-[#99907c] block mb-1">
                Active Commissions
              </span>
              <span className="font-serif text-2xl text-[#f2ca50]">2 Masterpieces</span>
              <span className="text-[10px] text-[#d0c5af] block mt-0.5">86h Handwork Logged</span>
            </div>
            <div className="p-3 bg-[#121316] border border-[#292a2d]">
              <span className="text-[9px] uppercase tracking-widest text-[#99907c] block mb-1">
                Owned Vault Relics
              </span>
              <span className="font-serif text-2xl text-[#e3e2e6]">2 Certified</span>
              <span className="text-[10px] text-[#d0c5af] block mt-0.5">Cryptographic Provenance</span>
            </div>
            <div className="p-3 bg-[#121316] border border-[#292a2d]">
              <span className="text-[9px] uppercase tracking-widest text-[#99907c] block mb-1">
                Salon Fittings
              </span>
              <span className="font-serif text-2xl text-[#e3e2e6]">2 Scheduled</span>
              <span className="text-[10px] text-[#d0c5af] block mt-0.5">Place Vendôme &amp; Mayfair</span>
            </div>
            <div className="p-3 bg-[#121316] border border-[#292a2d]">
              <span className="text-[9px] uppercase tracking-widest text-[#99907c] block mb-1">
                Capsule Priority
              </span>
              <span className="font-serif text-2xl text-[#f2ca50]">Tier 1 (Instant)</span>
              <span className="text-[10px] text-[#d0c5af] block mt-0.5">24h Pre-Drop Allocations</span>
            </div>
          </div>
        </div>

        {/* DASHBOARD TABBED NAVIGATION */}
        <div className="flex border-b border-[#292a2d] overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('commissions')}
            className={`pb-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'commissions'
                ? 'text-[#f2ca50] border-[#f2ca50]'
                : 'text-[#99907c] border-transparent hover:text-[#e3e2e6]'
            }`}
          >
            1. Active Commissions &amp; Tracker ({commissions.length})
          </button>
          <button
            onClick={() => setActiveTab('vault')}
            className={`pb-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'vault'
                ? 'text-[#f2ca50] border-[#f2ca50]'
                : 'text-[#99907c] border-transparent hover:text-[#e3e2e6]'
            }`}
          >
            2. Digital Vault Certificates ({certificates.length})
          </button>
          <button
            onClick={() => setActiveTab('fittings')}
            className={`pb-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'fittings'
                ? 'text-[#f2ca50] border-[#f2ca50]'
                : 'text-[#99907c] border-transparent hover:text-[#e3e2e6]'
            }`}
          >
            3. Scheduled Salon Fittings ({appointments.length})
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`pb-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'wishlist'
                ? 'text-[#f2ca50] border-[#f2ca50]'
                : 'text-[#99907c] border-transparent hover:text-[#e3e2e6]'
            }`}
          >
            4. Private Wishlist ({wishlistedProducts.length})
          </button>
        </div>

        {/* TAB 1: ACTIVE COMMISSIONS */}
        {activeTab === 'commissions' && (
          <div className="space-y-8">
            <div>
              <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold block mb-1">
                BESPOKE HANDWORK MONITOR
              </span>
              <h2 className="font-serif text-2xl text-[#e3e2e6] uppercase">
                Active Atelier Commissions &amp; Milestone Tracking
              </h2>
              <p className="text-xs text-[#d0c5af] font-light mt-1">
                Each garment undergoes rigorous five-tier couture milestones with live hours logged by master artisans.
              </p>
            </div>

            <div className="space-y-6">
              {commissions.map((comm) => (
                <div
                  key={comm.id}
                  className="bg-[#1b1b1f] border border-[#292a2d] p-6 lg:p-8 space-y-6"
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[#292a2d] pb-5">
                    <div className="flex gap-4 items-center">
                      <img
                        alt={comm.title}
                        src={comm.image}
                        className="w-16 h-20 object-cover object-top border border-[#292a2d]"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold">
                            {comm.house}
                          </span>
                          <span className="text-[#99907c] text-[10px] font-mono">
                            {comm.trackingVaultCode}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl text-[#e3e2e6] uppercase mt-0.5">
                          {comm.title}
                        </h3>
                        <p className="text-xs text-[#99907c] mt-0.5">
                          Master Artisans: <span className="text-[#d0c5af]">{comm.masterTailor}</span>
                        </p>
                      </div>
                    </div>

                    <div className="text-left lg:text-right">
                      <span className="text-[10px] uppercase text-[#99907c] block">
                        Estimated Vault Dispatch
                      </span>
                      <span className="font-serif text-lg text-[#f2ca50] font-semibold">
                        {comm.estimatedCompletion}
                      </span>
                      <span className="text-[10px] text-[#d0c5af] block mt-0.5">
                        {comm.courierEscort}
                      </span>
                    </div>
                  </div>

                  {/* 5-Step Haute Couture Progress Tracker */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#d0c5af] font-medium flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#f2ca50]" />
                        <span>Current Phase: <strong className="text-[#f2ca50]">{comm.statusLabel}</strong></span>
                      </span>
                      <span className="text-[#f2ca50] font-mono font-semibold">
                        {comm.handworkHoursLogged} of {comm.handworkHoursTotal} hours logged ({comm.progressPercent}%)
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#121316] h-2.5 border border-[#292a2d] overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#d4af37] to-[#f2ca50] h-full transition-all duration-500"
                        style={{ width: `${comm.progressPercent}%` }}
                      ></div>
                    </div>

                    {/* 5 Milestone Nodes */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 text-[9px] uppercase tracking-wider text-[#99907c]">
                      <div className="flex items-center gap-1.5 text-[#f2ca50]">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>1. 3D Scan &amp; Cloth Cut</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#f2ca50]">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>2. Floating Canvas</span>
                      </div>
                      <div className={`flex items-center gap-1.5 ${comm.progressPercent >= 70 ? 'text-[#f2ca50] font-bold' : ''}`}>
                        <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>3. Bullion &amp; Drape</span>
                      </div>
                      <div className={`flex items-center gap-1.5 ${comm.progressPercent >= 90 ? 'text-[#f2ca50]' : ''}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>4. Master Fitting</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>5. Armored Courier</span>
                      </div>
                    </div>
                  </div>

                  {/* Milestone Note Callout */}
                  <div className="p-3.5 bg-[#121316] border-l-2 border-[#f2ca50] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <p className="text-xs text-[#d0c5af] font-light">
                      <strong className="text-[#e3e2e6] font-medium uppercase text-[10px] tracking-wider block sm:inline mr-2">
                        Latest Atelier Note:
                      </strong>
                      {comm.currentMilestoneNote}
                    </p>
                    <button
                      onClick={() => onShowToast(`Direct secure chat opened with ${comm.masterTailor}.`)}
                      className="text-[10px] uppercase tracking-[0.18em] text-[#f2ca50] hover:underline whitespace-nowrap font-medium"
                    >
                      Message Tailor Desk
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: DIGITAL VAULT CERTIFICATES */}
        {activeTab === 'vault' && (
          <div className="space-y-8">
            <div>
              <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold block mb-1">
                PROVENANCE &amp; ARCHIVAL REGISTRY
              </span>
              <h2 className="font-serif text-2xl text-[#e3e2e6] uppercase">
                Digital Vault &amp; Authenticity Certificates
              </h2>
              <p className="text-xs text-[#d0c5af] font-light mt-1">
                Every XORAC garment is cryptographically certified with its individual serial allocation, archival appraisal, and craft signatures.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#1b1b1f] border border-[#292a2d] p-6 lg:p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <ShieldCheck className="w-4 h-4 text-[#f2ca50]" />
                          <span className="text-[10px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold">
                            AUTHENTIC PROVENANCE SEAL
                          </span>
                        </div>
                        <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
                          {cert.title}
                        </h3>
                        <span className="text-xs text-[#99907c] block mt-0.5">
                          Acquired on {cert.acquisitionDate} • {cert.house}
                        </span>
                      </div>
                      <img
                        alt={cert.title}
                        src={cert.image}
                        className="w-16 h-20 object-cover object-top border border-[#292a2d] flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-3.5 bg-[#121316] border border-[#292a2d] space-y-2 text-xs">
                      <div className="flex justify-between text-[#99907c]">
                        <span className="uppercase text-[9px] tracking-wider">Numbered Serial</span>
                        <span className="font-mono text-[#f2ca50] font-semibold">{cert.serialNumber}</span>
                      </div>
                      <div className="flex justify-between text-[#99907c]">
                        <span className="uppercase text-[9px] tracking-wider">Edition Index</span>
                        <span className="text-[#e3e2e6]">{cert.limitedEditionIndex}</span>
                      </div>
                      <div className="flex justify-between text-[#99907c]">
                        <span className="uppercase text-[9px] tracking-wider">Lead Artisan Seal</span>
                        <span className="text-[#e3e2e6] italic">{cert.masterCraftsmanSignature}</span>
                      </div>
                      <div className="flex justify-between text-[#99907c]">
                        <span className="uppercase text-[9px] tracking-wider">Current Insurance Value</span>
                        <span className="text-[#f2ca50] font-semibold">{cert.insuranceValuation}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest text-[#99907c] block">
                        Cryptographic Verification Hash
                      </span>
                      <div className="p-2 bg-[#0d0e11] font-mono text-[10px] text-[#d0c5af] break-all border border-[#292a2d]">
                        {cert.cryptographicHash}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#292a2d] flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleDownloadCert(cert.title, cert.serialNumber)}
                      className="flex-1 py-3 bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] text-[10px] uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF Certificate</span>
                    </button>
                    <button
                      onClick={() => handleRequestRefresh(cert.title)}
                      className="flex-1 py-3 bg-[#121316] text-[#e3e2e6] hover:text-[#f2ca50] text-[10px] uppercase tracking-[0.2em] transition-colors border border-[#292a2d]"
                    >
                      Request Steam Refresh
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SCHEDULED SALON FITTINGS */}
        {activeTab === 'fittings' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold block mb-1">
                  PRIVATE SALON RESERVATIONS
                </span>
                <h2 className="font-serif text-2xl text-[#e3e2e6] uppercase">
                  Upcoming Bespoke Atelier Fittings
                </h2>
                <p className="text-xs text-[#d0c5af] font-light mt-1">
                  Enjoy private salon sessions with champagne reception, 3D scan refresh, and creative director consultations.
                </p>
              </div>
              <button
                onClick={onOpenAppointmentModal}
                className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-lg"
              >
                + Schedule New Session
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="bg-[#1b1b1f] border border-[#292a2d] p-6 lg:p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold bg-[#0d0e11] px-2.5 py-1 border border-[#d4af37]/30">
                        CONFIRMED RESERVATION
                      </span>
                      <span className="text-xs text-[#99907c] font-mono">{apt.id}</span>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
                        {apt.serviceType}
                      </h3>
                      <p className="text-xs text-[#f2ca50] mt-1 font-medium">
                        {apt.salonLocation}
                      </p>
                    </div>

                    <div className="p-4 bg-[#121316] border border-[#292a2d] space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-[#e3e2e6]">
                        <Calendar className="w-4 h-4 text-[#f2ca50]" />
                        <span>{apt.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#e3e2e6]">
                        <Clock className="w-4 h-4 text-[#f2ca50]" />
                        <span>{apt.timeSlot}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#99907c]">
                        <span>Master Tailor: <strong className="text-[#d0c5af]">{apt.tailorName}</strong></span>
                      </div>
                    </div>

                    <p className="text-xs text-[#d0c5af] font-light italic">
                      Special note: "{apt.notes}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#292a2d] flex gap-3">
                    <button
                      onClick={() => onShowToast(`Calendar invitation dispatched to your private office calendar.`)}
                      className="flex-1 py-3 bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] text-[10px] uppercase tracking-[0.2em] font-semibold transition-all"
                    >
                      Sync to Calendar
                    </button>
                    <button
                      onClick={() => onShowToast(`Reschedule request forwarded to Place Vendôme Concierge Desk.`)}
                      className="flex-1 py-3 bg-[#121316] text-[#e3e2e6] hover:text-[#f2ca50] text-[10px] uppercase tracking-[0.2em] transition-colors border border-[#292a2d]"
                    >
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PRIVATE WISHLIST */}
        {activeTab === 'wishlist' && (
          <div className="space-y-8">
            <div>
              <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold block mb-1">
                CURATED ARCHIVE SELECTION
              </span>
              <h2 className="font-serif text-2xl text-[#e3e2e6] uppercase">
                Patron Private Wishlist ({wishlistedProducts.length})
              </h2>
              <p className="text-xs text-[#d0c5af] font-light mt-1">
                Pieces preserved in your personal high-fashion ledger for private salon preview or one-click commission.
              </p>
            </div>

            {wishlistedProducts.length === 0 ? (
              <div className="py-20 text-center space-y-4 bg-[#1b1b1f] border border-[#292a2d] p-8">
                <Heart className="w-10 h-10 text-[#99907c] mx-auto opacity-50" />
                <h4 className="font-serif text-lg text-[#e3e2e6] uppercase">
                  No Pieces in Personal Wishlist
                </h4>
                <p className="text-xs text-[#99907c] max-w-sm mx-auto">
                  Click the heart icon on any runway lookbook masterpiece to preserve it in your digital vault.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-[#1b1b1f] border border-[#292a2d] overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative aspect-[3/4] bg-[#0d0e11] overflow-hidden">
                      <img
                        alt={prod.title}
                        src={prod.image}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0d0e11]/85 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#f2ca50]">
                        {prod.lookbookBadge}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex justify-between items-center text-[10px] text-[#99907c] uppercase tracking-widest mb-1">
                          <span>{prod.categoryLabel}</span>
                          <span className="text-[#f2ca50] font-semibold">{prod.price}</span>
                        </div>
                        <h4 className="font-serif text-lg text-[#e3e2e6] uppercase mb-2">
                          {prod.title}
                        </h4>
                        <p className="text-xs text-[#d0c5af] font-light line-clamp-2 mb-4">
                          {prod.description}
                        </p>
                      </div>

                      <button
                        onClick={() => onQuickView(prod)}
                        className="w-full py-3 bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] text-[10px] uppercase tracking-[0.2em] font-semibold transition-all"
                      >
                        VIEW FULL SPECIFICATION
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
