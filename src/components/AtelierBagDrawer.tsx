import React, { useState } from 'react';
import { BagItem } from '../types';
import { ShoppingBag, X, Trash2, Lock, ShieldCheck, Check } from 'lucide-react';

interface AtelierBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BagItem[];
  onRemoveItem: (id: string) => void;
  onClearBag: () => void;
  onShowToast: (msg: string) => void;
}

export const AtelierBagDrawer: React.FC<AtelierBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearBag,
  onShowToast
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('Paris Penthouse (28 Ave Montaigne)');
  const [courierSecurityCode, setCourierSecurityCode] = useState('XOR-ENC-7721');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.priceNum * item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearBag();
      onShowToast(`Couture order placed. Armored courier dispatch reserved under token ${courierSecurityCode}.`);
      setCheckoutComplete(false);
      setIsCheckingOut(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0e11]/85 backdrop-blur-md flex justify-end transition-opacity duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-out Drawer Container */}
      <div className="relative w-full max-w-md bg-[#1b1b1f] h-full flex flex-col justify-between shadow-2xl border-l border-[#292a2d]/80 z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#292a2d] flex items-center justify-between bg-[#0d0e11]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#f2ca50]" />
            <div>
              <h3 className="font-serif text-lg uppercase text-[#e3e2e6] leading-none">
                Atelier Bag
              </h3>
              <span className="text-[9px] text-[#99907c] tracking-widest uppercase mt-1 block font-medium">
                Place Vendôme Client Allocation
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-[#e3e2e6] hover:text-[#f2ca50] transition-colors bg-[#1f1f23]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <ShoppingBag className="w-10 h-10 text-[#99907c] mx-auto opacity-50" />
              <h4 className="font-serif text-base uppercase text-[#e3e2e6]">Your Atelier Bag is Empty</h4>
              <p className="text-xs text-[#99907c] max-w-xs mx-auto">
                Explore our signature runway repertoire to commission an architectural masterpiece.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#f2ca50] text-[#3c2f00] text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#ffe088]"
              >
                Explore Repertoire
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Flow */
            <div className="space-y-5">
              <div className="p-4 bg-[#1f1f23] border border-[#d4af37]/40 space-y-2">
                <span className="text-[9px] text-[#f2ca50] uppercase tracking-[0.25em] font-semibold block">
                  STEP 2 OF 2: SECURE CLIENT ALLOCATION
                </span>
                <h4 className="font-serif text-base text-[#e3e2e6] uppercase">White-Glove Delivery Destination</h4>
                <p className="text-xs text-[#d0c5af] font-light">
                  Garments are transported in sealed climate-controlled trunks with bonded courier escort.
                </p>
              </div>

              {checkoutComplete ? (
                <div className="p-8 text-center space-y-4 bg-[#1f1f23] border border-[#f2ca50]">
                  <div className="w-12 h-12 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg uppercase text-[#f2ca50]">Commission Confirmed</h4>
                  <p className="text-xs text-[#e3e2e6]">
                    Your master tailor allocation has been reserved. Dispatch token generated:
                  </p>
                  <div className="p-2.5 bg-[#0d0e11] font-mono text-sm text-[#f2ca50] border border-[#d4af37]/30 tracking-widest">
                    {courierSecurityCode}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                      Patron Delivery Residence / Yacht
                    </label>
                    <select
                      value={selectedAddress}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="w-full bg-[#1f1f23] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]"
                    >
                      <option value="Paris Penthouse (28 Ave Montaigne)">Paris Penthouse (28 Avenue Montaigne, 75008)</option>
                      <option value="Dubai Villa (Palm Jumeirah Frond N)">Dubai Villa (Frond N, Palm Jumeirah)</option>
                      <option value="Monaco Yacht Berth (Port Hercule #19)">Monaco Berth (Quai des États-Unis #19)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#99907c] mb-1">
                      Bespoke Fitting Preference
                    </label>
                    <select className="w-full bg-[#1f1f23] border border-[#292a2d] px-3 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#f2ca50]">
                      <option>White-Glove Penthouse Suite Fitting (Pre-Delivery)</option>
                      <option>Place Vendôme Private Salon Fitting (Paris)</option>
                      <option>Deliver sealed directly to vault residence</option>
                    </select>
                  </div>

                  <div className="p-3 bg-[#0d0e11] text-[10px] text-[#99907c] uppercase space-y-1.5 border border-[#292a2d]">
                    <div className="flex items-center gap-2 text-[#f2ca50]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Encrypted Non-Disclosure Client Ledger</span>
                    </div>
                    <div>Total Allocation Amount: ${subtotal.toLocaleString()} USD</div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="flex-1 py-3 bg-[#292a2d] text-[#e3e2e6] text-[10px] uppercase tracking-[0.2em]"
                    >
                      Back to Bag
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#f2ca50] text-[#3c2f00] text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#ffe088] transition-colors"
                    >
                      Authorize Order
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Items list */
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3.5 bg-[#1f1f23]/70 border border-[#292a2d] transition-all hover:border-[#d4af37]/40"
              >
                <img
                  alt={item.title}
                  src={item.image}
                  className="w-16 h-20 object-cover object-top flex-shrink-0 bg-[#0d0e11]"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-sm text-[#e3e2e6] uppercase leading-tight line-clamp-1">
                        {item.title}
                      </h4>
                      <span className="text-[9px] text-[#f2ca50] uppercase tracking-widest block mt-0.5">
                        {item.house} • {item.size}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        onRemoveItem(item.id);
                        onShowToast(`Removed ${item.title} from Atelier Bag.`);
                      }}
                      className="text-[#99907c] hover:text-[#f2ca50] transition-colors p-1"
                      title="Remove piece"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[10px] text-[#99907c] tracking-wider uppercase">
                      QTY: {item.quantity}
                    </span>
                    <span className="text-xs text-[#e3e2e6] font-semibold">
                      ${item.priceNum.toLocaleString()} USD
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer (Price summary & actions) */}
        {items.length > 0 && !isCheckingOut && (
          <div className="p-5 bg-[#1f1f23] border-t border-[#292a2d] space-y-3">
            <div className="space-y-1.5 text-xs font-light">
              <div className="flex justify-between text-[#d0c5af]">
                <span>Couture Subtotal</span>
                <span className="text-[#e3e2e6] font-semibold">
                  ${subtotal.toLocaleString()} USD
                </span>
              </div>
              <div className="flex justify-between text-[#d0c5af]">
                <span>Global White-Glove Courier</span>
                <span className="text-[#f2ca50] font-semibold uppercase text-[10px]">
                  COMPLIMENTARY
                </span>
              </div>
              <div className="flex justify-between text-[#d0c5af]">
                <span>Bespoke Fitting &amp; Alteration</span>
                <span className="text-[#f2ca50] font-semibold uppercase text-[10px]">
                  INCLUDED
                </span>
              </div>
            </div>

            <div className="h-px bg-[#292a2d] w-full"></div>

            <div className="flex justify-between items-baseline py-1">
              <span className="font-serif text-base uppercase text-[#e3e2e6]">Total Allocation</span>
              <span className="font-serif text-lg text-[#f2ca50] font-bold">
                ${subtotal.toLocaleString()} USD
              </span>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full py-3.5 bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] text-[11px] uppercase tracking-[0.2em] font-semibold transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>PROCEED TO ATELIER CHECKOUT</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#0d0e11] text-[#e3e2e6] hover:text-[#f2ca50] text-[10px] uppercase tracking-[0.18em] transition-colors border border-[#292a2d]"
            >
              CONTINUE BROWSING ATELIER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
