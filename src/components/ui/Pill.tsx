import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type PillSize = 'xs' | 'sm' | 'md';

const sizeClass: Record<PillSize, string> = {
  xs: 'h-[clamp(12px,3vw,16px)] px-[clamp(6px,1.8vw,8px)] text-[clamp(6px,1.7vw,8px)]',
  sm: 'h-5 px-3 text-[7px]',
  md: 'h-6 px-4 text-[10px]',
};

export default function Pill({
  children,
  size = 'md',
  className,
}: {
  children: ReactNode;
  size?: PillSize;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#BFFB4F] font-extrabold uppercase leading-none text-[#2D2F33]',
        sizeClass[size],
        className,
      )}
    >
      {children}
    </span>
  );
}

