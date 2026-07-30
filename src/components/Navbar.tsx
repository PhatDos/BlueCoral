import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-[#a8e63d] rounded-full flex items-center justify-center">
              <span className="text-black font-black text-lg leading-none">Q</span>
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">table</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Giải pháp with dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}
              >
                Giải pháp
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 min-w-[260px] animate-fade-in">
                  {solutions.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors group"
                    >
                      <span
                        className={`text-sm ${item.bold ? 'font-semibold text-gray-900' : 'text-gray-600'}`}
                      >
                        {item.label}
                      </span>
                      {item.arrow && (
                        <ArrowRight size={15} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
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
                className="text-gray-700 hover:text-gray-900 transition-colors"
                style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-5 py-2 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
              style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 700 }}
            >
              Đăng nhập
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#a8e63d] text-gray-900 hover:bg-[#94d62a] transition-colors"
              style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 700 }}
            >
              Sử dụng miễn phí
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5 pt-3 space-y-1">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full py-3 text-gray-700 font-medium text-sm"
          >
            Giải pháp
            <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {dropdownOpen && (
            <div className="pl-4 space-y-1 pb-2">
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
            <a key={item} href="#" className="block py-3 text-gray-700 font-medium text-sm border-t border-gray-50">
              {item}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-3 border-t border-gray-100">
            <a href="#" className="py-2.5 text-center rounded-full border border-gray-300 text-gray-800 font-medium text-sm">
              Đăng nhập
            </a>
            <a href="#" className="py-2.5 text-center rounded-full bg-[#a8e63d] text-gray-900 font-semibold text-sm">
              Sử dụng miễn phí →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
