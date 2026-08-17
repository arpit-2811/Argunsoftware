import React from 'react';

export default function Logo({ size = 'normal', variant = 'dark' }) {
  const isLight = variant === 'light';
  
  return (
    <div className="flex items-center gap-3">
      {/* Icon Mark */}
      <div className={`relative flex items-center justify-center rounded-lg ${
        size === 'large' ? 'w-10 h-10' : 'w-9 h-9'
      } bg-navy overflow-hidden shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
          {/* Stylized White A */}
          <path d="M 28 82 L 50 18 L 72 82 L 58 82 L 50 56 L 42 82 Z" fill="#FFFFFF"/>
          {/* Electric Blue Swoosh */}
          <path d="M 16 68 C 35 48, 65 48, 84 68 C 65 54, 35 54, 16 68 Z" fill="#1E63D6"/>
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight leading-none ${
          size === 'large' ? 'text-xl' : 'text-lg'
        } ${isLight ? 'text-white' : 'text-navy'}`}>
          ARGUN
        </span>
        <span className={`font-semibold tracking-wider text-[9px] uppercase mt-0.5 ${
          isLight ? 'text-slate-300' : 'text-electric'
        }`}>
          Software Solutions
        </span>
      </div>
    </div>
  );
}
