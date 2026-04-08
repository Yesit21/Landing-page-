"use client";

export default function Menu() {
  return (
    <section className="bg-white" style={{ padding: '35px 0' }}>
      <div className="container mx-auto">
        <h2 className="font-bold" style={{ fontSize: '26px', color: '#8B3535', marginBottom: '3px' }}>Menu</h2>
        <p style={{ fontSize: '12px', color: '#8B3535', marginBottom: '10px' }}>What will you wish for?</p>
        
        <div className="flex" style={{ gap: '7px', marginBottom: '20px' }}>
          <div className="border rounded flex items-center justify-center" style={{ width: '22px', height: '22px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '11px' }}>📱</span>
          </div>
          <div className="border rounded flex items-center justify-center" style={{ width: '22px', height: '22px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '11px' }}>👥</span>
          </div>
          <div className="border rounded flex items-center justify-center" style={{ width: '22px', height: '22px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '11px' }}>📧</span>
          </div>
        </div>

        <div className="grid grid-cols-4" style={{ gap: '14px', maxWidth: '550px', margin: '0 auto' }}>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center border" style={{ width: '68px', height: '68px', marginBottom: '7px', borderColor: '#e5e5e5' }}>
              <svg width="32" height="32" viewBox="0 0 32 32">
                <rect x="6" y="19" width="20" height="4" fill="#8B3535" rx="1"/>
                <rect x="7" y="14" width="18" height="5" fill="#A84444" rx="1"/>
                <rect x="8" y="9" width="16" height="5" fill="#8B3535" rx="1"/>
                <circle cx="10" cy="7.5" r="1" fill="#D32F2F"/>
                <circle cx="16" cy="7.5" r="1" fill="#D32F2F"/>
                <circle cx="22" cy="7.5" r="1" fill="#D32F2F"/>
              </svg>
            </div>
            <p className="font-bold" style={{ fontSize: '10px', color: '#8B3535' }}>CLASSIC</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center border" style={{ width: '68px', height: '68px', marginBottom: '7px', borderColor: '#e5e5e5' }}>
              <svg width="32" height="32" viewBox="0 0 32 32">
                <rect x="8" y="10" width="16" height="12" fill="#8B3535" rx="1"/>
                <rect x="8" y="10" width="16" height="3" fill="#A84444"/>
                <line x1="16" y1="10" x2="16" y2="22" stroke="#6B2828" strokeWidth="1"/>
                <line x1="8" y1="16" x2="24" y2="16" stroke="#6B2828" strokeWidth="1"/>
              </svg>
            </div>
            <p className="font-bold" style={{ fontSize: '10px', color: '#8B3535' }}>GOURMET</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center border" style={{ width: '68px', height: '68px', marginBottom: '7px', borderColor: '#e5e5e5' }}>
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path d="M10 14 L8 20 L14 20 L12 14 Z" fill="#8B3535"/>
                <ellipse cx="11" cy="13" rx="3" ry="2" fill="#A84444"/>
                <circle cx="11" cy="11" r="1" fill="#D32F2F"/>
                <path d="M18 14 L16 20 L22 20 L20 14 Z" fill="#8B3535"/>
                <ellipse cx="19" cy="13" rx="3" ry="2" fill="#A84444"/>
                <circle cx="19" cy="11" r="1" fill="#D32F2F"/>
              </svg>
            </div>
            <p className="font-bold" style={{ fontSize: '10px', color: '#8B3535' }}>DESSERTS</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center border" style={{ width: '68px', height: '68px', marginBottom: '7px', borderColor: '#e5e5e5' }}>
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="8" fill="#A84444"/>
                <circle cx="14" cy="14" r="1" fill="#6B2828"/>
                <circle cx="18" cy="14" r="1" fill="#6B2828"/>
                <circle cx="16" cy="18" r="1" fill="#6B2828"/>
                <circle cx="13" cy="17" r="0.75" fill="#6B2828"/>
                <circle cx="19" cy="17" r="0.75" fill="#6B2828"/>
              </svg>
            </div>
            <p className="font-bold" style={{ fontSize: '10px', color: '#8B3535' }}>COOKIES</p>
          </div>
        </div>
      </div>
    </section>
  );
}
