import { cn } from '@/lib/cn';

type LogoProps = {
  size: number;
  className?: string;
};

const LOGO_BASE = {
  height: 48,
  width: 139,
  gap: 4,
  wordmark: 32,
  icon: {
    width: 25,
    height: 27,
    top: 10,
    left: 11,
  },
} as const;

function scale(value: number, size: number) {
  return (value / LOGO_BASE.height) * size;
}

export default function Logo({ size, className }: LogoProps) {
  const width = scale(LOGO_BASE.width, size);

  return (
    <div
      className={cn('inline-flex shrink-0 items-center', className)}
      style={{ width, height: size, gap: scale(LOGO_BASE.gap, size) }}
    >
      <span className="relative shrink-0 rounded-full bg-[#BFFB4F]" style={{ width: size, height: size }}>
        <img
          src="/images/Logo.png"
          alt=""
          aria-hidden="true"
          className="absolute object-contain"
          style={{
            width: scale(LOGO_BASE.icon.width, size),
            height: scale(LOGO_BASE.icon.height, size),
            top: scale(LOGO_BASE.icon.top, size),
            left: scale(LOGO_BASE.icon.left, size),
          }}
        />
      </span>
      <span
        className="font-black leading-none tracking-[-0.04em] text-[#2D2F33]"
        style={{ fontSize: scale(LOGO_BASE.wordmark, size) }}
      >
        table
      </span>
    </div>
  );
}
