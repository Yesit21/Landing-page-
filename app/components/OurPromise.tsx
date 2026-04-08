"use client";

export default function OurPromise() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-12">
          {/* Main Title */}
          <h2 className="text-[#8B3535] text-[38px] font-bold leading-tight mb-3">
            Our Promise
          </h2>
          
          {/* Subtitle 1 */}
          <p className="text-[#D32F2F] text-[15px] font-medium mb-1">
            There's no secret spell - only honest the work!
          </p>
          
          {/* Subtitle 2 */}
          <p className="text-[#D32F2F] text-[14px] font-normal">
            A glimpse rou secret spell - only hacial world!
          </p>
        </div>

        {/* 4 Promises Grid */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          
          {/* Promise 1: ON TIME DELIVERY */}
          <div className="flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="w-[80px] h-[80px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#D32F2F" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-[36px] h-[36px]"
              >
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            {/* Label */}
            <h3 className="text-[#6B2C2C] text-[13px] font-bold uppercase tracking-wide leading-tight">
              ON TIME<br/>DELIVERY
            </h3>
          </div>

          {/* Promise 2: 5000+ DESIGNS */}
          <div className="flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="w-[80px] h-[80px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#D32F2F" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-[36px] h-[36px]"
              >
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            {/* Label */}
            <h3 className="text-[#6B2C2C] text-[13px] font-bold uppercase tracking-wide leading-tight">
              5000+<br/>DESIGNS
            </h3>
          </div>

          {/* Promise 3: 2 CR ORDERS */}
          <div className="flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="w-[80px] h-[80px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#D32F2F" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-[36px] h-[36px]"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            {/* Label */}
            <h3 className="text-[#6B2C2C] text-[13px] font-bold uppercase tracking-wide leading-tight">
              2 CR<br/>ORDERS
            </h3>
          </div>

          {/* Promise 4: BAKED FRESH */}
          <div className="flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="w-[80px] h-[80px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#D32F2F" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-[36px] h-[36px]"
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
            {/* Label */}
            <h3 className="text-[#6B2C2C] text-[13px] font-bold uppercase tracking-wide leading-tight">
              BAKED<br/>FRESH
            </h3>
          </div>

        </div>

        {/* Images Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-3 gap-4">
          
          {/* Image 1 */}
          <div className="aspect-[4/3] bg-[#F5F5F5] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="w-full h-full flex items-center justify-center text-[#999999] text-sm">
              Cake Image 1
            </div>
          </div>

          {/* Image 2 */}
          <div className="aspect-[4/3] bg-[#F5F5F5] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="w-full h-full flex items-center justify-center text-[#999999] text-sm">
              Lifestyle 1
            </div>
          </div>

          {/* Image 3 */}
          <div className="aspect-[4/3] bg-[#F5F5F5] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-shadow row-span-2">
            <div className="w-full h-full flex items-center justify-center text-[#999999] text-sm">
              Tall Image
            </div>
          </div>

          {/* Image 4 */}
          <div className="aspect-[4/3] bg-[#F5F5F5] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="w-full h-full flex items-center justify-center text-[#999999] text-sm">
              Cake Image 2
            </div>
          </div>

          {/* Image 5 */}
          <div className="aspect-[4/3] bg-[#F5F5F5] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="w-full h-full flex items-center justify-center text-[#999999] text-sm">
              Lifestyle 2
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
