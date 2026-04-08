"use client";

import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#F5E6D3]">
      <div className="container mx-auto" style={{ padding: '14px 24px' }}>
        <div className="flex items-center justify-between mb-2">
          <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#8B3535' }}>Dakingo</h1>
          
          <div className="flex items-center" style={{ gap: '16px' }}>
            <div className="relative">
              <Search className="absolute" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#999' }} />
              <input type="text" placeholder="Search" className="bg-white border border-[#ddd] rounded-full" style={{ width: '220px', height: '34px', paddingLeft: '38px', paddingRight: '48px', fontSize: '13px' }} />
              <button className="absolute rounded-full flex items-center justify-center" style={{ right: '2px', top: '50%', transform: 'translateY(-50%)', width: '30px', height: '30px', background: '#8B3535' }}>
                <Search style={{ width: '13px', height: '13px', color: 'white' }} />
              </button>
            </div>
            
            <div className="rounded-full flex items-center justify-center" style={{ width: '32px', height: '32px', background: '#D32F2F' }}>
              <ShoppingCart style={{ width: '16px', height: '16px', color: 'white' }} fill="white" strokeWidth={1.5} />
            </div>
            
            <span style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Login/Signup</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: '18px' }}>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Cakes</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Theme Cakes</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Desserts</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Birthday</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Hampers</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Anniversary</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Occasions</a>
            <a href="#" style={{ fontSize: '13px', color: '#8B3535', fontWeight: '500' }}>Occasions</a>
          </div>
          <button className="text-white font-bold rounded" style={{ padding: '7px 18px', background: '#8B3535', fontSize: '12px' }}>ORDER NOW</button>
        </div>
      </div>
    </header>
  );
}
