import React from "react";
import {
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 text-white pt-20 pb-10 mt-20 overflow-hidden">
      
      {/*  soft luxury glow */}
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_white,_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/*  Brand */}
        <div className="text-center md:text-left">
          <h2
            className="text-3xl mb-4 font-semibold tracking-wide"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Dreams Makeover
          </h2>

          <p className="text-sm leading-relaxed text-pink-100">
            Making your wedding moments magical with professional bridal makeup,
            mehendi, and saree draping services.
          </p>

          {/*  Social icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/dreamzz_makeover"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition duration-300 hover:scale-110 shadow-lg"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-pink-100" />
              
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917845015144"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-green-500 transition duration-300 hover:scale-110 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* <p className="text-xs mt-4 text-pink-100">
            ▪️ DM to book your big day 
          </p> */}
        </div>

        {/*  Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl mb-5 font-semibold tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-pink-100">
  {[
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ].map((item) => (
    <li key={item.name}>
      <a
        href={item.link}
        onClick={(e) => {
  e.preventDefault();
  const section = document.querySelector(item.link);

  if (section) {
    const top = section.offsetTop - 80; // navbar height
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
}}
        className="cursor-pointer hover:translate-x-2 hover:text-white transition duration-300 block"
      >
        → {item.name}
      </a>
    </li>
  ))}
</ul>
        </div>

        {/*  Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-xl mb-5 font-semibold tracking-wide">
            Contact
          </h3>

          <div className="flex items-center justify-center md:justify-start gap-2 text-sm mb-3 text-pink-100">
            <MapPin className="w-4 h-4" />
            <span>Cuddalore & Chennai, Tamil Nadu</span>
          </div>

          {/*  Phone 1 */}
          <a
            href="tel:+917845015144"
            className="flex items-center justify-center md:justify-start gap-2 text-sm mb-2 text-pink-100 hover:text-white transition"
          >
            <Phone className="w-4 h-4" />
            <span>+91 78450 15144</span>
          </a>

          {/*  Phone 2 */}
          <a
            href="tel:+919363157507"
            className="flex items-center justify-center md:justify-start gap-2 text-sm mb-4 text-pink-100 hover:text-white transition"
          >
            <Phone className="w-4 h-4" />
            <span>+91 93631 57507</span>
          </a>

          <div className="flex items-center justify-center md:justify-start gap-2 text-sm mb-4 text-pink-100">
            <Mail className="w-4 h-4" />
            <span>bridalbeauty@email.com</span>
          </div>
        </div>
      </div>

      {/*  Bottom */}
      <div className="text-center text-sm mt-14 border-t border-white/20 pt-6 space-y-2">
        <p className="text-pink-100">
          © {new Date().getFullYear()} Dreams Makeover. All rights reserved.
        </p>

        <p className="text-pink-200">
          Developed by{" "}
          <a
            href="https://www.instagram.com/_gowtham_602"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition font-medium"
          >
            Gowtham
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;