import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white text-white p-4">
      <div className=" flex items-center justify-between">
         {/* Logo on the Left */}
        <div className="text-xl font-bold px-2">
          <img src="image.png"
          className="w-1/2 md:w-auto"
          ></img>
        </div>
        {/* Menu Items */}
        <ul className="text-black hidden md:flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

       

        {/* Mobile Menu Icon */}
<div className="md:hidden bg-white p-2">
  <button className="text-black focus:outline-none">
    {/* Simple Hamburger Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
