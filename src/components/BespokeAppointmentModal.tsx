import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Sparkles, Check } from 'lucide-react';

interface BespokeAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const BespokeAppointmentModal: React.FC<BespokeAppointmentModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [patronName, setPatronName] = useState('Lady Elena Rostova');
  const [contactInfo, setContactInfo] = useState('elena.rostova@privateoffice.eu');
  const [salonCity, setSalonCity] = useState('Paris (34 Rue du Faubourg / Place Vendôme)');
  const [preferredDate, setPreferredDate] = useState('2026-10-20');
  const [timeSlot, setTimeSlot] = useState('14:30 CET (90-Minute Private Salon Session)');
  const [commissionType, setCommissionType] = useState('Western Haute Couture Evening Gown');
  const [specialNotes, setSpecialNotes] = useState('Interested in liquid gold draping with 3D scan re-calibration.');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`Bespoke appointment reserved for ${patronName} at ${salonCity} on ${preferredDate}. Atelier Concierge dispatched.`);
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0e11]/85 backdrop-blur-xl flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-xl bg-[#1b1b1f] p-7 md:p-10 shadow-2xl border border-[#292a2d] z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#99907c] hover:text-[#f2ca50] transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-6">
          <div className="flex items-center gap-2 text-[#f2ca50] text-[9px] uppercase tracking-[0.28em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SALON CONSULTATION &amp; 3D FITTING</span>
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl text-[#e3e2e6] uppercase tracking-tight">
            Book Bespoke Atelier Fitting
          </h3>
          <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
            Reserve an exclusive 90-minute fitting session with our Parisian Master Tailor at Place Vendôme, or arrange private 3D silhouette capture.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 bg-[#121316] border border-[#f2ca50] p-6">
            <div className="w-12 h-12 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg uppercase text-[#f2ca50]">Appointment Confirmed</h4>
            <p className="text-xs text-[#d0c5af] max-w-sm mx-auto">
              The Place Vendôme Private Salon Concierge will contact you within 2 hours to confirm private security clearances.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                  Patron Full Name / Title
                </label>
                <input
                  type="text"
                  value={patronName}
                  onChange={(e) => setPatronName(e.target.value)}
                  required
                  placeholder="LADY / LORD / PATRON"
                  className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                  Confidential Contact Email / Phone
                </label>
                <input
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  required
                  placeholder="client@privateoffice.eu or +33..."
                  className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                Atelier Salon Metropolis
              </label>
              <select
                value={salonCity}
                onChange={(e) => setSalonCity(e.target.value)}
                className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
              >
                <option value="Paris (34 Rue du Faubourg / Place Vendôme)">Paris • Place Vendôme Flagship (34 Rue du Faubourg)</option>
                <option value="London Mayfair (14 New Bond Street)">London • Mayfair Suite (14 New Bond Street)</option>
                <option value="New York (720 Madison Avenue)">New York • Madison Avenue Salon (720 Madison)</option>
                <option value="Dubai (DIFC Gate Precinct 4)">Dubai • DIFC Private Atelier Suite</option>
                <option value="Milan (Via Montenapoleone 8)">Milan • Via Montenapoleone Atelier</option>
                <option value="Virtual 3D Silhouette Fitting">Virtual Encrypted 3D Silhouette Fitting (Online)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  required
                  className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                >
                  <option value="11:00 CET (Morning Salon Fitting)">11:00 CET (Morning Salon Session)</option>
                  <option value="14:30 CET (90-Minute Private Salon Session)">14:30 CET (Afternoon Private Salon)</option>
                  <option value="17:00 CET (Evening Champagne Fitting)">17:00 CET (Evening Champagne Fitting)</option>
                  <option value="Private Suite / Yacht Visit Requested">Private Suite / Yacht Visit Requested</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                Commission Category / Silhouette Interest
              </label>
              <select
                value={commissionType}
                onChange={(e) => setCommissionType(e.target.value)}
                className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
              >
                <option value="Western Haute Couture Evening Gown">Western Haute Couture Evening Gown (Corsetry &amp; Liquid Satin)</option>
                <option value="Bespoke Men's Smoking Tuxedo & Tailoring">Bespoke Men's Smoking Tuxedo &amp; Tailoring (Super 160s / Velvet)</option>
                <option value="Modern Royal Sherwani & Zardozi Bullion">Modern Royal Sherwani &amp; Zardozi Bullion Embroidery</option>
                <option value="Haute Bridal / Red Carpet Commission">Haute Bridal / Red Carpet Commission</option>
                <option value="Archival Vault Piece Custom Sizing">Archival Vault Piece Custom Sizing</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                Special Tailoring Notes &amp; Measurements Details
              </label>
              <textarea
                rows={2}
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder="Mention silhouette preferences, event date, fabric sensitives, or custom requirements..."
                className="w-full bg-[#121316] border border-[#292a2d] px-3 py-2 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] text-[11px] uppercase tracking-[0.25em] font-semibold transition-all shadow-xl mt-2"
            >
              CONFIRM PRIVATE ATELIER APPOINTMENT
            </button>

            <p className="text-[9px] text-center text-[#99907c] tracking-wider uppercase">
              CONFIDENTIAL • STRICT NON-DISCLOSURE • INVITATION VIA ATELIER CONCIERGE
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
