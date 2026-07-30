import { ArrowRight, ShoppingCart, UtensilsCrossed, Briefcase } from 'lucide-react';

const categories = [
  { icon: ShoppingCart, label: 'Bán lẻ' },
  { icon: UtensilsCrossed, label: 'Nhà hàng' },
  { icon: Briefcase, label: 'Dịch vụ' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f5c8] via-[#f0f8e0] to-[#d4efb0] min-h-[420px]">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#a8e63d]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5f06e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* ---- Mobile: image first ---- */}
          <div className="w-full md:hidden">
            <MobileHeroImage />
          </div>

          {/* ---- Left content ---- */}
          <div className="flex-1 flex flex-col items-start">
            {/* Logo badge */}
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-6 h-6 bg-[#a8e63d] rounded-full flex items-center justify-center">
                <span className="text-black font-black text-xs leading-none">Q</span>
              </div>
              <span className="font-bold text-sm text-gray-800">table</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontSize: '56px', lineHeight: '68px', letterSpacing: '0%' }}>
              Quản lý dễ dàng,<br />
              bán hàng hiệu quả
            </h1>

            <p className="text-gray-600 mb-7 max-w-sm" style={{ fontSize: '16px', lineHeight: '28px', fontWeight: 400 }}>
              Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>

            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
              style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 700 }}
            >
              Đặt lịch tư vấn
              <ArrowRight size={20} />
            </a>
          </div>

          {/* ---- Right: Desktop image ---- */}
          <div className="flex-1 hidden md:flex flex-col items-center gap-3">
            <DesktopHeroImage />
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-6 h-1.5 bg-gray-800 rounded-full" />
          <span className="w-2 h-1.5 bg-gray-400 rounded-full" />
          <span className="w-2 h-1.5 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function DesktopHeroImage() {
  return (
    <div className="w-full max-w-md">
      {/* Main photo */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-3">
        <img
          src="/images/image.png"
          alt="Quản lý bán hàng"
          className="w-full object-cover h-52 object-top"
        />
      </div>
      {/* 3 category thumbnails */}
      <div className="grid grid-cols-3 gap-2">
        {categories.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="relative rounded-xl overflow-hidden bg-gray-200 h-20 flex flex-col items-center justify-end pb-2 shadow"
          >
            <div className="absolute inset-0 bg-black/30" />
            <Icon size={14} className="relative text-white mb-0.5" />
            <span className="relative text-white text-[11px] font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileHeroImage() {
  return (
    <div className="w-full">
      {/* Main photo */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-2">
        <img
          src="/images/image.png"
          alt="Quản lý bán hàng"
          className="w-full object-cover h-44 object-top"
        />
      </div>
      {/* 3 category thumbnails */}
      <div className="grid grid-cols-3 gap-2">
        {categories.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="relative rounded-xl overflow-hidden bg-gray-200 h-16 flex flex-col items-center justify-end pb-1.5 shadow"
          >
            <div className="absolute inset-0 bg-black/30" />
            <Icon size={12} className="relative text-white mb-0.5" />
            <span className="relative text-white text-[10px] font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
