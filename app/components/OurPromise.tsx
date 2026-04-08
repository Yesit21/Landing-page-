"use client";

export default function OurPromise() {
  return (
    <section className="bg-white" style={{ padding: '35px 0' }}>
      <div className="container mx-auto">
        <h2 className="font-bold" style={{ fontSize: '20px', color: '#8B3535', marginBottom: '6px' }}>Our Promise</h2>
        <p style={{ fontSize: '12px', color: '#8B3535', marginBottom: '18px' }}>There's no secret spell - only honest the work!</p>
        
        <div className="grid grid-cols-2" style={{ gap: '24px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#8B3535', marginBottom: '14px', fontStyle: 'italic' }}>A glimpse rau secret spell - only hacial world!</p>
            <div className="grid grid-cols-4" style={{ gap: '10px' }}>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full flex items-center justify-center" style={{ width: '48px', height: '48px', borderColor: '#8B3535', marginBottom: '5px' }}>
                  <span style={{ fontSize: '22px' }}>⏰</span>
                </div>
                <p className="text-center font-bold" style={{ fontSize: '8px', color: '#8B3535', lineHeight: '1.2' }}>ON TIME<br/>DELIVERY</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full flex items-center justify-center" style={{ width: '48px', height: '48px', borderColor: '#8B3535', marginBottom: '5px' }}>
                  <span style={{ fontSize: '22px' }}>🚚</span>
                </div>
                <p className="text-center font-bold" style={{ fontSize: '8px', color: '#8B3535', lineHeight: '1.2' }}>5000+<br/>DESIGNS</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full flex items-center justify-center" style={{ width: '48px', height: '48px', borderColor: '#8B3535', marginBottom: '5px' }}>
                  <span style={{ fontSize: '22px' }}>👥</span>
                </div>
                <p className="text-center font-bold" style={{ fontSize: '8px', color: '#8B3535', lineHeight: '1.2' }}>2 CR<br/>ORDERS</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-2 rounded-full flex items-center justify-center" style={{ width: '48px', height: '48px', borderColor: '#8B3535', marginBottom: '5px' }}>
                  <span style={{ fontSize: '22px' }}>🎂</span>
                </div>
                <p className="text-center font-bold" style={{ fontSize: '8px', color: '#8B3535', lineHeight: '1.2' }}>BAKED<br/>FRESH</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 grid-rows-3" style={{ gap: '6px' }}>
            <div className="rounded-lg overflow-hidden" style={{ height: '90px', background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '40px' }}>🎂</div>
            </div>
            <div className="rounded-lg overflow-hidden row-span-2" style={{ background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '50px' }}>👨‍🍳</div>
            </div>
            <div className="rounded-lg overflow-hidden row-span-2" style={{ background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '50px' }}>🍰</div>
            </div>
            <div className="rounded-lg overflow-hidden" style={{ height: '90px', background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '40px' }}>👥</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
