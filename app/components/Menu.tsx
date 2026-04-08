"use client";

export default function Menu() {
  return (
    <section className="bg-[#FDF8F3] py-14">
      <div className="container mx-auto px-8 max-w-5xl">
        {/* Header Section */}
        <div className="mb-10">
          {/* Title */}
          <h2 className="text-[#8B3535] text-[40px] font-bold leading-tight mb-1">
            Menu
          </h2>
          
          {/* Subtitle */}
          <p className="text-[#6B5B5A] text-[15px] font-normal mb-4">
            What will you wish for?
          </p>
          
          {/* Social Icons Row - 3 small square icons */}
          <div className="flex items-center gap-2">
            {/* Icon 1 - Mobile/Phone */}
            <div className="w-[28px] h-[28px] bg-white border border-[#D4C4B8] rounded-[4px] flex items-center justify-center hover:border-[#8B3535] transition-colors">
              <svg 
                className="w-[14px] h-[14px]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#8B3535" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </div>
            
            {/* Icon 2 - Users/People */}
            <div className="w-[28px] h-[28px] bg-white border border-[#D4C4B8] rounded-[4px] flex items-center justify-center hover:border-[#8B3535] transition-colors">
              <svg 
                className="w-[14px] h-[14px]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#8B3535" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            
            {/* Icon 3 - Mail/Email */}
            <div className="w-[28px] h-[28px] bg-white border border-[#D4C4B8] rounded-[4px] flex items-center justify-center hover:border-[#8B3535] transition-colors">
              <svg 
                className="w-[14px] h-[14px]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#8B3535" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Categories Grid - 4 columns, centered */}
        <div className="grid grid-cols-4 gap-8 max-w-[700px] mx-auto">
          
          {/* Category 1: CLASSIC */}
          <div className="flex flex-col items-center">
            {/* Icon Box */}
            <div className="w-[85px] h-[85px] bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow flex items-center justify-center mb-3">
              {/* Layered Cake Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 48 48" 
                className="w-[42px] h-[42px]"
              >
                {/* Bottom layer */}
                <rect x="8" y="32" width="32" height="6" fill="#8B3535" rx="1"/>
                {/* Middle layer */}
                <rect x="10" y="24" width="28" height="8" fill="#A84444" rx="1"/>
                {/* Top layer */}
                <rect x="12" y="16" width="24" height="8" fill="#8B3535" rx="1"/>
                {/* Decorative dots */}
                <circle cx="16" cy="14" r="1.5" fill="#D32F2F"/>
                <circle cx="24" cy="14" r="1.5" fill="#D32F2F"/>
                <circle cx="32" cy="14" r="1.5" fill="#D32F2F"/>
              </svg>
            </div>
            {/* Label */}
            <h3 className="text-[#8B3535] text-[13px] font-bold uppercase tracking-[0.08em]">
              CLASSIC
            </h3>
          </div>

          {/* Category 2: GOURMET */}
          <div className="flex flex-col items-center">
            {/* Icon Box */}
            <div className="w-[85px] h-[85px] bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow flex items-center justify-center mb-3">
              {/* Square Cake Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 48 48" 
                className="w-[42px] h-[42px]"
              >
                {/* Main square cake */}
                <rect x="12" y="16" width="24" height="20" fill="#8B3535" rx="1"/>
                {/* Top frosting */}
                <rect x="12" y="16" width="24" height="5" fill="#A84444" rx="1"/>
                {/* Vertical divider */}
                <line x1="24" y1="16" x2="24" y2="36" stroke="#6B2828" strokeWidth="1.5"/>
                {/* Horizontal divider */}
                <line x1="12" y1="26" x2="36" y2="26" stroke="#6B2828" strokeWidth="1.5"/>
              </svg>
            </div>
            {/* Label */}
            <h3 className="text-[#8B3535] text-[13px] font-bold uppercase tracking-[0.08em]">
              GOURMET
            </h3>
          </div>

          {/* Category 3: DESSERTS */}
          <div className="flex flex-col items-center">
            {/* Icon Box */}
            <div className="w-[85px] h-[85px] bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow flex items-center justify-center mb-3">
              {/* Cupcakes Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 48 48" 
                className="w-[42px] h-[42px]"
              >
                {/* Left cupcake */}
                <path d="M14 22 L11 32 L21 32 L18 22 Z" fill="#8B3535"/>
                <ellipse cx="16" cy="20" rx="5" ry="3" fill="#A84444"/>
                <circle cx="16" cy="17" r="1.5" fill="#D32F2F"/>
                
                {/* Right cupcake */}
                <path d="M27 22 L24 32 L34 32 L31 22 Z" fill="#8B3535"/>
                <ellipse cx="29" cy="20" rx="5" ry="3" fill="#A84444"/>
                <circle cx="29" cy="17" r="1.5" fill="#D32F2F"/>
              </svg>
            </div>
            {/* Label */}
            <h3 className="text-[#8B3535] text-[13px] font-bold uppercase tracking-[0.08em]">
              DESSERTS
            </h3>
          </div>

          {/* Category 4: COOKIES */}
          <div className="flex flex-col items-center">
            {/* Icon Box */}
            <div className="w-[85px] h-[85px] bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow flex items-center justify-center mb-3">
              {/* Cookie Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 48 48" 
                className="w-[42px] h-[42px]"
              >
                {/* Cookie circle */}
                <circle cx="24" cy="24" r="14" fill="#A84444"/>
                {/* Chocolate chips */}
                <circle cx="20" cy="20" r="2" fill="#6B2828"/>
                <circle cx="28" cy="20" r="2" fill="#6B2828"/>
                <circle cx="24" cy="28" r="2" fill="#6B2828"/>
                <circle cx="19" cy="26" r="1.5" fill="#6B2828"/>
                <circle cx="29" cy="26" r="1.5" fill="#6B2828"/>
                <circle cx="24" cy="22" r="1.5" fill="#6B2828"/>
              </svg>
            </div>
            {/* Label */}
            <h3 className="text-[#8B3535] text-[13px] font-bold uppercase tracking-[0.08em]">
              COOKIES
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
