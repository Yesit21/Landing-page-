"use client";

export default function MagicalTicket() {
  return (
    <section className="py-[64px]">
      <div className="container mx-auto">
        {/* Contenedor - margin-top: 40px, padding: 24px, border-radius: 16px, fondo: #fff1f2 */}
        <div 
          className="rounded-[16px] max-w-2xl mx-auto text-center"
          style={{
            marginTop: '40px',
            padding: '24px',
            background: '#fff1f2'
          }}
        >
          <h3 className="text-[24px] font-bold text-[#b91c1c] mb-[16px]">
            THE MAGICAL TICKET
          </h3>
          <p className="text-[14px] text-[#374151] mb-[16px]">
            Add 3 reminders in your account. Win offers worth Rs. 750
          </p>
          {/* Botón - margin-top: 16px, padding: 8px 16px, border-radius: 999px, fondo: #b91c1c */}
          <button 
            className="text-white font-medium transition-colors hover:bg-[#991b1b]"
            style={{
              marginTop: '16px',
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
