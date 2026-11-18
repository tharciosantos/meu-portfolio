import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border border-transparent bg-btn-primary text-btn-primary-fg hover:bg-btn-primary-hover active:bg-btn-primary-active',
        outline:
          'border border-border-default bg-btn-outline text-btn-outline-fg hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active',
        ghost:
          'border border-transparent bg-transparent text-btn-ghost-fg hover:bg-btn-ghost-hover hover:text-btn-ghost-fg-hover active:bg-btn-ghost-active',
      },
      size: {
        default: 'h-10 px-4 py-2 text-body',
        sm: 'h-8 px-3 font-mono text-metadata',
        lg: 'h-11 px-5 text-body',
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
