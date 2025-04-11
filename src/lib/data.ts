
import { Coupon, Product, Category } from './types';

export const coupons: Coupon[] = [
  {
    id: '1',
    name: 'Summer Sale',
    code: 'SUMMER20',
    description: '20% off on all summer items',
    startDate: '2025-06-01',
    endDate: '2025-08-31',
    discountValue: 20,
    discountType: 'percentage',
  },
  {
    id: '2',
    name: 'Welcome Discount',
    code: 'WELCOME10',
    description: '$10 off on your first purchase',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    discountValue: 10,
    discountType: 'fixed',
  },
  {
    id: '3',
    name: 'Flash Sale',
    code: 'FLASH25',
    description: '25% off for 48 hours only',
    startDate: '2025-05-15',
    endDate: '2025-05-17',
    discountValue: 25,
    discountType: 'percentage',
  },
  {
    id: '4',
    name: 'Holiday Special',
    code: 'HOLIDAY15',
    description: '15% off on all holiday packages',
    startDate: '2025-12-01',
    endDate: '2025-12-25',
    discountValue: 15,
    discountType: 'percentage',
  },
  {
    id: '5',
    name: 'Free Shipping',
    code: 'FREESHIP',
    description: 'Free shipping on orders over $50',
    startDate: '2025-04-01',
    endDate: '2025-04-30',
    discountValue: 0,
    discountType: 'fixed',
  },
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    discountValue: 10,
    discountType: 'percentage',
    isActive: true,
  },
  {
    id: '2',
    name: 'Clothing',
    discountValue: 15,
    discountType: 'percentage',
    isActive: true,
  },
  {
    id: '3',
    name: 'Home & Kitchen',
    discountValue: 5,
    discountType: 'percentage',
    isActive: false,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone X',
    category: 'Electronics',
    price: 799.99,
    discountValue: 50,
    discountType: 'fixed',
    isActive: true,
  },
  {
    id: '2',
    name: 'Laptop Pro',
    category: 'Electronics',
    price: 1299.99,
    discountValue: 100,
    discountType: 'fixed',
    isActive: true,
  },
  {
    id: '3',
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: 29.99,
    discountValue: 20,
    discountType: 'percentage',
    isActive: true,
  },
  {
    id: '4',
    name: 'Coffee Maker',
    category: 'Home & Kitchen',
    price: 89.99,
    discountValue: 15,
    discountType: 'percentage',
    isActive: false,
  },
];
