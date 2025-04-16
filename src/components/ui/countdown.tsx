
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CountdownProps {
  endDate: Date;
  className?: string;
  onComplete?: () => void;
}

export function Countdown({ endDate, className, onComplete }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isCompleted: false
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isCompleted: false
      };
    } else {
      timeLeft.isCompleted = true;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
      
      if (updatedTimeLeft.isCompleted && onComplete) {
        onComplete();
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className={cn("grid grid-flow-col gap-2 text-center auto-cols-max", className)}>
      {timeLeft.days > 0 && (
        <div className="flex flex-col p-1 bg-neutral-100 rounded-md text-xs">
          <span className="font-mono font-semibold">{formatTime(timeLeft.days)}</span>
          <span className="text-xs text-muted-foreground">days</span>
        </div>
      )}
      <div className="flex flex-col p-1 bg-neutral-100 rounded-md text-xs">
        <span className="font-mono font-semibold">{formatTime(timeLeft.hours)}</span>
        <span className="text-xs text-muted-foreground">hrs</span>
      </div>
      <div className="flex flex-col p-1 bg-neutral-100 rounded-md text-xs">
        <span className="font-mono font-semibold">{formatTime(timeLeft.minutes)}</span>
        <span className="text-xs text-muted-foreground">min</span>
      </div>
      <div className="flex flex-col p-1 bg-neutral-100 rounded-md text-xs">
        <span className="font-mono font-semibold">{formatTime(timeLeft.seconds)}</span>
        <span className="text-xs text-muted-foreground">sec</span>
      </div>
    </div>
  );
}
