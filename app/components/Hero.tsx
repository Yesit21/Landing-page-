"use client";

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden py-[64px]"
      style={{
        background: 'linear-gradient(90deg, #f87171 0%, #b91c1c 100%)'
      }}
    >
      {/* Círculos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculo 1 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: '-80px',
            left: '-80px',
            background: '#f87171',
            opacity: 0.1,
            filter: 'blur(80px)'
          }}
        ></div>
        {/* Círculo 2 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '250px',
            height: '250px',
            bottom: '-60px',
            right: '-60px',
            background: '#b91c1c',
            opacity: 0.1,
            filter: 'blur(80px)'
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
          
          {/* Imagen principal */}
          <div className="flex justify-center md:justify-start">
            {/* Contenedor blanco con padding: 12px, sombra */}
            <div 
              className="rounded-full bg-white"
              style={{
                padding: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            >
              {/* Imagen 280x280 */}
              <div className="w-[280px] h-[280px] rounded-full overflow-hidden bg-gradient-to-br from-[#b91c1c] to-[#991b1b] flex items-center justify-center">
                <span className="text-white text-6xl">🎂</span>
              </div>
            </div>
          </div>

          {/* Texto bloque (derecha) */}
          <div className="text-center md:text-left">
            {/* Título - margin-top: 0, font-size: 48px, line-height: 1.1, letter-spacing: -0.5px */}
            <h1 
              className="text-white font-bold mb-0"
              style={{
                fontSize: '48px',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
                marginTop: 0
              }}
            >
              DECADENT<br/>
              CHOCOLATE<br/>
              BLISS!
            </h1>
            
            {/* Subtexto - margin-top: 16px, font-size: 18px */}
            <p 
              className="text-white"
              style={{
                marginTop: '16px',
                fontSize: '18px'
              }}
            >
              Satisfy Your Sweet Cravings
            </p>
            
            {/* Badge - margin-top: 24px, padding: 8px 20px */}
            <div 
              className="inline-block bg-white rounded-[999px]"
              style={{
                marginTop: '24px',
                padding: '8px 20px'
              }}
            >
              <p className="text-[#b91c1c] text-[18px] font-bold">SAVE 20%</p>
            </div>

            {/* Mini imágenes - margin-top: 32px, gap: 16px */}
            <div 
              className="flex justify-center md:justify-start"
              style={{
                marginTop: '32px',
                gap: '16px'
              }}
            >
              {/* Cada imagen: 80x80, border: 4px solid #fff */}
              <div 
                className="rounded-full bg-white"
                style={{
                  width: '80px',
                  height: '80px',
                  border: '4px solid #fff',
                  padding: '4px'
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f87171] to-[#b91c1c] flex items-center justify-center">
                  <span className="text-white text-2xl">🍰</span>
                </div>
              </div>
              
              <div 
                className="rounded-full bg-white"
                style={{
                  width: '80px',
                  height: '80px',
                  border: '4px solid #fff',
                  padding: '4px'
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f87171] to-[#b91c1c] flex items-center justify-center">
                  <span className="text-white text-2xl">🧁</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
