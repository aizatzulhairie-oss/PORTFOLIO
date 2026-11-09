import React from 'react';

interface HeaderBannerProps {
  title: string;
  subtitle?: string;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({ title }) => {
  return (
    <div className="relative w-full overflow-hidden mb-5 sm:mb-6 select-none">
      {/* Background container with diagonal cuts */}
      <div className="flex items-stretch justify-between min-h-[58px] sm:min-h-[68px] relative">
        
        {/* Left Navy & Orange Angled Title Banner */}
        <div className="relative flex items-center z-10">
          {/* Main Navy Polygon */}
          <div
            className="bg-[#0c2340] text-white font-extrabold italic tracking-wider px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-xl md:text-2xl flex items-center shadow-md"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 100%, 0 100%)',
              paddingRight: '2.5rem',
            }}
          >
            <span className="drop-shadow-sm uppercase">{title}</span>
          </div>

          {/* Orange Diagonal Accent Slash */}
          <div
            className="w-5 sm:w-6 h-full bg-[#ea580c] -ml-2"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)',
            }}
          />
        </div>

        {/* Right Corner: ENGINEERING PORTFOLIO Branding */}
        <div className="flex items-center gap-2 pr-2 sm:pr-4 z-10 text-right">
          <div className="flex flex-col leading-none font-black tracking-tighter">
            <span className="text-[#0c2340] text-sm sm:text-lg md:text-xl uppercase">
              ENGINEERING
            </span>
            <span className="text-[#ea580c] text-sm sm:text-lg md:text-xl uppercase">
              PORTFOLIO
            </span>
          </div>
        </div>

        {/* Decorative Top Right Geometric polygon lines */}
        <div className="absolute top-0 right-0 w-32 h-3 pointer-events-none flex justify-end">
          <div className="w-12 h-1.5 bg-[#ea580c] transform skew-x-[-35deg]" />
          <div className="w-8 h-1.5 bg-[#0c2340] ml-1 transform skew-x-[-35deg]" />
        </div>
      </div>

      {/* Subtle thin separator line matching the original document structure */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#0c2340] via-[#ea580c] to-[#0c2340]/20 mt-1 opacity-70" />
    </div>
  );
};
