"use client";

export default function Menu() {
  return (
    <section className="bg-[#FFF5F5]" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="container mx-auto">
        
        {/* Título - margin-bottom: 8px */}
        <h2 
          className="text-[#8B3535] font-bold" 
          style={{ 
            fontSize: '24px',
            marginBottom: '8px',
            letterSpacing: '-0.5px'
          }}
        >
          Menu
        </h2>
        
        {/* Subtexto - margin-bottom: 24px */}
        <p 
          className="text-[#6B2C2C]" 
          style={{ 
            fontSize: '14px',
            marginBottom: '24px'
          }}
        >
          What will you wish for?
        </p>
        
        {/* 3 iconos sociales - margin-bottom: 24px */}
        <div 
          className="flex" 
          style={{ 
            gap: '8px',
            marginBottom: '24px'
          }}
        >
          <div 
            className="border border-[#8B3535] rounded flex items-center justify-center"
            style={{ width: '28px', height: '28px' }}
          >
            <span className="text-[#8B3535]" style={{ fontSize: '14px' }}>📱</span>
          </div>
          <div 
            className="border border-[#8B3535] rounded flex items-center justify-center"
            style={{ width: '28px', height: '28px' }}
          >
            <span className="text-[#8B3535]" style={{ fontSize: '14px' }}>👥</span>
          </div>
          <div 
            className="border border-[#8B3535] rounded flex items-center justify-center"
            style={{ width: '28px', height: '28px' }}
          >
            <span className="text-[#8B3535]" style={{ fontSize: '14px' }}>📧</span>
          </div>
        </div>

        {/* Grid - columns: 4, gap: 24px */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          style={{ gap: '24px' }}
        >
          
          {/* CLASSIC */}
          <div className="flex flex-col items-center text-center">
            {/* Card - padding: 24px, border-radius: 16px */}
            <div 
              className="bg-white rounded-[16px] shadow-md flex items-center justify-center transition-transform hover:scale-105"
              style={{ 
                width: '85px', 
                height: '85px',
                padding: '24px',
                marginBottom: '12px'
              }}
            >
              {/* Icono - 40px, color: #b91c1c */}
              <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 64 64">
                <rect x="12" y="38" width="40" height="8" fill="#b91c1c" rx="2"/>
                <rect x="14" y="28" width="36" height="10" fill="#D32F2F" rx="2"/>
                <rect x="16" y="18" width="32" height="10" fill="#b91c1c" rx="2"/>
                <circle cx="20" cy="15" r="2" fill="#D32F2F"/>
                <circle cx="32" cy="15" r="2" fill="#D32F2F"/>
                <circle cx="44" cy="15" r="2" fill="#D32F2F"/>
              </svg>
            </div>
            {/* Texto - centrado, margin-top: 12px */}
            <h3 
              className="text-[#b91c1c] font-bold uppercase"
              style={{ 
                fontSize: '14px',
                marginTop: '12px'
              }}
            >
              CLASSIC
            </h3>
          </div>

          {/* GOURMET */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="bg-white rounded-[16px] shadow-md flex items-center justify-center transition-transform hover:scale-105"
              style={{ 
                width: '85px', 
                height: '85px',
                padding: '24px',
                marginBottom: '12px'
              }}
            >
              <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 64 64">
                <rect x="16" y="20" width="32" height="24" fill="#b91c1c" rx="2"/>
                <rect x="16" y="20" width="32" height="6" fill="#D32F2F"/>
                <line x1="32" y1="20" x2="32" y2="44" stroke="#8B3535" strokeWidth="2"/>
                <line x1="16" y1="32" x2="48" y2="32" stroke="#8B3535" strokeWidth="2"/>
              </svg>
            </div>
            <h3 
              className="text-[#b91c1c] font-bold uppercase"
              style={{ 
                fontSize: '14px',
                marginTop: '12px'
              }}
            >
              GOURMET
            </h3>
          </div>

          {/* DESSERTS */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="bg-white rounded-[16px] shadow-md flex items-center justify-center transition-transform hover:scale-105"
              style={{ 
                width: '85px', 
                height: '85px',
                padding: '24px',
                marginBottom: '12px'
              }}
            >
              <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 64 64">
                <path d="M20 28 L16 40 L28 40 L24 28 Z" fill="#b91c1c"/>
                <ellipse cx="22" cy="26" rx="6" ry="4" fill="#D32F2F"/>
                <circle cx="22" cy="22" r="2" fill="#D32F2F"/>
                <path d="M36 28 L32 40 L44 40 L40 28 Z" fill="#b91c1c"/>
                <ellipse cx="38" cy="26" rx="6" ry="4" fill="#D32F2F"/>
                <circle cx="38" cy="22" r="2" fill="#D32F2F"/>
              </svg>
            </div>
            <h3 
              className="text-[#b91c1c] font-bold uppercase"
              style={{ 
                fontSize: '14px',
                marginTop: '12px'
              }}
            >
              DESSERTS
            </h3>
          </div>

          {/* COOKIES */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="bg-white rounded-[16px] shadow-md flex items-center justify-center transition-transform hover:scale-105"
              style={{ 
                width: '85px', 
                height: '85px',
                padding: '24px',
                marginBottom: '12px'
              }}
            >
              <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="16" fill="#D32F2F"/>
                <circle cx="28" cy="28" r="2" fill="#8B3535"/>
                <circle cx="36" cy="28" r="2" fill="#8B3535"/>
                <circle cx="32" cy="36" r="2" fill="#8B3535"/>
                <circle cx="26" cy="34" r="1.5" fill="#8B3535"/>
                <circle cx="38" cy="34" r="1.5" fill="#8B3535"/>
              </svg>
            </div>
            <h3 
              className="text-[#b91c1c] font-bold uppercase"
              style={{ 
                fontSize: '14px',
                marginTop: '12px'
              }}
            >
              COOKIES
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
