import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  className?: string;
  spacing?: 'default' | 'compact' | 'hero' | 'editorial';
  children: ReactNode;
};

const spacingClasses = {
  default: 'py-section',
  compact: 'py-10 md:py-12',
  hero: 'py-6 md:py-8',
  editorial: 'py-section',
};

const Section = ({ children, id, className, spacing = 'default' }: SectionProps) => {
  return (
    <section id={id} className={cn(spacingClasses[spacing], 'px-4 sm:px-6', className)}>
      {children}
    </section>
  );
};

export default Section;
