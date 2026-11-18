import * as React from 'react';
import { cn } from '@/lib/utils';

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Pill({ children, className, ...props }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex max-w-full items-center rounded-tag border border-border-default bg-transparent px-[7px] py-[2px] font-mono text-metadata leading-tight text-text-secondary break-words',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
