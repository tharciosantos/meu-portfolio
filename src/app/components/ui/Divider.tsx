import { cn } from '@/lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ orientation = 'horizontal', className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        'border-border-light dark:border-border-dark',
        orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
        className
      )}
      {...props}
    />
  );
}
