import { cn } from '@/lib/utils';

interface CodeSnippetProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export function CodeSnippet({ children, className, ...props }: CodeSnippetProps) {
  return (
    <pre
      className={cn(
        'overflow-x-auto rounded-card border border-border-light bg-light-surface p-4 font-mono text-sm text-primary-text dark:border-border-dark dark:bg-dark-surface dark:text-light-text',
        className
      )}
      {...props}
    >
      <code>{children}</code>
    </pre>
  );
}
