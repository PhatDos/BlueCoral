import { useEffect, useRef, useState } from 'react';
import type { ReactNode, RefObject } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { cn } from '@/lib/cn';

type SolutionItem = {
  id: string;
  label: string;
  featured?: boolean;
  hasArrow?: boolean;
};

const navLinks = ['Thiết bị', 'Bảng giá', 'Hỗ trợ'];

const solutions: SolutionItem[] = [
  { id: 'overview', label: 'Lorem ipsum dolor' },
  { id: 'highlight', label: 'Sed do eiusmod tempor', featured: true, hasArrow: true },
  { id: 'operations', label: 'Lorem ipsum dolor' },
  { id: 'analytics', label: 'Sed do eiusmod tempor' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-3 xl:mx-[86px]">
        <div className="flex h-12 items-center justify-between xl:h-[84px]">
          <LogoLink />
          <DesktopRight
            dropdownRef={dropdownRef}
            dropdownOpen={dropdownOpen}
            onDropdownChange={setDropdownOpen}
          />

          <button
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu
          dropdownOpen={dropdownOpen}
          onDropdownChange={setDropdownOpen}
        />
      )}
    </header>
  );
}

function LogoLink() {
  return (
    <a href="#" className="flex h-5 w-[58px] flex-shrink-0 items-center xl:h-[48px] xl:w-[139px]" aria-label="Qtable">
      <Logo size={20} className="xl:hidden" />
      <Logo size={48} className="hidden xl:inline-flex" />
    </a>
  );
}

function DesktopRight({
  dropdownRef,
  dropdownOpen,
  onDropdownChange,
}: {
  dropdownRef: RefObject<HTMLDivElement>;
  dropdownOpen: boolean;
  onDropdownChange: (open: boolean) => void;
}) {
  return (
    <div className="hidden items-center gap-12 xl:flex">
      <DesktopNav
        dropdownRef={dropdownRef}
        dropdownOpen={dropdownOpen}
        onDropdownChange={onDropdownChange}
      />
      <DesktopActions />
    </div>
  );
}

function DesktopNav({
  dropdownRef,
  dropdownOpen,
  onDropdownChange,
}: {
  dropdownRef: RefObject<HTMLDivElement>;
  dropdownOpen: boolean;
  onDropdownChange: (open: boolean) => void;
}) {
  return (
    <nav className="flex items-center gap-10">
      <div ref={dropdownRef} className="relative">
        <NavButton onClick={() => onDropdownChange(!dropdownOpen)} active={dropdownOpen}>
          Giải pháp
        </NavButton>

        {dropdownOpen && <SolutionsDropdown />}
      </div>

      {navLinks.map((item) => (
        <NavLink key={item}>{item}</NavLink>
      ))}
    </nav>
  );
}

function DesktopActions() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="#"
        className="flex h-12 w-[123px] items-center justify-center whitespace-nowrap rounded-[80px] border border-[#2D2F3333] px-5 py-3 text-[16px] font-semibold leading-6 text-gray-800 transition-colors hover:bg-gray-50"
      >
        Đăng nhập
      </a>
      <a
        href="#"
        className="flex h-12 w-[203px] items-center justify-center gap-1.5 whitespace-nowrap rounded-[80px] bg-[#BFFB4F] px-5 py-3 text-[16px] font-bold leading-6 text-[#2D2F33] transition-colors hover:opacity-90"
      >
        Sử dụng miễn phí
        <ArrowRight size={17} />
      </a>
    </div>
  );
}

function MobileMenu({
  dropdownOpen,
  onDropdownChange,
}: {
  dropdownOpen: boolean;
  onDropdownChange: (open: boolean) => void;
}) {
  return (
    <div className="space-y-1 border-t border-gray-100 bg-white px-4 pb-5 pt-3 xl:hidden">
      <button
        onClick={() => onDropdownChange(!dropdownOpen)}
        className="flex w-full items-center justify-between whitespace-nowrap py-3 text-sm font-medium text-gray-700"
      >
        Giải pháp
        <ChevronDown size={16} className={cn('transition-transform', dropdownOpen && 'rotate-180')} />
      </button>

      {dropdownOpen && (
        <div className="space-y-1 pb-2 pl-4">
          {solutions.map((item) => (
            <SolutionLink key={item.id} item={item} compact />
          ))}
        </div>
      )}

      {navLinks.map((item) => (
        <a key={item} href="#" className="block whitespace-nowrap border-t border-gray-50 py-3 text-sm font-medium text-gray-700">
          {item}
        </a>
      ))}

      <div className="flex flex-col gap-3 border-t border-gray-100 pt-3">
        <a href="#" className="whitespace-nowrap rounded-full border border-gray-300 py-2.5 text-center text-sm font-medium text-gray-800">
          Đăng nhập
        </a>
        <a href="#" className="whitespace-nowrap rounded-full bg-[#a8e63d] py-2.5 text-center text-sm font-semibold text-gray-900">
          Sử dụng miễn phí →
        </a>
      </div>
    </div>
  );
}

function NavButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 whitespace-nowrap text-[16px] font-semibold leading-6 text-gray-700 transition-colors hover:text-gray-900"
    >
      {children}
      <ChevronDown size={16} className={cn('transition-transform duration-200', active && 'rotate-180')} />
    </button>
  );
}

function NavLink({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className="whitespace-nowrap text-[16px] font-semibold leading-6 text-gray-700 transition-colors hover:text-gray-900"
    >
      {children}
    </a>
  );
}

function SolutionsDropdown() {
  return (
    <div className="absolute left-1/2 top-full mt-4 min-w-[320px] -translate-x-1/2 rounded-[20px] border border-gray-100 bg-white py-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] animate-fade-in">
      {solutions.map((item) => (
        <SolutionLink key={item.id} item={item} />
      ))}
    </div>
  );
}

function SolutionLink({ item, compact = false }: { item: SolutionItem; compact?: boolean }) {
  return (
    <a
      href="#"
      className={cn(
        'group flex items-center justify-between whitespace-nowrap transition-colors hover:bg-gray-50',
        compact ? 'py-2 text-sm text-gray-600 hover:text-gray-900' : 'px-6 py-3.5',
      )}
    >
      <span
        className={cn(
          compact ? '' : 'text-[18px] leading-7',
          item.featured ? 'font-semibold text-gray-900' : 'text-gray-600',
        )}
      >
        {item.label}
      </span>
      {item.hasArrow && (
        <ArrowRight size={compact ? 14 : 17} className="text-gray-700 transition-transform group-hover:translate-x-1" />
      )}
    </a>
  );
}
