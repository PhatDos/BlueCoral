import { Briefcase, ShoppingBag, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import IconLabel from '@/components/ui/IconLabel';
import { IMAGES } from '@/constants/assets';
import { cn } from '@/lib/cn';

type ShowcaseCard = {
  label: string;
  image: string;
  icon: LucideIcon;
};

const showcaseCards: ShowcaseCard[] = [
  { label: 'Bán lẻ', image: IMAGES.retail, icon: ShoppingBag },
  { label: 'Nhà hàng', image: IMAGES.food, icon: Utensils },
  { label: 'Dịch vụ', image: IMAGES.service, icon: Briefcase },
];

export default function HeroShowcase({ className }: { className?: string }) {
  return (
    <div
      className={cn('relative mx-auto aspect-[670/500] w-full max-w-[670px]', className)}
      aria-hidden="true"
    >
      <div className="absolute inset-x-[2%] top-[4%] h-[68%] overflow-hidden rounded-[14px] border border-[#B8FF3E] bg-white/70 shadow-[0_18px_40px_rgba(15,23,42,0.08),0_0_24px_rgba(184,255,62,0.42)] md:rounded-[28px] md:border-2 md:shadow-[0_18px_40px_rgba(15,23,42,0.08),0_0_34px_rgba(184,255,62,0.46)] xl:rounded-[32px]">
        <img src={IMAGES.heroShowcaseMain} alt="" className="block h-full w-full object-cover object-center" />
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
  return (
    <div className="h-full overflow-hidden rounded-[10px] border border-[#B8FF3E] bg-white shadow-[0_16px_32px_rgba(15,23,42,0.12),0_0_18px_rgba(184,255,62,0.42)] md:rounded-[14px] md:border-2 md:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_0_26px_rgba(184,255,62,0.48)]">
      <img src={card.image} alt="" className="block h-[70%] w-full object-cover object-center" />
      <div className="flex h-[30%] items-center justify-center px-1 text-[9px] font-semibold leading-4 text-[#2D2F33] md:px-2 md:text-[16px] md:leading-6">
        <IconLabel icon={card.icon} iconClassName="h-3 w-3 md:h-4 md:w-4" className="gap-1 md:gap-2">
          {card.label}
        </IconLabel>
      </div>
    </div>
  );
}

