"use client";

export default function MagicalTicket() {
  return (
    <section className="bg-[#F5E6D3]" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="container mx-auto">
        {/* Contenedor - padding: 24px, border-radius: 16px, fondo: #fff1f2 */}
        <div 
          className="rounded-[16px] max-w-2xl mx-auto text-center"
          style={{
            padding: '24px',
            background: '#fff1f2'
          }}
        >
          {/* Título */}
          <h3 
            className="font-bold text-[#b91c1c]"
            style={{ 
              fontSize: '24px',
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}
          >
            THE MAGICAL TICKET
          </h3>
          {/* Texto */}
          <p 
            className="text-[#374151]"
            style={{ 
              fontSize: '14px',
              marginBottom: '16px'
            }}
          >
            Add 3 reminders in your account. Win offers worth Rs. 750
          </p>
          {/* Botón - padding: 8px 16px, border-radius: 999px */}
          <button 
            className="text-white font-medium transition-colors hover:bg-[#991b1b]"
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              background: '#b91c1c',
              fontSize: '14px'
            }}
          >
            UNLOCK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
