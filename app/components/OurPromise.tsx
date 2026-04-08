"use client";

export default function OurPromise() {
  const promises = [
    { icon: "⏰", title: "ON TIME", subtitle: "DELIVERY" },
    { icon: "🚚", title: "5000+", subtitle: "DESIGNS" },
    { icon: "👥", title: "2 CR", subtitle: "ORDERS" },
    { icon: "🎂", title: "BAKED", subtitle: "FRESH" }
  ];

  return (
    <section className="bg-[#FFF5F5]" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="container mx-auto">
        <h2 
          className="font-bold text-[#374151] text-center"
          style={{ 
            fontSize: '24px',
            marginBottom: '40px',
            letterSpacing: '-0.5px'
          }}
        >
          Our Promise
        </h2>

        {/* Contenedor - display: flex, justify-content: space-between, margin-top: 40px */}
        <div 
          className="flex max-w-4xl mx-auto"
          style={{ 
            justifyContent: 'space-between',
            marginTop: '40px'
          }}
        >
          {promises.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center"
              style={{ width: '25%' }}
            >
              {/* Icono - width: 40px, height: 40px, margin-bottom: 12px */}
              <div 
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  marginBottom: '12px',
                  fontSize: '32px',
                  color: '#b91c1c'
                }}
              >
                {item.icon}
              </div>
              {/* Texto - 14px */}
              <p 
                className="font-bold text-[#374151] leading-tight"
                style={{ fontSize: '14px' }}
              >
                {item.title}<br/>{item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
