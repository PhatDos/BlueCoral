import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Logo from '@/components/Logo';
import { COLORS } from '@/constants/colors';
import { cn } from '@/lib/cn';
import HeroShowcase from './HeroShowcase';
import { heroSlides } from './heroSlides';
import type { HeroSlide } from './heroSlides';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white pb-8 pt-3 md:pb-14 md:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[10px] bg-[#f7f4eb] shadow-[0_14px_42px_rgba(0,0,0,0.06)] md:min-h-[590px] md:rounded-[28px] md:border md:border-[#f0e9d7] md:shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
          <MobileHero slide={activeSlide} />
          <DesktopHero slide={activeSlide} />
          <SliderDots activeIndex={activeIndex} onChange={setActiveIndex} />
        </div>
      </div>
    </section>
  );
}

function MobileHero({ slide }: { slide: HeroSlide }) {
  return (
    <div className="md:hidden">
      <div className="px-4 pt-4">
        <HeroVisual key={`mobile-visual-${slide.id}`} slide={slide} className="max-w-full animate-hero-visual-slide" />
      </div>

      <div className="mx-auto max-w-[460px] px-4 pb-4 pt-4 text-center">
        <BrandPill className="mb-3 h-5 w-[50px] px-[5px]" logoSize={14} />
        <HeroText key={`mobile-copy-${slide.id}`} slide={slide} variant="mobile" />
      </div>
    </div>
  );
}

function DesktopHero({ slide }: { slide: HeroSlide }) {
  return (
    <div className="hidden md:block">
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(90deg, ${COLORS.heroCream} 0%, ${COLORS.heroGreen} 100%)` }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid min-h-[590px] grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] items-center gap-6 px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:px-10 xl:grid-cols-2 xl:gap-8 xl:px-14">
        <div className="min-w-0 max-w-[500px] xl:max-w-[560px]">
          <BrandPill
            className="mb-5 h-[44px] w-[101px] gap-[10px] border px-[12px] py-[8px] backdrop-blur-md"
            logoSize={28}
            withGradientBorder
          />
          <HeroText key={`desktop-copy-${slide.id}`} slide={slide} variant="desktop" />
        </div>
        <HeroVisual key={`desktop-visual-${slide.id}`} slide={slide} className="min-w-0 animate-hero-visual-slide" />
      </div>
    </div>
  );
}

function HeroVisual({ slide, className }: { slide: HeroSlide; className?: string }) {
  if (slide.visual === 'showcase') {
    return <HeroShowcase className={className} />;
  }

  return <HeroSlideImage image={slide.image} className={className} />;
}

function HeroSlideImage({ image, className }: { image: string; className?: string }) {
  return (
    <div
      className={cn(
        'relative mx-auto aspect-[670/500] w-full max-w-[670px] overflow-hidden rounded-[14px] border border-[#B8FF3E] bg-white/70 shadow-[0_18px_40px_rgba(15,23,42,0.08),0_0_24px_rgba(184,255,62,0.42)] md:rounded-[28px] md:border-2 md:shadow-[0_18px_40px_rgba(15,23,42,0.08),0_0_34px_rgba(184,255,62,0.46)] xl:rounded-[32px]',
        className,
      )}
      aria-hidden="true"
    >
      <img src={image} alt="" className="block h-full w-full object-cover object-center" />
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

function HeroText({ slide, variant }: { slide: HeroSlide; variant: 'mobile' | 'desktop' }) {
  const isMobile = variant === 'mobile';

  return (
    <div className="animate-hero-copy-slide">
      <h1
        className={cn(
          'font-extrabold tracking-[-0.02em] text-[#2D2F33]',
          isMobile
            ? 'mx-auto max-w-[370px] text-[24px] leading-[1.18]'
            : 'max-w-[500px] text-[36px] leading-[1.16] tracking-[-0.03em] lg:text-[44px] xl:max-w-[560px] xl:text-[56px] xl:leading-[1.21]',
        )}
      >
        {slide.title}
      </h1>
      <p
        className={cn(
          'text-[#2D2F33]',
          isMobile
            ? 'mx-auto mt-4 max-w-[370px] text-[10px] leading-[1.55]'
            : 'mt-5 max-w-[390px] text-[15px] leading-7 xl:max-w-[440px] xl:text-[16px]',
        )}
      >
        {slide.description}
      </p>
      <Button
        as="a"
        href="#"
        variant="dark"
        size={isMobile ? 'sm' : 'lg'}
        className={cn(isMobile ? 'mt-5 w-[148px] gap-2' : 'mt-8 w-[234px] gap-[10px] px-[4px] py-[16px]')}
      >
        {slide.cta}
        <ArrowRight size={isMobile ? 8 : 20} />
      </Button>
    </div>
  );
}

function SliderDots({
  activeIndex,
  onChange,
}: {
  activeIndex: number;
  onChange: (index: number) => void;
}) {
  return (
    <div className="relative z-10 flex justify-center gap-1.5 pb-3 md:gap-2 md:pb-7">
      {heroSlides.map((slide, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={slide.id}
            onClick={() => onChange(index)}
            className={cn(
              'h-[2px] rounded-full transition-all duration-500 ease-out md:h-1.5',
              isActive ? 'w-8 bg-gray-800 md:w-10' : 'w-3 bg-gray-300 hover:bg-gray-400 md:w-4',
            )}
            aria-label={`Go to ${slide.id} slide`}
            aria-current={isActive ? 'true' : undefined}
          />
        );
      })}
    </div>
  );
}

