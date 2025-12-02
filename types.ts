export type Page = 'home' | 'products' | 'brand' | 'event';

export interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  price: string;
  discount: string;
  tag: string;
  imageUrl: string;
  alt: string;
}

export interface NavItem {
  label: string;
  page: Page;
}