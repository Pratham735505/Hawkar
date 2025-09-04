import React from "react";

export const Footer = () => {
  const handleclick = ()=>{
      window.open('https://wa.me/918736051236', '_blank');
  }
  return (
    <div>
      {/* WhatsApp Banner */}
        <div className='bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8'>
          <div className='bg-[linear-gradient(0deg,_#037D01_0%,_#025C00_100%)] h-auto min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem] w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-6 sm:px-8 md:px-12 rounded-3xl sm:rounded-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 shadow-lg'>
            <p className='text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-white poppins font-semibold leading-tight'>
              Contact Us On Whatsapp
            </p>
            <button className='bg-white rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-2 md:px-6 text-sm sm:text-base md:text-lg poppins text-green-600 font-medium hover:bg-gray-100 transition duration-200 flex-shrink-0 whitespace-nowrap'
            onClick={handleclick} >
              Start Chat
            </button>
          </div>
        </div>

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
    </div>
  );
};

export default Footer;
