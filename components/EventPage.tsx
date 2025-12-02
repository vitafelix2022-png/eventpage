import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

const EventPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <section className="mb-16 text-center">
        <div className="inline-block px-6 py-2 border-2 border-secondary rounded-full mb-4 hover:bg-secondary/20 transition-colors cursor-default">
          <p className="text-primary font-bold">공식몰에서만 만나보세요!</p>
        </div>
        <h1 className="text-text-primary dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl mb-6">
          롬앤 신상 라인 업
        </h1>
        <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            새로운 계절, 새로운 무드. 당신의 매력을 한층 더 끌어올려줄 롬앤의 새로운 컬렉션을 지금 바로 만나보세요.
            오직 공식몰에서만 드리는 특별한 혜택이 준비되어 있습니다.
        </p>
      </section>

      <section>
        <div className="space-y-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventPage;