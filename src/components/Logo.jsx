import React from 'react';

export default function Logo({ size = 'normal', variant = 'dark' }) {
  const isLight = variant === 'light';
  const logoSrc = isLight ? '/argun-logo-white.png' : '/argun-logo.png';
  const heightClass = size === 'large' ? 'h-11' : 'h-9';
  
  return (
    <div className="flex items-center">
      <img
        src={logoSrc}
        alt="Argun Software Solutions"
        className={`${heightClass} w-auto object-contain block`}
      />
    </div>
  );
}
