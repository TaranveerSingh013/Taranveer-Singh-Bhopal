import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#1b1b1f] text-[#e3e2e6] border border-[#d4af37]/60 shadow-[0_12px_36px_rgba(0,0,0,0.8)] px-5 py-4 flex items-center gap-3.5 animate-in fade-in slide-in-from-bottom-3 duration-300 max-w-md">
      <CheckCircle2 className="w-5 h-5 text-[#f2ca50] flex-shrink-0" />
      <span className="text-[11px] font-medium tracking-wider uppercase leading-snug flex-1">
        {message}
      </span>
      <button
        onClick={onClose}
        className="text-[#99907c] hover:text-[#e3e2e6] transition-colors p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
