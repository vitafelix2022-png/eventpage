import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  variant?: 'list' | 'grid';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'list' }) => {
  const isGrid = variant === 'grid';

  if (isGrid) {
    return (
      <div className="group flex flex-col h-full bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-secondary/50 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden bg-secondary/10 dark:bg-gray-800">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={product.imageUrl}
            alt={product.alt}
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
             <span className="inline-block bg-white/90 dark:bg-black/60 backdrop-blur-sm text-primary dark:text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-sm shadow-sm">
              {product.tag}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
             <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30">
              {product.discount}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-bold text-text-primary dark:text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-text-secondary dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-dashed border-secondary dark:border-gray-700">
            <p className="text-xs text-text-secondary line-through">
              {product.originalPrice}
            </p>
            <p className="text-lg font-bold text-text-primary dark:text-white">
              {product.price}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default List View
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 rounded-xl border-2 border-secondary bg-white dark:bg-white/5 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 duration-300 group">
      <div className="w-full md:w-1/3">
        <div className="relative overflow-hidden rounded-lg">
          <img
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={product.imageUrl}
            alt={product.alt}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full mb-2">
          {product.tag}
        </div>
        <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-text-secondary dark:text-gray-400 mb-3 text-sm sm:text-base">
          {product.description}
        </p>
        <div className="flex items-baseline justify-center md:justify-start gap-2 mb-1">
          <p className="text-lg text-text-secondary line-through">
            {product.originalPrice}
          </p>
          <p className="text-2xl font-bold text-text-primary dark:text-white">
            {product.price}
          </p>
        </div>
        <div className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-md mb-4">
          전착특가
        </div>
      </div>
      <div className="flex-shrink-0 relative">
        <div className="size-24 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
          <span className="text-3xl font-bold">{product.discount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;