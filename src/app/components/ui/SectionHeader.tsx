import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-8 sm:mb-10 max-w-prose-wide', className)}>
      {eyebrow && (
        <p className="mb-2 font-mono text-metadata uppercase tracking-wider text-accent dark:text-accent-light">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-3 font-heading text-section-title text-primary-text dark:text-light-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-secondary-text dark:text-dark-text">{subtitle}</p>
      )}
    </div>
  );
}
