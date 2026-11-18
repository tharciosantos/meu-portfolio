import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ index, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-12 grid grid-cols-1 gap-2 lg:grid-cols-[72px_1fr] lg:items-baseline lg:gap-6',
        className
      )}
    >
      <span aria-hidden="true" className="font-mono text-metadata text-text-secondary">
        [{index}]
      </span>

      <div className="max-w-prose-wide">
        <h2 className="font-heading text-section-title text-text-primary [text-wrap:balance]">
          {title}
        </h2>
        {subtitle && <p className="mt-3 text-body-lg text-text-secondary">{subtitle}</p>}
      </div>
    </div>
  );
}
