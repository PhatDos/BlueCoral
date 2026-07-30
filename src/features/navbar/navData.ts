import type { ReactNode } from 'react';

export type SolutionItem = {
  id: string;
  label: ReactNode;
};

export const navLinks = ['Thiết bị', 'Bảng giá', 'Hỗ trợ'];

export const solutions: SolutionItem[] = [
  { id: 'overview', label: 'Lorem ipsum dolor' },
  { id: 'highlight', label: 'Sed do eiusmod tempor' },
  { id: 'operations', label: 'Lorem ipsum dolor' },
  { id: 'analytics', label: 'Sed do eiusmod tempor' },
];

