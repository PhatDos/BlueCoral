import type { ReactNode } from 'react';
import { IMAGES } from '@/constants/assets';

export type HeroSlide = {
  id: string;
  visual: 'showcase' | 'image';
  image: string;
  title: ReactNode;
  description: string;
  cta: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'overview',
    visual: 'showcase',
    image: IMAGES.heroShowcaseMain,
    title: (
      <>
        Quản lý dễ dàng,
        <br />
        bán hàng hiệu quả
      </>
    ),
    description:
      'Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cta: 'Đặt lịch tư vấn',
  },
  {
    id: 'food',
    visual: 'image',
    image: IMAGES.food,
    title: (
      <>
        Tối ưu vận hành,
        <br />
        cho ngành ăn uống
      </>
    ),
    description:
      'Nhận order nhanh, quản lý bàn, in phiếu bếp và theo dõi doanh thu theo thời gian thực cho quán ăn, nhà hàng, cafe.',
    cta: 'Khám phá ăn uống',
  },
  {
    id: 'retail',
    visual: 'image',
    image: IMAGES.retail,
    title: (
      <>
        Bán lẻ gọn hơn,
        <br />
        kiểm kho chuẩn hơn
      </>
    ),
    description:
      'Quản lý sản phẩm, tồn kho, thanh toán và lịch sử khách hàng trong một luồng bán hàng rõ ràng, dễ dùng mỗi ngày.',
    cta: 'Khám phá bán lẻ',
  },
  {
    id: 'service',
    visual: 'image',
    image: IMAGES.service,
    title: (
      <>
        Dịch vụ chỉn chu,
        <br />
        chăm khách tốt hơn
      </>
    ),
    description:
      'Theo dõi lịch hẹn, nhân viên, gói dịch vụ và khách hàng thân thiết để mọi trải nghiệm diễn ra mượt mà.',
    cta: 'Khám phá dịch vụ',
  },
];

