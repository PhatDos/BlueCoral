import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export function LoginButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Button as="a" href="#" variant="outline" className={className ?? 'w-[123px]'} onClick={onClick}>
      Đăng nhập
    </Button>
  );
}

export function FreeTrialButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Button as="a" href="#" variant="lime" className={className ?? 'w-[203px] gap-1.5'} onClick={onClick}>
      Sử dụng miễn phí
      <ArrowRight size={17} />
    </Button>
  );
}

