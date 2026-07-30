import { useState } from 'react';
import type { ReactNode } from 'react';
import { Briefcase, ChevronDown, ShoppingBag, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

type IndustryId = 'food' | 'retail' | 'service';

type Industry = {
  id: IndustryId;
  label: string;
  icon: LucideIcon;
  image: string;
  isNew?: boolean;
};

type IndustryContent = {
  title: string;
  description: string;
  options: string[];
};

const industries: Industry[] = [
  { id: 'food', label: 'Ăn uống', icon: Utensils, image: '/images/an-uong.png' },
  { id: 'retail', label: 'Bán lẻ', icon: ShoppingBag, image: '/images/ban-le.png', isNew: true },
  { id: 'service', label: 'Dịch vụ', icon: Briefcase, image: '/images/dich-vu.png', isNew: true },
];

const industryContent: Record<IndustryId, IndustryContent> = {
  food: {
    title: 'Quán cà phê',
    description:
      'Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/gọi lại hiệu quả.',
    options: ['Quán ăn / nhà hàng', 'Quán bar / lounge / pub', 'Quán ăn di động', 'Tiệm trà sữa', 'Tiệm bánh'],
  },
  retail: {
    title: 'Cửa hàng bán lẻ',
    description: 'Qtable giúp quản lý hàng tồn kho, theo dõi doanh số và xử lý thanh toán nhanh chóng, chính xác.',
    options: ['Cửa hàng tiện lợi', 'Shop thời trang', 'Siêu thị mini', 'Cửa hàng mỹ phẩm', 'Nhà sách'],
  },
  service: {
    title: 'Dịch vụ tiện ích',
    description: 'Quản lý lịch hẹn, nhân viên và khách hàng thân thiết một cách dễ dàng với Qtable.',
    options: ['Salon / spa', 'Phòng khám', 'Trung tâm sửa chữa', 'Studio', 'Dịch vụ tại nhà'],
  },
};

const cardBackground = {
  backgroundColor: '#F1F2E8',
  backgroundImage:
    'linear-gradient(45deg, rgba(184, 190, 169, 0.18) 1px, transparent 1px), linear-gradient(135deg, rgba(184, 190, 169, 0.14) 1px, transparent 1px), radial-gradient(circle at 82% 20%, rgba(255,255,255,0.64), transparent 26%), radial-gradient(circle at 34% 44%, rgba(255,255,255,0.5), transparent 28%)',
  backgroundSize: '86px 86px, 86px 86px, 100% 100%, 100% 100%',
} as const;

export default function EverythingYouNeed() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryId>('food');
  const [isTabMenuOpen, setIsTabMenuOpen] = useState(false);
  const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false);

  const active = industries.find((industry) => industry.id === activeIndustry)!;
  const content = industryContent[activeIndustry];

  function chooseIndustry(id: IndustryId) {
    setActiveIndustry(id);
    setIsTabMenuOpen(false);
    setIsOptionMenuOpen(false);
  }

  return (
    <section className="bg-white pb-12 pt-5 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-[1176px]">
        <SectionIntro />

        <div className="relative mt-9 md:mt-[64px]">
          <IndustryTabs activeId={activeIndustry} onChange={chooseIndustry} />
          <MobileIndustryMenu
            active={active}
            isOpen={isTabMenuOpen}
            onOpenChange={setIsTabMenuOpen}
            onChange={chooseIndustry}
          />

          <FeatureCard>
            <MobileFeatureContent
              content={content}
              image={active.image}
              isOpen={isOptionMenuOpen}
              onOpenChange={setIsOptionMenuOpen}
            />
            <DesktopFeatureContent content={content} image={active.image} />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function SectionIntro() {
  return (
    <div className="text-center">
      <Pill>Long Subtitle</Pill>
      <h2 className="mt-3 text-[18px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#2D2F33] md:mt-5 md:text-[56px] md:leading-[68px]">
        Everything You Need
      </h2>
      <p className="mx-auto mt-3 max-w-[190px] text-[8px] leading-[14px] text-[#2D2F33]/75 md:mt-4 md:max-w-[805px] md:text-[16px] md:leading-7">
        Improve speed of service, boost kitchen efficiency, and drive repeat business with a restaurant management
        solution that offers everything you need to maximize profits and offer an unparalleled guest experience - all in
        one place.
      </p>
    </div>
  );
}

function IndustryTabs({
  activeId,
  onChange,
}: {
  activeId: IndustryId;
  onChange: (id: IndustryId) => void;
}) {
  return (
    <div className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-b-[24px] bg-white px-3 pb-3 md:block">
      <div className="flex h-[42px] items-center gap-2">
        {industries.map((industry) => (
          <IndustryButton
            key={industry.id}
            industry={industry}
            isActive={activeId === industry.id}
            onClick={() => onChange(industry.id)}
          />
        ))}
      </div>
    </div>
  );
}

function MobileIndustryMenu({
  active,
  isOpen,
  onOpenChange,
  onChange,
}: {
  active: Industry;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (id: IndustryId) => void;
}) {
  const ActiveIcon = active.icon;

  return (
    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 md:hidden">
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="flex h-[28px] min-w-[110px] items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#2D2F33] px-4 text-[8px] font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]"
      >
        <ActiveIcon size={10} strokeWidth={2.4} />
        {active.label}
        {active.isNew && <NewBadge size="sm" />}
        <ChevronDown size={10} className={cn('transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full mt-1 w-[132px] -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <button
                key={industry.id}
                onClick={() => onChange(industry.id)}
                className="flex w-full items-center gap-1.5 whitespace-nowrap px-3 py-2 text-left text-[8px] font-semibold text-[#2D2F33] hover:bg-gray-50"
              >
                <Icon size={10} />
                {industry.label}
                {industry.isNew && <NewBadge size="sm" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function IndustryButton({
  industry,
  isActive,
  onClick,
}: {
  industry: Industry;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = industry.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex h-[42px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 text-[16px] font-semibold leading-6 transition-all duration-200',
        isActive ? 'bg-[#2D2F33] text-white shadow' : 'bg-white text-[#2D2F33]',
      )}
    >
      <Icon size={16} strokeWidth={2.3} />
      {industry.label}
      {industry.isNew && <NewBadge />}
    </button>
  );
}

function FeatureCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-[286px] overflow-hidden rounded-[18px] px-3 pb-3 pt-[36px] md:min-h-[667px] md:rounded-[32px] md:px-[52px] md:pb-[52px] md:pt-[88px]"
      style={cardBackground}
    >
      {children}
    </div>
  );
}

function MobileFeatureContent({
  content,
  image,
  isOpen,
  onOpenChange,
}: {
  content: IndustryContent;
  image: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <div className="relative z-10 md:hidden">
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="mb-4 flex h-[27px] w-full items-center justify-between whitespace-nowrap rounded-full bg-white px-4 text-[7px] font-medium text-[#2D2F33] shadow-[0_4px_18px_rgba(0,0,0,0.05)]"
      >
        {content.title}
        <ChevronDown size={10} className={cn('transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[31px] z-20 overflow-hidden rounded-xl bg-white py-1 shadow-lg">
          {content.options.map((option) => (
            <button key={option} className="block w-full whitespace-nowrap px-4 py-2 text-left text-[8px] font-medium text-[#2D2F33]">
              {option}
            </button>
          ))}
        </div>
      )}

      <FeatureSummary content={content} compact />
      <FeaturePreview image={image} compact />
    </div>
  );
}

function DesktopFeatureContent({ content, image }: { content: IndustryContent; image: string }) {
  return (
    <div className="hidden md:grid md:grid-cols-[1fr_525px] md:items-start md:gap-[70px]">
      <div className="relative min-h-[475px] pl-9 pt-[62px]">
        <div className="absolute left-0 top-0 h-full w-px bg-[#DCE0D2]" />
        <div className="absolute left-0 top-[62px] h-[43px] w-[3px] -translate-x-px rounded-full bg-[#7E878B]" />

        <FeatureSummary content={content} />

        <div className="mt-[92px] space-y-[32px]">
          {content.options.map((option) => (
            <button
              key={option}
              className="block whitespace-nowrap text-left text-[20px] font-extrabold leading-7 text-[#2D2F33] transition-colors hover:text-black"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <FeaturePreview image={image} />
    </div>
  );
}

function FeatureSummary({ content, compact = false }: { content: IndustryContent; compact?: boolean }) {
  return (
    <>
      <h3
        className={cn(
          'font-extrabold text-[#2D2F33]',
          compact ? 'text-[15px] leading-[1.25]' : 'text-[32px] leading-[44px] tracking-[-0.02em]',
        )}
      >
        {content.title}
      </h3>
      <p className={cn('text-[#2D2F33]/75', compact ? 'mt-1 max-w-[150px] text-[7px] leading-[12px]' : 'mt-2 max-w-[390px] text-[16px] leading-7')}>
        {content.description}
      </p>
    </>
  );
}

function FeaturePreview({ image, compact = false }: { image: string; compact?: boolean }) {
  return (
    <div
      className={cn(
        'overflow-hidden bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]',
        compact ? 'mt-4 h-[156px] rounded-[12px]' : 'h-[525px] rounded-[18px]',
      )}
    >
      <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover" />
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-5 items-center rounded-full bg-[#BFFB4F] px-3 text-[7px] font-extrabold uppercase leading-none text-[#2D2F33] md:h-6 md:px-4 md:text-[10px]">
      {children}
    </span>
  );
}

function NewBadge({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <span
      className={cn(
        'whitespace-nowrap rounded-full bg-[#BFFB4F] font-extrabold leading-none text-[#2D2F33]',
        size === 'sm' ? 'px-1.5 py-0.5 text-[6px]' : 'px-2 py-1 text-[10px]',
      )}
    >
      NEW
    </span>
  );
}
