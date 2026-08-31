import React from 'react';

export function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#07080a]">
      <div
        className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[140px] transform -translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[160px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-noise opacity-40" aria-hidden="true" />
    </div>
  );
}