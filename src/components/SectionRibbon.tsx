import React from 'react';

interface SectionRibbonProps {
  title: string;
  variant?: 'navy' | 'orange';
  size?: 'normal' | 'large' | 'small' | 'project';
  className?: string;
}

export const SectionRibbon: React.FC<SectionRibbonProps> = ({
  title,
  variant = 'navy',
  size = 'normal',
  className = '',
}) => {
  const isNavy = variant === 'navy';

  const textSize =
    size === 'large'
      ? 'text-sm sm:text-base md:text-lg'
      : size === 'project'
      ? 'text-xs sm:text-[13px] md:text-sm leading-snug'
      : size === 'small'
      ? 'text-[11px] sm:text-xs leading-snug font-bold'
      : 'text-xs sm:text-sm font-extrabold leading-snug';

  return (
    <div className={`relative flex items-stretch my-2 select-none max-w-full ${className}`}>
      {/* Orange Diagonal Accent Slash on the Left (stretches to full wrapped height) */}
      <div
        className="w-3.5 sm:w-4 shrink-0 bg-[#ea580c] z-10 self-stretch"
        style={{
          clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
        }}
      />

      {/* Main Ribbon Body with adaptive height and padding */}
      <div
        className={`-ml-1.5 flex-1 min-w-0 ${
          isNavy ? 'bg-[#0c2340] text-white' : 'bg-[#ea580c] text-white'
        } py-1.5 px-3.5 sm:px-5 flex items-center shadow-xs min-h-[30px] sm:min-h-[34px]`}
        style={{
          clipPath: 'polygon(6px 0, calc(100% - 10px) 0, 100% 100%, 0 100%)',
        }}
      >
        <span className={`${textSize} italic tracking-wide uppercase font-black break-words leading-tight`}>
          {title}
        </span>
      </div>

      {/* Trailing accent on the right */}
      {isNavy && (
        <div
          className="w-2.5 sm:w-3 shrink-0 bg-[#ea580c] -ml-1 self-stretch"
          style={{
            clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
          }}
        />
      )}
    </div>
  );
};
