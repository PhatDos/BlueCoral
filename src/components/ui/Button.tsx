import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'dark' | 'lime' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantClass: Record<ButtonVariant, string> = {
  dark:
    'bg-gray-900 text-white shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl active:translate-y-0',
  lime:
    'bg-[#BFFB4F] text-[#2D2F33] shadow-[0_8px_18px_rgba(191,251,79,0.22)] hover:-translate-y-0.5 hover:bg-[#B4F33F] hover:shadow-[0_14px_30px_rgba(191,251,79,0.4)] active:translate-y-0',
  outline: 'border border-[#2D2F3333] bg-white text-gray-800 hover:bg-gray-50',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'h-[36px] px-4 text-[10px]',
  md: 'h-12 px-5 text-[16px]',
  lg: 'h-[60px] px-6 text-[16px]',
};

export default function Button(props: ButtonProps) {
  const { as = 'button', variant = 'dark', size = 'md', className, children, ...rest } = props;
  const classes = cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-[80px] font-bold leading-6 transition-all duration-300 ease-out',
    variantClass[variant],
    sizeClass[size],
    className,
  );

  if (as === 'a') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

