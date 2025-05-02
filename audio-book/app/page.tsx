"use client";
import React from 'react';
import Header from '@/components/Header';
import MarketFilters from '@/components/MarketFilters';
import ProductGrid from '@/components/ProductGrid';
import BottomNav from '@/components/BottomNav';

const Home = () => {
  return (
    <div className="phone-frame">
      <Header />
      <MarketFilters />
      <ProductGrid />
      <BottomNav />
    </div>
  );
}

export default Home;