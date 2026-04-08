"use client";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Top Banner - FSSAI Certification */}
      <div className="bg-[#8B3535] py-5">
        <div className="container mx-auto px-8">
          <h3 className="text-white text-center text-[20px] font-bold">
            Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </h3>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white py-12 border-t border-[#E8DDD0]">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-4 gap-8 mb-8">
            
            {/* Column 1: Dakingo */}
            <div>
              <h4 className="text-[#8B3535] text-[16px] font-bold mb-4 uppercase tracking-wide">
                Dakingo
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Franchise Store
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Carrings
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Know Us */}
            <div>
              <h4 className="text-[#8B3535] text-[16px] font-bold mb-4 uppercase tracking-wide">
                Know Us
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Need Help? */}
            <div>
              <h4 className="text-[#8B3535] text-[16px] font-bold mb-4 uppercase tracking-wide">
                Need Help?
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Cancellation And Refund
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: More Info */}
            <div>
              <h4 className="text-[#8B3535] text-[16px] font-bold mb-4 uppercase tracking-wide">
                More Info
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Terms and Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6B2C2C] text-[14px] hover:text-[#8B3535] transition-colors">
                    Customer Reviews
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Newsletter Section */}
          <div className="flex items-center justify-between pt-8 border-t border-[#E8DDD0]">
            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-[320px] px-4 py-3 border-2 border-[#D4C4B8] rounded-[8px] text-[14px] text-[#6B2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#8B3535]"
              />
              <button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-3 rounded-[8px] text-[14px] font-bold uppercase tracking-wide shadow-md transition-colors">
                SUBSCRIBE
              </button>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#8B3535]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              <a href="#" className="text-[#8B3535] text-[14px] font-medium hover:underline">
                May we help you?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#FDF8F3] py-4 border-t border-[#E8DDD0]">
        <div className="container mx-auto px-8">
          <p className="text-center text-[#6B2C2C] text-[12px]">
            © 2024 Dakingo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
