"use client";

export default function Footer() {
  return (
    <footer>
      <div className="text-white text-center" style={{ padding: '18px', background: '#8B3535' }}>
        <p className="font-bold" style={{ fontSize: '15px' }}>Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration</p>
      </div>
      
      <div className="bg-[#F5E6D3]" style={{ padding: '35px 0' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-4" style={{ gap: '28px', marginBottom: '28px' }}>
            <div>
              <h4 className="font-bold" style={{ fontSize: '15px', color: '#8B3535', marginBottom: '10px' }}>Dakingo</h4>
              <ul style={{ fontSize: '11px', color: '#8B3535', lineHeight: '1.9' }}>
                <li>Our Story</li>
                <li>Contact Us</li>
                <li>Franchise</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold" style={{ fontSize: '15px', color: '#8B3535', marginBottom: '10px' }}>KNOW US</h4>
              <ul style={{ fontSize: '11px', color: '#8B3535', lineHeight: '1.9' }}>
                <li>Cancellation</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold" style={{ fontSize: '15px', color: '#8B3535', marginBottom: '10px' }}>NEED HELP?</h4>
              <ul style={{ fontSize: '11px', color: '#8B3535', lineHeight: '1.9' }}>
                <li>Cancellation</li>
                <li>Add Reminder</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold" style={{ fontSize: '15px', color: '#8B3535', marginBottom: '10px' }}>MORE INFO</h4>
              <ul style={{ fontSize: '11px', color: '#8B3535', lineHeight: '1.9' }}>
                <li>Terms and Policy</li>
                <li>Coupons & Offers</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          
          <div>
            <p className="text-center font-bold" style={{ fontSize: '13px', color: '#8B3535', marginBottom: '10px' }}>Stay updated</p>
            <div className="flex items-center justify-center" style={{ gap: '10px' }}>
              <input type="email" placeholder="Enter Email Address" className="border rounded-full bg-white" style={{ width: '280px', height: '38px', padding: '0 15px', fontSize: '12px', borderColor: '#8B3535' }} />
              <button className="text-white font-bold rounded-full" style={{ padding: '9px 22px', background: '#8B3535', fontSize: '11px' }}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white text-center" style={{ padding: '14px' }}>
        <div className="flex items-center justify-center" style={{ gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', color: '#8B3535' }}>🕐</span>
          <span style={{ fontSize: '11px', color: '#666' }}>Stay updated? Help?</span>
        </div>
        <p style={{ fontSize: '11px', color: '#666' }}>© 2024 Dakingo. All rights reserved.</p>
      </div>
    </footer>
  );
}
