import { ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';

const mobileCards = [
  { src: '/images/MobileBg2.png', label: 'Đồ ăn' },
  { src: '/images/MobileBg3.png', label: 'Ăn uống' },
  { src: '/images/MobileBg4.png', label: 'Dịch vụ' },
];

export default function Hero() {
  return (
    <section className="bg-white pb-8 pt-3 md:pb-14 md:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[10px] bg-[#f7f4eb] shadow-[0_14px_42px_rgba(0,0,0,0.06)] md:min-h-[590px] md:rounded-[28px] md:border md:border-[#f0e9d7] md:shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
          <div className="md:hidden">
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

            <div className="px-4 pb-4 pt-4">
              <div className="mb-3 inline-flex h-5 w-[50px] items-center rounded-full bg-white px-[5px] shadow-sm">
                <Logo size={14} />
              </div>
              <h1 className="max-w-[160px] text-[17px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#2D2F33]">
                Quản lý dễ dàng,
                <br />
                bán hàng hiệu quả
              </h1>
              <p className="mt-3 max-w-[150px] text-[6px] leading-[1.55] text-[#2D2F33]">
                Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex h-[24px] w-[96px] items-center justify-center gap-1 rounded-[80px] bg-gray-900 text-[6px] font-bold text-white shadow-lg shadow-black/10 transition-colors hover:bg-gray-800"
              >
                Đặt lịch tư vấn
                <ArrowRight size={8} />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/images/hero-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,238,0.88)_0%,rgba(248,246,238,0.58)_30%,rgba(248,246,238,0.2)_58%,rgba(248,246,238,0.06)_82%,rgba(248,246,238,0)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_14%,rgba(255,255,255,0.6),transparent_11%),radial-gradient(circle_at_86%_16%,rgba(216,248,86,0.22),transparent_17%),radial-gradient(circle_at_12%_84%,rgba(198,242,53,0.16),transparent_22%)]" />

            <div className="relative z-10 flex min-h-[590px] items-center px-14">
              <div className="max-w-[620px]">
                <div
                  className="mb-5 inline-flex h-[44px] w-[101px] items-center gap-[10px] rounded-full border bg-[#FFFFFF80] px-[12px] py-[8px] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1),inset_2px_2px_2px_0_rgba(0,0,0,0.04)] backdrop-blur-md"
                  style={{
                    borderWidth: 1,
                    borderImageSource: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
                    borderImageSlice: 1,
                  }}
                >
                  <Logo size={28} />
                </div>

                <h1 className="max-w-[824px] text-[56px] font-extrabold leading-[1.21] tracking-[-0.03em] text-[#2D2F33]">
                  Quản lý dễ dàng,
                  <br />
                  bán hàng hiệu quả
                </h1>

                <p className="mt-5 max-w-[619px] text-[16px] leading-7 text-[#2D2F33]">
                  Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-flex h-[60px] w-[234px] items-center justify-center gap-[10px] rounded-[80px] bg-gray-900 px-[4px] py-[16px] text-[16px] font-bold text-white shadow-lg shadow-black/10 transition-colors hover:bg-gray-800"
                >
                  Đặt lịch tư vấn
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-center gap-1.5 pb-3 md:gap-2 md:pb-7">
            <span className="h-[2px] w-8 rounded-full bg-gray-800 md:h-1.5 md:w-10" />
            <span className="h-[2px] w-3 rounded-full bg-gray-300 md:h-1.5 md:w-4" />
            <span className="h-[2px] w-3 rounded-full bg-gray-300 md:h-1.5 md:w-4" />
            <span className="h-[2px] w-3 rounded-full bg-gray-300 md:h-1.5 md:w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
