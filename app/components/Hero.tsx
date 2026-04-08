"use client";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#A84444] via-[#8B3535] to-[#6B2828] overflow-hidden">
      {/* Decorative circles background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-[#9B3D3D] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-32 right-32 w-80 h-80 bg-[#7B2D2D] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#8B3535] rounded-full opacity-25 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10">
        <div className="flex items-center justify-between gap-12">
          {/* Left side - Main cake image in white circle */}
          <div className="flex-shrink-0">
            <div className="w-[280px] h-[280px] bg-white rounded-full p-4 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#8B3535] to-[#6B2828] flex items-center justify-center">
                <div className="text-white text-center text-sm font-bold">
                  🎂<br/>CAKE
                </div>
              </div>
            </div>
          </div>

          {/* Center - Text content */}
          <div className="flex-1 text-center">
            <h2 className="text-white text-[56px] font-bold leading-tight mb-3 tracking-tight">
              DECADENT<br/>
              CHOCOLATE<br/>
              BLISS!
            </h2>
            <p className="text-white text-[22px] font-medium mb-6">
              Satisfy Your Sweet Cravings
            </p>
            
            {/* Special Offer Badge */}
            <div className="inline-block bg-[#6B2828] px-8 py-3 rounded-lg shadow-lg">
              <p className="text-white text-[13px] font-semibold mb-1">Special Offer</p>
              <p className="text-[#FFD700] text-[28px] font-bold">SAVE 20%</p>
            </div>
          </div>

          {/* Right side - Two smaller cake images in white circles */}
          <div className="flex-shrink-0 flex flex-col gap-6">
            <div className="w-[140px] h-[140px] bg-white rounded-full p-3 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#A84444] to-[#8B3535] flex items-center justify-center">
                <div className="text-white text-center text-xs font-bold">
                  🍰
                </div>
              </div>
            </div>
            <div className="w-[140px] h-[140px] bg-white rounded-full p-3 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#A84444] to-[#8B3535] flex items-center justify-center">
                <div className="text-white text-center text-xs font-bold">
                  🧁
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
