import { cn } from '@/lib/utils';
import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-3xl border border-white/10 bg-brand-slate/50 backdrop-blur-xl', className)}
      {...props}
    >
      {children}
    </div>
  );
}
