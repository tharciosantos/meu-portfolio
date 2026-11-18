import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  className?: string;
  spacing?: 'default' | 'compact' | 'hero' | 'editorial';
  surface?: 'default' | 'muted';
  children: ReactNode;
};

const spacingClasses = {
  default: 'py-16 sm:py-20 lg:py-24',
  compact: 'py-10 sm:py-14',
  hero: 'py-8 sm:py-10 lg:py-12',
  editorial: 'py-16 sm:py-20 lg:py-24',
};

const surfaceClasses = {
  default: 'bg-page',
  muted: 'bg-surface-subtle',
};

const Section = ({
  children,
  id,
  className,
  spacing = 'default',
  surface = 'default',
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(spacingClasses[spacing], surfaceClasses[surface], 'px-4 sm:px-6', className)}
    >
      {children}
    </section>
  );
};

export default Section;
