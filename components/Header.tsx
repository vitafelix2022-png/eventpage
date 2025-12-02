import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#FCE6D6] dark:border-gray-700 px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')}
              className="text-text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] hover:opacity-80 transition-opacity"
            >
              상떼
            </button>
          </div>
          <nav className="hidden md:flex flex-1 justify-center items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.page)}
                className={`${
                  currentPage === item.page
                    ? 'text-primary dark:text-pink-400 font-bold'
                    : 'text-text-primary dark:text-gray-300 dark:hover:text-white font-medium'
                } text-sm leading-normal transition-colors relative group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left transform transition-transform duration-300 ${currentPage === item.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity shadow-md shadow-primary/20">
              <span className="truncate">로그인</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#fef5ef] dark:bg-white/10 dark:text-gray-300 text-text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-secondary/50 dark:hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#fef5ef] dark:bg-white/10 dark:text-gray-300 text-text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-secondary/50 dark:hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;