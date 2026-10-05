import React, { useState } from 'react';
import { ScreenView } from '../types';
import { ShoppingBag, Heart, User, Search, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentScreen: ScreenView;
  onNavigate: (screen: ScreenView) => void;
  bagCount: number;
  onOpenBag: () => void;
  wishlistCount: number;
  onOpenAppointmentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  bagCount,
  onOpenBag,
  wishlistCount,
  onOpenAppointmentModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#121316]/95 backdrop-blur-2xl border-b border-[#292a2d]/60">
        {/* Top Marquee Bar */}
        <div className="bg-[#0d0e11] text-center py-2 px-4 border-b border-[#292a2d]/40 hidden sm:block">
          <p className="text-[9px] text-[#d0c5af] uppercase tracking-[0.28em] font-medium flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse"></span>
            <span>COMPLIMENTARY WHITE-GLOVE GLOBAL DELIVERY &amp; BESPOKE ATELIER FITTINGS • PLACE VENDÔME, PARIS</span>
          </p>
        </div>

        {/* Main 3-Zone Header Bar */}
        <div className="h-20 w-full px-4 sm:px-8 lg:px-14 flex items-center justify-between">
          
          {/* Zone 1: Luxury Brand Emblem & Wordmark */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-3.5 group text-left transition-opacity hover:opacity-90"
            >
              <img
                alt="XORAC Luxury Emblem"
                className="h-7 w-auto object-contain brightness-110"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XXYI3QbTrcVjpaJ_upZGDexOFVOBRq4i6CRsIq98unULwsIz5rfhdP-tdsWW0M36gFdLt_OfEmR7354uRF71KL8duDMJC6-kh0V8Lza--AVxdKLpD7HdDUZMPNXHI72Ywxczhu31anMcUwHREcMAXO6TQ6BOcHIR4HcurNjdYj2Frb4b9awxtpNqar8Y6XJ7ozI-K8avNAdhkrzPAhRgDE_lQkykssPJ2EFv_RXBEUSIk2d-uqoN5jnw"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl uppercase tracking-[0.24em] text-[#e3e2e6] leading-none font-normal">
                  XORAC
                </span>
                <span className="text-[8px] sm:text-[9px] text-[#99907c] tracking-[0.3em] uppercase mt-1">
                  Paris • Haute Couture
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: The 4 Required Screens Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            <button
              onClick={() => onNavigate('landing')}
              className={`py-1.5 transition-all duration-200 border-b-2 ${
                currentScreen === 'landing'
                  ? 'text-[#f2ca50] border-[#f2ca50] font-semibold'
                  : 'text-[#d0c5af] border-transparent hover:text-[#e3e2e6] hover:border-[#99907c]'
              }`}
            >
              Landing Page
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`py-1.5 transition-all duration-200 border-b-2 flex items-center gap-1.5 ${
                currentScreen === 'dashboard'
                  ? 'text-[#f2ca50] border-[#f2ca50] font-semibold'
                  : 'text-[#d0c5af] border-transparent hover:text-[#e3e2e6] hover:border-[#99907c]'
              }`}
            >
              <span>User Dashboard</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-[#d4af37]/15 text-[#f2ca50] border border-[#d4af37]/30">
                VIP
              </span>
            </button>
            <button
              onClick={() => onNavigate('settings')}
              className={`py-1.5 transition-all duration-200 border-b-2 ${
                currentScreen === 'settings'
                  ? 'text-[#f2ca50] border-[#f2ca50] font-semibold'
                  : 'text-[#d0c5af] border-transparent hover:text-[#e3e2e6] hover:border-[#99907c]'
              }`}
            >
              Settings Profile
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`py-1.5 transition-all duration-200 border-b-2 ${
                currentScreen === 'contact'
                  ? 'text-[#f2ca50] border-[#f2ca50] font-semibold'
                  : 'text-[#d0c5af] border-transparent hover:text-[#e3e2e6] hover:border-[#99907c]'
              }`}
            >
              Contact Form
            </button>
          </nav>

          {/* Zone 3: Interactive Actions (Currency, Search, Wishlist, Bag, Salon Fitting) */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
              title="Search Atelier Archive"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Counter */}
            <button
              onClick={() => onNavigate('dashboard')}
              className="relative p-2 text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
              title="View Vault & Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#d4af37] text-[#3c2f00] text-[8px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Atelier Bag Drawer Trigger */}
            <button
              onClick={onOpenBag}
              className="relative p-2 text-[#d0c5af] hover:text-[#f2ca50] transition-colors flex items-center"
              title="Open Atelier Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-[#f2ca50] text-[#3c2f00] text-[9px] font-bold flex items-center justify-center">
                {bagCount < 10 ? `0${bagCount}` : bagCount}
              </span>
            </button>

            {/* Salon Fitting CTA Button */}
            <button
              onClick={onOpenAppointmentModal}
              className="hidden sm:inline-flex items-center gap-2 bg-[#d4af37]/15 hover:bg-[#f2ca50] text-[#f2ca50] hover:text-[#3c2f00] border border-[#d4af37]/40 px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
            >
              <Sparkles className="w-3 h-3" />
              <span>Salon Fitting</span>
            </button>

            {/* Direct Patron Avatar */}
            <button
              onClick={() => onNavigate('settings')}
              className="hidden xl:flex items-center gap-2 pl-2 border-l border-[#292a2d] text-[#d0c5af] hover:text-[#e3e2e6]"
              title="Lady Elena Rostova Profile"
            >
              <div className="w-7 h-7 rounded-full bg-[#292a2d] border border-[#d4af37]/50 flex items-center justify-center text-[#f2ca50]">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#d0c5af] font-medium hidden 2xl:inline">
                Lady Elena
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#d0c5af] hover:text-[#e3e2e6]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Inline Search Drawer (Expandable) */}
        {searchOpen && (
          <div className="bg-[#1b1b1f] border-t border-[#292a2d] px-6 py-3 flex items-center justify-between">
            <div className="max-w-2xl w-full flex items-center gap-3">
              <Search className="w-4 h-4 text-[#99907c]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search western couture, zardozi sherwanis, cashmere coats, or runway looks..."
                className="w-full bg-transparent text-xs text-[#e3e2e6] placeholder-[#99907c] focus:outline-none uppercase tracking-wider"
                autoFocus
              />
            </div>
            <button
              onClick={() => setSearchOpen(false)}
              className="text-[#99907c] hover:text-[#e3e2e6] text-xs uppercase tracking-widest"
            >
              Close
            </button>
          </div>
        )}

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121316] border-b border-[#292a2d] px-6 py-5 space-y-4">
            <div className="flex flex-col space-y-3 text-xs uppercase tracking-[0.2em]">
              <button
                onClick={() => {
                  onNavigate('landing');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 border-b border-[#292a2d]/50 ${
                  currentScreen === 'landing' ? 'text-[#f2ca50] font-semibold' : 'text-[#d0c5af]'
                }`}
              >
                1. Landing Page (Atelier Runway)
              </button>
              <button
                onClick={() => {
                  onNavigate('dashboard');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 border-b border-[#292a2d]/50 ${
                  currentScreen === 'dashboard' ? 'text-[#f2ca50] font-semibold' : 'text-[#d0c5af]'
                }`}
              >
                2. User Dashboard (Patron Portal)
              </button>
              <button
                onClick={() => {
                  onNavigate('settings');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 border-b border-[#292a2d]/50 ${
                  currentScreen === 'settings' ? 'text-[#f2ca50] font-semibold' : 'text-[#d0c5af]'
                }`}
              >
                3. Settings Profile (3D Measurements)
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 border-b border-[#292a2d]/50 ${
                  currentScreen === 'contact' ? 'text-[#f2ca50] font-semibold' : 'text-[#d0c5af]'
                }`}
              >
                4. Contact Form (Salon Inquiries)
              </button>
            </div>
            <button
              onClick={() => {
                onOpenAppointmentModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#f2ca50] text-[#3c2f00] text-[10px] uppercase tracking-[0.25em] font-semibold text-center mt-2"
            >
              Book Bespoke Salon Fitting
            </button>
          </div>
        )}
      </header>
    </>
  );
};
