import { cn } from '@/lib/utils';

interface TechListProps {
  items: string[];
  className?: string;
}

export function TechList({ items, className }: TechListProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li key={item} className="font-mono text-metadata text-secondary-text dark:text-dark-text">
          {item}
        </li>
      ))}
    </ul>
  );
}
