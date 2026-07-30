import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export function LoginButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={cn(
        'flex h-12 w-[123px] items-center justify-center whitespace-nowrap rounded-[80px] border border-[#2D2F3333] px-5 py-3 text-[16px] font-semibold leading-6 text-gray-800 transition-colors hover:bg-gray-50',
        className,
      )}
    >
      Đăng nhập
    </a>
  );
}

export function FreeTrialButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={cn(
        'flex h-12 w-[203px] items-center justify-center gap-1.5 whitespace-nowrap rounded-[80px] bg-[#BFFB4F] px-5 py-3 text-[16px] font-bold leading-6 text-[#2D2F33] shadow-[0_8px_18px_rgba(191,251,79,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#B4F33F] hover:shadow-[0_14px_30px_rgba(191,251,79,0.4)] active:translate-y-0',
        className,
      )}
    >
      Sử dụng miễn phí
      <ArrowRight size={17} />
    </a>
  );
}
