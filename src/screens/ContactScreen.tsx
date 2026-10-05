import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ShieldCheck,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  HelpCircle,
  FileUp
} from 'lucide-react';

interface ContactScreenProps {
  onShowToast: (msg: string) => void;
  onOpenAppointmentModal: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  onShowToast,
  onOpenAppointmentModal
}) => {
  const [honorific, setHonorific] = useState('Lady');
  const [fullName, setFullName] = useState('Elena Rostova');
  const [email, setEmail] = useState('elena.rostova@privateoffice.eu');
  const [phone, setPhone] = useState('+33 6 42 98 11 00');
  const [salonCity, setSalonCity] = useState('Paris (34 Rue du Faubourg / Place Vendôme)');
  const [inquiryType, setInquiryType] = useState('Bespoke Gala / Wedding Commission');
  const [targetDate, setTargetDate] = useState('2026-11-20');
  const [visionMessage, setVisionMessage] = useState(
    'Requesting private consultation for an architectural liquid satin evening gown with antique bullion embroidery for the Autumn Opera Gala.'
  );
  const [attachedFiles, setAttachedFiles] = useState<string[]>(['lookbook_inspiration_vendome.pdf']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast(`Concierge inquiry submitted. Assigned desk officer Philippe de Montmirail will respond within 2 hours.`);
    }, 1000);
  };

  const handleAttachSim = () => {
    const newDoc = `editorial_moodboard_${Date.now().toString().slice(-4)}.jpg`;
    setAttachedFiles([...attachedFiles, newDoc]);
    onShowToast(`Attached moodboard asset: ${newDoc}`);
  };

  return (
    <div className="w-full bg-[#121316] text-[#e3e2e6] pt-28 pb-24 px-4 sm:px-8 lg:px-14">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#1b1b1f] border border-[#d4af37]/30 px-3.5 py-1 text-[#f2ca50] text-[9px] uppercase tracking-[0.28em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONCIERGE &amp; ATELIER COMMUNICATIONS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#e3e2e6] uppercase tracking-tight">
            Private Atelier Concierge
          </h1>

          <p className="text-xs sm:text-sm text-[#d0c5af] font-light leading-relaxed">
            Connect directly with our master drape masters, creative direction desk, and private showroom concierge at Place Vendôme. All correspondence is held under strict attorney-client grade confidentiality.
          </p>
        </div>

        {/* Global Boutique Locations Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Paris */}
          <div className="bg-[#1b1b1f] border border-[#292a2d] p-6 space-y-3 hover:border-[#d4af37]/60 transition-all">
            <div className="flex justify-between items-start">
              <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold">
                FLAGSHIP &amp; HAUTE ATELIER
              </span>
              <span className="text-[9px] text-[#99907c] uppercase">CET / GMT+1</span>
            </div>
            <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
              Paris • Place Vendôme
            </h3>
            <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
              34 Rue du Faubourg Saint-Honoré, 75008 Paris, France
            </p>
            <div className="pt-2 text-xs space-y-1 text-[#99907c]">
              <div className="flex items-center gap-2 text-[#e3e2e6]">
                <Phone className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>+33 1 42 68 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>vendome@xorac-couture.paris</span>
              </div>
            </div>
          </div>

          {/* London */}
          <div className="bg-[#1b1b1f] border border-[#292a2d] p-6 space-y-3 hover:border-[#d4af37]/60 transition-all">
            <div className="flex justify-between items-start">
              <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold">
                MAYFAIR PRIVATE SALON
              </span>
              <span className="text-[9px] text-[#99907c] uppercase">GMT</span>
            </div>
            <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
              London • Mayfair Suite
            </h3>
            <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
              14 New Bond Street, Mayfair, London W1S 3PF, UK
            </p>
            <div className="pt-2 text-xs space-y-1 text-[#99907c]">
              <div className="flex items-center gap-2 text-[#e3e2e6]">
                <Phone className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>+44 20 7946 0912</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>mayfair@xorac-couture.paris</span>
              </div>
            </div>
          </div>

          {/* New York */}
          <div className="bg-[#1b1b1f] border border-[#292a2d] p-6 space-y-3 hover:border-[#d4af37]/60 transition-all">
            <div className="flex justify-between items-start">
              <span className="text-[10px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold">
                MADISON AVENUE SALON
              </span>
              <span className="text-[9px] text-[#99907c] uppercase">EST / GMT-5</span>
            </div>
            <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
              New York • Madison Ave
            </h3>
            <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
              720 Madison Avenue, New York, NY 10065, USA
            </p>
            <div className="pt-2 text-xs space-y-1 text-[#99907c]">
              <div className="flex items-center gap-2 text-[#e3e2e6]">
                <Phone className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>+1 212 555 0198</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>madison@xorac-couture.paris</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTACT FORM & CONCIERGE SLA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-8 bg-[#1b1b1f] border border-[#292a2d] p-6 sm:p-10 shadow-2xl">
            <div className="border-b border-[#292a2d] pb-5 mb-6">
              <h2 className="font-serif text-2xl text-[#e3e2e6] uppercase">
                Initiate Confidential Atelier Inquiry
              </h2>
              <p className="text-xs text-[#d0c5af] font-light mt-1">
                Please provide your tailored preferences below. Our Place Vendôme Creative Direction Desk will review your brief within 2 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 text-center space-y-5 bg-[#121316] border border-[#f2ca50]">
                <div className="w-14 h-14 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl uppercase text-[#f2ca50]">
                  Confidential Inquiry Received
                </h3>
                <p className="text-xs text-[#d0c5af] max-w-md mx-auto leading-relaxed">
                  Thank you, {honorific} {fullName}. Your commission request has been assigned reference token{' '}
                  <span className="font-mono text-[#f2ca50] font-semibold">XOR-COMM-{Date.now().toString().slice(-4)}</span>.
                  Senior Concierge Philippe de Montmirail has been notified.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-[#f2ca50] text-[#3c2f00] text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#ffe088]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Honorific & Name */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                      Honorific Title
                    </label>
                    <select
                      value={honorific}
                      onChange={(e) => setHonorific(e.target.value)}
                      className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    >
                      <option value="Lady">Lady</option>
                      <option value="Lord">Lord</option>
                      <option value="Monsieur">Monsieur</option>
                      <option value="Madame">Madame</option>
                      <option value="Patron">Patron</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="LADY / LORD / PATRON NAME"
                      className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                      Direct Private Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="client@privateoffice.eu"
                      className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                      Direct Telephone (with Country Code)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+33 6 00 00 00 00"
                      className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>
                </div>

                {/* Row 3: Salon City & Inquiry Nature */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                      Preferred Salon Metropolis
                    </label>
                    <select
                      value={salonCity}
                      onChange={(e) => setSalonCity(e.target.value)}
                      className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    >
                      <option value="Paris (34 Rue du Faubourg / Place Vendôme)">Paris • Place Vendôme Flagship</option>
                      <option value="London Mayfair (14 New Bond Street)">London • Mayfair Suite</option>
                      <option value="New York (720 Madison Avenue)">New York • Madison Ave</option>
                      <option value="Dubai (DIFC Gate Precinct 4)">Dubai • DIFC Suite</option>
                      <option value="Milan (Via Montenapoleone 8)">Milan • Via Montenapoleone</option>
                      <option value="Virtual 3D Video Fitting">Virtual 3D Fitting Salon (Encrypted Stream)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                      Commission or Consultation Nature
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    >
                      <option value="Bespoke Gala / Wedding Commission">Bespoke Gala / Wedding Commission</option>
                      <option value="Modern Ethnic Royal Sherwani & Zardozi">Modern Ethnic Royal Sherwani &amp; Zardozi</option>
                      <option value="Western Architectural Corset Gown">Western Architectural Corset Gown</option>
                      <option value="Red Carpet Loan & Archival Dressing">Red Carpet Loan &amp; Archival Dressing</option>
                      <option value="Private Trunk Show Hosting">Private Trunk Show Hosting at Residence/Yacht</option>
                      <option value="Press, Editorial & Museum Acquisition">Press, Editorial &amp; Museum Acquisition</option>
                    </select>
                  </div>
                </div>

                {/* Target Date */}
                <div>
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Target Event or Delivery Date
                  </label>
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    required
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>

                {/* Tailoring Vision Details */}
                <div>
                  <label className="block text-[9px] uppercase tracking-wider text-[#99907c] mb-1.5 font-medium">
                    Detailed Garment Vision, Fabric Preferences &amp; Silhouette Notes
                  </label>
                  <textarea
                    rows={4}
                    value={visionMessage}
                    onChange={(e) => setVisionMessage(e.target.value)}
                    required
                    className="w-full bg-[#121316] border border-[#292a2d] px-3.5 py-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                  ></textarea>
                </div>

                {/* File / Moodboard Attachment */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[9px] uppercase tracking-wider text-[#99907c] font-medium">
                      Moodboard or Silhouette References
                    </label>
                    <button
                      type="button"
                      onClick={handleAttachSim}
                      className="text-[10px] text-[#f2ca50] flex items-center gap-1 hover:underline"
                    >
                      <FileUp className="w-3 h-3" />
                      <span>Attach Document / Photo</span>
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {attachedFiles.map((doc, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#121316] border border-[#292a2d] text-xs text-[#d0c5af] flex items-center gap-2"
                      >
                        <span className="text-[#f2ca50]">📎</span>
                        <span>{doc}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] text-[11px] uppercase tracking-[0.25em] font-semibold transition-all shadow-xl flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'TRANSMITTING CONFIDENTIAL BRIEF...' : 'SUBMIT ATELIER CONCIERGE BRIEF'}</span>
                </button>

                <p className="text-[9px] text-center text-[#99907c] tracking-wider uppercase">
                  STRICT NON-DISCLOSURE GUARANTEED • 24/7 ENCRYPTED PLACE VENDÔME LINE
                </p>
              </form>
            )}
          </div>

          {/* Right: Concierge SLA & Direct Channels */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 2-Hour SLA Card */}
            <div className="bg-[#1b1b1f] border border-[#d4af37]/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#f2ca50] text-[10px] uppercase tracking-[0.2em] font-semibold">
                <Clock className="w-4 h-4" />
                <span>ATELIER CONCIERGE SLA</span>
              </div>
              <h3 className="font-serif text-xl text-[#e3e2e6] uppercase">
                Guaranteed 2-Hour Response
              </h3>
              <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
                During Paris Haute Couture business hours (09:00 - 20:00 CET), our salon director responds to verified client briefs within 120 minutes.
              </p>
            </div>

            {/* Direct Salon Channels */}
            <div className="bg-[#1b1b1f] border border-[#292a2d] p-6 space-y-4">
              <h4 className="font-serif text-base text-[#e3e2e6] uppercase">
                Direct Salon Hotlines
              </h4>
              
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <span className="text-[9px] uppercase tracking-wider text-[#99907c] block">
                    Place Vendôme Concierge Hotline
                  </span>
                  <span className="font-mono text-sm text-[#f2ca50] font-semibold block mt-0.5">
                    +33 1 42 68 00 00
                  </span>
                  <span className="text-[10px] text-[#d0c5af] block mt-0.5">
                    Direct extension for Private Ledger Patrons
                  </span>
                </div>

                <div className="p-3 bg-[#121316] border border-[#292a2d]">
                  <span className="text-[9px] uppercase tracking-wider text-[#99907c] block">
                    Encrypted WhatsApp Salon Line
                  </span>
                  <span className="font-mono text-sm text-[#f2ca50] font-semibold block mt-0.5">
                    +33 6 42 98 11 00
                  </span>
                  <span className="text-[10px] text-[#d0c5af] block mt-0.5">
                    Available for fabric swatch videos &amp; fitting queries
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="w-full py-3 bg-[#121316] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#e3e2e6] text-[10px] uppercase tracking-[0.2em] font-semibold transition-all border border-[#292a2d] text-center"
              >
                Book Immediate Salon Fitting
              </button>
            </div>

            {/* Atelier FAQ */}
            <div className="bg-[#1b1b1f] border border-[#292a2d] p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#99907c] text-[10px] uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>CONCIERGE PROTOCOLS</span>
              </div>
              
              <div className="space-y-2.5 text-xs text-[#d0c5af]">
                <div>
                  <strong className="text-[#e3e2e6] block font-medium">Are private hotel suite visits possible?</strong>
                  <p className="text-[11px] text-[#99907c] font-light mt-0.5">
                    Yes, our master tailors travel with portable 3D scanning equipment to any 5-star suite in Paris, London, NYC, Milan, and Dubai.
                  </p>
                </div>
                <div>
                  <strong className="text-[#e3e2e6] block font-medium">How are limited runs allocated?</strong>
                  <p className="text-[11px] text-[#99907c] font-light mt-0.5">
                    Garments are limited to 25 copies worldwide. Allocations are awarded in chronological order of inquiry accreditation.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
