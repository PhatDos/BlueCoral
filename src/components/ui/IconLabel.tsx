import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function IconLabel({
  icon: Icon,
  children,
  badge,
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  children: ReactNode;
  badge?: ReactNode;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2 whitespace-nowrap', className)}>
      <Icon className={cn('h-4 w-4 flex-shrink-0', iconClassName)} strokeWidth={2.3} />
      {children}
      {badge}
    </span>
  );
}

