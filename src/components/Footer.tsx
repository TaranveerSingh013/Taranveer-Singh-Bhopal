import React, { useState } from 'react';
import { ScreenView } from '../types';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenView) => void;
  onOpenAppointmentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAppointmentModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0d0e11] text-[#e3e2e6] pt-16 pb-12 border-t border-[#292a2d]/60">
      <div className="w-full px-6 lg:px-14">
        {/* Top Grid: Newsletter & Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#292a2d]/60">
          
          {/* Brand & Privileged Newsletter */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] text-[#f2ca50] tracking-[0.28em] uppercase font-semibold block">
              PRIVILEGED MEMBERSHIP
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl tracking-tight text-[#e3e2e6]">
              The House Concierge
            </h3>
            <p className="text-xs text-[#d0c5af] max-w-md font-light leading-relaxed">
              Receive confidential invitations to secret Place Vendôme trunk previews, private atelier fittings, and guaranteed numbered allocations.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#1b1b1f] border border-[#d4af37]/40 text-[#f2ca50] text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50]" />
                <span className="uppercase tracking-wider">Patron email registered in XORAC Private Ledger.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md pt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER CONFIDENTIAL EMAIL ADDRESS"
                  required
                  className="flex-1 bg-[#1b1b1f] border-b border-[#99907c] px-4 py-3 text-[11px] text-[#e3e2e6] placeholder-[#99907c] focus:outline-none focus:border-[#f2ca50] uppercase tracking-wider transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#d4af37] text-[#3c2f00] hover:bg-[#f2ca50] text-[10px] tracking-[0.2em] uppercase px-6 py-3 font-semibold transition-all whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center gap-2 text-[10px] text-[#99907c] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Strict Non-Disclosure &amp; Zero Spam Protocol</span>
            </div>
          </div>

          {/* 4 Directory Columns with functional links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div className="space-y-3">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#e3e2e6] font-semibold">
                SCREENS
              </h4>
              <ul className="space-y-2 text-xs text-[#d0c5af]">
                <li>
                  <button onClick={() => onNavigate('landing')} className="hover:text-[#f2ca50] transition-colors text-left">
                    Landing Page
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('dashboard')} className="hover:text-[#f2ca50] transition-colors text-left flex items-center gap-1">
                    <span>User Dashboard</span>
                    <span className="text-[8px] text-[#f2ca50]">●</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('settings')} className="hover:text-[#f2ca50] transition-colors text-left">
                    Settings Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-[#f2ca50] transition-colors text-left">
                    Contact Form
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#e3e2e6] font-semibold">
                COLLECTIONS
              </h4>
              <ul className="space-y-2 text-xs text-[#d0c5af]">
                <li>
                  <button onClick={() => onNavigate('landing')} className="hover:text-[#f2ca50] transition-colors text-left">
                    Western Couture
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('landing')} className="hover:text-[#f2ca50] transition-colors text-left">
                    Men's Atelier
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('landing')} className="hover:text-[#f2ca50] transition-colors text-left">
                    Modern Ethnic
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('landing')} className="hover:text-[#f2ca50] transition-colors text-left">
                    Private Vault
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#e3e2e6] font-semibold">
                ATELIER CARE
              </h4>
              <ul className="space-y-2 text-xs text-[#d0c5af]">
                <li>
                  <button onClick={onOpenAppointmentModal} className="hover:text-[#f2ca50] transition-colors text-left">
                    Bespoke Salon Fitting
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('settings')} className="hover:text-[#f2ca50] transition-colors text-left">
                    3D Scan Sizing
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('dashboard')} className="hover:text-[#f2ca50] transition-colors text-left">
                    Vault Certificates
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-[#f2ca50] transition-colors text-left">
                    White-Glove Courier
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="space-y-3">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#e3e2e6] font-semibold">
                THE HOUSE
              </h4>
              <ul className="space-y-2 text-xs text-[#d0c5af]">
                <li className="hover:text-[#f2ca50] cursor-pointer">Heritage &amp; Zari</li>
                <li className="hover:text-[#f2ca50] cursor-pointer">Savile Row Tailors</li>
                <li className="hover:text-[#f2ca50] cursor-pointer">Circular Couture</li>
                <li className="hover:text-[#f2ca50] cursor-pointer">Press &amp; Bazaar</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Boutiques Strip */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-[#99907c] uppercase tracking-widest">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[#f2ca50] font-semibold">GLOBAL FLAGSHIPS:</span>
            <span className="text-[#e3e2e6] hover:text-[#f2ca50] cursor-pointer">PARIS (34 RUE DU FAUBOURG)</span>
            <span>•</span>
            <span className="text-[#e3e2e6] hover:text-[#f2ca50] cursor-pointer">LONDON (14 NEW BOND ST)</span>
            <span>•</span>
            <span className="text-[#e3e2e6] hover:text-[#f2ca50] cursor-pointer">NEW YORK (720 MADISON AVE)</span>
            <span>•</span>
            <span className="text-[#e3e2e6] hover:text-[#f2ca50] cursor-pointer">DUBAI (DIFC PRECINCT 4)</span>
            <span>•</span>
            <span className="text-[#e3e2e6] hover:text-[#f2ca50] cursor-pointer">MILAN (VIA MONTENAPOLEONE)</span>
          </div>
          <div className="flex items-center gap-2 text-[#d4af37]">
            <span>100% CARBON NEUTRAL ATELIER</span>
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 mt-6 border-t border-[#292a2d]/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#99907c] text-[10px] tracking-wider uppercase">
          <p>© 2026 XORAC HAUTE COUTURE S.A. ALL RIGHTS RESERVED • REGISTERED LUXURY ATELIER PARIS.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#e3e2e6] cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-[#e3e2e6] cursor-pointer">Terms of Salon Service</span>
            <span className="hover:text-[#e3e2e6] cursor-pointer">Vault Security Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
