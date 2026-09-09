import { cn } from '@/lib/utils';

interface MetricProps {
  value: string;
  label: string;
  className?: string;
}

export function Metric({ value, label, className }: MetricProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="font-heading text-subsection text-primary-text dark:text-light-text">
        {value}
      </span>
      <span className="text-metadata text-secondary-text dark:text-dark-text">{label}</span>
    </div>
  );
}
