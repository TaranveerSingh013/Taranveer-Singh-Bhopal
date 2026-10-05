import React, { useState } from 'react';
import { ProductItem } from '../types';
import { X, ShieldCheck, Truck, Sparkles, Check } from 'lucide-react';

interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToBag: (product: ProductItem, selectedSize: string) => void;
  onShowToast: (msg: string) => void;
  onOpenAppointmentModal: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToBag,
  onShowToast,
  onOpenAppointmentModal
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[0] || 'EU 38');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToBag(product, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0e11]/85 backdrop-blur-xl flex items-center justify-center p-4">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-4xl bg-[#1b1b1f] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#292a2d] z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-30 w-8 h-8 bg-[#0d0e11]/80 text-[#e3e2e6] hover:text-[#f2ca50] flex items-center justify-center transition-colors border border-[#292a2d]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Image Viewport */}
        <div className="w-full md:w-1/2 aspect-[3/4] bg-[#0d0e11] relative overflow-hidden flex-shrink-0">
          <img
            alt={product.title}
            src={product.image}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 bg-[#0d0e11]/85 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-widest text-[#f2ca50] border border-[#d4af37]/30">
            {product.editionNote}
          </div>
        </div>

        {/* Right Details Viewport */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-[#1b1b1f] overflow-y-auto max-h-[85vh] md:max-h-none">
          <div>
            <div className="flex items-center justify-between text-[#f2ca50] text-[10px] uppercase tracking-[0.25em] font-semibold mb-1">
              <span>{product.categoryLabel}</span>
              <span className="text-[#99907c]">{product.hoursCrafted}h Atelier Craft</span>
            </div>

            <h3 className="font-serif text-2xl lg:text-3xl text-[#e3e2e6] uppercase mb-2 leading-tight">
              {product.title}
            </h3>

            <p className="text-xl text-[#f2ca50] font-semibold mb-4">
              {product.price}
            </p>

            <div className="h-px bg-[#292a2d] w-full mb-4"></div>

            <p className="text-xs text-[#d0c5af] font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Fabric specification highlight */}
            <div className="p-3 bg-[#121316] border border-[#292a2d] mb-5 space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-[#99907c] block">
                Primary Material Provenance
              </span>
              <span className="text-xs text-[#e3e2e6] font-medium block">
                {product.featuredFabric}
              </span>
            </div>

            {/* Sizing Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest text-[#99907c]">
                  Select Size / Bespoke Fit
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenAppointmentModal();
                  }}
                  className="text-[10px] text-[#f2ca50] underline tracking-wider uppercase"
                >
                  Virtual 3D Fitting Consult
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-[10px] uppercase tracking-wider font-semibold border transition-all ${
                      selectedSize === size
                        ? 'bg-[#f2ca50] text-[#3c2f00] border-[#f2ca50]'
                        : 'bg-[#121316] text-[#e3e2e6] border-[#292a2d] hover:border-[#99907c]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="space-y-2 text-[#99907c] text-[10px] uppercase tracking-wider pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>Serialized Provenance Registry: {product.serialAllocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>White-Glove Temperature Controlled Courier Included</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-4 border-t border-[#292a2d]">
            <button
              onClick={handleAdd}
              disabled={added}
              className="w-full py-4 bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] text-[11px] uppercase tracking-[0.25em] font-semibold transition-all shadow-xl flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ALLOCATED TO ATELIER BAG</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>ACQUIRE MASTERPIECE • ADD TO ATELIER BAG</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
