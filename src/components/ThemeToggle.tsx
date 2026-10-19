import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
  className?: string;
  variant?: 'compact' | 'full';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
  variant = 'compact'
}) => {
  const isDark = theme === 'dark';

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-all cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#92713A]/50 focus-visible:outline-none ${
          isDark
            ? 'bg-slate-900/90 border-amber-500/25 text-amber-200 hover:bg-slate-800 hover:border-amber-400/50'
            : 'bg-[#FFFFFF] border-[#E5DFD4] text-[#242329] hover:bg-[#F2EEE6] hover:border-[#92713A]/40 shadow-sm'
        } ${className}`}
        aria-label={isDark ? 'Switch to Bright Light mode' : 'Switch to Cosmic Dark mode'}
      >
        <span className="flex items-center gap-2.5 text-xs font-medium">
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 text-[#92713A] transition-transform hover:-rotate-12" />
          )}
          <span>{isDark ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}</span>
        </span>
        <span
          className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md transition-colors ${
            isDark
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'bg-[#EDE3CF] text-[#765927] border border-[#E5DFD4]'
          }`}
        >
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 rounded-lg border transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#92713A]/50 focus-visible:outline-none ${
        isDark
          ? 'border-amber-500/25 bg-slate-900/80 text-amber-300 hover:border-amber-400/60 hover:bg-slate-800 hover:text-amber-200'
          : 'border-[#E5DFD4] bg-[#FFFFFF] text-[#92713A] hover:border-[#92713A]/50 hover:bg-[#F2EEE6] hover:text-[#765927] shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Bright Mode (Daylight)' : 'Switch to Dark Mode (Cosmic Night)'}
      aria-label={isDark ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transform transition-all duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 text-[#92713A] transform transition-all duration-300 -rotate-12 scale-100" />
        )}
      </div>
    </button>
  );
};
