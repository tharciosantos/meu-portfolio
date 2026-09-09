import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function NextJsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.572 0a12 12 0 0 0-9.878 18.79l15.824-18.15A11.95 11.95 0 0 0 11.572 0m7.53 3.69L6.963 17.653A12.003 12.003 0 0 0 24 12c0-3.23-1.275-6.16-3.35-8.31M8.618 6.545v10.91H6.709V6.545zm8.673 0v6.182h-1.909V6.545z" />
    </svg>
  );
}

export function ReactIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function TypeScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M6 8.5h6m-3 0v9M14.5 13.5c.8.8 1.8 1.2 2.8 1.2 1.2 0 1.9-.6 1.9-1.4 0-1-.9-1.4-2.2-1.8-1.7-.5-2.8-1.2-2.8-2.6 0-1.5 1.2-2.6 3.1-2.6 1.2 0 2.2.4 2.9 1l-.9 1.5c-.6-.5-1.3-.8-2-.8-1 0-1.6.5-1.6 1.2 0 .8.8 1.2 2 1.6 1.8.6 3 1.3 3 2.8 0 1.6-1.3 2.7-3.3 2.7-1.5 0-2.7-.5-3.5-1.3l.9-1.6z" />
    </svg>
  );
}

export function TailwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  );
}

export function NodeJsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2L3 7.2v10.4L12 23l9-5.4V7.2L12 2zm0 2.2l6.9 4-6.9 4-6.9-4L12 4.2zM5.1 8.8l6 3.5v7.2l-6-3.6V8.8zm7.8 10.7v-7.2l6-3.5v7.1l-6 3.6z" />
    </svg>
  );
}

export function RestApiIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

export function NextAuthIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="11" r="2.5" />
      <path d="M12 13.5V16" />
    </svg>
  );
}

export function ZodIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3.5 12h-7l5-6.5H8.5V8h7l-5 6.5h5V16z" />
    </svg>
  );
}

export function PrismaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.5 19.3L13.8 2.1c-.7-1.4-2.7-1.4-3.4 0L1.7 19.3c-.7 1.4.3 3 1.7 3h17.4c1.4 0 2.4-1.6 1.7-3zM12 5.5l6.5 12.8H5.5L12 5.5z" />
    </svg>
  );
}

export function PostgresIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

export function SupabaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.43 14.286a.8.8 0 0 0 .618 1.309H12v8.009a.396.396 0 0 0 .716.233l10.854-13.123a.8.8 0 0 0-.618-1.31z" />
    </svg>
  );
}

export function RlsIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function VercelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2L24 22H0L12 2z" />
    </svg>
  );
}

export function VitestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.5 2.5l-6 11-3-4.5-6 12.5h19l-4-19zm-5.5 10.5l4-7.5 2.5 12H7l4-8.5 1 2.5z" />
    </svg>
  );
}

export function CypressIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8.5c-1-1-2.5-1.5-4-1.5-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5c1.8 0 3.3-.8 4.2-2.1" />
    </svg>
  );
}

export function GitIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6" />
      <path d="M9 18h6" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8 0 3.2.9.8 1.4 1.9 1.4 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  );
}

export function GitHubActionsIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TechIcon({ name, className = 'h-4 w-4' }: { name: string; className?: string }) {
  const norm = name.trim().toLowerCase();

  if (norm.includes('next.js') || norm === 'nextjs') return <NextJsIcon className={className} />;
  if (norm.includes('react')) return <ReactIcon className={className} />;
  if (norm.includes('typescript')) return <TypeScriptIcon className={className} />;
  if (norm.includes('tailwind')) return <TailwindIcon className={className} />;
  if (norm.includes('node')) return <NodeJsIcon className={className} />;
  if (norm.includes('api') || norm.includes('rest')) return <RestApiIcon className={className} />;
  if (norm.includes('auth') || norm.includes('nextauth'))
    return <NextAuthIcon className={className} />;
  if (norm.includes('zod')) return <ZodIcon className={className} />;
  if (norm.includes('prisma')) return <PrismaIcon className={className} />;
  if (norm.includes('postgre')) return <PostgresIcon className={className} />;
  if (norm.includes('supabase')) return <SupabaseIcon className={className} />;
  if (norm.includes('rls') || norm.includes('security') || norm.includes('row level'))
    return <RlsIcon className={className} />;
  if (norm.includes('vercel')) return <VercelIcon className={className} />;
  if (norm.includes('vitest')) return <VitestIcon className={className} />;
  if (norm.includes('cypress')) return <CypressIcon className={className} />;
  if (norm.includes('actions')) return <GitHubActionsIcon className={className} />;
  if (norm.includes('github')) return <GitHubIcon className={className} />;
  if (norm.includes('git')) return <GitIcon className={className} />;

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-4 min-w-4 items-center justify-center rounded bg-current/10 text-[9px] font-bold font-mono"
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}
