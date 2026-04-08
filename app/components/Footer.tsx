"use client";

export default function Footer() {
  return (
    <footer>
      <div className="text-white text-center" style={{ padding: '20px', background: '#8B3535' }}>
        <p className="font-bold" style={{ fontSize: '16px' }}>Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration</p>
      </div>
      
      <div className="bg-[#F5E6D3]" style={{ padding: '40px 0' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-4" style={{ gap: '30px', marginBottom: '30px' }}>
            <div>
              <h4 className="font-bold" style={{ fontSize: '16px', color: '#8B3535', marginBottom: '12px' }}>Dakingo</h4>
              <ul style={{ fontSize: '12px', color: '#8B3535', lineHeight: '2' }}>
                <li>Our Story</li>
                <li>Contact Us</li>
                <li>Franchise</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold" style={{ fontSize: '16px', color: '#8B3535', marginBottom: '12px' }}>KNOW US</h4>
              <ul style={{ fontSize: '12px', color: '#8B3535', lineHeight: '2' }}>
                <li>Cancellation</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold" style={{ fontSize: '16px', color: '#8B3535', marginBottom: '12px' }}>NEED HELP?</h4>
              <ul style={{ fontSize: '12px', color: '#8B3535', lineHeight: '2' }}>
                <li>Cancellation</li>
                <li>Add Reminder</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold" style={{ fontSize: '16px', color: '#8B3535', marginBottom: '12px' }}>MORE INFO</h4>
              <ul style={{ fontSize: '12px', color: '#8B3535', lineHeight: '2' }}>
                <li>Terms and Policy</li>
                <li>Coupons & Offers</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center justify-center" style={{ gap: '12px' }}>
            <input type="email" placeholder="Enter Email Address" className="border rounded-full" style={{ width: '300px', height: '40px', padding: '0 16px', fontSize: '13px', borderColor: '#8B3535' }} />
            <button className="text-white font-bold rounded-full" style={{ padding: '10px 24px', background: '#8B3535', fontSize: '12px' }}>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white text-center" style={{ padding: '16px' }}>
        <p style={{ fontSize: '12px', color: '#666' }}>© 2024 Dakingo. All rights reserved.</p>
      </div>
    </footer>
  );
}
