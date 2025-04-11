
export interface Coupon {
  id: string;
  name: string;
  code: string;
  description: string;
  startDate: string;
  endDate: string;
  discountValue: number;
  discountType: 'percentage' | 'fixed';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discountValue: number;
  discountType: 'percentage' | 'fixed';
  isActive: boolean;
}

export interface Category {
  id: string;
  name: string;
  discountValue: number;
  discountType: 'percentage' | 'fixed';
  isActive: boolean;
}
