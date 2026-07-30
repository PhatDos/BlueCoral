import { useState } from 'react';
import { Briefcase, ChevronDown, ShoppingBag, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Tab = 'an-uong' | 'ban-le' | 'dich-vu';

type TabItem = {
  id: Tab;
  label: string;
  icon: LucideIcon;
  isNew?: boolean;
};

const tabs: TabItem[] = [
  { id: 'an-uong', label: 'Ăn uống', icon: Utensils },
  { id: 'ban-le', label: 'Bán lẻ', icon: ShoppingBag, isNew: true },
  { id: 'dich-vu', label: 'Dịch vụ', icon: Briefcase, isNew: true },
];

const subItems = [
  'Quán ăn / nhà hàng',
  'Quán bar / lounge / pub',
  'Quán ăn di động',
  'Tiệm trà sữa',
  'Tiệm bánh',
];

const tabContent: Record<Tab, { title: string; description: string }> = {
  'an-uong': {
    title: 'Quán cà phê',
    description:
      'Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/gọi lại hiệu quả.',
  },
  'ban-le': {
    title: 'Cửa hàng bán lẻ',
    description:
      'Qtable giúp quản lý hàng tồn kho, theo dõi doanh số và xử lý thanh toán nhanh chóng, chính xác.',
  },
  'dich-vu': {
    title: 'Dịch vụ tiện ích',
    description:
      'Quản lý lịch hẹn, nhân viên và khách hàng thân thiết một cách dễ dàng với Qtable.',
  },
};

const cardBackground = {
  backgroundColor: '#F1F2E8',
  backgroundImage:
    'linear-gradient(45deg, rgba(184, 190, 169, 0.18) 1px, transparent 1px), linear-gradient(135deg, rgba(184, 190, 169, 0.14) 1px, transparent 1px), radial-gradient(circle at 82% 20%, rgba(255,255,255,0.64), transparent 26%), radial-gradient(circle at 34% 44%, rgba(255,255,255,0.5), transparent 28%)',
  backgroundSize: '86px 86px, 86px 86px, 100% 100%, 100% 100%',
} as const;

export default function EverythingYouNeed() {
  const [activeTab, setActiveTab] = useState<Tab>('an-uong');
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const ActiveIcon = activeTabData.icon;
  const content = tabContent[activeTab];

  return (
    <section className="bg-white pb-12 pt-5 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-[1176px]">
        <div className="text-center">
          <span className="inline-flex h-5 items-center rounded-full bg-[#BFFB4F] px-3 text-[7px] font-extrabold uppercase leading-none text-[#2D2F33] md:h-6 md:px-4 md:text-[10px]">
            Long Subtitle
          </span>
          <h2 className="mt-3 text-[18px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#2D2F33] md:mt-5 md:text-[56px] md:leading-[68px]">
            Everything You Need
          </h2>
          <p className="mx-auto mt-3 max-w-[190px] text-[8px] leading-[14px] text-[#2D2F33]/75 md:mt-4 md:max-w-[805px] md:text-[16px] md:leading-7">
            Improve speed of service, boost kitchen efficiency, and drive repeat business with a
            restaurant management solution that offers everything you need to maximize profits and
            offer an unparalleled guest experience - all in one place.
          </p>
        </div>

        <div className="relative mt-9 md:mt-[64px]">
          <div className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-b-[24px] bg-white px-3 pb-3 md:block">
            <div className="flex h-[42px] items-center gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex h-[42px] items-center justify-center gap-2 rounded-full px-7 transition-all duration-200 ${
                      isActive ? 'bg-[#2D2F33] text-white shadow' : 'bg-white text-[#2D2F33]'
                    }`}
                    style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}
                  >
                    <Icon size={16} strokeWidth={2.3} />
                    {tab.label}
                    {tab.isNew && (
                      <span className="rounded-full bg-[#BFFB4F] px-2 py-1 text-[10px] font-extrabold leading-none text-[#2D2F33]">
                        NEW
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-[28px] min-w-[110px] items-center justify-center gap-1.5 rounded-full bg-[#2D2F33] px-4 text-[8px] font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]"
            >
              <ActiveIcon size={10} strokeWidth={2.4} />
              {activeTabData.label}
              {activeTabData.isNew && (
                <span className="rounded-full bg-[#BFFB4F] px-1.5 py-0.5 text-[6px] font-extrabold leading-none text-[#2D2F33]">
                  NEW
                </span>
              )}
              <ChevronDown size={10} className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileOpen && (
              <div className="absolute left-1/2 top-full mt-1 w-[132px] -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
                {tabs.map((tab) => {
                  const Icon = tab.icon;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileOpen(false);
                      }}
                      className="flex w-full items-center gap-1.5 px-3 py-2 text-left text-[8px] font-semibold text-[#2D2F33] hover:bg-gray-50"
                    >
                      <Icon size={10} />
                      {tab.label}
                      {tab.isNew && (
                        <span className="rounded-full bg-[#BFFB4F] px-1.5 py-0.5 text-[6px] font-extrabold leading-none text-[#2D2F33]">
                          NEW
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div
            className="relative min-h-[286px] overflow-hidden rounded-[18px] px-3 pb-3 pt-[36px] md:min-h-[667px] md:rounded-[32px] md:px-[52px] md:pb-[52px] md:pt-[88px] lg:px-[52px]"
            style={cardBackground}
          >
            <div className="md:hidden">
              <div className="relative z-10">
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="mb-4 flex h-[27px] w-full items-center justify-between rounded-full bg-white px-4 text-[7px] font-medium text-[#2D2F33] shadow-[0_4px_18px_rgba(0,0,0,0.05)]"
                >
                  {content.title}
                  <ChevronDown size={10} className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
                </button>

                <h3 className="text-[15px] font-extrabold leading-[1.25] text-[#2D2F33]">{content.title}</h3>
                <p className="mt-1 max-w-[150px] text-[7px] leading-[12px] text-[#2D2F33]/75">{content.description}</p>

                <div className="mt-4 h-[156px] rounded-[12px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]" />
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-[1fr_525px] md:items-start md:gap-[70px]">
              <div className="relative min-h-[475px] pl-9 pt-[62px]">
                <div className="absolute left-0 top-0 h-full w-px bg-[#DCE0D2]" />
                <div className="absolute left-0 top-[62px] h-[43px] w-[3px] -translate-x-px rounded-full bg-[#7E878B]" />

                <h3 className="text-[32px] font-extrabold leading-[44px] tracking-[-0.02em] text-[#2D2F33]">
                  {content.title}
                </h3>
                <p className="mt-2 max-w-[390px] text-[16px] leading-7 text-[#2D2F33]/80">{content.description}</p>

                <div className="mt-[92px] space-y-[32px]">
                  {subItems.map((item) => (
                    <button
                      key={item}
                      className="block text-left text-[20px] font-extrabold leading-7 text-[#2D2F33] transition-colors hover:text-black"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-[525px] rounded-[18px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.03)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
