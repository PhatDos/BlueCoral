import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const solutions = [
  { label: 'Lorem ipsum dolor', bold: false, arrow: false },
  { label: 'Sed do eiusmod tempor', bold: true, arrow: true },
  { label: 'Lorem ipsum dolor', bold: false, arrow: false },
  { label: 'Sed do eiusmod tempor', bold: false, arrow: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navTextStyle = {
    fontFamily: 'Font/Pri',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0%',
    opacity: 1,
  } as const;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-3 md:mx-[86px]">
        <div className="flex h-12 items-center justify-between md:h-[84px]">
          <a href="#" className="flex h-5 w-[58px] flex-shrink-0 items-center md:h-[48px] md:w-[139px]">
            <span className="md:hidden">
              <Logo size={20} />
            </span>
            <span className="hidden md:block">
              <Logo size={48} />
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-gray-700 transition-colors hover:text-gray-900"
                style={navTextStyle}
              >
                Giải pháp
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute left-1/2 top-full mt-4 min-w-[320px] -translate-x-1/2 rounded-[20px] border border-gray-100 bg-white py-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] animate-fade-in">
                  {solutions.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="group flex items-center justify-between px-6 py-3.5 transition-colors hover:bg-gray-50"
                    >
                      <span
                        className={`text-[18px] leading-7 ${item.bold ? 'font-semibold text-gray-900' : 'text-gray-600'}`}
                      >
                        {item.label}
                      </span>
                      {item.arrow && (
                        <ArrowRight size={17} className="text-gray-700 transition-transform group-hover:translate-x-1" />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {['Thiết bị', 'Bảng giá', 'Hỗ trợ'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 transition-colors hover:text-gray-900"
                style={navTextStyle}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="flex h-12 w-[123px] items-center justify-center rounded-[80px] border border-[#2D2F3333] px-5 py-3 text-gray-800 transition-colors hover:bg-gray-50"
              style={{ fontFamily: 'Font/Pri', fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}
            >
              Đăng nhập
            </a>
            <a
              href="#"
              className="flex h-12 w-[203px] items-center justify-center gap-1.5 rounded-[80px] bg-[#BFFB4F] px-5 py-3 text-[#2D2F33] transition-colors hover:opacity-90"
              style={{ fontFamily: 'Font/Pri', fontSize: '16px', lineHeight: '24px', fontWeight: 700 }}
            >
              Sử dụng miễn phí
              <ArrowRight size={17} />
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="space-y-1 border-t border-gray-100 bg-white px-4 pb-5 pt-3 md:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex w-full items-center justify-between py-3 text-sm font-medium text-gray-700"
          >
            Giải pháp
            <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {dropdownOpen && (
            <div className="space-y-1 pb-2 pl-4">
              {solutions.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  <span className={item.bold ? 'font-semibold text-gray-900' : ''}>{item.label}</span>
                  {item.arrow && <ArrowRight size={14} />}
                </a>
              ))}
            </div>
          )}
          {['Thiết bị', 'Bảng giá', 'Hỗ trợ'].map((item) => (
            <a key={item} href="#" className="block border-t border-gray-50 py-3 text-sm font-medium text-gray-700">
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 border-t border-gray-100 pt-3">
            <a href="#" className="rounded-full border border-gray-300 py-2.5 text-center text-sm font-medium text-gray-800">
              Đăng nhập
            </a>
            <a href="#" className="rounded-full bg-[#a8e63d] py-2.5 text-center text-sm font-semibold text-gray-900">
              Sử dụng miễn phí →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
