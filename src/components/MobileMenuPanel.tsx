import { useState } from 'react';
import { ArrowRight, ChevronDown, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { FreeTrialButton, LoginButton } from '@/components/NavbarActions';
import type { SolutionItem } from '@/components/navbarContent';
import { cn } from '@/lib/cn';

type MobileMenuPanelProps = {
  closing: boolean;
  dropdownOpen: boolean;
  navLinks: string[];
  solutions: SolutionItem[];
  onClose: () => void;
  onClosed: () => void;
  onDropdownChange: (open: boolean) => void;
};

export default function MobileMenuPanel({
  closing,
  dropdownOpen,
  navLinks,
  solutions,
  onClose,
  onClosed,
  onDropdownChange,
}: MobileMenuPanelProps) {
  const [activeSolutionId, setActiveSolutionId] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      <button
        className={cn(
          'absolute inset-0 cursor-default bg-[#101828]/45 backdrop-blur-[2px]',
          closing ? 'animate-overlay-fade-out' : 'animate-overlay-fade',
        )}
        onClick={onClose}
        aria-label="Close menu overlay"
      />

      <aside
        className={cn(
          'absolute bottom-0 right-0 top-0 flex w-[min(390px,calc(100vw-24px))] flex-col overflow-hidden bg-white shadow-[-24px_0_80px_rgba(15,23,42,0.22)]',
          closing ? 'animate-slide-out-right' : 'animate-slide-in-right',
        )}
        onAnimationEnd={() => {
          if (closing) onClosed();
        }}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5 md:h-[84px]">
          <Logo size={28} className="md:hidden" />
          <Logo size={48} className="hidden md:inline-flex" />
          <button
            className="rounded-full border border-gray-200 p-2 text-gray-700 transition-colors hover:bg-gray-50 md:p-3"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-[18px] w-[18px] md:h-6 md:w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-5">
          <div className="rounded-[20px] border border-gray-100 bg-[#F7F8F4] p-2 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
            <button
              className="flex h-12 w-full items-center justify-between rounded-2xl bg-white px-4 text-[15px] font-bold text-[#2D2F33] shadow-sm transition-colors hover:bg-gray-50 md:h-14 md:text-[16px]"
              onClick={() => onDropdownChange(!dropdownOpen)}
            >
              Giải pháp
              <ChevronDown size={17} className={cn('transition-transform duration-200', dropdownOpen && 'rotate-180')} />
            </button>

            {dropdownOpen && (
              <div
                className="mt-2 space-y-1 rounded-2xl bg-white p-2 animate-fade-in"
                onMouseLeave={() => setActiveSolutionId(null)}
              >
                {solutions.map((item) => (
                  <PanelSolutionLink
                    key={item.id}
                    item={item}
                    active={activeSolutionId === item.id}
                    onHover={() => setActiveSolutionId(item.id)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 space-y-2">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="flex h-12 items-center rounded-2xl px-4 text-[15px] font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-950 md:h-14 md:text-[16px]"
                onClick={onClose}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="border-t border-gray-100 bg-white px-5 pb-6 pt-4">
          <div className="flex flex-col gap-3">
            <LoginButton className="w-full" onClick={onClose} />
            <FreeTrialButton className="w-full" onClick={onClose} />
          </div>
        </div>
      </aside>
    </div>
  );
}

function PanelSolutionLink({
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
      className={cn(
        'group flex items-center justify-between whitespace-nowrap rounded-xl px-3 py-2.5 text-sm transition-all duration-300 ease-out hover:bg-gray-50',
        active ? 'font-semibold text-gray-900' : 'text-gray-600 hover:text-gray-900',
      )}
    >
      <span>{item.label}</span>
      {active && <ArrowRight size={14} className="text-gray-700 transition-transform duration-300 ease-out group-hover:translate-x-1" />}
    </a>
  );
}
