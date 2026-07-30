import { Briefcase, ShoppingBag, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { IMAGES } from '@/constants/assets';

export type IndustryId = 'food' | 'retail' | 'service';

export type Industry = {
  id: IndustryId;
  label: string;
  icon: LucideIcon;
  image: string;
  isNew?: boolean;
};

export type IndustryContent = {
  title: string;
  description: string;
  options: string[];
};

export const industries: Industry[] = [
  { id: 'food', label: 'Ăn uống', icon: Utensils, image: IMAGES.food },
  { id: 'retail', label: 'Bán lẻ', icon: ShoppingBag, image: IMAGES.retail, isNew: true },
  { id: 'service', label: 'Dịch vụ', icon: Briefcase, image: IMAGES.service, isNew: true },
];

export const industryContent: Record<IndustryId, IndustryContent> = {
  food: {
    title: 'Quán cà phê',
    description:
      'Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/gọi lại hiệu quả.',
    options: ['Quán ăn / nhà hàng', 'Quán bar / lounge / pub', 'Quán ăn di động', 'Tiệm trà sữa', 'Tiệm bánh'],
  },
  retail: {
    title: 'Cửa hàng bán lẻ',
    description:
      'Qtable giúp quản lý hàng tồn kho, theo dõi doanh số và xử lý thanh toán nhanh chóng, chính xác.',
    options: ['Cửa hàng tiện lợi', 'Shop thời trang', 'Siêu thị mini', 'Cửa hàng mỹ phẩm', 'Nhà sách'],
  },
  service: {
    title: 'Dịch vụ tiện ích',
    description:
      'Quản lý lịch hẹn, nhân viên và khách hàng thân thiết một cách dễ dàng với Qtable.',
    options: ['Salon / spa', 'Phòng khám', 'Trung tâm sửa chữa', 'Studio', 'Dịch vụ tại nhà'],
  },
};

