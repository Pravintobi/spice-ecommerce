import { useState, useEffect } from 'react';

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Get time from localStorage or set default to 24 hours
    const savedTime = localStorage.getItem('offerCountdown');
    return savedTime ? parseInt(savedTime) : 24 * 60 * 60;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev > 0 ? prev - 1 : 24 * 60 * 60;
        localStorage.setItem('offerCountdown', newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return {
    hours: Math.floor(timeLeft / 3600),
    minutes: Math.floor((timeLeft % 3600) / 60),
    seconds: timeLeft % 60
  };
}