import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenCallback: () => void;
  onScrollToCatalog: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenCallback,
  onScrollToCatalog
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:1800229575"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#EAF2EE] hover:bg-emerald-100 text-[#183B30] rounded-xl text-center"
        >
          <Phone className="w-4 h-4 text-[#0057B5] mb-0.5" />
          <span className="text-[10px] font-bold leading-none">Call Toll Free</span>
        </a>

        <a
          href="https://wa.me/919820000000?text=Hello%20Alps%20Hotels%20and%20Travels%20Team%2C%20I%20am%20interested%20in%20planning%20a%20tour"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#EAF2EE] hover:bg-emerald-100 text-[#183B30] rounded-xl text-center"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-bold leading-none">WhatsApp</span>
        </a>

        <button
          onClick={onOpenCallback}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#0057B5] hover:bg-[#004694] text-white rounded-xl text-center font-bold"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] leading-none">Free Callback</span>
        </button>
      </div>
    </div>
  );
};
