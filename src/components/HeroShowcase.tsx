import { Briefcase, ShoppingBag, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

type ShowcaseCard = {
  label: string;
  image: string;
  icon: LucideIcon;
  color: '#2D2F33';
};

const showcaseCards: ShowcaseCard[] = [
  { label: 'Bán lẻ', image: '/images/ban-le.png', icon: ShoppingBag, color: '#2D2F33' },
  { label: 'Nhà hàng', image: '/images/an-uong.png', icon: Utensils, color: '#2D2F33' },
  { label: 'Dịch vụ', image: '/images/dich-vu.png', icon: Briefcase, color: '#2D2F33' },
];

export default function HeroShowcase({ className }: { className?: string }) {
  return (
    <div
      className={cn('relative mx-auto aspect-[670/500] w-full max-w-[670px]', className)}
      aria-hidden="true"
    >
      <div className="absolute inset-x-[2%] top-[4%] h-[68%] overflow-hidden rounded-[14px] border border-[#B8FF3E] bg-white/70 shadow-[0_18px_40px_rgba(15,23,42,0.08),0_0_24px_rgba(184,255,62,0.42)] md:rounded-[28px] md:border-2 md:shadow-[0_18px_40px_rgba(15,23,42,0.08),0_0_34px_rgba(184,255,62,0.46)] xl:rounded-[32px]">
        <img src="/images/MobileBg1.png" alt="" className="block h-full w-full object-cover object-center" />
      </div>

      <div className="absolute bottom-[10%] left-1/2 grid h-[32%] w-[88%] -translate-x-1/2 grid-cols-3 gap-2 md:gap-3 lg:gap-5">
        {showcaseCards.map((card) => (
          <ShowcaseCard key={card.label} card={card} />
        ))}
      </div>
    </div>
  );
}

function ShowcaseCard({ card }: { card: ShowcaseCard }) {
  const Icon = card.icon;

  return (
    <div className="h-full overflow-hidden rounded-[10px] border border-[#B8FF3E] bg-white shadow-[0_16px_32px_rgba(15,23,42,0.12),0_0_18px_rgba(184,255,62,0.42)] md:rounded-[14px] md:border-2 md:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_0_26px_rgba(184,255,62,0.48)]">
      <img src={card.image} alt="" className="block h-[70%] w-full object-cover object-center" />
      <div
        className="flex h-[30%] items-center justify-center gap-1 px-1 text-[9px] font-semibold leading-4 md:gap-2 md:px-2 md:text-[16px] md:leading-6"
        style={{ color: card.color }}
      >
        <Icon className="h-3 w-3 flex-shrink-0 md:h-4 md:w-4" strokeWidth={2.3} />
        <span className="whitespace-nowrap">{card.label}</span>
      </div>
    </div>
  );
}
