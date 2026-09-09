import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-accent-light dark:focus-visible:ring-offset-dark-bg',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-white shadow-md shadow-accent/20 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 dark:bg-accent-light dark:text-dark-bg dark:shadow-accent-light/20 dark:hover:bg-accent-light-hover dark:hover:shadow-accent-light/30',
        outline:
          'border border-border-light bg-transparent text-primary-text hover:border-accent hover:text-accent dark:border-border-dark dark:text-light-text dark:hover:border-accent-light dark:hover:text-accent-light',
        ghost:
          'text-secondary-text hover:bg-light-surface hover:text-primary-text dark:text-dark-text dark:hover:bg-dark-surface dark:hover:text-light-text',
      },
      size: {
        default: 'h-9 px-4 py-2 text-sm',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-5 text-sm',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
