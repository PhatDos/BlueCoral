import { useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
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
      <p className="mx-auto mt-3 max-w-[340px] text-[11px] leading-[18px] text-[#2D2F33]/75 md:mt-4 md:max-w-[805px] md:px-0 md:text-[16px] md:leading-7">
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
    <div className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-1 rounded-b-[34px] bg-white px-3 pb-3 md:block lg:px-4">
      <span className="pointer-events-none absolute -left-8 top-0 h-8 w-8 rounded-tr-[34px] shadow-[10px_-10px_0_8px_white]" />
      <span className="pointer-events-none absolute -right-8 top-0 h-8 w-8 rounded-tl-[34px] shadow-[-10px_-10px_0_8px_white]" />
      <div className="relative flex h-[42px] items-center gap-2 lg:h-[48px] lg:gap-4">
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
    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1 rounded-b-[18px] border-x border-b border-gray-100 bg-white px-2 pb-2 md:hidden">
      <span className="pointer-events-none absolute -left-4 top-0 h-4 w-4 rounded-tr-[18px] shadow-[5px_-5px_0_4px_white]" />
      <span className="pointer-events-none absolute -right-4 top-0 h-4 w-4 rounded-tl-[18px] shadow-[-5px_-5px_0_4px_white]" />
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="relative flex h-[clamp(28px,7vw,34px)] min-w-[clamp(116px,34vw,148px)] items-center justify-center gap-[clamp(6px,1.7vw,8px)] whitespace-nowrap rounded-full bg-[#2D2F33] px-[clamp(16px,4.8vw,22px)] text-[clamp(8px,2.45vw,11px)] font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]"
      >
        <ActiveIcon className="h-[clamp(10px,2.8vw,13px)] w-[clamp(10px,2.8vw,13px)]" strokeWidth={2.4} />
        {active.label}
        {active.isNew && <NewBadge size="sm" />}
        <ChevronDown
          className={cn('h-[clamp(10px,2.8vw,13px)] w-[clamp(10px,2.8vw,13px)] transition-transform', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full mt-1 w-[clamp(148px,42vw,178px)] -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-[0_14px_32px_rgba(15,23,42,0.12)] animate-dropdown-fade">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <button
                key={industry.id}
                onClick={() => onChange(industry.id)}
                className="flex w-full items-center gap-1.5 whitespace-nowrap px-3 py-2 text-left text-[clamp(8px,2.35vw,10px)] font-semibold text-[#2D2F33] hover:bg-gray-50"
              >
                <Icon className="h-[clamp(10px,2.8vw,12px)] w-[clamp(10px,2.8vw,12px)]" />
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
        'flex h-[42px] items-center justify-center gap-1.5 whitespace-nowrap rounded-full text-[14px] font-semibold leading-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(15,23,42,0.12)] lg:h-[48px] lg:gap-2 lg:text-[16px]',
        isActive
          ? 'min-w-[164px] bg-[#2D2F33] px-6 text-white shadow lg:min-w-[200px] lg:px-9'
          : 'min-w-[104px] bg-white px-4 text-[#2D2F33] lg:min-w-[126px] lg:px-5',
      )}
    >
      <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={2.3} />
      {industry.label}
      {industry.isNew && <NewBadge />}
    </button>
  );
}

function FeatureCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-[286px] overflow-hidden rounded-[18px] px-3 pb-3 pt-[36px] md:min-h-[667px] md:rounded-[32px] md:px-6 md:pb-10 md:pt-[88px] lg:px-10 lg:pb-12 xl:px-[52px] xl:pb-[52px]"
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
  const menuOptions = [content.title, ...content.options];

  return (
    <div className="relative z-10 mx-auto w-full text-center md:hidden">
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="my-4 flex h-[clamp(27px,7vw,34px)] w-full items-center justify-between whitespace-nowrap rounded-full bg-white px-4 text-[clamp(7px,2.15vw,10px)] font-medium text-[#2D2F33] shadow-[0_4px_18px_rgba(0,0,0,0.05)]"
      >
        {content.title}
        <ChevronDown className={cn('h-[clamp(10px,2.8vw,13px)] w-[clamp(10px,2.8vw,13px)] transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[34px] z-20 overflow-hidden rounded-xl bg-white py-1 shadow-lg animate-fade-in">
          {menuOptions.map((option, index) => (
            <button
              key={option}
              className={cn(
                'block w-full whitespace-nowrap px-4 py-2 text-left text-[clamp(9px,2.45vw,11px)] font-medium text-[#2D2F33] transition-all duration-200 hover:translate-x-1 hover:bg-gray-50 hover:font-semibold hover:text-black',
                index === 0 && 'font-semibold',
              )}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      <FeatureSummary content={content} compact align="center" />
      <FeaturePreview image={image} compact />
    </div>
  );
}

function DesktopFeatureContent({ content, image }: { content: IndustryContent; image: string }) {
  const defaultIndicatorTop = 62;
  const indicatorHeight = 43;
  const [indicatorTop, setIndicatorTop] = useState(defaultIndicatorTop);

  function moveIndicator(event: MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    setIndicatorTop(button.offsetTop + button.offsetHeight / 2 - indicatorHeight / 2);
  }

  return (
    <div className="hidden md:grid md:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] md:items-start md:gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10 xl:grid-cols-2 xl:gap-[70px]">
      <div className="relative min-h-[475px] min-w-0 pl-7 pt-[62px] lg:pl-9">
        <div className="absolute left-0 top-0 h-full w-px bg-[#DCE0D2]" />
        <div
          className="absolute left-0 h-[43px] w-[3px] -translate-x-px rounded-full bg-[#7E878B] transition-[top] duration-300 ease-out"
          style={{ top: indicatorTop }}
        />

        <FeatureSummary content={content} />

        <div className="mt-[42px] space-y-6 lg:space-y-[32px]" onMouseLeave={() => setIndicatorTop(defaultIndicatorTop)}>
          {content.options.map((option) => (
            <button
              key={option}
              onMouseEnter={moveIndicator}
              className="block whitespace-nowrap text-left text-[16px] font-extrabold leading-7 text-[#2D2F33] transition-all duration-200 hover:translate-x-2 hover:text-black lg:text-[20px]"
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

function FeatureSummary({
  content,
  compact = false,
  align = 'left',
}: {
  content: IndustryContent;
  compact?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <>
      <h3
        className={cn(
          'font-extrabold text-[#2D2F33]',
          compact ? 'text-[15px] leading-[1.25]' : 'text-[32px] leading-[44px] tracking-[-0.02em]',
          align === 'center' && 'text-center',
        )}
      >
        {content.title}
      </h3>
      <p
        className={cn(
          'text-[#2D2F33]/75',
          compact ? 'mt-2 max-w-[320px] text-[11px] leading-[18px]' : 'mt-2 max-w-[390px] text-[16px] leading-7',
          align === 'center' && 'mx-auto text-center',
        )}
      >
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
        compact ? 'mx-auto mt-6 aspect-[4/3] w-full rounded-[12px]' : 'aspect-square w-full max-w-[525px] justify-self-end rounded-[18px]',
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
        'inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#BFFB4F] font-extrabold leading-none text-[#2D2F33]',
        size === 'sm' ? 'h-[clamp(12px,3vw,16px)] px-[clamp(6px,1.8vw,8px)] text-[clamp(6px,1.7vw,8px)]' : 'h-6 px-3 text-[10px]',
      )}
    >
      NEW
    </span>
  );
}
