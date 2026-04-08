"use client";

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #C85A5A 0%, #A84444 50%, #8B3535 100%)',
        paddingTop: '64px',
        paddingBottom: '64px'
      }}
    >
      {/* Círculos decorativos difuminados - opacity: 0.1, blur: 80px */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculo 1 - top: -80px, left: -80px, 300x300 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: '-80px',
            left: '-80px',
            background: '#ffffff',
            opacity: 0.1,
            filter: 'blur(80px)'
          }}
        ></div>
        {/* Círculo 2 - bottom: -60px, right: -60px, 250x250 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '250px',
            height: '250px',
            bottom: '-60px',
            right: '-60px',
            background: '#ffffff',
            opacity: 0.1,
            filter: 'blur(80px)'
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Layout - gap: 40px */}
        <div 
          className="flex items-center justify-between"
          style={{ gap: '40px' }}
        >
          
          {/* Imagen principal - 280x280, padding: 12px, sombra */}
          <div className="flex-shrink-0">
            <div 
              className="bg-white rounded-full flex items-center justify-center"
              style={{
                width: '280px',
                height: '280px',
                padding: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                className="rounded-full overflow-hidden bg-gradient-to-br from-[#8B3535] to-[#6B2828] flex items-center justify-center"
                style={{
                  width: '100%',
                  height: '100%'
                }}
              >
                <span style={{ fontSize: '80px' }}>🎂</span>
              </div>
            </div>
          </div>

          {/* Texto central - flex-1 */}
          <div className="flex-1 text-center">
            {/* Título - 48px, line-height: 1.1, letter-spacing: -0.5px */}
            <h1 
              className="text-white font-bold"
              style={{
                fontSize: '48px',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
                marginTop: '0',
                marginBottom: '16px'
              }}
            >
              DECADENT<br/>
              CHOCOLATE<br/>
              BLISS!
            </h1>
            
            {/* Subtexto - 18px, margin-top: 16px */}
            <p 
              className="text-white font-medium"
              style={{
                fontSize: '18px',
                marginTop: '16px',
                marginBottom: '24px'
              }}
            >
              Satisfy Your Sweet Cravings
            </p>
            
            {/* Badge - padding: 8px 20px, border-radius: 999px */}
            <div 
              className="inline-block"
              style={{
                marginTop: '24px'
              }}
            >
              <div 
                className="rounded-full"
                style={{
                  padding: '8px 20px',
                  background: '#6B2828',
                  borderRadius: '999px'
                }}
              >
                <p 
                  className="text-white font-semibold"
                  style={{ 
                    fontSize: '11px',
                    marginBottom: '2px'
                  }}
                >
                  Special Offer
                </p>
                <p 
                  className="font-bold"
                  style={{ 
                    fontSize: '24px',
                    color: '#FFD700',
                    margin: 0
                  }}
                >
                  SAVE 20%
                </p>
              </div>
            </div>
          </div>

          {/* Imágenes secundarias - 80x80, gap: 16px, border: 4px white */}
          <div 
            className="flex-shrink-0 flex flex-col"
            style={{ 
              gap: '16px',
              marginTop: '32px'
            }}
          >
            <div 
              className="bg-white rounded-full flex items-center justify-center"
              style={{
                width: '80px',
                height: '80px',
                border: '4px solid #fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                className="rounded-full overflow-hidden bg-gradient-to-br from-[#8B3535] to-[#6B2828] flex items-center justify-center"
                style={{
                  width: '100%',
                  height: '100%'
                }}
              >
                <span style={{ fontSize: '32px' }}>🍰</span>
              </div>
            </div>
            <div 
              className="bg-white rounded-full flex items-center justify-center"
              style={{
                width: '80px',
                height: '80px',
                border: '4px solid #fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                className="rounded-full overflow-hidden bg-gradient-to-br from-[#8B3535] to-[#6B2828] flex items-center justify-center"
                style={{
                  width: '100%',
                  height: '100%'
                }}
              >
                <span style={{ fontSize: '32px' }}>🧁</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
