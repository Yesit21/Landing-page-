"use client";

export default function Menu() {
  return (
    <section className="bg-white" style={{ padding: '40px 0' }}>
      <div className="container mx-auto">
        <h2 className="font-bold" style={{ fontSize: '28px', color: '#8B3535', marginBottom: '4px' }}>Menu</h2>
        <p style={{ fontSize: '13px', color: '#8B3535', marginBottom: '12px' }}>What will you wish for?</p>
        
        <div className="flex" style={{ gap: '8px', marginBottom: '24px' }}>
          <div className="border rounded flex items-center justify-center" style={{ width: '24px', height: '24px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '12px' }}>📱</span>
          </div>
          <div className="border rounded flex items-center justify-center" style={{ width: '24px', height: '24px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '12px' }}>👥</span>
          </div>
          <div className="border rounded flex items-center justify-center" style={{ width: '24px', height: '24px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '12px' }}>📧</span>
          </div>
        </div>

        <div className="grid grid-cols-4" style={{ gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center" style={{ width: '70px', height: '70px', marginBottom: '8px' }}>
              <span style={{ fontSize: '32px' }}>🎂</span>
            </div>
            <p className="font-bold" style={{ fontSize: '11px', color: '#8B3535' }}>CLASSIC</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center" style={{ width: '70px', height: '70px', marginBottom: '8px' }}>
              <span style={{ fontSize: '32px' }}>🍰</span>
            </div>
            <p className="font-bold" style={{ fontSize: '11px', color: '#8B3535' }}>GOURMET</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center" style={{ width: '70px', height: '70px', marginBottom: '8px' }}>
              <span style={{ fontSize: '32px' }}>🧁</span>
            </div>
            <p className="font-bold" style={{ fontSize: '11px', color: '#8B3535' }}>DESSERTS</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center" style={{ width: '70px', height: '70px', marginBottom: '8px' }}>
              <span style={{ fontSize: '32px' }}>🍪</span>
            </div>
            <p className="font-bold" style={{ fontSize: '11px', color: '#8B3535' }}>COOKIES</p>
          </div>
        </div>
      </div>
    </section>
  );
}
