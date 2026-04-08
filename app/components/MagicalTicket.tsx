"use client";

export default function MagicalTicket() {
  return (
    <section className="bg-[#FFF5F5] py-12">
      <div className="container mx-auto px-8">
        <div className="flex items-center gap-8 max-w-4xl">
          
          {/* Ticket Illustration */}
          <div className="flex-shrink-0 relative">
            <div className="w-[140px] h-[90px] bg-gradient-to-br from-[#FFD700] via-[#FFC107] to-[#FFA000] rounded-[10px] shadow-xl transform -rotate-12 flex flex-col items-center justify-center relative border-2 border-dashed border-[#FF8F00]">
              <p className="text-[#8B3535] text-[11px] font-bold uppercase">DAKINGO</p>
              <p className="text-[#8B3535] text-[9px] font-semibold">SPECIAL OFFER</p>
              {/* Confetti */}
              <div className="absolute -top-3 -left-3 w-1 h-5 bg-[#FF6B6B] rounded-full transform rotate-45"></div>
              <div className="absolute -top-2 left-1 w-1 h-5 bg-[#4ECDC4] rounded-full transform -rotate-12"></div>
              <div className="absolute top-0 -right-2 w-1 h-5 bg-[#FFE66D] rounded-full transform rotate-12"></div>
              <div className="absolute -bottom-2 -left-1 w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
              <div className="absolute -bottom-1 right-1 w-2 h-2 bg-[#95E1D3] rounded-full"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-[#8B3535] text-[28px] font-bold mb-2">THE MAGICAL TICKET</h3>
            <p className="text-[#6B2C2C] text-[14px] mb-4">
              Add 3 reminders in your account.<br/>
              Win offers worth Rs. 750
            </p>
            <button className="bg-[#8B3535] hover:bg-[#6B2828] text-white px-7 py-2 rounded-full text-[12px] font-bold uppercase">
              UNLOCK NOW
            </button>
          </div>

          {/* Social Avatars */}
          <div className="flex-shrink-0">
            <div className="flex -space-x-2 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-[42px] h-[42px] rounded-full border-2 border-white overflow-hidden bg-gradient-to-br from-[#8B3535] to-[#6B2828] shadow-md"></div>
              ))}
            </div>
            <p className="text-[#D32F2F] text-[13px] font-semibold text-center">Follow us on social!</p>
          </div>

        </div>
      </div>
    </section>
  );
}
