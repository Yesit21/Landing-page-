"use client";

import { Heart } from "lucide-react";

export default function Bestsellers() {
  const products = [
    { name: "Rich Chocolate Truffle Cake", price: "₹500", rating: 4 },
    { name: "Choco Chip Truffle Cake", price: "₹599", rating: 4 },
    { name: "Tropical Fruit N Almond Cake", price: "₹599", rating: 4 },
    { name: "Rich Butterscotch Crunch Cake", price: "₹599", rating: 4 }
  ];

  return (
    <section className="bg-[#F5E6D3]" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="container mx-auto">
        <h2 
          className="font-bold text-[#374151]"
          style={{ 
            fontSize: '24px',
            marginBottom: '24px',
            letterSpacing: '-0.5px'
          }}
        >
          Bestsellers from Across the Country
        </h2>

        {/* Grid - gap: 24px, margin-top: 24px */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          style={{
            gap: '24px',
            marginTop: '24px'
          }}
        >
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[16px] relative"
              style={{ padding: '16px' }}
            >
              {/* Imagen - height: 140px, margin-bottom: 12px */}
              <div 
                className="relative rounded-[12px] overflow-hidden bg-gradient-to-br from-[#b91c1c] to-[#991b1b] flex items-center justify-center"
                style={{
                  height: '140px',
                  marginBottom: '12px'
                }}
              >
                <span className="text-white text-5xl">🎂</span>
                
                {/* Corazón - position: absolute, top: 12px, right: 12px, 32x32 */}
                <button 
                  className="absolute bg-white rounded-full flex items-center justify-center hover:bg-[#fff7f7] transition-colors"
                  style={{
                    top: '12px',
                    right: '12px',
                    width: '32px',
                    height: '32px'
                  }}
                >
                  <Heart className="w-[16px] h-[16px] text-[#b91c1c]" strokeWidth={2} />
                </button>
              </div>

              {/* Nombre - margin-bottom: 4px */}
              <h3 
                className="text-[14px] font-semibold text-[#374151] line-clamp-2"
                style={{ marginBottom: '4px' }}
              >
                {product.name}
              </h3>

              {/* Precio - margin-bottom: 4px, color: #b91c1c */}
              <p 
                className="text-[18px] font-bold"
                style={{
                  marginBottom: '4px',
                  color: '#b91c1c'
                }}
              >
                {product.price}
              </p>

              {/* Estrellas - tamaño: 16px, gap: 4px */}
              <div 
                className="flex"
                style={{ gap: '4px' }}
              >
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i}
                    style={{
                      fontSize: '16px',
                      color: i < product.rating ? '#facc15' : '#e5e7eb'
                    }}
                  >
                    {i < product.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botón VIEW ALL */}
        <div className="flex justify-end mt-[24px]">
          <button className="bg-[#b91c1c] hover:bg-[#991b1b] text-white px-[16px] py-[8px] rounded-[999px] text-[14px] font-medium transition-colors">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}
