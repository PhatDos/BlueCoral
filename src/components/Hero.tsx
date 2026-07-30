import { ArrowRight } from 'lucide-react';
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

const mobileCards = [
  { src: '/images/an-uong.png', label: 'Ăn uống' },
  { src: '/images/ban-le.png', label: 'Bán lẻ' },
  { src: '/images/dich-vu.png', label: 'Dịch vụ' },
];

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
      <MobileArtwork />

      <div className="px-4 pb-4 pt-4">
        <BrandPill className="mb-3 h-5 w-[50px] px-[5px]" logoSize={14} />
        <HeroText variant="mobile" />
      </div>
    </div>
  );
}

function DesktopHero() {
  return (
    <div className="hidden md:block">
      <img
        src="/images/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute h-full w-full object-cover object-[68%_center] xl:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,238,0.94)_0%,rgba(248,246,238,0.78)_30%,rgba(248,246,238,0.28)_55%,rgba(248,246,238,0.08)_78%,rgba(248,246,238,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_14%,rgba(255,255,255,0.6),transparent_11%),radial-gradient(circle_at_86%_16%,rgba(216,248,86,0.22),transparent_17%),radial-gradient(circle_at_12%_84%,rgba(198,242,53,0.16),transparent_22%)]" />

      <div className="relative z-10 grid min-h-[590px] grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] items-center gap-6 px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:px-10 xl:grid-cols-2 xl:gap-8 xl:px-14">
        <div className="min-w-0 max-w-[500px] xl:max-w-[560px]">
          <BrandPill
            className="mb-5 h-[44px] w-[101px] gap-[10px] border px-[12px] py-[8px] backdrop-blur-md"
            logoSize={28}
            withGradientBorder
          />
          <HeroText variant="desktop" />
        </div>
        <div className="min-h-[420px] min-w-0" aria-hidden="true" />
      </div>
    </div>
  );
}

function MobileArtwork() {
  return (
    <div className="relative mx-3 mt-3 h-[116px] overflow-hidden rounded-[7px] bg-[#edf4d9]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(191,251,79,0.26),rgba(255,255,255,0.64)_58%,rgba(191,251,79,0.18))]" />
      <img
        src="/images/MobileBg1.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-[-4px] left-[-56px] h-auto w-[300px] max-w-none"
      />
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-end gap-1.5">
        {mobileCards.map((card) => (
          <div
            key={card.src}
            className="w-[43px] overflow-hidden rounded-[3px] border border-white bg-white shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
          >
            <img src={card.src} alt="" aria-hidden="true" className="h-[28px] w-full object-cover" />
            <div className="truncate px-0.5 py-[2px] text-center text-[4px] font-bold leading-none text-[#2D2F33]">
              {card.label}
            </div>
          </div>
        ))}
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
            ? 'max-w-[160px] text-[17px] leading-[1.18]'
            : 'max-w-[500px] text-[36px] leading-[1.16] tracking-[-0.03em] lg:text-[44px] xl:max-w-[560px] xl:text-[56px] xl:leading-[1.21]',
        )}
      >
        {HERO_COPY.title}
      </h1>
      <p
        className={cn(
          'text-[#2D2F33]',
          isMobile
            ? 'mt-3 max-w-[150px] text-[6px] leading-[1.55]'
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
            ? 'mt-3 h-[24px] w-[96px] gap-1 text-[6px]'
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
