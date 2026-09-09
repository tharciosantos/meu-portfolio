import * as React from 'react';
import { cn } from '@/lib/utils';

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Pill({ children, className, ...props }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border-light bg-light-surface px-2.5 py-0.5 text-[11px] sm:text-xs text-secondary-text dark:border-border-dark dark:bg-dark-surface dark:text-dark-text',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
