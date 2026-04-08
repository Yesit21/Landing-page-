"use client";

export default function OurPromise() {
  return (
    <section className="bg-[#FFF5F5] py-16">
      <div className="container mx-auto px-8">
        
        {/* Title and View All Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[#8B3535] text-[36px] font-bold mb-2">Our Promise</h2>
            <p className="text-[#D32F2F] text-[15px] font-medium">
              There's no secret spell - only honest the work!
            </p>
          </div>
          <button className="bg-[#8B3535] hover:bg-[#6B2828] text-white px-6 py-2 rounded-full text-[12px] font-bold uppercase">
            VIEW ALL
          </button>
        </div>

        {/* Pink Box with subtitle */}
        <div className="bg-[#FFE8E8] rounded-[12px] p-4 mb-10 max-w-2xl">
          <p className="text-[#8B3535] text-[14px] font-semibold">
            A glimpse into our secret spell - only honest work!
          </p>
        </div>

        {/* 4 Promises */}
        <div className="grid grid-cols-4 gap-6 mb-12 max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-[75px] h-[75px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-3">
              <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <p className="text-[#8B3535] text-[11px] font-bold uppercase">ON TIME<br/>DELIVERY</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-[75px] h-[75px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-3">
              <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <p className="text-[#8B3535] text-[11px] font-bold uppercase">5000+<br/>DESIGNS</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-[75px] h-[75px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-3">
              <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <p className="text-[#8B3535] text-[11px] font-bold uppercase">2 CR<br/>ORDERS</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-[75px] h-[75px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-3">
              <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2">
                <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                <path d="M2 21h20"/>
              </svg>
            </div>
            <p className="text-[#8B3535] text-[11px] font-bold uppercase">BAKED<br/>FRESH</p>
          </div>
        </div>

        {/* Images Grid 2x3 */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/3] bg-gradient-to-br from-[#E8D5C4] to-[#C4B5A0] rounded-[16px] overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-white text-sm font-semibold">
                Cake {i}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
