"use client";

import { Cake, Gift, IceCream, Cookie } from "lucide-react";

export default function Menu() {
  return (
    <section className="bg-white" style={{ padding: '35px 0' }}>
      <div className="container mx-auto">
        <h2 className="font-bold" style={{ fontSize: '26px', color: '#8B3535', marginBottom: '3px' }}>Menu</h2>
        <p style={{ fontSize: '12px', color: '#8B3535', marginBottom: '10px' }}>What will you wish for?</p>
        
        <div className="flex" style={{ gap: '7px', marginBottom: '20px' }}>
          <div className="border rounded flex items-center justify-center" style={{ width: '22px', height: '22px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '11px' }}>📱</span>
          </div>
          <div className="border rounded flex items-center justify-center" style={{ width: '22px', height: '22px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '11px' }}>👥</span>
          </div>
          <div className="border rounded flex items-center justify-center" style={{ width: '22px', height: '22px', borderColor: '#8B3535' }}>
            <span style={{ fontSize: '11px' }}>📧</span>
          </div>
        </div>

        <div className="grid grid-cols-4" style={{ gap: '14px', maxWidth: '550px', margin: '0 auto' }}>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center border shadow-sm" style={{ width: '68px', height: '68px', marginBottom: '7px', borderColor: '#e5e5e5' }}>
              <Cake style={{ width: '32px', height: '32px', color: '#8B3535', strokeWidth: 1.5 }} />
            </div>
            <p className="font-bold" style={{ fontSize: '10px', color: '#8B3535' }}>CLASSIC</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center border shadow-sm" style={{ width: '68px', height: '68px', marginBottom: '7px', borderColor: '#e5e5e5' }}>
              <Gift style={{ width: '32px', height: '32px', color: '#8B3535', strokeWidth: 1.5 }} />
            </div>
            <p className="font-bold" style={{ fontSize: '10px', color: '#8B3535' }}>GOURMET</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center border shadow-sm" style={{ width: '68px', height: '68px', marginBottom: '7px', borderColor: '#e5e5e5' }}>
              <IceCream style={{ width: '32px', height: '32px', color: '#8B3535', strokeWidth: 1.5 }} />
            </div>
            <p className="font-bold" style={{ fontSize: '10px', color: '#8B3535' }}>DESSERTS</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F5E6D3] rounded-lg flex items-center justify-center border shadow-sm" style={{ width: '68px', height: '68px', marginBottom: '7px', borderColor: '#e5e5e5' }}>
              <Cookie style={{ width: '32px', height: '32px', color: '#8B3535', strokeWidth: 1.5 }} />
            </div>
            <p className="font-bold" style={{ fontSize: '10px', color: '#8B3535' }}>COOKIES</p>
          </div>
        </div>
      </div>
    </section>
  );
}
