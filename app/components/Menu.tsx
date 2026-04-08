"use client";

import { Cake, UtensilsCrossed, Cookie } from "lucide-react";

export default function Menu() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-[#8B3535] text-[42px] font-bold mb-2">Menu</h2>
          <p className="text-[#6B2C2C] text-[16px] font-medium mb-4">
            What will you wish for?
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 border-2 border-[#8B3535] rounded flex items-center justify-center">
              <span className="text-[#8B3535] text-xs">📱</span>
            </div>
            <div className="w-8 h-8 border-2 border-[#8B3535] rounded flex items-center justify-center">
              <span className="text-[#8B3535] text-xs">👥</span>
            </div>
            <div className="w-8 h-8 border-2 border-[#8B3535] rounded flex items-center justify-center">
              <span className="text-[#8B3535] text-xs">📧</span>
            </div>
          </div>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto">
          {/* CLASSIC */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#FDF8F3] rounded-lg flex items-center justify-center mb-3 border border-[#E8DDD0]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#8B3535" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-10 h-10"
              >
                <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                <path d="M2 21h20"/>
                <path d="M7 8v3"/>
                <path d="M12 8v3"/>
                <path d="M17 8v3"/>
                <path d="M7 4h10v4H7z"/>
              </svg>
            </div>
            <h3 className="text-[#8B3535] text-[15px] font-bold uppercase tracking-wide">
              CLASSIC
            </h3>
          </div>

          {/* GOURMET */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#FDF8F3] rounded-lg flex items-center justify-center mb-3 border border-[#E8DDD0]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#8B3535" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-10 h-10"
              >
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18"/>
                <path d="M9 21V9"/>
              </svg>
            </div>
            <h3 className="text-[#8B3535] text-[15px] font-bold uppercase tracking-wide">
              GOURMET
            </h3>
          </div>

          {/* DESSERTS */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#FDF8F3] rounded-lg flex items-center justify-center mb-3 border border-[#E8DDD0]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#8B3535" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-10 h-10"
              >
                <path d="M17 21v-8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v8"/>
                <circle cx="10" cy="5" r="3"/>
                <path d="M3 21h14"/>
                <path d="M20 8v13"/>
                <path d="M20 8a2 2 0 1 0 0-4"/>
              </svg>
            </div>
            <h3 className="text-[#8B3535] text-[15px] font-bold uppercase tracking-wide">
              DESSERTS
            </h3>
          </div>

          {/* COOKIES */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#FDF8F3] rounded-lg flex items-center justify-center mb-3 border border-[#E8DDD0]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#8B3535" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-10 h-10"
              >
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="1" fill="#8B3535"/>
                <circle cx="8" cy="10" r="1" fill="#8B3535"/>
                <circle cx="16" cy="10" r="1" fill="#8B3535"/>
                <circle cx="9" cy="15" r="1" fill="#8B3535"/>
                <circle cx="15" cy="15" r="1" fill="#8B3535"/>
              </svg>
            </div>
            <h3 className="text-[#8B3535] text-[15px] font-bold uppercase tracking-wide">
              COOKIES
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
