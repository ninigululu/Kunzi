
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'color', className = "h-8", showText = true }) => {
  const primary = variant === 'light' ? '#FFFFFF' : '#0F172A';
  const secondary = variant === 'light' ? 'rgba(255,255,255,0.6)' : '#6366F1';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Geometric Sharp Symbol: Minimalist Wing/Fin Hybrid */}
        <path
          d="M10 50L50 10V90L10 50Z"
          fill={primary}
          className="transition-all duration-300"
        />
        <path
          d="M90 50L50 25V75L90 50Z"
          fill={secondary}
          className="transition-all duration-300"
        />
        <path
          d="M50 45L70 50L50 55V45Z"
          fill={primary}
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-xl font-extrabold tracking-[-0.03em] ${variant === 'light' ? 'text-white' : 'text-slate-900'}`}>
            KUNZI
          </span>
          <span className={`text-[8px] uppercase tracking-[0.4em] font-bold ${variant === 'light' ? 'text-white/60' : 'text-indigo-600'}`}>
            CONSULTANCY
          </span>
        </div>
      )}
    </div>
  );
};
