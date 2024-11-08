import type { Product } from './types/products';

const coverImgPath = '/static/images/products/covers/';
const imgPath = '/static/images/products/';

export const trendingProducts: Product[] = [
  {
    id: '01',
    name: 'AFA Sports Jogging',
    description: '',
    coverImg: `${coverImgPath}${'01.jpg'}`,
    img: [],
    price: 39.0,
    onOffer: true,
    discount: 50.0,
    productType: 'Pants',
    categories: ['Males', 'Soccer', 'Clothes'],
  },
  {
    id: '02',
    name: 'Nike Renew Run 3 - Women',
    description: '',
    coverImg: `${coverImgPath}${'02.jpeg'}`,
    img: [],
    price: 65.0,
    onOffer: false,
    discount: 0.0,
    productType: 'Shoes',
    categories: ['Females', 'Running', 'Clothes'],
  },
  {
    id: '03',
    name: 'Topper Strong Pace III',
    description: '',
    coverImg: `${coverImgPath}${'03.jpeg'}`,
    img: [],
    price: 58.99,
    onOffer: true,
    discount: 50.0,
    productType: 'Shoes',
    categories: ['Unisex', 'Running', 'Clothes'],
  },
  {
    id: '04',
    name: 'Bicycle Red T-Shirt',
    description: '',
    coverImg: `${coverImgPath}${'04.png'}`,
    img: [],
    price: 39.0,
    onOffer: false,
    discount: 0.0,
    productType: 'T-Shirts',
    categories: ['Unisex', 'Bicycling', 'Clothes'],
  },
];