import React, { useState } from 'react';
import { PatronProfile, PatronResidence, BespokeMeasurements } from '../types';
import { INITIAL_PATRON_PROFILE } from '../data/mockData';
import {
  User,
  Sliders,
  MapPin,
  Bell,
  ShieldCheck,
  CheckCircle2,
  Save,
  Plus,
  Trash2,
  Sparkles,
  Camera
} from 'lucide-react';

interface SettingsScreenProps {
  onShowToast: (msg: string) => void;
  onOpenAppointmentModal: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  onShowToast,
  onOpenAppointmentModal
}) => {
  const [profile, setProfile] = useState<PatronProfile>(INITIAL_PATRON_PROFILE);
  const [activeTab, setActiveTab] = useState<'personal' | 'measurements' | 'residences' | 'privacy'>('personal');
  const [isSaving, setIsSaving] = useState(false);
  const [newResidenceOpen, setNewResidenceOpen] = useState(false);
  const [newResLabel, setNewResLabel] = useState('');
  const [newResAddress, setNewResAddress] = useState('');
  const [newResCity, setNewResCity] = useState('');
  const [newResCountry, setNewResCountry] = useState('');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onShowToast('Patron profile and bespoke 3D measurements saved to encrypted XORAC ledger.');
    }, 800);
  };

  const handleMeasurementChange = (field: keyof BespokeMeasurements, value: any) => {
    setProfile({
      ...profile,
      measurements: {
        ...profile.measurements,
        [field]: value
      }
    });
  };

  const handleAddResidence = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResLabel || !newResAddress) return;
    const newRes: PatronResidence = {
      id: `res-${Date.now()}`,
      label: newResLabel,
      addressLine1: newResAddress,
      city: newResCity || 'Metropolis',
      country: newResCountry || 'International',
      postalCode: '00000',
      gateAccessNotes: 'Private concierge notified upon arrival.',
      courierEscortInstructions: 'White-glove armored trunk delivery only.',
      isPrimary: false
    };
    setProfile({
      ...profile,
      residences: [...profile.residences, newRes]
    });
    setNewResLabel('');
    setNewResAddress('');
    setNewResCity('');
    setNewResCountry('');
    setNewResidenceOpen(false);
    onShowToast(`Secure delivery destination added: ${newRes.label}.`);
  };

  const handleRemoveResidence = (id: string, label: string) => {
    setProfile({
      ...profile,
      residences: profile.residences.filter((r) => r.id !== id)
    });
    onShowToast(`Removed ${label} from private residence directory.`);
  };

  return (
    <div className="w-full bg-[#121316] text-[#e3e2e6] pt-28 pb-24 px-4 sm:px-8 lg:px-14">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-[#292a2d] pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f2ca50]"></span>
              <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.28em] font-semibold">
                PATRON CLIENT ARCHITECTURE
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#e3e2e6] uppercase tracking-tight">
              Settings &amp; Bespoke Profile
            </h1>
            <p className="text-xs text-[#d0c5af] font-light mt-1">
              Manage your personal credentials, millimeter-accurate 3D body measurements, and encrypted concierge protocols.
            </p>
          </div>

          <button
            onClick={handleSaveProfile}
            disabled={isSaving}
            className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-xl flex items-center gap-2 whitespace-nowrap"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Synchronizing...' : 'Save All Changes'}</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#292a2d] overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('personal')}
            className={`pb-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'personal'
                ? 'text-[#f2ca50] border-[#f2ca50]'
                : 'text-[#99907c] border-transparent hover:text-[#e3e2e6]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>1. Identity &amp; Honorific</span>
          </button>

          <button
            onClick={() => setActiveTab('measurements')}
            className={`pb-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'measurements'
                ? 'text-[#f2ca50] border-[#f2ca50]'
                : 'text-[#99907c] border-transparent hover:text-[#e3e2e6]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>2. 3D Body Sizing &amp; Tailoring</span>
          </button>

          <button
            onClick={() => setActiveTab('residences')}
            className={`pb-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'residences'
                ? 'text-[#f2ca50] border-[#f2ca50]'
                : 'text-[#99907c] border-transparent hover:text-[#e3e2e6]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>3. Vault Delivery Residences</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'text-[#f2ca50] border-[#f2ca50]'
                : 'text-[#99907c] border-transparent hover:text-[#e3e2e6]'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>4. Concierge &amp; Trunk Shows</span>
          </button>
        </div>

        {/* TAB 1: IDENTITY & HONORIFIC */}
        {activeTab === 'personal' && (
          <form onSubmit={handleSaveProfile} className="space-y-8">
            <div className="bg-[#1b1b1f] border border-[#292a2d] p-6 lg:p-8 space-y-6">
              <div className="border-b border-[#292a2d] pb-4">
                <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
                  Patron Credentials &amp; Salon Registry
                </h3>
                <p className="text-xs text-[#d0c5af] font-light mt-0.5">
                  Official designation recorded in the Paris Place Vendôme client ledger.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Honorific Title
                  </label>
                  <select
                    value={profile.titleHonorific}
                    onChange={(e) => setProfile({ ...profile, titleHonorific: e.target.value })}
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  >
                    <option value="Lady">Lady</option>
                    <option value="Lord">Lord</option>
                    <option value="Monsieur">Monsieur</option>
                    <option value="Madame">Madame</option>
                    <option value="Baron / Baroness">Baron / Baroness</option>
                    <option value="His / Her Highness">His / Her Highness</option>
                    <option value="Patron">Patron</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    required
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Confidential Email Address
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    required
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Private Secure Telephone
                  </label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    required
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Primary Salon City
                  </label>
                  <select
                    value={profile.primarySalonCity}
                    onChange={(e) => setProfile({ ...profile, primarySalonCity: e.target.value })}
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  >
                    <option value="Paris • Place Vendôme">Paris • Place Vendôme Flagship</option>
                    <option value="London • Mayfair">London • Mayfair Suite</option>
                    <option value="New York • Madison Ave">New York • Madison Ave</option>
                    <option value="Dubai • DIFC Suite">Dubai • DIFC Private Atelier</option>
                    <option value="Milan • Via Montenapoleone">Milan • Via Montenapoleone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Preferred Currency
                  </label>
                  <select
                    value={profile.currency}
                    onChange={(e) => setProfile({ ...profile, currency: e.target.value })}
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  >
                    <option value="USD ($)">USD ($) - United States Dollar</option>
                    <option value="EUR (€)">EUR (€) - Euro</option>
                    <option value="GBP (£)">GBP (£) - British Pound</option>
                    <option value="AED (AED)">AED - UAE Dirham</option>
                    <option value="CHF (CHF)">CHF - Swiss Franc</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Couture Dossier Language
                  </label>
                  <select
                    value={profile.language}
                    onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  >
                    <option value="English (UK / Haute Couture)">English (UK / International)</option>
                    <option value="Français (Haute Couture Paris)">Français (Paris Haute Couture)</option>
                    <option value="Italiano (Sartoria)">Italiano (Sartoriale)</option>
                    <option value="Arabic (Luxury Concierge)">العربية (Luxury Concierge)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-xl"
              >
                Save Identity Changes
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: 3D BODY SIZING & MEASUREMENTS */}
        {activeTab === 'measurements' && (
          <form onSubmit={handleSaveProfile} className="space-y-8">
            <div className="bg-[#1b1b1f] border border-[#292a2d] p-6 lg:p-8 space-y-6">
              
              {/* Scan Verification Banner */}
              <div className="p-4 bg-[#121316] border border-[#d4af37]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 text-[#f2ca50] flex items-center justify-center border border-[#d4af37]/40">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#f2ca50] font-semibold uppercase tracking-wider">
                        ACTIVE 3D SILHOUETTE SCAN VERIFIED
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f2ca50]" />
                    </div>
                    <p className="text-xs text-[#d0c5af]">
                      Last calibrated: {profile.measurements.last3DScanDate} at {profile.measurements.scanLocation}. Millimeter accuracy ±0.2mm.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap"
                >
                  Recalibrate 3D Scan
                </button>
              </div>

              <div className="border-b border-[#292a2d] pb-3">
                <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
                  Anatomical Tailoring Metrics (Centimeters)
                </h3>
                <p className="text-xs text-[#d0c5af] font-light mt-0.5">
                  These measurements are fed into CAD architectural patterns and hand-canvas molds by Master Tailors.
                </p>
              </div>

              {/* 8 Metric Inputs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.measurements.heightCm}
                    onChange={(e) => handleMeasurementChange('heightCm', parseFloat(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#f2ca50] font-mono font-semibold focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">
                    Chest / Bust (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.measurements.chestBustCm}
                    onChange={(e) => handleMeasurementChange('chestBustCm', parseFloat(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#f2ca50] font-mono font-semibold focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">
                    Natural Waist (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.measurements.naturalWaistCm}
                    onChange={(e) => handleMeasurementChange('naturalWaistCm', parseFloat(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#f2ca50] font-mono font-semibold focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">
                    Hip / Seat (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.measurements.hipSeatCm}
                    onChange={(e) => handleMeasurementChange('hipSeatCm', parseFloat(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#f2ca50] font-mono font-semibold focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">
                    Shoulder Width (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.measurements.shoulderWidthCm}
                    onChange={(e) => handleMeasurementChange('shoulderWidthCm', parseFloat(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#f2ca50] font-mono font-semibold focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">
                    Sleeve Length (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.measurements.sleeveLengthCm}
                    onChange={(e) => handleMeasurementChange('sleeveLengthCm', parseFloat(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#f2ca50] font-mono font-semibold focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">
                    Neck / Collar (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.measurements.neckCollarCm}
                    onChange={(e) => handleMeasurementChange('neckCollarCm', parseFloat(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#f2ca50] font-mono font-semibold focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">
                    Trouser Inseam (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.measurements.trouserInseamCm}
                    onChange={(e) => handleMeasurementChange('trouserInseamCm', parseFloat(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#f2ca50] font-mono font-semibold focus:outline-none"
                  />
                </div>
              </div>

              {/* Draping & Stance Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#292a2d]">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Architectural Posture &amp; Shoulder Stance
                  </label>
                  <input
                    type="text"
                    value={profile.measurements.postureStance}
                    onChange={(e) => handleMeasurementChange('postureStance', e.target.value)}
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Draping Bias &amp; Silhouette Movement
                  </label>
                  <input
                    type="text"
                    value={profile.measurements.drapePreference}
                    onChange={(e) => handleMeasurementChange('drapePreference', e.target.value)}
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Preferred Luxury Natural Fibers
                  </label>
                  <input
                    type="text"
                    value={profile.measurements.fabricPreferences}
                    onChange={(e) => handleMeasurementChange('fabricPreferences', e.target.value)}
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Interior Lining &amp; Allergy Requirement
                  </label>
                  <input
                    type="text"
                    value={profile.measurements.liningRequirement}
                    onChange={(e) => handleMeasurementChange('liningRequirement', e.target.value)}
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-xl"
              >
                Save 3D Measurements
              </button>
            </div>
          </form>
        )}

        {/* TAB 3: RESIDENCES & YACHTS */}
        {activeTab === 'residences' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold block mb-1">
                  ARMORED DISPATCH DESTINATIONS
                </span>
                <h3 className="font-serif text-2xl text-[#e3e2e6] uppercase">
                  Private Residences, Penthouses &amp; Yachts
                </h3>
                <p className="text-xs text-[#d0c5af] font-light mt-1">
                  Climate-regulated XORAC trunks are dispatched only to verified coordinates with direct security handoff.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setNewResidenceOpen(!newResidenceOpen)}
                className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all flex items-center gap-2 whitespace-nowrap shadow-lg"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Residence / Yacht</span>
              </button>
            </div>

            {/* Modal/Form to Add New Residence */}
            {newResidenceOpen && (
              <form onSubmit={handleAddResidence} className="bg-[#1b1b1f] border border-[#d4af37]/40 p-6 space-y-4">
                <h4 className="font-serif text-lg text-[#e3e2e6] uppercase">Register New Delivery Address</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">Location Label</label>
                    <input
                      type="text"
                      placeholder="e.g. London Mayfair Townhouse"
                      value={newResLabel}
                      onChange={(e) => setNewResLabel(e.target.value)}
                      required
                      className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">Street Address</label>
                    <input
                      type="text"
                      placeholder="e.g. 14 South Street, Mayfair"
                      value={newResAddress}
                      onChange={(e) => setNewResAddress(e.target.value)}
                      required
                      className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">City</label>
                    <input
                      type="text"
                      placeholder="e.g. London"
                      value={newResCity}
                      onChange={(e) => setNewResCity(e.target.value)}
                      className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1">Country</label>
                    <input
                      type="text"
                      placeholder="e.g. United Kingdom"
                      value={newResCountry}
                      onChange={(e) => setNewResCountry(e.target.value)}
                      className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setNewResidenceOpen(false)}
                    className="px-4 py-2 bg-[#292a2d] text-[#e3e2e6] text-[10px] uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#f2ca50] text-[#3c2f00] text-[10px] uppercase tracking-wider font-semibold hover:bg-[#ffe088]"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            )}

            {/* List of Residences */}
            <div className="space-y-4">
              {profile.residences.map((res) => (
                <div
                  key={res.id}
                  className="bg-[#1b1b1f] border border-[#292a2d] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-lg text-[#e3e2e6] uppercase">
                        {res.label}
                      </span>
                      {res.isPrimary && (
                        <span className="px-2 py-0.5 bg-[#d4af37]/20 text-[#f2ca50] text-[9px] uppercase tracking-widest font-semibold border border-[#d4af37]/40">
                          PRIMARY VAULT
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#d0c5af]">
                      {res.addressLine1}, {res.city}, {res.country}
                    </p>
                    <div className="text-[11px] text-[#99907c] space-y-0.5 pt-1">
                      <p>Security clearance: {res.gateAccessNotes}</p>
                      <p className="text-[#f2ca50]">Courier instructions: {res.courierEscortInstructions}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onShowToast(`Verified delivery protocols updated for ${res.label}.`)}
                      className="px-4 py-2 bg-[#121316] text-[#e3e2e6] hover:text-[#f2ca50] text-[10px] uppercase tracking-wider border border-[#292a2d]"
                    >
                      Verify Access
                    </button>
                    {!res.isPrimary && (
                      <button
                        onClick={() => handleRemoveResidence(res.id, res.label)}
                        className="p-2 text-[#99907c] hover:text-[#ffb4ab] transition-colors"
                        title="Remove address"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CONCIERGE & TRUNK SHOWS */}
        {activeTab === 'privacy' && (
          <form onSubmit={handleSaveProfile} className="space-y-8">
            <div className="bg-[#1b1b1f] border border-[#292a2d] p-6 lg:p-8 space-y-6">
              <div className="border-b border-[#292a2d] pb-4">
                <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
                  Confidential Communications &amp; Trunk Shows
                </h3>
                <p className="text-xs text-[#d0c5af] font-light mt-0.5">
                  Configure access to confidential showroom showings, secret capsule releases, and direct communications.
                </p>
              </div>

              <div className="space-y-5">
                <label className="flex items-start gap-4 p-4 bg-[#121316] border border-[#292a2d] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.preferences.confidentialSms}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        preferences: { ...profile.preferences, confidentialSms: e.target.checked }
                      })
                    }
                    className="mt-1 accent-[#d4af37] w-4 h-4"
                  />
                  <div>
                    <span className="text-xs text-[#e3e2e6] font-semibold uppercase tracking-wider block">
                      Confidential SMS Dispatch &amp; Armored Transit Tracking
                    </span>
                    <span className="text-[11px] text-[#99907c]">
                      Receive encrypted real-time SMS status when your bespoke trunk departs Place Vendôme.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-4 p-4 bg-[#121316] border border-[#292a2d] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.preferences.secretTrunkShowInvites}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        preferences: { ...profile.preferences, secretTrunkShowInvites: e.target.checked }
                      })
                    }
                    className="mt-1 accent-[#d4af37] w-4 h-4"
                  />
                  <div>
                    <span className="text-xs text-[#e3e2e6] font-semibold uppercase tracking-wider block">
                      Secret Place Vendôme &amp; Mayfair Trunk Show Invitations
                    </span>
                    <span className="text-[11px] text-[#99907c]">
                      Priority admittance to confidential salon gatherings prior to Paris Couture Week debuts.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-4 p-4 bg-[#121316] border border-[#292a2d] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.preferences.frontRowRunwayAllocations}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        preferences: { ...profile.preferences, frontRowRunwayAllocations: e.target.checked }
                      })
                    }
                    className="mt-1 accent-[#d4af37] w-4 h-4"
                  />
                  <div>
                    <span className="text-xs text-[#e3e2e6] font-semibold uppercase tracking-wider block">
                      Runway Front-Row Seat Allocations &amp; Gala Access
                    </span>
                    <span className="text-[11px] text-[#99907c]">
                      Guaranteed invitation to XORAC official Paris Haute Couture runway presentations.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-4 p-4 bg-[#121316] border border-[#292a2d] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.preferences.directTailorLine}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        preferences: { ...profile.preferences, directTailorLine: e.target.checked }
                      })
                    }
                    className="mt-1 accent-[#d4af37] w-4 h-4"
                  />
                  <div>
                    <span className="text-xs text-[#e3e2e6] font-semibold uppercase tracking-wider block">
                      Direct Encrypted WhatsApp Line to Assigned Master Tailor
                    </span>
                    <span className="text-[11px] text-[#99907c]">
                      Instant access to Maître Jean-Luc Girard for alteration inquiries and fabric consultation.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-xl"
              >
                Save Protocol Preferences
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
