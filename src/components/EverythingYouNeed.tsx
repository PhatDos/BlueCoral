import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Tab = 'an-uong' | 'ban-le' | 'dich-vu';

const tabs: { id: Tab; label: string; isNew?: boolean }[] = [
  { id: 'an-uong', label: 'Ăn uống' },
  { id: 'ban-le', label: 'Bán lẻ', isNew: true },
  { id: 'dich-vu', label: 'Dịch vụ', isNew: true },
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

export default function EverythingYouNeed() {
  const [activeTab, setActiveTab] = useState<Tab>('an-uong');
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const content = tabContent[activeTab];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-3 py-1 bg-[#a8e63d] text-gray-800 text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
            Long Subtitle
          </span>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: '56px', lineHeight: '68px', fontWeight: 800, textAlign: 'center' }}>
            Everything You Need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: '16px', lineHeight: '28px', fontWeight: 400, textAlign: 'center' }}>
            Improve speed of service, boost kitchen efficiency, and drive repeat business with a
            restaurant management solution that offers everything you need to maximize profits and
            offer an unparalleled guest experience – all in one place.
          </p>
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:flex justify-center mb-6">
          <div className="flex items-center bg-gray-900 rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 600, textAlign: 'center' }}
              >
                {tab.label}
                {tab.isNew && (
                  <span className="px-1.5 py-0.5 bg-[#a8e63d] text-gray-900 text-[10px] font-bold rounded-sm leading-none">
                    NEW
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile tab selector (dropdown style) */}
        <div className="md:hidden mb-4 flex justify-center">
          <div className="relative">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium"
            >
              {activeTabData.label}
              {activeTabData.isNew && (
                <span className="px-1.5 py-0.5 bg-[#a8e63d] text-gray-900 text-[10px] font-bold rounded-sm">
                  NEW
                </span>
              )}
              <ChevronDown size={15} className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-1 min-w-[160px] z-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setMobileOpen(false); }}
                    className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left"
                  >
                    {tab.label}
                    {tab.isNew && (
                      <span className="px-1.5 py-0.5 bg-[#a8e63d] text-gray-900 text-[10px] font-bold rounded-sm">
                        NEW
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content card */}
        <div className="bg-[#f5f5f0] rounded-3xl p-6 md:p-10">
          {/* Mobile: accordion sub items */}
          <div className="md:hidden mb-5">
            <details className="bg-white rounded-xl shadow-sm">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 list-none">
                {content.title}
                <ChevronDown size={16} />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                {content.description}
              </div>
            </details>
          </div>

          {/* Desktop two-column layout */}
          <div className="hidden md:grid grid-cols-2 gap-10 items-start">
            {/* Left column */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-10 bg-[#a8e63d] rounded-full flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-gray-900 mb-2" style={{ fontSize: '36px', lineHeight: '140%', fontWeight: 700 }}>
                    {content.title}
                  </h3>
                  <p className="text-gray-500 max-w-xs" style={{ fontSize: '16px', lineHeight: '28px', fontWeight: 400 }}>
                    {content.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-0 divide-y divide-gray-200 border-y border-gray-200">
                {subItems.map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-1 py-4 text-gray-700 hover:text-gray-900 transition-all"
                    style={{ fontSize: '20px', lineHeight: '140%', fontWeight: 700 }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Right column: image placeholder */}
            <div className="rounded-2xl bg-white shadow-sm overflow-hidden h-80 flex items-center justify-center">
              <div className="text-gray-300 text-sm">Preview image</div>
            </div>
          </div>

          {/* Mobile content (below accordion) */}
          <div className="md:hidden">
            <div className="rounded-2xl bg-white shadow-sm overflow-hidden h-48 flex items-center justify-center">
              <div className="text-gray-300 text-sm">Preview image</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
