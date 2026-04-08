"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #B85858 0%, #9B4444 50%, #7D3333 100%)', padding: '40px 0' }}>
      <div className="absolute inset-0">
        <div className="absolute rounded-full" style={{ width: '200px', height: '200px', top: '20px', left: '100px', background: 'rgba(255,255,255,0.1)', filter: 'blur(60px)' }}></div>
        <div className="absolute rounded-full" style={{ width: '180px', height: '180px', top: '60px', right: '150px', background: 'rgba(255,255,255,0.08)', filter: 'blur(50px)' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-between" style={{ gap: '30px' }}>
          <div className="bg-white rounded-full flex items-center justify-center" style={{ width: '220px', height: '220px', padding: '10px', flexShrink: 0 }}>
            <div className="rounded-full overflow-hidden flex items-center justify-center" style={{ width: '100%', height: '100%', background: '#6B2828' }}>
              <span style={{ fontSize: '70px' }}>🎂</span>
            </div>
          </div>
          
          <div className="flex-1 text-center">
            <h1 className="text-white font-bold" style={{ fontSize: '42px', lineHeight: '1.1', marginBottom: '12px' }}>DECADENT<br/>CHOCOLATE<br/>BLISS!</h1>
            <p className="text-white" style={{ fontSize: '16px', marginBottom: '16px' }}>Satisfy Your Sweet Cravings</p>
            <div className="inline-block rounded-full" style={{ padding: '6px 16px', background: '#6B2828' }}>
              <p className="text-white" style={{ fontSize: '10px', marginBottom: '2px' }}>Special Offer</p>
              <p className="font-bold" style={{ fontSize: '20px', color: '#FFD700' }}>SAVE 20%</p>
            </div>
          </div>
          
          <div className="flex flex-col" style={{ gap: '12px', flexShrink: 0 }}>
            <div className="bg-white rounded-full flex items-center justify-center" style={{ width: '90px', height: '90px', padding: '8px' }}>
              <div className="rounded-full overflow-hidden flex items-center justify-center" style={{ width: '100%', height: '100%', background: '#6B2828' }}>
                <span style={{ fontSize: '35px' }}>🍰</span>
              </div>
            </div>
            <div className="bg-white rounded-full flex items-center justify-center" style={{ width: '90px', height: '90px', padding: '8px' }}>
              <div className="rounded-full overflow-hidden flex items-center justify-center" style={{ width: '100%', height: '100%', background: '#6B2828' }}>
                <span style={{ fontSize: '35px' }}>🧁</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
