import { ArrowRight } from 'lucide-react';
import HeroShowcase from '@/components/HeroShowcase';
import Logo from '@/components/Logo';
import { cn } from '@/lib/cn';

const HERO_COPY = {
  title: (
    <>
      Quản lý dễ dàng,
      <br />
      bán hàng hiệu quả
    </>
  ),
  description:
    'Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cta: 'Đặt lịch tư vấn',
};

export default function Hero() {
  return (
    <section className="bg-white pb-8 pt-3 md:pb-14 md:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[10px] bg-[#f7f4eb] shadow-[0_14px_42px_rgba(0,0,0,0.06)] md:min-h-[590px] md:rounded-[28px] md:border md:border-[#f0e9d7] md:shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
          <MobileHero />
          <DesktopHero />
          <SliderDots />
        </div>
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <div className="md:hidden">
      <div className="px-4 pt-4">
        <HeroShowcase className="max-w-full" />
      </div>

      <div className="mx-auto max-w-[460px] px-4 pb-4 pt-4 text-center">
        <BrandPill className="mb-3 h-5 w-[50px] px-[5px]" logoSize={14} />
        <HeroText variant="mobile" />
      </div>
    </div>
  );
}

function DesktopHero() {
  return (
    <div className="hidden md:block">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#F8F7ED_0%,#F2F7D7_100%)]" aria-hidden="true" />

      <div className="relative z-10 grid min-h-[590px] grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] items-center gap-6 px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:px-10 xl:grid-cols-2 xl:gap-8 xl:px-14">
        <div className="min-w-0 max-w-[500px] xl:max-w-[560px]">
          <BrandPill
            className="mb-5 h-[44px] w-[101px] gap-[10px] border px-[12px] py-[8px] backdrop-blur-md"
            logoSize={28}
            withGradientBorder
          />
          <HeroText variant="desktop" />
        </div>
        <HeroShowcase className="min-w-0" />
      </div>
    </div>
  );
}

function BrandPill({
  className,
  logoSize,
  withGradientBorder = false,
}: {
  className?: string;
  logoSize: number;
  withGradientBorder?: boolean;
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full bg-[#FFFFFF80] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1),inset_2px_2px_2px_0_rgba(0,0,0,0.04)]',
        className,
      )}
      style={
        withGradientBorder
          ? {
              borderWidth: 1,
              borderImageSource: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
              borderImageSlice: 1,
            }
          : undefined
      }
    >
      <Logo size={logoSize} />
    </div>
  );
}

function HeroText({ variant }: { variant: 'mobile' | 'desktop' }) {
  const isMobile = variant === 'mobile';

  return (
    <>
      <h1
        className={cn(
          'font-extrabold tracking-[-0.02em] text-[#2D2F33]',
          isMobile
            ? 'mx-auto max-w-[220px] text-[24px] leading-[1.18]'
            : 'max-w-[500px] text-[36px] leading-[1.16] tracking-[-0.03em] lg:text-[44px] xl:max-w-[560px] xl:text-[56px] xl:leading-[1.21]',
        )}
      >
        {HERO_COPY.title}
      </h1>
      <p
        className={cn(
          'text-[#2D2F33]',
          isMobile
            ? 'mx-auto mt-4 max-w-[220px] text-[10px] leading-[1.55]'
            : 'mt-5 max-w-[390px] text-[15px] leading-7 xl:max-w-[440px] xl:text-[16px]',
        )}
      >
        {HERO_COPY.description}
      </p>
      <a
        href="#"
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-[80px] bg-gray-900 font-bold text-white shadow-lg shadow-black/10 transition-colors hover:bg-gray-800',
          isMobile
            ? 'mt-5 h-[36px] w-[148px] gap-2 text-[10px]'
            : 'mt-8 h-[60px] w-[234px] gap-[10px] px-[4px] py-[16px] text-[16px]',
        )}
      >
        {HERO_COPY.cta}
        <ArrowRight size={isMobile ? 8 : 20} />
      </a>
    </>
  );
}

function SliderDots() {
  return (
    <div className="relative z-10 flex justify-center gap-1.5 pb-3 md:gap-2 md:pb-7">
      <span className="h-[2px] w-8 rounded-full bg-gray-800 md:h-1.5 md:w-10" />
      <span className="h-[2px] w-3 rounded-full bg-gray-300 md:h-1.5 md:w-4" />
      <span className="h-[2px] w-3 rounded-full bg-gray-300 md:h-1.5 md:w-4" />
      <span className="h-[2px] w-3 rounded-full bg-gray-300 md:h-1.5 md:w-4" />
    </div>
  );
}
