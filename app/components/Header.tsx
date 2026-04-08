"use client";

import { ShoppingCart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Background: Light cream/beige (#FDF8F3 aproximado) */}
      <div className="bg-[#FDF8F3] border-b border-[#E8DDD0]">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo - Color: Dark burgundy/maroon (#6B2C2C) */}
            <div className="flex-shrink-0">
              <h1 className="text-[#6B2C2C] text-[32px] font-bold tracking-tight leading-none">
                Dakingo
              </h1>
            </div>

            {/* Search Bar - Centered, max-width */}
            <div className="flex-1 max-w-[420px] mx-auto">
              <div className="relative">
                {/* Search Icon - Left side inside input */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999999]">
                  <Search className="w-[18px] h-[18px]" />
                </div>
                
                {/* Input Field - White background, rounded full */}
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-12 pr-14 py-[10px] rounded-full border border-[#D4C4B8] bg-white focus:outline-none focus:border-[#6B2C2C] text-[14px] text-[#333333] placeholder:text-[#999999]"
                />
                
                {/* Search Button - Circular, bright red */}
                <button 
                  className="absolute right-[6px] top-1/2 -translate-y-1/2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full w-[36px] h-[36px] flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Search"
                >
                  <Search className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>

            {/* User Actions - Right side */}
            <div className="flex items-center gap-5 flex-shrink-0">
              {/* Shopping Cart Icon with red circle */}
              <button className="relative text-[#6B2C2C] hover:text-[#8B3A3A] transition-colors" aria-label="Shopping Cart">
                <ShoppingCart className="w-[22px] h-[22px]" strokeWidth={2} />
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

            {/* Order Now Button - Burgundy/maroon background, rounded corners */}
            <button className="bg-[#8B3535] hover:bg-[#6B2828] text-white px-7 py-[10px] rounded-[6px] text-[13px] font-bold tracking-wide uppercase transition-colors shadow-sm">
              ORDER NOW
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
