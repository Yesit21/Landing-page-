"use client";

import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#F5E6D3]">
      <div className="container mx-auto" style={{ padding: '16px 24px' }}>
        <div className="flex items-center justify-between mb-3">
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#8B3535' }}>Dakingo</h1>
          
          <div className="flex items-center" style={{ gap: '12px' }}>
            <div className="relative">
              <Search className="absolute" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#999' }} />
              <input type="text" placeholder="Search" className="bg-white border border-[#ddd] rounded-full" style={{ width: '200px', height: '36px', paddingLeft: '40px', paddingRight: '50px', fontSize: '13px' }} />
              <button className="absolute rounded-full flex items-center justify-center" style={{ right: '2px', top: '50%', transform: 'translateY(-50%)', width: '32px', height: '32px', background: '#8B3535' }}>
                <Search style={{ width: '14px', height: '14px', color: 'white' }} />
              </button>
            </div>
            <ShoppingCart style={{ width: '20px', height: '20px', color: '#8B3535' }} />
            <span style={{ fontSize: '13px', color: '#8B3535' }}>Login/Signup</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: '20px' }}>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535' }}>Cakes</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535' }}>Theme Cakes</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535' }}>Desserts</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535' }}>Birthday</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535' }}>Hampers</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535' }}>Anniversary</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535' }}>Occasions</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535' }}>Occasions</a>
          </div>
          <button className="text-white font-bold rounded" style={{ padding: '8px 20px', background: '#8B3535', fontSize: '12px' }}>ORDER NOW</button>
        </div>
      </div>
    </header>
  );
}
