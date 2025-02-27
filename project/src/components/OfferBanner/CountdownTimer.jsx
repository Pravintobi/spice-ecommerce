import React from 'react';
import { useCountdown } from './useCountdown';

export function CountdownTimer() {
  const { hours, minutes, seconds } = useCountdown();
  
  return (
    <span className="font-mono">
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
}