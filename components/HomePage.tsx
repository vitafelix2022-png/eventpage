import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionState, setTransitionState] = useState<'idle' | 'next' | 'prev'>('idle');
  const [isPaused, setIsPaused] = useState(false);
  
  const isAnimating = transitionState !== 'idle';

  // Helper to get safe index for cyclic array
  const getProduct = (offset: number) => {
    const len = PRODUCTS.length;
    // Add ample length to handle negative numbers safely
    const wrappedIndex = (currentIndex + offset + len * 100) % len;
    return PRODUCTS[wrappedIndex];
  };

  // Generate the window of 5 items: [Previous, Current, Next, Next+1, Next+2]
  // We display 3 items. 
  // Idle state shows indices [1, 2, 3] from this array (which correspond to Current, Next, Next+1)
  // Index 0 is 'Previous' (hidden left), Index 4 is 'Next+2' (hidden right or partial)
  const visibleProducts = [
    getProduct(-1),
    getProduct(0),
    getProduct(1),
    getProduct(2),
    getProduct(3),
  ];

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setTransitionState('next');
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setTransitionState('prev');
  }, [isAnimating]);

  // Handle Animation End
  useEffect(() => {
    if (transitionState === 'idle') return;

    const timeout = setTimeout(() => {
      if (transitionState === 'next') {
        setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
      } else if (transitionState === 'prev') {
        setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
      }
      setTransitionState('idle');
    }, 500); // Duration matches CSS transition

    return () => clearTimeout(timeout);
  }, [transitionState]);

  // Auto Play Logic
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      // Only trigger if not already animating
      if (transitionState === 'idle') {
        setTransitionState('next');
      }
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused, transitionState]);

  // CSS Logic
  // Gap is 1.5rem (24px).
  // Container width = 100%. 
  // We want to show 3 items. 
  // The 'pitch' (movement distance) is (100% + gap) / 3.
  // Idle position: We want to show item at index 1 (Current). So we shift left by 1 pitch.
  // Prev position: We want to show item at index 0 (Previous). So we shift left by 0.
  // Next position: We want to show item at index 2 (Next). So we shift left by 2 pitches.
  
  const getTransform = () => {
    const pitch = `calc((100% + 1.5rem) / 3)`;
    switch (transitionState) {
      case 'idle': return `translateX(calc(-1 * ${pitch}))`;
      case 'next': return `translateX(calc(-2 * ${pitch}))`;
      case 'prev': return `translateX(0px)`;
      default: return `translateX(calc(-1 * ${pitch}))`;
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden mb-16 shadow-2xl group">
        <img 
          src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop" 
          alt="Natural Cosmetics Background" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-xl text-white">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold mb-4">
                2024 New Collection
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                자연이 주는<br/>
                <span className="text-primary">선물같은 휴식</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
                상떼는 당신의 피부가 가장 편안한 순간을 연구합니다.
                자극 없는 순수한 성분으로 매일 더 아름다워지세요.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => onNavigate('products')}
                  className="px-8 py-4 bg-primary hover:bg-orange-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
                >
                  제품 보러가기
                </button>
                <button 
                  onClick={() => onNavigate('brand')}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/50 text-white font-bold rounded-lg transition-all"
                >
                  브랜드 스토리
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'spa', title: 'Natural Ingredients', desc: '100% 자연 유래 성분만을 사용합니다.' },
            { icon: 'cruelty_free', title: 'Cruelty Free', desc: '동물 실험을 하지 않는 윤리적인 브랜드입니다.' },
            { icon: 'water_drop', title: 'Deep Hydration', desc: '피부 속부터 차오르는 깊은 보습감을 선사합니다.' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-secondary dark:border-gray-700 hover:shadow-xl transition-shadow text-center group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-secondary/50 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-white">{feature.title}</h3>
              <p className="text-text-secondary dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bestseller Rolling Carousel Section */}
      <section 
        className="mb-20 bg-gradient-to-b from-secondary/10 to-transparent rounded-3xl py-12 px-4 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-text-primary dark:text-white mb-4">
            이번 주 베스트 셀러
          </h2>
          <p className="text-text-secondary dark:text-gray-400">
            가장 많은 사랑을 받고 있는 상떼의 시그니처 아이템
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-hidden max-w-7xl mx-auto px-2">
          {/* This wrapper slides */}
          <div 
            className="flex gap-6 will-change-transform"
            style={{
              transform: getTransform(),
              transition: isAnimating ? 'transform 500ms ease-in-out' : 'none',
              // The width ensures the pitch calculation (100% + gap)/3 is accurate relative to this container
              width: '100%' 
            }}
          >
            {visibleProducts.map((product, idx) => (
              <div 
                key={`${product.id}-${idx}`} 
                // Each item is exactly 1/3 width minus the gap distribution.
                // Or simply: min-width: calc(33.333% - 1rem) for gap-6 (1.5rem)
                className="min-w-[calc(33.333%-1rem)] flex-shrink-0"
              >
                <ProductCard product={product} variant="grid" />
              </div>
            ))}
          </div>
        </div>

        {/* Simple Centered Controls */}
        <div className="flex justify-center gap-4 mt-10">
          <button 
            onClick={handlePrev}
            disabled={isAnimating}
            className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/10 border border-secondary dark:border-gray-600 rounded-full shadow-md text-text-primary dark:text-white hover:bg-primary hover:text-white hover:border-primary hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous Products"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button 
            onClick={handleNext}
            disabled={isAnimating}
            className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/10 border border-secondary dark:border-gray-600 rounded-full shadow-md text-text-primary dark:text-white hover:bg-primary hover:text-white hover:border-primary hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
             aria-label="Next Products"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;