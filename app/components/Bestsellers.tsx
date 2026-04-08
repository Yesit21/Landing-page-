"use client";

import { Heart } from "lucide-react";

export default function Bestsellers() {
  const products = [
    {
      id: 1,
      name: "Rich Chocolate Truffle Truffle Cake",
      price: "₹500",
      priceNote: "as low as/person",
      rating: 4,
      image: "/placeholder-cake.jpg"
    },
    {
      id: 2,
      name: "Choco Chip Truffle Cake Cake",
      price: "₹599",
      priceNote: "as low as/person",
      rating: 4,
      image: "/placeholder-cake.jpg"
    },
    {
      id: 3,
      name: "Tropical Fruit N Almond Cake Cake",
      price: "₹599",
      priceNote: "as low as/person",
      rating: 4,
      image: "/placeholder-cake.jpg"
    },
    {
      id: 4,
      name: "Rich Butterscotch Crunch Canis Cake",
      price: "₹599",
      priceNote: "as low as/person",
      rating: 4,
      image: "/placeholder-cake.jpg"
    }
  ];

  return (
    <section className="bg-[#FDF8F3] py-16">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-[#8B3535] text-[32px] font-bold mb-10">
          Bestsellers from Across the Country
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-[16px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative mb-4">
                <div className="w-full aspect-square bg-gradient-to-br from-[#8B3535] to-[#6B2828] rounded-[12px] overflow-hidden flex items-center justify-center">
                  <div className="text-white text-center text-4xl">
                    🎂
                  </div>
                </div>
                
                {/* Heart Button - Top Right */}
                <button 
                  className="absolute top-2 right-2 w-[32px] h-[32px] bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#FFF5F5] transition-colors group"
                  aria-label="Add to favorites"
                >
                  <Heart 
                    className="w-[16px] h-[16px] text-[#D32F2F] group-hover:fill-[#D32F2F] transition-all" 
                    strokeWidth={2.5}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Product Name */}
                <h3 className="text-[#6B2C2C] text-[14px] font-semibold leading-tight line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-[#8B3535] text-[18px] font-bold">
                    {product.price}
                  </span>
                  <span className="text-[#999999] text-[11px]">
                    {product.priceNote}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-[14px] h-[14px]"
                        viewBox="0 0 24 24"
                        fill={index < product.rating ? "#FFB800" : "#E0E0E0"}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  {/* Rating Count */}
                  <span className="text-[#999999] text-[11px]">
                    ({product.rating})
                  </span>
                </div>
              </div>

              {/* Add to Cart Button - Hidden, shows on hover */}
              <button className="w-full mt-3 bg-[#8B3535] hover:bg-[#6B2828] text-white py-2 rounded-[8px] text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-end">
          <button className="bg-[#8B3535] hover:bg-[#6B2828] text-white px-8 py-3 rounded-[8px] text-[14px] font-bold uppercase tracking-wide shadow-md hover:shadow-lg transition-all">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}
