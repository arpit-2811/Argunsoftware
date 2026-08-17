import React from 'react';

export default function Logo({ size = 'normal', variant = 'dark' }) {
  const isLight = variant === 'light';
  
  return (
    <div className="flex items-center gap-3">
      {/* Icon Mark */}
      <div className={`relative flex items-center justify-center rounded-lg ${
        size === 'large' ? 'w-10 h-10' : 'w-9 h-9'
      } bg-navy overflow-hidden shrink-0`}>
        <img src="/argunlogo.jpeg" alt="Argun Logo" className="w-full h-full object-cover" />
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
