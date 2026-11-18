import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BrowserFrameProps = {
  domain?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function extractHostname(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0] || undefined;
  }
}

export function BrowserFrame({ domain, children, className, contentClassName }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-card border border-border-default bg-surface-card shadow-card',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="flex h-7 items-center justify-between gap-3 border-b border-border-default bg-surface-subtle px-3"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-border-hover" />
          <span className="h-2 w-2 rounded-full bg-border-hover" />
          <span className="h-2 w-2 rounded-full bg-border-hover" />
        </div>
        {domain && (
          <span className="truncate font-mono text-metadata leading-none text-text-secondary">
            {domain}
          </span>
        )}
      </div>
      <div className={cn('relative w-full overflow-hidden bg-surface-subtle', contentClassName)}>
        {children}
      </div>
    </div>
  );
}
