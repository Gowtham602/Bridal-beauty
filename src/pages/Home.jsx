import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../assets/profile-pic.jpg";
import PremiumGallery from "../components/PremiumGallery";
// for smoth animation for scroller 
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";



const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      // asing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
    
      <Navbar />

      {/* Main Content */}
      <main className="pt-10 relative z-10 bg-pink-50">
        {/*  Hero Section */}

        <section className="relative bg-[#FDF6F9] overflow-hidden pt-20 pb-10 md:pt-15 pb-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p
                className="uppercase tracking-[4px] text-[black] text-gray-500 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Making Your Special Day More Beautiful
              </p>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl text-[#2A2A2A] leading-tight mb-6 font-light"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Dreams <span className="italic text-[#C6A75E]">Makeover</span>
              </h1>

              <div className="w-16 h-[2px] bg-[#C6A75E] mb-8"></div>

              <p
                className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed mb-10 max-w-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                At Dreams Makeover, we create refined bridal and beauty
                transformations designed to enhance your natural elegance. Every
                detail is thoughtfully curated to make you feel confident,
              </p>

              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                <button className="bg-[#C6A75E] text-white px-10 py-3 text-[12px] tracking-[2px] rounded-full hover:bg-[#b89347] transition duration-300 shadow-md">
                  RESERVE YOUR DATE
                </button>

                <button className="border border-[#C6A75E] text-[#2A2A2A] px-10 py-3 text-[12px] tracking-[2px] rounded-full hover:bg-[#C6A75E] hover:text-white transition duration-300">
                  EXPLORE SERVICES
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center md:justify-end">
              {/* Soft Luxury Glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-pink-200/40 to-rose-200/40 rounded-[40px] blur-3xl"></div>

              <img
                src={Profile}
                alt="Dreams Makeover Bridal Studio"
                className="relative w-full max-w-md md:max-w-lg rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.12)] object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        {/* Premium Services Section */}
        <section className="relative bg-[#FDF6F9] py-4 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-[12px] text-gray-500 mb-4">
              What We Offer
            </p>

            <h2
              className="text-4xl md:text-5xl font-light text-[#2A2A2A] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our <span className="italic text-[#C6A75E]">Services</span>
            </h2>

            <div className="w-20 h-[2px] bg-[#C6A75E] mx-auto mb-16"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Bridal Makeup",
                  img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
                },
                {
                  title: "Reception Makeup",
                  img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
                },
                {
                  title: "Mehendi Design",
                  img: "https://images.unsplash.com/photo-1603570419886-3f8c6f4b1a8d",
                },
                {
                  title: "Saree Draping",
                  img: "https://images.unsplash.com/photo-1583391733956-6c78276477e9",
                },
                {
                  title: "Hair Styling",
                  img: "https://images.unsplash.com/photo-1519741497674-611481863552",
                },
                {
                  title: "Party Makeup",
                  img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-3"
                >
                  {/* Image */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500"></div>

                  {/* Content */}
                  <div className="absolute bottom-8 left-0 right-0 text-center px-6">
                    <h3 className="text-white text-xl tracking-wide font-medium mb-2">
                      {service.title}
                    </h3>
                    <div className="w-10 h-[2px] bg-[#C6A75E] mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 📸 Gallery Section */}
       {/* 📸 Premium Gallery Section */}
        <PremiumGallery/>

        {/* 📞 Contact Section */}
        <section className="py-20 px-6 md:px-20 bg-pink-100 text-center">
          <h2
            className="text-3xl md:text-4xl mb-10 text-pink-600"
            style={{ fontFamily: "Playfair Display" }}
          >
            Book Your Appointment
          </h2>

          <form className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="date"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Send Enquiry
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
