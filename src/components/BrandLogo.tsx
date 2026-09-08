import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true
}) => {
  const isLight = variant === 'light' || variant === 'white';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-base font-extrabold tracking-tight',
    md: 'text-xl md:text-2xl font-black tracking-tight',
    lg: 'text-2xl md:text-3xl font-black tracking-tight'
  };

  const taglineSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] md:text-[11px] tracking-widest',
    lg: 'text-[11px] md:text-xs tracking-widest'
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Custom stylized Maritime & Air Vector Emblem matching PDF crest */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 shadow-md ring-1 ring-white/20 p-2 text-white shrink-0`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow"
        >
          {/* Globe Grid Circle */}
          <circle cx="50" cy="50" r="42" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.6" />
          <ellipse cx="50" cy="50" rx="42" ry="18" stroke="#38bdf8" strokeWidth="2" opacity="0.4" />
          
          {/* Sea Waves in Teal / Amber */}
          <path
            d="M15 68 C 28 60, 42 74, 58 66 C 72 58, 85 70, 88 66"
            stroke="#f59e0b"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M12 78 C 26 70, 40 84, 56 76 C 70 68, 84 80, 88 76"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Cargo Ship Silhouette */}
          <path
            d="M26 62 L32 48 L68 48 L74 62 C 60 65, 40 65, 26 62 Z"
            fill="#ffffff"
          />
          {/* Ship Cabin & Containers */}
          <rect x="36" y="38" width="14" height="10" rx="1" fill="#f59e0b" />
          <rect x="52" y="38" width="12" height="10" rx="1" fill="#38bdf8" />
          <rect x="42" y="30" width="8" height="8" fill="#ffffff" />
          <rect x="44" y="24" width="4" height="6" fill="#f59e0b" />

          {/* Ascending Air Cargo Plane */}
          <path
            d="M60 22 L72 16 L76 18 L70 24 L78 26 L80 29 L75 29 L70 33 L67 32 L69 28 L60 26 Z"
            fill="#ffffff"
          />
        </svg>

        {/* Small gold sparkle badge */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`font-display uppercase leading-tight ${titleSizes[size]}`}>
          <span className={isLight ? 'text-white' : 'text-teal-900 font-black'}>SEAIR </span>
          <span className={isLight ? 'text-amber-400' : 'text-teal-700 font-black'}>WORLD</span>
        </div>
        <div className={`font-display font-bold tracking-wider -mt-0.5 ${size === 'sm' ? 'text-xs' : 'text-sm'} ${isLight ? 'text-slate-200' : 'text-slate-800'}`}>
          LOGISTICS
        </div>
        {showTagline && (
          <div className={`font-medium uppercase ${taglineSizes[size]} ${isLight ? 'text-amber-300/90' : 'text-teal-700 font-semibold'}`}>
            Reliable & Trusted Partner
          </div>
        )}
      </div>
    </div>
  );
};
