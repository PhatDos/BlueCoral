import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export default function Dropdown({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('animate-dropdown-fade', className)} {...props}>
      {children}
    </div>
  );
}

