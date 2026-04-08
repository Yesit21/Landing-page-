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
    <section className="bg-white" style={{ padding: '40px 0' }}>
      <div className="container mx-auto">
        <h2 className="font-bold" style={{ fontSize: '22px', color: '#8B3535', marginBottom: '20px' }}>Bestsellers from Across the Country</h2>

        <div className="grid grid-cols-4" style={{ gap: '16px' }}>
          {products.map((product, idx) => (
            <div key={idx} className="bg-[#F5E6D3] rounded-lg relative" style={{ padding: '12px' }}>
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-[#6B2828] to-[#8B3535] flex items-center justify-center" style={{ height: '120px', marginBottom: '10px' }}>
                <span style={{ fontSize: '50px' }}>🎂</span>
                <button className="absolute bg-white rounded-full flex items-center justify-center" style={{ top: '8px', right: '8px', width: '28px', height: '28px' }}>
                  <Heart style={{ width: '14px', height: '14px', color: '#8B3535' }} strokeWidth={2} />
                </button>
              </div>
              <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#333', marginBottom: '4px', lineHeight: '1.3' }}>{product.name}</h3>
              <p className="font-bold" style={{ fontSize: '14px', color: '#8B3535', marginBottom: '4px' }}>{product.price}</p>
              <div className="flex" style={{ gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ fontSize: '12px', color: i < product.rating ? '#FFD700' : '#ddd' }}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end" style={{ marginTop: '16px' }}>
          <button className="text-white font-bold rounded-full" style={{ padding: '8px 20px', background: '#8B3535', fontSize: '12px' }}>VIEW ALL</button>
        </div>
      </div>
    </section>
  );
}
