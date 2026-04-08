"use client";

import { Ticket } from "lucide-react";

export default function MagicalTicket() {
  return (
    <section className="bg-white" style={{ padding: '40px 0' }}>
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-[#FFF5F5] to-[#FFE8E8] rounded-xl flex items-center justify-between shadow-md" style={{ padding: '30px 40px' }}>
          <div className="flex items-center" style={{ gap: '20px' }}>
            <div className="bg-white rounded-full p-3 shadow-md">
              <Ticket style={{ width: '40px', height: '40px', color: '#FFD700', strokeWidth: 1.5 }} />
            </div>
            <div>
              <h3 className="font-bold" style={{ fontSize: '20px', color: '#8B3535', marginBottom: '6px' }}>THE MAGICAL TICKET</h3>
              <p style={{ fontSize: '12px', color: '#8B3535' }}>Add 3 reminders in your account. Win offers worth Rs. 750</p>
            </div>
          </div>
          <button className="text-white font-bold rounded-full shadow-md hover:shadow-lg transition-shadow" style={{ padding: '10px 24px', background: '#8B3535', fontSize: '12px' }}>UNLOCK NOW</button>
        </div>
        
        <div className="flex items-center justify-center" style={{ gap: '12px', marginTop: '30px' }}>
          <div className="rounded-full overflow-hidden shadow-sm" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <div className="rounded-full overflow-hidden shadow-sm" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <div className="rounded-full overflow-hidden shadow-sm" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <div className="rounded-full overflow-hidden shadow-sm" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <div className="rounded-full overflow-hidden shadow-sm" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C0 100%)' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ fontSize: '20px' }}>👤</div>
          </div>
          <span style={{ fontSize: '13px', color: '#8B3535', marginLeft: '8px', fontWeight: '500' }}>Follow us on social!</span>
        </div>
      </div>
    </section>
  );
}
