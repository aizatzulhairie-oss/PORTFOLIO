import React from 'react';

interface PageFooterProps {
  pageNumber?: string; // e.g. "PAGE 1 / 2", "PAGE 2 / 2"
}

export const PageFooter: React.FC<PageFooterProps> = ({ pageNumber }) => {
  return (
    <div className="relative w-full pt-4 pb-2 mt-6 select-none flex items-center justify-between overflow-hidden">
      {/* Left Bottom Geometric Decoration */}
      <div className="flex items-center space-x-1">
        <div
          className="w-16 sm:w-24 h-2 bg-[#ea580c]"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)',
          }}
        />
        <div
          className="w-8 sm:w-12 h-2 bg-[#0c2340]"
          style={{
            clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 100%, 0 100%)',
          }}
        />
        <div
          className="w-4 h-2 bg-[#ea580c]"
          style={{
            clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
          }}
        />
      </div>

      {/* Center or Right Page indicator if present */}
      {pageNumber ? (
        <div className="relative flex items-center z-10">
          <div
            className="w-4 h-7 bg-[#ea580c] -mr-1"
            style={{
              clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
            }}
          />
          <div
            className="bg-[#0c2340] text-white px-5 py-1 text-xs font-black tracking-widest uppercase italic shadow-md"
            style={{
              clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 100%, 0 100%)',
            }}
          >
            {pageNumber}
          </div>
          <div
            className="w-3 h-7 bg-[#ea580c] -ml-1"
            style={{
              clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
            }}
          />
        </div>
      ) : (
        <div className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
          Aizat Zul Hairie Bin Wahi • Engineering Portfolio
        </div>
      )}
    </div>
  );
};
