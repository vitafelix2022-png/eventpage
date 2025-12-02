import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', page: 'home' },
  { label: '제품', page: 'products' },
  { label: '브랜드', page: 'brand' },
  { label: '이벤트', page: 'event' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: '더 쥬시 래스팅 틴트',
    description: '과즙처럼 생생한 컬러감이 입술에 착! 하루 종일 지속되는 촉촉함.',
    originalPrice: '13,000원',
    price: '9,900원',
    discount: '24%',
    tag: '6 COLORS',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzbWt62czJGyBKmXYj_IbsDlTm4aloZHeU3ETKNx3l4CmhYgeemTHhvtmhbaHSqH8Nk1tHqEy7CDUlz6LAKDZ71Uhwpd9tx7rfZFKyqVhSi_wVMIb6gPSxdcS3CkyWiBrj80CHBKF9Xw67Pjw_EqAcqAn2czkzhw5llDn3I7JrkTZpoJku_SIpkHATs1yrwvZ_XRTEhmLaw1RAhcZSwhlNF7fuparaJxfFbeMY01TnXoHdzuPB0zEJ4uZrxYk2c-EyW6goHNUg4oRb',
    alt: 'A bottle of hydrating serum with a dropper.'
  },
  {
    id: 2,
    name: '쥬시 알알 치크',
    description: '두 뺨에 과일 한 방울, 맑고 투명하게 발색되는 수채화 치크.',
    originalPrice: '14,000원',
    price: '10,900원',
    discount: '22%',
    tag: '6 COLORS',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU5i4CQ4mpKL6Q73yzYSzskdjqczX-lobzZMjMuxX84Q3fIH_W5mYfcykWalPe2CayX-QsGzaaQVRVCu9ZXY10jb7NFZ2f6ol5dX1zMAxMPzdUXzztUaSDGOq23DtoIPxR3po2VOtce2xJiA4djixmKRRPYK2WsQC6YPc6a9DJBzjn-TXTX3nfffwp1Gk6jDUQb-XfSfbqhYIxXjNDYp82EsE0wfopa4pZURnSnQweePjf-x0hreRw7-19sSgF9qsncie7NpFjGeOR',
    alt: 'A pink tube of revitalizing face cream.'
  },
  {
    id: 3,
    name: '슬라이드 인 싱글',
    description: '한 번의 터치로 부드럽게 발리는 고밀착 싱글 아이섀도우.',
    originalPrice: '7,000원',
    price: '4,900원',
    discount: '30%',
    tag: '4 COLORS',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcPPy6lMpa0UbdP7COcV-uWhL7aAk5a84o-52nCxe90tP9b7W3uCdSPR52jqipwRKUg08JSw9l6DQ59K36D40O6n1QW2CQGy7kweuSsx69MWwNChST6xkQ3zQt-tT5diUVxcvrOanMXdNYQ60WSfSR6LYfMErw4x1U8iujNhfHcPWfJkrmBbQt7Uo9LyxAJPUUnUqscpSU2_MP2APhnWsrBgTd440F4DpHQCIrWZaTKX-bI0gnqbYonB1RLeUnAbXF_Ur_gzHCQ5r7',
    alt: 'A compact of glowing blush powder.'
  }
];