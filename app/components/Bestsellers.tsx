"use client";

import { Heart } from "lucide-react";

export default function Bestsellers() {
  const products = [
    { name: "Rich Chocolate Truffle Truffle Cake", price: "₹500", rating: 4, subtitle: "₹ 500 Earliest" },
    { name: "Choco Chip Truffle Cake Cake", price: "₹599", rating: 4, subtitle: "₹ 599 Earliest" },
    { name: "Tropical Fruit N Almond Cake Cake", price: "₹599", rating: 4, subtitle: "₹ 599 Earliest" },
    { name: "Rich Butterscotch Crunch Cake Cake", price: "₹599", rating: 4, subtitle: "₹ 599 Earliest" }
  ];

  return (
    <section className="bg-white" style={{ padding: '35px 0' }}>
      <div className="container mx-auto">
        <h2 className="font-bold" style={{ fontSize: '20px', color: '#8B3535', marginBottom: '18px' }}>Bestsellers from Across the Country</h2>

        <div className="grid grid-cols-4" style={{ gap: '14px' }}>
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg relative border" style={{ padding: '10px', borderColor: '#e5e5e5' }}>
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-[#6B2828] to-[#8B3535] flex items-center justify-center" style={{ height: '110px', marginBottom: '8px' }}>
                <span style={{ fontSize: '45px' }}>🎂</span>
                <button className="absolute bg-white rounded-full flex items-center justify-center shadow-sm" style={{ top: '6px', right: '6px', width: '26px', height: '26px' }}>
                  <Heart style={{ width: '13px', height: '13px', color: '#D32F2F' }} strokeWidth={2} />
                </button>
              </div>
              <h3 style={{ fontSize: '11px', fontWeight: '600', color: '#333', marginBottom: '3px', lineHeight: '1.3' }}>{product.name}</h3>
              <p className="font-bold" style={{ fontSize: '13px', color: '#8B3535', marginBottom: '2px' }}>{product.price}</p>
              <p style={{ fontSize: '10px', color: '#999', marginBottom: '4px' }}>{product.subtitle}</p>
              <div className="flex" style={{ gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ fontSize: '11px', color: i < product.rating ? '#FFD700' : '#ddd' }}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end" style={{ marginTop: '14px' }}>
          <button className="text-white font-bold rounded-full" style={{ padding: '7px 18px', background: '#8B3535', fontSize: '11px' }}>VIEW ALL</button>
        </div>
      </div>
    </section>
  );
}
