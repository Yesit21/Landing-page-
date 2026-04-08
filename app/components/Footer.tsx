"use client";

export default function Footer() {
  return (
    <footer className="bg-[#b91c1c] text-white">
      {/* Contenedor - padding: 48px 24px */}
      <div 
        className="container mx-auto"
        style={{ padding: '48px 24px' }}
      >
        {/* Columnas - gap: 32px */}
        <div 
          className="grid grid-cols-1 md:grid-cols-4 mb-[40px]"
          style={{ gap: '32px' }}
        >
          
          <div>
            <h4 className="font-bold mb-[16px] text-[16px]">Dakingo</h4>
            <ul className="space-y-[8px] text-[14px]">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Franchise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-[16px] text-[16px]">Know Us</h4>
            <ul className="space-y-[8px] text-[14px]">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-[16px] text-[16px]">Need Help?</h4>
            <ul className="space-y-[8px] text-[14px]">
              <li><a href="#" className="hover:underline">Cancellation</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-[16px] text-[16px]">More Info</h4>
            <ul className="space-y-[8px] text-[14px]">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="flex flex-col md:flex-row gap-[16px] items-center justify-center">
          {/* Input - height: 40px, padding: 0 16px, border-radius: 999px */}
          <input
            type="email"
            placeholder="Enter Email Address"
            className="text-[#374151] w-full md:w-[300px]"
            style={{
              height: '40px',
              padding: '0 16px',
              borderRadius: '999px',
              border: 'none',
              fontSize: '14px'
            }}
          />
          <button 
            className="bg-white text-[#b91c1c] hover:bg-gray-100 font-medium transition-colors"
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '14px'
            }}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Copyright - fondo claro, texto gris */}
      <div className="bg-[#fff7f7] py-[16px]">
        <p className="text-center text-[14px] text-[#374151]">
          © 2024 Dakingo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
