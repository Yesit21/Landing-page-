"use client";

export default function OurPromise() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-[1fr_2fr] gap-8">
          
          {/* LEFT COLUMN - Our Promise & Magical Ticket */}
          <div className="space-y-8">
            
            {/* Our Promise Section */}
            <div className="bg-[#FFF5F5] rounded-[20px] p-8 relative">
              {/* VIEW ALL Button - Top Right */}
              <button className="absolute top-6 right-6 bg-[#8B3535] hover:bg-[#6B2828] text-white px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-wide shadow-md">
                VIEW ALL
              </button>

              {/* Title */}
              <h2 className="text-[#8B3535] text-[36px] font-bold leading-tight mb-2">
                Our Promise
              </h2>
              
              {/* Subtitle */}
              <p className="text-[#A84444] text-[14px] font-medium mb-6">
                Therts no secret spell - only honest the wark!
              </p>

              {/* Pink Box with text */}
              <div className="bg-[#FFE8E8] rounded-[12px] p-4 mb-6">
                <p className="text-[#8B3535] text-[14px] font-semibold">
                  A glimpes roa secret spell - only hocial world!
                </p>
              </div>

              {/* 4 Promises Icons */}
              <div className="grid grid-cols-4 gap-4">
                
                {/* ON TIME DELIVERY */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-[70px] h-[70px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-2">
                    <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <p className="text-[#8B3535] text-[11px] font-bold uppercase leading-tight">
                    ON TIME<br/>DELIVERY
                  </p>
                </div>

                {/* 5000+ DESIGNS */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-[70px] h-[70px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-2">
                    <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13"/>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                      <circle cx="5.5" cy="18.5" r="2.5"/>
                      <circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                  </div>
                  <p className="text-[#8B3535] text-[11px] font-bold uppercase leading-tight">
                    5000+<br/>DESIGNS
                  </p>
                </div>

                {/* 2 CR+ ORDERS */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-[70px] h-[70px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-2">
                    <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <p className="text-[#8B3535] text-[11px] font-bold uppercase leading-tight">
                    2 CR+<br/>ORDERS
                  </p>
                </div>

                {/* BAKED FRESH */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-[70px] h-[70px] border-2 border-[#D32F2F] rounded-full flex items-center justify-center mb-2">
                    <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2">
                      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                      <path d="M2 21h20"/>
                      <path d="M7 8v3"/>
                      <path d="M12 8v3"/>
                      <path d="M17 8v3"/>
                      <path d="M7 4h10v4H7z"/>
                    </svg>
                  </div>
                  <p className="text-[#8B3535] text-[11px] font-bold uppercase leading-tight">
                    BAKED<br/>FRESH
                  </p>
                </div>

              </div>
            </div>

            {/* Magical Ticket Section */}
            <div className="bg-[#FFF5F5] rounded-[20px] p-8">
              <div className="flex items-start gap-6 mb-6">
                {/* Ticket Illustration */}
                <div className="flex-shrink-0 relative">
                  {/* Golden Ticket */}
                  <div className="w-[120px] h-[80px] bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-[8px] shadow-lg transform -rotate-12 flex items-center justify-center relative">
                    <div className="text-center">
                      <p className="text-[#8B3535] text-[10px] font-bold uppercase">DAKINGO</p>
                      <p className="text-[#8B3535] text-[8px] font-semibold">SPECIAL</p>
                    </div>
                    {/* Confetti */}
                    <div className="absolute -top-4 -left-4">
                      <div className="w-2 h-6 bg-[#FF6B6B] rounded-full transform rotate-45"></div>
                    </div>
                    <div className="absolute -top-2 left-2">
                      <div className="w-2 h-6 bg-[#4ECDC4] rounded-full transform -rotate-12"></div>
                    </div>
                    <div className="absolute top-0 -right-2">
                      <div className="w-2 h-6 bg-[#FFD93D] rounded-full transform rotate-12"></div>
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                    <div className="absolute -bottom-1 right-0 w-2 h-2 bg-[#4ECDC4] rounded-full"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-[#8B3535] text-[24px] font-bold mb-2">
                    THE MAGICAL TICKET
                  </h3>
                  <p className="text-[#6B2C2C] text-[13px] mb-4">
                    Add 3 reminders in your account.<br/>
                    Win offers worth Rs. 750
                  </p>
                  <button className="bg-[#8B3535] hover:bg-[#6B2828] text-white px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-wide shadow-md">
                    UNLOCK NOW
                  </button>
                </div>
              </div>

              {/* Social Avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-[40px] h-[40px] rounded-full bg-[#D4C4B8] border-2 border-white overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#8B3535] to-[#6B2828]"></div>
                    </div>
                  ))}
                </div>
                <p className="text-[#D32F2F] text-[14px] font-semibold">
                  Follow us on social!
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - Images Grid 2x3 */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="aspect-[4/3] bg-[#F5F5F5] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-full h-full flex items-center justify-center text-[#999999] text-sm">
                  Image {i}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
