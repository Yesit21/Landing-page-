"use client";

export default function OurPromise() {
  return (
    <section className="bg-white" style={{ padding: '40px 0' }}>
      <div className="container mx-auto">
        <h2 className="font-bold" style={{ fontSize: '22px', color: '#8B3535', marginBottom: '8px' }}>Our Promise</h2>
        <p style={{ fontSize: '13px', color: '#8B3535', marginBottom: '20px' }}>There's no secret spell - only honest the work!</p>
        
        <div className="grid grid-cols-2" style={{ gap: '30px' }}>
          <div>
            <p style={{ fontSize: '13px', color: '#8B3535', marginBottom: '16px', fontStyle: 'italic' }}>A glimpse rau secret spell - only hacial world!</p>
            <div className="grid grid-cols-4" style={{ gap: '12px' }}>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full flex items-center justify-center" style={{ width: '50px', height: '50px', borderColor: '#8B3535', marginBottom: '6px' }}>
                  <span style={{ fontSize: '24px' }}>⏰</span>
                </div>
                <p className="text-center font-bold" style={{ fontSize: '9px', color: '#8B3535', lineHeight: '1.2' }}>ON TIME<br/>DELIVERY</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full flex items-center justify-center" style={{ width: '50px', height: '50px', borderColor: '#8B3535', marginBottom: '6px' }}>
                  <span style={{ fontSize: '24px' }}>🚚</span>
                </div>
                <p className="text-center font-bold" style={{ fontSize: '9px', color: '#8B3535', lineHeight: '1.2' }}>5000+<br/>DESIGNS</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full flex items-center justify-center" style={{ width: '50px', height: '50px', borderColor: '#8B3535', marginBottom: '6px' }}>
                  <span style={{ fontSize: '24px' }}>👥</span>
                </div>
                <p className="text-center font-bold" style={{ fontSize: '9px', color: '#8B3535', lineHeight: '1.2' }}>2 CR<br/>ORDERS</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full flex items-center justify-center" style={{ width: '50px', height: '50px', borderColor: '#8B3535', marginBottom: '6px' }}>
                  <span style={{ fontSize: '24px' }}>🎂</span>
                </div>
                <p className="text-center font-bold" style={{ fontSize: '9px', color: '#8B3535', lineHeight: '1.2' }}>BAKED<br/>FRESH</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2" style={{ gap: '8px' }}>
            <div className="rounded-lg overflow-hidden" style={{ height: '140px', background: '#F5E6D3' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '50px' }}>🎂</div>
            </div>
            <div className="rounded-lg overflow-hidden" style={{ height: '140px', background: '#F5E6D3' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '50px' }}>👨‍🍳</div>
            </div>
            <div className="rounded-lg overflow-hidden" style={{ height: '140px', background: '#F5E6D3' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '50px' }}>🍰</div>
            </div>
            <div className="rounded-lg overflow-hidden" style={{ height: '140px', background: '#F5E6D3' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '50px' }}>👥</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
