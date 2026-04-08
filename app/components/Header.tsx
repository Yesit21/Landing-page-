"use client";

import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Background: Light cream (#FDF8F3) */}
      <div className="bg-[#FDF8F3] border-b border-[#E8DDD0]">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo - Color: Dark burgundy (#6B2C2C) */}
            <div className="flex-shrink-0">
              <h1 className="text-[#6B2C2C] text-[32px] font-bold tracking-tight leading-none">
                Dakingo
              </h1>
            </div>

            {/* Search Bar - Simple input with button on right */}
            <div className="flex-1 max-w-[420px] mx-auto">
              <div className="relative">
                {/* Input Field - White background, rounded full, NO icon inside */}
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-5 pr-14 py-[10px] rounded-full border border-[#D4C4B8] bg-white focus:outline-none focus:border-[#6B2C2C] text-[14px] text-[#333333] placeholder:text-[#999999]"
                />
                
                {/* Search Button - Circular, bright red, positioned inside right edge */}
                <button 
                  className="absolute right-[4px] top-1/2 -translate-y-1/2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full w-[38px] h-[38px] flex items-center justify-center transition-colors shadow-md"
                  aria-label="Search"
                >
                  <Search className="w-[18px] h-[18px]" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* User Actions - Right side */}
            <div className="flex items-center gap-5 flex-shrink-0">
              {/* Shopping Cart Icon - FILLED red circle with white cart icon */}
              <button 
                className="relative bg-[#D32F2F] hover:bg-[#B71C1C] rounded-full w-[40px] h-[40px] flex items-center justify-center transition-colors shadow-sm" 
                aria-label="Shopping Cart"
              >
                {/* Cart Icon - Using SVG for filled style */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-[20px] h-[20px]"
                >
                  <circle cx="9" cy="21" r="1" fill="white" stroke="none"/>
                  <circle cx="20" cy="21" r="1" fill="white" stroke="none"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </button>
              
              {/* Login/Signup Text */}
              <button className="text-[#6B2C2C] hover:text-[#8B3A3A] transition-colors text-[14px] font-medium whitespace-nowrap">
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu - White background */}
      <nav className="bg-white border-b border-[#F0F0F0]">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-[52px]">
            {/* Menu Links - Horizontal list */}
            <ul className="flex items-center gap-7 text-[14px] font-medium">
              <li>
                <a href="#" className="text-[#6B2C2C] hover:text-[#D32F2F] transition-colors">
                  Cakes
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B2C2C] hover:text-[#D32F2F] transition-colors">
                  Theme Cakes
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B2C2C] hover:text-[#D32F2F] transition-colors">
                  Desserts
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B2C2C] hover:text-[#D32F2F] transition-colors">
                  Birthday
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B2C2C] hover:text-[#D32F2F] transition-colors">
                  Hampers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B2C2C] hover:text-[#D32F2F] transition-colors">
                  Anniversary
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B2C2C] hover:text-[#D32F2F] transition-colors">
                  Occasions
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B2C2C] hover:text-[#D32F2F] transition-colors">
                  Occasions
                </a>
              </li>
            </ul>

            {/* Order Now Button - Burgundy background, rounded corners */}
            <button className="bg-[#8B3535] hover:bg-[#6B2828] text-white px-7 py-[10px] rounded-[6px] text-[13px] font-bold tracking-wide uppercase transition-colors shadow-sm">
              ORDER NOW
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
