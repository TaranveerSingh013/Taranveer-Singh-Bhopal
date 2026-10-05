import React, { useState } from 'react';
import { ProductItem, HouseCategory } from '../types';
import { PRODUCTS } from '../data/mockData';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Heart,
  Eye,
  ShoppingBag,
  Sliders,
  Play,
  Key,
  ShieldCheck,
  CheckCircle2,
  Maximize2
} from 'lucide-react';

interface LandingScreenProps {
  onQuickView: (product: ProductItem) => void;
  onAddToBag: (product: ProductItem, size?: string) => void;
  onOpenAppointmentModal: () => void;
  onToggleWishlist: (productId: string) => void;
  wishlistedIds: Set<string>;
  onShowToast: (msg: string) => void;
  onNavigateToScreen: (screen: 'dashboard' | 'settings' | 'contact') => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({
  onQuickView,
  onAddToBag,
  onOpenAppointmentModal,
  onToggleWishlist,
  wishlistedIds,
  onShowToast,
  onNavigateToScreen
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'western' | 'mens' | 'ethnic' | 'vault'>('all');
  const [sortOrder, setSortOrder] = useState<'runway' | 'price-desc' | 'craft'>('runway');
  const [vipName, setVipName] = useState('');
  const [vipEmail, setVipEmail] = useState('');
  const [vipCity, setVipCity] = useState('Paris • Place Vendôme');
  const [vipSubmitted, setVipSubmitted] = useState(false);

  // Filter products
  let filtered = PRODUCTS.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'vault') return item.editionNote.includes('VAULT') || item.priceNum > 4000;
    return item.house === activeCategory;
  });

  // Sort products
  if (sortOrder === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.priceNum - a.priceNum);
  } else if (sortOrder === 'craft') {
    filtered = [...filtered].sort((a, b) => b.hoursCrafted - a.hoursCrafted);
  }

  const handleVipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVipSubmitted(true);
    onShowToast(`VIP Salon accreditation requested for ${vipName}. Encrypted key dispatched to ${vipEmail}.`);
    setTimeout(() => {
      setVipSubmitted(false);
      setVipName('');
      setVipEmail('');
    }, 4000);
  };

  return (
    <div className="w-full bg-[#121316] text-[#e3e2e6]">
      
      {/* HERO EDITORIAL SECTION */}
      <section className="relative w-full min-h-[92vh] flex items-end overflow-hidden pt-28 pb-16">
        {/* Background Editorial Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="XORAC Haute Couture Autumn/Winter 2025 campaign"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCEJ2Hj2PBw7-KtBJAE5Qgc_VlFEkqJ_nkUmyTxT3tJhAGhGV-bCwHgbiess6WJrSJdxyrQ874ZNYH5oUhiLTd0xCiLu-kQezW2LxIfGsP4mLWp0sZJWr7XSegIj7CYzQptG5hdnb76zVf4eGodAAuW9kJlvTEkiY3BSJOBXZ-mG18sP1gRkMy-mjriPJzg9hAJhyOTDyf-KI_dOyIOZMamEuhYGNXWXG1c0L92qZ7fxms15Bn65bM"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05] transition-transform duration-10000 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316]/80 via-transparent to-[#121316]/40"></div>
        </div>

        {/* Live Runway Location Ticker */}
        <div className="absolute top-28 left-0 right-0 z-20 px-6 lg:px-14 flex items-center justify-between text-[#d0c5af]">
          <div className="flex items-center gap-2 bg-[#0d0e11]/80 backdrop-blur-md px-4 py-1.5 border border-[#292a2d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse"></span>
            <span className="text-[9px] uppercase tracking-[0.28em] font-medium text-[#e3e2e6]">
              PALATIAL SUITE • PLACE VENDÔME, PARIS
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[9px] tracking-[0.25em] text-[#99907c] uppercase">
            <span>LOOKBOOK NO. 25-IV</span>
            <span className="text-[#f2ca50]">•</span>
            <span>HAUTE COUTURE FW25</span>
          </div>
        </div>

        {/* Hero Narrative & CTAs */}
        <div className="relative z-20 w-full px-6 lg:px-14 max-w-6xl">
          <div className="inline-flex items-center gap-2.5 bg-[#1b1b1f]/80 backdrop-blur-md px-3.5 py-1 mb-6 text-[#f2ca50] border border-[#d4af37]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold">
              XORAC HAUTE COUTURE • AUTOMNE-HIVER 2025
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#e3e2e6] max-w-4xl mb-5 leading-[1.08]">
            DEFYING CONVENTION.<br />
            <span className="italic font-light text-[#f2ca50]">DEFINING LUXURY.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#d0c5af] max-w-2xl font-light mb-8 leading-relaxed">
            An architectural dialogue between modern Western silhouettes, bespoke Menswear atelier, and regal contemporary Ethnic artistry tailored for discerning global tastemakers.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#curated-grid"
              className="inline-flex items-center justify-center gap-3 bg-[#f2ca50] text-[#3c2f00] text-[11px] uppercase tracking-[0.22em] px-8 py-4 font-semibold hover:bg-[#ffe088] transition-all shadow-xl group"
            >
              <span>EXPLORE RUNWAY DROP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center justify-center gap-3 bg-[#1b1b1f]/80 backdrop-blur-md text-[#e3e2e6] text-[11px] uppercase tracking-[0.22em] px-8 py-4 border border-[#292a2d] hover:border-[#f2ca50] hover:text-[#f2ca50] transition-all"
            >
              <Calendar className="w-4 h-4 text-[#f2ca50]" />
              <span>BOOK BESPOKE APPOINTMENT</span>
            </button>
          </div>

          {/* Metric Micro-Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[#292a2d]/60 max-w-4xl">
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-[#e3e2e6] block">34</span>
              <span className="text-[9px] uppercase tracking-widest text-[#99907c]">Western Silhouettes</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-[#e3e2e6] block">120h</span>
              <span className="text-[9px] uppercase tracking-widest text-[#99907c]">Average Handwork/Look</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-[#e3e2e6] block">1/1</span>
              <span className="text-[9px] uppercase tracking-widest text-[#99907c]">Bespoke Precision</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-[#f2ca50] block">0%</span>
              <span className="text-[9px] uppercase tracking-widest text-[#99907c]">Deadstock Waste</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORY TABS & SORT BAR */}
      <section className="sticky top-20 z-30 bg-[#1b1b1f] border-y border-[#292a2d] shadow-lg">
        <div className="w-full px-6 lg:px-14 py-4 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#f2ca50] text-[#3c2f00]'
                  : 'bg-[#1f1f23] text-[#d0c5af] hover:text-[#e3e2e6]'
              }`}
            >
              ALL HOUSES (10)
            </button>
            <button
              onClick={() => setActiveCategory('western')}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all ${
                activeCategory === 'western'
                  ? 'bg-[#f2ca50] text-[#3c2f00]'
                  : 'bg-[#1f1f23] text-[#d0c5af] hover:text-[#e3e2e6]'
              }`}
            >
              WESTERN COUTURE (3)
            </button>
            <button
              onClick={() => setActiveCategory('mens')}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all ${
                activeCategory === 'mens'
                  ? 'bg-[#f2ca50] text-[#3c2f00]'
                  : 'bg-[#1f1f23] text-[#d0c5af] hover:text-[#e3e2e6]'
              }`}
            >
              MEN'S ATELIER (3)
            </button>
            <button
              onClick={() => setActiveCategory('ethnic')}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all ${
                activeCategory === 'ethnic'
                  ? 'bg-[#f2ca50] text-[#3c2f00]'
                  : 'bg-[#1f1f23] text-[#d0c5af] hover:text-[#e3e2e6]'
              }`}
            >
              MODERN ETHNIC (4)
            </button>
            <button
              onClick={() => setActiveCategory('vault')}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all ${
                activeCategory === 'vault'
                  ? 'bg-[#f2ca50] text-[#3c2f00]'
                  : 'bg-[#1f1f23] text-[#d0c5af] hover:text-[#e3e2e6]'
              }`}
            >
              VAULT CAPSULE
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-3 text-xs text-[#99907c]">
            <span className="text-[10px] uppercase tracking-widest text-[#99907c]">CURATION SORT</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-[#292a2d] text-[#e3e2e6] text-[10px] uppercase px-3 py-1.5 focus:outline-none border border-[#292a2d]"
            >
              <option value="runway">EDITORIAL RUNWAY ORDER</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
              <option value="craft">CRAFT COMPLEXITY</option>
            </select>
          </div>
        </div>
      </section>

      {/* THE CURATED HOUSES (THREE EDITORIAL ARCHETYPES) */}
      <section className="w-full px-6 lg:px-14 py-20 bg-[#121316]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#f2ca50] block mb-2 font-semibold">
              THREE ATELIER DIVISIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e6] uppercase tracking-tight">
              The Curated Houses
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#d0c5af] max-w-md font-light leading-relaxed">
            A multi-cultural haute couture atelier redefining youth luxury through sculptural architecture, heritage zari artistry, and Savile Row precision.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* House 1: Western Couture */}
          <div className="group bg-[#1b1b1f] flex flex-col justify-between overflow-hidden border border-[#292a2d] hover:border-[#d4af37]/60 transition-all duration-300">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                alt="Western Couture Gown"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyvMmOznx2Zxvc5xSNgBt-RXQNOLBsbaSOkp2iGLTDcb_agzPV_u5YuZwrUW-Ann346RBA_2jRupBAvKs7BA16C0Xo7RLCIGOwvDOc6wnfTStpytXplgnmzw6K37dtlkDFJBojGb1MxGhNh6XsAZ0H_52q4QumrTyEr2Kk0rotRkh2I5wT0vSdm4rALt_So6cXkx2TIQa9J0Dl4CvvAuoz0MJhjoSRNCQsF6235iCugazRrC4L3Onw"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0d0e11]/80 backdrop-blur-md px-3 py-1 text-[#f2ca50] text-[9px] uppercase tracking-widest border border-[#d4af37]/30">
                LOOKBOOK EDITION • 34 PIECES
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#e3e2e6]">
                <span className="text-[9px] uppercase tracking-widest text-[#99907c]">SILK ORGANZA • CORSETRY</span>
                <span className="w-8 h-8 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between bg-[#1b1b1f]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50]">SALON I</span>
                  <span className="text-[10px] uppercase text-[#99907c]">FW25 EDITION</span>
                </div>
                <h3 className="font-serif text-2xl text-[#e3e2e6] uppercase mb-3">Western Couture</h3>
                <p className="text-xs text-[#d0c5af] font-light mb-6 leading-relaxed">
                  Architectural silhouettes, silk organza, statement evening pieces, liquid satin draping, and dramatic structural corset profiles.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveCategory('western');
                  document.getElementById('curated-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-[#121316] text-[#e3e2e6] hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-colors text-[10px] uppercase tracking-[0.2em] font-semibold text-center border border-[#292a2d]"
              >
                EXPLORE WESTERN PIECES
              </button>
            </div>
          </div>

          {/* House 2: Men's Atelier */}
          <div className="group bg-[#1b1b1f] flex flex-col justify-between overflow-hidden border border-[#292a2d] hover:border-[#d4af37]/60 transition-all duration-300">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                alt="Men's Atelier Velvet Tuxedo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp9Fsj965RhqSjwdZ1_k99gNpXZReFD0Y73AyOF3m6XA_fBof491YoIGHRXVoPB_faO4I1C4ZRHrp0DPUBZRt0hGXGfsFIRxoqGUOWWFqpql_qNb1NyKMNv-H6j1K294RBhXYq0cL7mhj7nAu7XtKAIQ8JgS3SN6MCmIvtzqRhJcaakIZ9eQhAFsOwDKTuGnoUT8P2Ns8dG4YeIGiHY8tBiSK5jD5XBfPChEvv1jnmI07zzlCORfeO"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0d0e11]/80 backdrop-blur-md px-3 py-1 text-[#f2ca50] text-[9px] uppercase tracking-widest border border-[#d4af37]/30">
                LOOKBOOK EDITION • 28 PIECES
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#e3e2e6]">
                <span className="text-[9px] uppercase tracking-widest text-[#99907c]">SUPER 160S WOOL • VELVET</span>
                <span className="w-8 h-8 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between bg-[#1b1b1f]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50]">SALON II</span>
                  <span className="text-[10px] uppercase text-[#99907c]">BESPOKE AVAILABLE</span>
                </div>
                <h3 className="font-serif text-2xl text-[#e3e2e6] uppercase mb-3">Men's Atelier</h3>
                <p className="text-xs text-[#d0c5af] font-light mb-6 leading-relaxed">
                  Midnight velvet smoking jackets, structured double-breasted outerwear, fluid trousers, and bespoke sharp shoulders for the modern gentleman.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveCategory('mens');
                  document.getElementById('curated-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-[#121316] text-[#e3e2e6] hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-colors text-[10px] uppercase tracking-[0.2em] font-semibold text-center border border-[#292a2d]"
              >
                EXPLORE MEN'S ATELIER
              </button>
            </div>
          </div>

          {/* House 3: Modern Ethnic */}
          <div className="group bg-[#1b1b1f] flex flex-col justify-between overflow-hidden border border-[#292a2d] hover:border-[#d4af37]/60 transition-all duration-300">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                alt="Modern Ethnic Zardozi Sherwani"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdXOLDtPf4I_c693h097X9a8bceaZPjZovw-t9j5-wPfj7TZ0UsJvSbiqhU62UKlHmTiZH0NpjJqo5kcGU_RD4zuDsWhXrGcdlewDtSk2CH_dBUbpEmNlPuCTEO2hl4SZkERySs9HSSHRTOh0aQpJ-zGEbmPfSIoxkw8iGD5-D54DxOazYluo5HuT5LH2oy8tO75lU6iWh28FFh-s0I5vyGNz9bgnxNbQg3afP8-VkvUU0a30WInAf"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0d0e11]/80 backdrop-blur-md px-3 py-1 text-[#f2ca50] text-[9px] uppercase tracking-widest border border-[#d4af37]/30">
                LOOKBOOK EDITION • 19 PIECES
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#e3e2e6]">
                <span className="text-[9px] uppercase tracking-widest text-[#99907c]">ZARDOZI GOLD • RAW SILK</span>
                <span className="w-8 h-8 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between bg-[#1b1b1f]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50]">SALON III</span>
                  <span className="text-[10px] uppercase text-[#99907c]">HERITAGE ARTISANS</span>
                </div>
                <h3 className="font-serif text-2xl text-[#e3e2e6] uppercase mb-3">Modern Ethnic</h3>
                <p className="text-xs text-[#d0c5af] font-light mb-6 leading-relaxed">
                  Regal hand-embroidered sherwanis, contemporary drapes, ceremonial jackets, and avant-garde royal waistcoats created with rare bullion thread.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveCategory('ethnic');
                  document.getElementById('curated-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-[#121316] text-[#e3e2e6] hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-colors text-[10px] uppercase tracking-[0.2em] font-semibold text-center border border-[#292a2d]"
              >
                EXPLORE MODERN ETHNIC
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CAPSULE DROP TICKER BANNER */}
      <section className="w-full bg-[#0d0e11] py-8 px-6 lg:px-14 border-y border-[#292a2d]/60">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-[#1b1b1f] p-6 lg:p-8 border border-[#292a2d]">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-[#d4af37]/15 text-[#f2ca50] flex items-center justify-center flex-shrink-0 border border-[#d4af37]/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold">
                  PRIVATE VAULT
                </span>
                <span className="px-2 py-0.5 bg-[#93000a]/30 text-[#ffb4ab] border border-[#ffb4ab]/30 text-[9px] uppercase tracking-wider font-semibold">
                  LIMITED RUN: 25 COPIES WORLDWIDE
                </span>
              </div>
              <h4 className="font-serif text-lg text-[#e3e2e6] uppercase mt-1">
                THE CHAMPAGNE &amp; OBSIDIAN LEATHER ARCHIVE
              </h4>
              <p className="text-xs text-[#d0c5af] font-light">
                Custom carved horn buttons, hand-painted edge finishes, serialized NFC authenticity seal embedded.
              </p>
            </div>
          </div>
          <button
            onClick={() => onQuickView(PRODUCTS[0])}
            className="w-full lg:w-auto bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] text-[10px] uppercase tracking-[0.2em] px-8 py-3.5 font-semibold transition-all whitespace-nowrap"
          >
            VIEW VAULT CAPSULE
          </button>
        </div>
      </section>

      {/* SIGNATURE REPERTOIRE - 10 PRODUCT CARDS GRID */}
      <section className="w-full px-6 lg:px-14 py-20 bg-[#121316]" id="curated-grid">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#292a2d] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#f2ca50]"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#f2ca50] font-semibold">
                AUTUMN / WINTER 2025 ATELIER
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e6] tracking-tight uppercase">
              Signature Repertoire
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#d0c5af] mt-4 md:mt-0">
            <span>Showing <strong className="text-[#f2ca50] font-semibold">{filtered.length}</strong> Masterpieces</span>
            <span className="text-[#99907c]">•</span>
            <span className="text-[10px] text-[#99907c] uppercase tracking-widest">White-Glove Included</span>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((item) => {
            const isWishlisted = wishlistedIds.has(item.id);
            return (
              <article key={item.id} className="group flex flex-col bg-[#121316]">
                {/* Image Container */}
                <div
                  className="relative aspect-[3/4] bg-[#0d0e11] overflow-hidden mb-5 cursor-pointer border border-[#292a2d]/80"
                  onClick={() => onQuickView(item)}
                >
                  <img
                    alt={item.title}
                    src={item.image}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-col gap-1 z-10">
                    <span className="bg-[#0d0e11]/85 backdrop-blur-md px-2.5 py-1 text-[#f2ca50] text-[9px] uppercase tracking-wider font-semibold border border-[#d4af37]/30">
                      {item.lookbookBadge}
                    </span>
                    <span className="bg-[#1b1b1f]/90 backdrop-blur-md px-2.5 py-1 text-[#e3e2e6] text-[9px] uppercase tracking-wider">
                      {item.editionNote}
                    </span>
                  </div>

                  {/* Wishlist toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(item.id);
                    }}
                    className="absolute top-3.5 right-3.5 w-8 h-8 bg-[#0d0e11]/80 backdrop-blur-md flex items-center justify-center text-[#e3e2e6] hover:text-[#f2ca50] transition-colors z-20 border border-[#292a2d]"
                    title="Toggle wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isWishlisted ? 'fill-[#f2ca50] text-[#f2ca50]' : ''
                      }`}
                    />
                  </button>

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#0d0e11] via-[#0d0e11]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(item);
                      }}
                      className="flex-1 bg-[#292a2d] hover:bg-[#38393c] text-[#e3e2e6] py-2.5 text-[10px] uppercase tracking-widest text-center font-semibold transition-colors"
                    >
                      QUICK SPECIFICATION
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToBag(item);
                      }}
                      className="bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] p-2.5 flex items-center justify-center transition-colors"
                      title="Add to Atelier Bag"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[#99907c] text-[10px] uppercase tracking-widest mb-1">
                      <span>{item.categoryLabel}</span>
                      <span className="text-[#f2ca50] font-semibold">{item.price}</span>
                    </div>
                    <h3
                      onClick={() => onQuickView(item)}
                      className="font-serif text-xl text-[#e3e2e6] group-hover:text-[#f2ca50] transition-colors tracking-tight mb-2 cursor-pointer line-clamp-1"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#d0c5af] font-light line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Sizing strip */}
                  <div className="pt-3 border-t border-[#292a2d]/60 flex items-center justify-between text-[10px] text-[#99907c]">
                    <div className="flex items-center gap-1.5">
                      {item.swatchColors.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-3 h-3 rounded-full border border-[#f2ca50]/50"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      {item.availableSizes.slice(0, 3).map((sz) => (
                        <span key={sz}>{sz}</span>
                      ))}
                      <span className="text-[#f2ca50] font-bold">BESPOKE</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Master Tailor Consult Bar */}
        <div className="mt-20 p-8 bg-[#1b1b1f] border border-[#292a2d] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#d4af37]/15 text-[#f2ca50] flex items-center justify-center flex-shrink-0">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#e3e2e6] uppercase">
                NEED BESPOKE MEASUREMENTS OR RUNWAY ARCHIVE CUSTOMIZATION?
              </h4>
              <p className="text-xs text-[#d0c5af] font-light">
                Our Parisian Master Tailors provide virtual 3D body scans and private fittings in 14 global metropolises.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenAppointmentModal}
            className="bg-[#292a2d] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#e3e2e6] px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all whitespace-nowrap"
          >
            CONNECT WITH MASTER TAILOR
          </button>
        </div>
      </section>

      {/* THE XORAC DISTINCTION (4 PILLARS) */}
      <section className="w-full px-6 lg:px-14 py-24 bg-[#0d0e11] border-t border-[#292a2d]/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#f2ca50] block mb-2 font-semibold">
              CONCIERGE ECOSYSTEM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e6] uppercase tracking-tight">
              The XORAC Distinction
            </h2>
            <p className="text-xs sm:text-sm text-[#d0c5af] font-light mt-3 leading-relaxed">
              Haute couture reimagined without friction. Millimeter sizing precision, climate-controlled couriers, and bespoke care engineered for modern patrons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1b1b1f] p-7 border border-[#292a2d] hover:border-[#d4af37]/60 transition-all flex flex-col justify-between group">
              <div>
                <span className="font-serif text-2xl text-[#f2ca50] block mb-4">01</span>
                <h3 className="font-serif text-lg text-[#e3e2e6] uppercase mb-2">Virtual 3D Fitting</h3>
                <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
                  Instant millimeter-accurate sizing via AI camera silhouette scan or private encrypted 1-on-1 video salon with our senior drape master.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#292a2d] text-[9px] text-[#f2ca50] uppercase tracking-widest font-semibold">
                ZERO SIZING UNCERTAINTY
              </div>
            </div>

            <div className="bg-[#1b1b1f] p-7 border border-[#292a2d] hover:border-[#d4af37]/60 transition-all flex flex-col justify-between group">
              <div>
                <span className="font-serif text-2xl text-[#f2ca50] block mb-4">02</span>
                <h3 className="font-serif text-lg text-[#e3e2e6] uppercase mb-2">White-Glove Courier</h3>
                <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
                  Dispatched in reinforced climate-controlled trunks with personal delivery directly to your penthouse, hotel, or yacht in 48 hours.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#292a2d] text-[9px] text-[#f2ca50] uppercase tracking-widest font-semibold">
                PARIS • NYC • DUBAI • TOKYO
              </div>
            </div>

            <div className="bg-[#1b1b1f] p-7 border border-[#292a2d] hover:border-[#d4af37]/60 transition-all flex flex-col justify-between group">
              <div>
                <span className="font-serif text-2xl text-[#f2ca50] block mb-4">03</span>
                <h3 className="font-serif text-lg text-[#e3e2e6] uppercase mb-2">Numbered Limited Runs</h3>
                <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
                  Never mass-produced. Each garment is laser-engraved with its individual serial registry and accompanied by a cryptographic certificate.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#292a2d] text-[9px] text-[#f2ca50] uppercase tracking-widest font-semibold">
                MAX 25 EDITIONS / DESIGN
              </div>
            </div>

            <div className="bg-[#1b1b1f] p-7 border border-[#292a2d] hover:border-[#d4af37]/60 transition-all flex flex-col justify-between group">
              <div>
                <span className="font-serif text-2xl text-[#f2ca50] block mb-4">04</span>
                <h3 className="font-serif text-lg text-[#e3e2e6] uppercase mb-2">Lifetime Preservation</h3>
                <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
                  Lifetime complimentary couture alterations, archival preservation, and seasonal steam refresh at any XORAC flagship worldwide.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#292a2d] text-[9px] text-[#f2ca50] uppercase tracking-widest font-semibold">
                LIFETIME HOUSE GUARANTEE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VENDÔME ARCHIVES (EDITORIAL LOOKBOOK VIDEO BANNER) */}
      <section className="w-full bg-[#1b1b1f] py-20 px-6 lg:px-14 border-y border-[#292a2d]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#121316] px-3 py-1 text-[#f2ca50] text-[9px] uppercase tracking-[0.25em] font-semibold border border-[#d4af37]/30">
              <span>RUNWAY ARCHIVE FW25</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#e3e2e6] uppercase tracking-tight leading-tight">
              THE VENDÔME<br />
              <span className="italic text-[#f2ca50] font-light">ARCHIVES</span>
            </h2>

            <blockquote className="bg-[#121316] p-6 border-l-2 border-[#f2ca50] space-y-2">
              <p className="font-serif text-lg text-[#e3e2e6] italic font-light">
                "Fashion is not mere attire; it is personal sovereignty."
              </p>
              <cite className="block text-[10px] text-[#f2ca50] uppercase tracking-[0.2em] font-semibold not-italic">
                — XORAC Creative Direction, Paris
              </cite>
            </blockquote>

            <p className="text-xs text-[#d0c5af] font-light leading-relaxed">
              Filmed inside the historic private salons of Place Vendôme. Explore the tactile dialogue between raw zardozi bullion thread and architectural Italian wool.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onShowToast('Loading 4K Cinema Lookbook: Place Vendôme FW25 (Soundtrack: Sound of Reverence).')}
                className="inline-flex items-center gap-2 bg-[#f2ca50] text-[#3c2f00] px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#ffe088] transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>WATCH 4K RUNWAY TEASER</span>
              </button>
              <button
                onClick={() => onNavigateToScreen('dashboard')}
                className="text-[10px] uppercase tracking-[0.2em] text-[#e3e2e6] hover:text-[#f2ca50] underline underline-offset-8 transition-colors"
              >
                VIEW PATRON VAULT
              </button>
            </div>
          </div>

          {/* Video Preview Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] bg-[#0d0e11] overflow-hidden border border-[#292a2d] shadow-2xl group">
              <img
                alt="Place Vendôme Runway Film"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCEJ2Hj2PBw7-KtBJAE5Qgc_VlFEkqJ_nkUmyTxT3tJhAGhGV-bCwHgbiess6WJrSJdxyrQ874ZNYH5oUhiLTd0xCiLu-kQezW2LxIfGsP4mLWp0sZJWr7XSegIj7CYzQptG5hdnb76zVf4eGodAAuW9kJlvTEkiY3BSJOBXZ-mG18sP1gRkMy-mjriPJzg9hAJhyOTDyf-KI_dOyIOZMamEuhYGNXWXG1c0L92qZ7fxms15Bn65bM"
                className="w-full h-full object-cover filter brightness-[0.8] group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => onShowToast('Cinema Player Active: Place Vendôme 2025 Lookbook playing in Dolby Atmos.')}
                  className="w-16 h-16 rounded-full bg-[#0d0e11]/80 backdrop-blur-md text-[#f2ca50] flex items-center justify-center hover:scale-110 hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-all border border-[#f2ca50]/40 shadow-2xl"
                >
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#0d0e11]/80 backdrop-blur-md px-3.5 py-1.5 flex items-center justify-between text-[9px] uppercase tracking-wider text-[#99907c]">
                <span>PARIS HAUTE COUTURE FASHION WEEK • OFFICIAL ARCHIVE</span>
                <span className="text-[#f2ca50]">SOUND: SOUND OF REVERENCE (DIR. CUT)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP PRIVATE SALON ACCREDITATION */}
      <section className="w-full px-6 lg:px-14 py-24 bg-[#121316]">
        <div className="relative bg-[#1b1b1f] p-8 md:p-14 overflow-hidden max-w-5xl mx-auto border border-[#292a2d] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-[#f2ca50] text-[9px] uppercase tracking-[0.28em] font-semibold">
                <Key className="w-3.5 h-3.5" />
                <span>PRIVATE ACCESS CLIENTELE</span>
              </div>

              <h2 className="font-serif text-3xl lg:text-4xl text-[#e3e2e6] uppercase tracking-tight">
                VIP Private Salon &amp; Trunk Shows
              </h2>

              <p className="text-xs sm:text-sm text-[#d0c5af] font-light leading-relaxed">
                Members of the XORAC Private Ledger receive direct invitations to confidential showroom previews, bespoke fitting dates with creative director at Place Vendôme, and guaranteed allocation for limited numbered capsules.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-3 text-center">
                <div className="bg-[#121316] p-3 border border-[#292a2d]">
                  <span className="font-serif text-xl text-[#f2ca50] block">24h</span>
                  <span className="text-[8px] sm:text-[9px] text-[#99907c] uppercase">Advance Drop Access</span>
                </div>
                <div className="bg-[#121316] p-3 border border-[#292a2d]">
                  <span className="font-serif text-xl text-[#f2ca50] block">1:1</span>
                  <span className="text-[8px] sm:text-[9px] text-[#99907c] uppercase">Stylist Concierge</span>
                </div>
                <div className="bg-[#121316] p-3 border border-[#292a2d]">
                  <span className="font-serif text-xl text-[#f2ca50] block">Zero</span>
                  <span className="text-[8px] sm:text-[9px] text-[#99907c] uppercase">Tariff Delivery</span>
                </div>
              </div>
            </div>

            {/* Accreditation Form */}
            <div className="lg:col-span-5 bg-[#121316] p-6 border border-[#292a2d]">
              <h4 className="font-serif text-base text-[#e3e2e6] uppercase mb-1">
                Request Salon Accreditation
              </h4>
              <p className="text-[11px] text-[#99907c] font-light mb-5">
                Enter your credentials to receive an encrypted VIP access key.
              </p>

              {vipSubmitted ? (
                <div className="p-6 text-center space-y-3 bg-[#1b1b1f] border border-[#f2ca50]">
                  <CheckCircle2 className="w-8 h-8 text-[#f2ca50] mx-auto" />
                  <h5 className="font-serif text-sm uppercase text-[#e3e2e6]">Accreditation Received</h5>
                  <p className="text-xs text-[#d0c5af]">
                    Verification sent to private office inbox. Welcome to the Private Ledger.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleVipSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#99907c] mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      value={vipName}
                      onChange={(e) => setVipName(e.target.value)}
                      required
                      placeholder="LADY / LORD / PATRON NAME"
                      className="w-full bg-[#1b1b1f] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#99907c] mb-1">
                      Direct Private Email
                    </label>
                    <input
                      type="email"
                      value={vipEmail}
                      onChange={(e) => setVipEmail(e.target.value)}
                      required
                      placeholder="PATRON@PRIVATEOFFICE.COM"
                      className="w-full bg-[#1b1b1f] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#99907c] mb-1">
                      Primary Salon City
                    </label>
                    <select
                      value={vipCity}
                      onChange={(e) => setVipCity(e.target.value)}
                      className="w-full bg-[#1b1b1f] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    >
                      <option value="Paris • Place Vendôme">Paris • Place Vendôme</option>
                      <option value="London • Mayfair">London • Mayfair</option>
                      <option value="New York • Madison Ave">New York • Madison Ave</option>
                      <option value="Milan • Via Montenapoleone">Milan • Via Montenapoleone</option>
                      <option value="Dubai • DIFC Suite">Dubai • DIFC Suite</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] text-[10px] uppercase tracking-[0.25em] font-semibold transition-colors mt-2"
                  >
                    REQUEST VIP INVITATION
                  </button>

                  <p className="text-[8px] text-center text-[#99907c] tracking-wider uppercase">
                    STRICT CONFIDENTIALITY • INVITATION BY ATELIER APPROVAL ONLY
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
