"use client";

export default function MagicalTicket() {
  return (
    <section className="bg-white" style={{ padding: '40px 0' }}>
      <div className="container mx-auto">
        <div className="bg-[#FFF5F5] rounded-lg flex items-center justify-between" style={{ padding: '30px 40px' }}>
          <div className="flex items-center" style={{ gap: '20px' }}>
            <div style={{ fontSize: '60px' }}>🎫</div>
            <div>
              <h3 className="font-bold" style={{ fontSize: '20px', color: '#8B3535', marginBottom: '6px' }}>THE MAGICAL TICKET</h3>
              <p style={{ fontSize: '12px', color: '#8B3535' }}>Add 3 reminders in your account. Win offers worth Rs. 750</p>
            </div>
          </div>
          <button className="text-white font-bold rounded-full" style={{ padding: '10px 24px', background: '#8B3535', fontSize: '12px' }}>UNLOCK NOW</button>
        </div>
        
        <div className="flex items-center justify-center" style={{ gap: '12px', marginTop: '30px' }}>
          <div className="rounded-full overflow-hidden" style={{ width: '40px', height: '40px', background: '#F5E6D3' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <div className="rounded-full overflow-hidden" style={{ width: '40px', height: '40px', background: '#F5E6D3' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <div className="rounded-full overflow-hidden" style={{ width: '40px', height: '40px', background: '#F5E6D3' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <div className="rounded-full overflow-hidden" style={{ width: '40px', height: '40px', background: '#F5E6D3' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <div className="rounded-full overflow-hidden" style={{ width: '40px', height: '40px', background: '#F5E6D3' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <span style={{ fontSize: '13px', color: '#8B3535', marginLeft: '8px' }}>Follow us on social!</span>
        </div>
      </div>
    </section>
  );
}
