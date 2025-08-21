import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Download Buttons */}
        <div>
          <img src="image.png" alt="Site Logo" className="h-12 mb-4" />
          <p className="mb-4 text-sm">Get our app from your favorite store</p>
          <div className="flex space-x-3">
            <a href="#">
              <img src="p.png" alt="Google Play" className="h-10" />
            </a>
            <a href="#">
              <img src="a.png" alt="App Store" className="h-10" />
            </a>
          </div>
        </div>

        {/* General */}
        <div>
          <h3 className="font-semibold mb-3">General</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-500 cursor-pointer">About Us</li>
            <li className="hover:text-gray-500 cursor-pointer">Careers</li>
            <li className="hover:text-gray-500 cursor-pointer">Press</li>
            <li className="hover:text-gray-500 cursor-pointer">Motto</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-500 cursor-pointer">Build With Hawkar</li>
            <li className="hover:text-gray-500 cursor-pointer">Transforming Unorganised Sector of Bharat</li>
            <li className="hover:text-gray-500 cursor-pointer">Merchant Stories</li>
            <li className="hover:text-gray-500 cursor-pointer">Subscribe for future opening</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-500 cursor-pointer">Terms of Service</li>
            <li className="hover:text-gray-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-500 cursor-pointer">Grievance Redressal Policy</li>
            <li className="hover:text-gray-500 cursor-pointer">Help and Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-500 cursor-pointer">University of Lucknow,<br/> Husanganj, Lucknow - 226021 , Uttar Pradesh</li>
            <li className="hover:text-gray-500 cursor-pointer">contact@hawkar.in</li>
            <li className="hover:text-gray-500 cursor-pointer">+91-8736xxxxxx</li>
            <li className="hover:text-gray-500 cursor-pointer"><a href="https://hawkar.in/">www.hawkar.in</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center text-xs py-4">
        © {new Date().getFullYear()} Hawkar.in. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
