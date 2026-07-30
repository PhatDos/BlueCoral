import { useEffect, useRef, useState } from 'react';
import type { ReactNode, RefObject } from 'react';
import { ArrowRight, ChevronDown, Menu } from 'lucide-react';
import Dropdown from '@/components/ui/Dropdown';
import Logo from '@/components/Logo';
import { cn } from '@/lib/cn';
import MobileMenuPanel from './MobileMenuPanel';
import { FreeTrialButton, LoginButton } from './NavbarActions';
import { navLinks, solutions } from './navData';
import type { SolutionItem } from './navData';

export default function Navbar() {
  const [panelMounted, setPanelMounted] = useState(false);
  const [panelClosing, setPanelClosing] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [panelDropdownOpen, setPanelDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, []);

  useEffect(() => {
    if (!panelMounted) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') closeMenu();
    }

    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [panelMounted]);

  function openMenu() {
    setPanelMounted(true);
    setPanelClosing(false);
  }

  function closeMenu() {
    setPanelClosing(true);
    setPanelDropdownOpen(false);
  }

  function unmountMenu() {
    setPanelMounted(false);
    setPanelClosing(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-3 md:mx-[86px]">
        <div className="flex h-12 items-center justify-between md:h-[84px]">
          <LogoLink />
          <DesktopRight
            dropdownRef={dropdownRef}
            dropdownOpen={desktopDropdownOpen}
            onDropdownChange={setDesktopDropdownOpen}
          />

          <button
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:p-3 xl:hidden"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
      </div>

      {panelMounted && (
        <MobileMenuPanel
          closing={panelClosing}
          dropdownOpen={panelDropdownOpen}
          navLinks={navLinks}
          solutions={solutions}
          onClose={closeMenu}
          onClosed={unmountMenu}
          onDropdownChange={setPanelDropdownOpen}
        />
      )}
    </header>
  );
}

function LogoLink() {
  return (
    <a href="#" className="flex h-5 w-[58px] flex-shrink-0 items-center md:h-[48px] md:w-[139px]" aria-label="Qtable">
      <Logo size={20} className="md:hidden" />
      <Logo size={48} className="hidden md:inline-flex" />
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
      <div className="flex items-center gap-3">
        <LoginButton />
        <FreeTrialButton />
      </div>
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
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <Dropdown
      className="absolute left-1/2 top-full mt-4 min-w-[268px] -translate-x-1/2 rounded-[20px] border border-gray-100 bg-white py-3 shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
      onMouseLeave={() => setActiveId(null)}
    >
      {solutions.map((item) => (
        <SolutionLink
          key={item.id}
          item={item}
          active={activeId === item.id}
          onHover={() => setActiveId(item.id)}
        />
      ))}
    </Dropdown>
  );
}

function SolutionLink({
  item,
  active,
  onHover,
}: {
  item: SolutionItem;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <a
      href="#"
      onMouseEnter={onHover}
      onFocus={onHover}
      className="group flex items-center justify-between whitespace-nowrap rounded-xl px-5 py-3 transition-all duration-300 ease-out hover:bg-gray-50"
    >
      <span className={cn('text-[17px] leading-7 transition-all duration-300 ease-out', active ? 'font-semibold text-gray-900' : 'text-gray-600')}>
        {item.label}
      </span>
      {active && <ArrowRight size={17} className="text-gray-700 transition-transform duration-300 ease-out group-hover:translate-x-1" />}
    </a>
  );
}

