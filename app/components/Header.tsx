"use client";
import { Search } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-[#FDF8F3] border-b border-[#E8DDD0]">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-shrink-0">
              <h1 className="text-[#6B2C2C] text-[32px] font-bold">Dakingo</h1>
            </div>
            <div className="flex-1 max-w-[500px] mx-auto">
              <div className="relative flex items-center">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#999999] pointer-events-none z-10">
                  <Search className="w-[20px] h-[20px]" strokeWidth={2} />
                </div>
                <input type="text" placeholder="Search" className="w-full pl-14 pr-24 py-3 rounded-full border-2 border-[#D4C4B8] bg-white focus:outline-none focus:border-[#8B3535] text-[15px] text-[#333333] placeholder:text-[#AAAAAA]" />
                <button className="absolute right-0 top-0 bottom-0 bg-[#8B3535] hover:bg-[#6B2828] text-white px-8 rounded-r-full flex items-center justify-center transition-colors" aria-label="Search">
                  <Search className="w-[22px] h-[22px]" strokeWidth={2.5} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <button aria-label="Shopping Cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B3535" className="w-[36px] h-[36px]">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
              <button className="text-[#A85858] hover:text-[#8B3535] transition-colors text-[15px] font-medium whitespace-nowrap">Login/Signup</button>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white border-b border-[#F0F0F0]">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-[52px]">
            <ul className="flex items-center gap-7 text-[14px] font-medium">
              <li><a href="#" className="text-[#6B2C2C] hover:text-[#8B3535] transition-colors">Cakes</a></li>
              <li><a href="#" className="text-[#6B2C2C] hover:text-[#8B3535] transition-colors">Theme Cakes</a></li>
              <li><a href="#" className="text-[#6B2C2C] hover:text-[#8B3535] transition-colors">Desserts</a></li>
              <li><a href="#" className="text-[#6B2C2C] hover:text-[#8B3535] transition-colors">Birthday</a></li>
              <li><a href="#" className="text-[#6B2C2C] hover:text-[#8B3535] transition-colors">Hampers</a></li>
              <li><a href="#" className="text-[#6B2C2C] hover:text-[#8B3535] transition-colors">Anniversary</a></li>
              <li><a href="#" className="text-[#6B2C2C] hover:text-[#8B3535] transition-colors">Occasions</a></li>
              <li><a href="#" className="text-[#6B2C2C] hover:text-[#8B3535] transition-colors">Occasions</a></li>
            </ul>
            <button className="bg-[#8B3535] hover:bg-[#6B2828] text-white px-7 py-[10px] rounded-[6px] text-[13px] font-bold tracking-wide uppercase transition-colors shadow-sm">ORDER NOW</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
