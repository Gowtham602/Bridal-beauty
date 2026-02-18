import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* About */}
        <div>
          <h2
            className="text-2xl mb-4 font-semibold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Bridal Beauty
          </h2>
          <p className="text-sm">
            Making your wedding moments magical with professional bridal makeup,
            mehendi, and saree draping services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        {/* Contact */}
<div>
  <h3 className="text-xl mb-4 font-semibold">Contact</h3>

  {/* Location */}
  <div className="flex items-center justify-center md:justify-start gap-2 text-sm mb-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c4-4.5 6-8 6-11a6 6 0 10-12 0c0 3 2 6.5 6 11z"
      />
    </svg>
    <span>Chennai, Tamil Nadu</span>
  </div>

  {/* Phone */}
  <div className="flex items-center justify-center md:justify-start gap-2 text-sm mb-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 7.04 5.71 12.75 12.75 12.75h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a9.75 9.75 0 01-4.875-4.875l1.293-.97c.363-.272.53-.74.417-1.173L9.713 4.852A1.125 1.125 0 008.622 4H7.25A2.25 2.25 0 005 6.25v.5z"
      />
    </svg>
    <span>+91 98765 43210</span>
  </div>

  {/* Email */}
  <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5v9A2.25 2.25 0 0119.5 18.75h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0l-9.75 6.75L2.25 7.5m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5"
      />
    </svg>
    <span>bridalbeauty@email.com</span>
  </div>
</div>

      </div>

      <div className="text-center text-sm mt-8 border-t border-pink-400 pt-4">
        © {new Date().getFullYear()} Bridal Beauty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
