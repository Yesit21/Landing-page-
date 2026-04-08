"use client";

export default function OurPromise() {
  const promises = [
    { icon: "⏰", title: "ON TIME", subtitle: "DELIVERY" },
    { icon: "🚚", title: "5000+", subtitle: "DESIGNS" },
    { icon: "👥", title: "2 CR", subtitle: "ORDERS" },
    { icon: "🎂", title: "BAKED", subtitle: "FRESH" }
  ];

  return (
    <section className="py-[64px]">
      <div className="container mx-auto">
        <h2 
          className="text-[24px] font-bold text-[#374151] text-center"
          style={{ marginBottom: '40px' }}
        >
          Our Promise
        </h2>

        {/* Contenedor - display: flex, justify-content: space-between */}
        <div 
          className="flex max-w-4xl mx-auto"
          style={{ justifyContent: 'space-between' }}
        >
          {promises.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center"
              style={{ width: '25%' }}
            >
              {/* Icono - 40x40, margin-bottom: 12px, color: #b91c1c */}
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
              <p className="text-[12px] font-bold text-[#374151] leading-tight">
                {item.title}<br/>{item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
