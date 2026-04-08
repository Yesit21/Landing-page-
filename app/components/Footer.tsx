"use client";

export default function Footer() {
  return (
    <footer className="bg-[#8B3535] text-white">
      {/* Banner superior FSSAI */}
      <div 
        className="bg-[#8B3535] text-white text-center"
        style={{ 
          padding: '16px 24px',
          fontSize: '14px'
        }}
      >
        <p>FSSAI Lic. No. 12345678901234</p>
      </div>

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
            <h4 
              className="font-bold text-white"
              style={{ 
                fontSize: '16px',
                marginBottom: '16px'
              }}
            >
              Dakingo
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>Our Story</a></li>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>Contact Us</a></li>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>Franchise</a></li>
            </ul>
          </div>

          <div>
            <h4 
              className="font-bold text-white"
              style={{ 
                fontSize: '16px',
                marginBottom: '16px'
              }}
            >
              Know Us
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>About Us</a></li>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 
              className="font-bold text-white"
              style={{ 
                fontSize: '16px',
                marginBottom: '16px'
              }}
            >
              Need Help?
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>Cancellation</a></li>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 
              className="font-bold text-white"
              style={{ 
                fontSize: '16px',
                marginBottom: '16px'
              }}
            >
              More Info
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>Terms</a></li>
              <li><a href="#" className="hover:underline" style={{ fontSize: '14px' }}>Reviews</a></li>
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

      {/* Copyright - fondo: cream, texto: gris */}
      <div 
        className="bg-[#FFF5F5]"
        style={{ padding: '16px 0' }}
      >
        <p 
          className="text-center text-[#374151]"
          style={{ fontSize: '14px' }}
        >
          © 2024 Dakingo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
