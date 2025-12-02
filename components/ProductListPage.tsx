import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

const ProductListPage: React.FC = () => {
  // Generate 8 products for the grid view by repeating existing data
  const gridProducts = Array.from({ length: 8 }).map((_, index) => {
     const originalProduct = PRODUCTS[index % PRODUCTS.length];
     return {
         ...originalProduct,
         id: index + 100, // Ensure unique keys
         name: index < 3 ? originalProduct.name : `${originalProduct.name} ${String.fromCharCode(65 + index)}`
     };
  });

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex flex-col md:flex-row items-end justify-between pb-6 border-b border-secondary dark:border-gray-700 gap-4">
        <div>
           <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-3">
            전체 제품
          </h1>
          <p className="text-text-secondary dark:text-gray-400">
            상떼의 베스트셀러부터 신제품까지 한눈에 만나보세요.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
            <button className="px-5 py-2.5 text-sm font-bold rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105">전체</button>
            <button className="px-5 py-2.5 text-sm font-medium rounded-full bg-white dark:bg-white/5 border border-secondary dark:border-gray-600 text-text-secondary hover:border-primary hover:text-primary transition-all">스킨케어</button>
            <button className="px-5 py-2.5 text-sm font-medium rounded-full bg-white dark:bg-white/5 border border-secondary dark:border-gray-600 text-text-secondary hover:border-primary hover:text-primary transition-all">메이크업</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
         {gridProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" />
          ))}
      </div>
      
      <div className="flex justify-center mt-12 mb-8">
        <button className="group flex items-center gap-2 px-8 py-3 border border-secondary dark:border-gray-600 rounded-lg text-text-primary dark:text-gray-300 font-medium hover:bg-secondary/20 hover:border-primary hover:text-primary transition-all">
            더 많은 제품 보기
            <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">expand_more</span>
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;