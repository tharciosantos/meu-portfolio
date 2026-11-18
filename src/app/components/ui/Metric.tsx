import { cn } from '@/lib/utils';

interface MetricProps {
  value: string;
  label: string;
  className?: string;
}

export function Metric({ value, label, className }: MetricProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="font-mono text-body font-medium text-text-primary">{value}</span>
      <span className="font-mono text-metadata text-text-secondary">{label}</span>
    </div>
  );
}
