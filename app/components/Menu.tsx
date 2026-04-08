"use client";

export default function Menu() {
  const categories = [
    { name: "CLASSIC", icon: "🎂" },
    { name: "GOURMET", icon: "🍰" },
    { name: "DESSERTS", icon: "🧁" },
    { name: "COOKIES", icon: "🍪" }
  ];

  return (
    <section className="py-[64px]">
      <div className="container mx-auto">
        {/* Título - margin-bottom: 8px */}
        <h2 
          className="text-[24px] font-bold text-[#374151] text-center"
          style={{ marginBottom: '8px' }}
        >
          Menu
        </h2>
        
        {/* Subtexto - margin-bottom: 24px */}
        <p 
          className="text-[14px] text-[#374151] text-center"
          style={{ marginBottom: '24px' }}
        >
          What will you wish for?
        </p>

        {/* Grid - margin-top: 40px, columns: 4, gap: 24px */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          style={{
            marginTop: '40px',
            gap: '24px'
          }}
        >
          {categories.map((cat) => (
            <div 
              key={cat.name}
              className="bg-white rounded-[16px] hover:scale-105 transition-transform cursor-pointer"
              style={{
                padding: '24px'
              }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icono - 40x40, margin-bottom: 12px, color: #b91c1c */}
                <div 
                  className="flex items-center justify-center text-[#b91c1c]"
                  style={{
                    width: '40px',
                    height: '40px',
                    marginBottom: '12px',
                    fontSize: '32px'
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-[14px] font-bold text-[#374151]">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
