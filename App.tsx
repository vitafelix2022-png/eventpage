import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BrandPage from './components/BrandPage';
import ProductListPage from './components/ProductListPage';
import EventPage from './components/EventPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('event');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'products':
        return <ProductListPage />;
      case 'brand':
        return <BrandPage />;
      case 'event':
        return <EventPage />;
      default:
        return <EventPage />;
    }
  };

  return (
    <div className="relative flex w-full flex-col group/design-root overflow-x-hidden min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;