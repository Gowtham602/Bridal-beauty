import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 relative z-10 bg-pink-50">

        {/* 🔥 Hero Section */}
        <section className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Bridal Makeup"
            className="w-full h-[75vh] md:h-[90vh] object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
            <h1
              className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              Elegant Bridal Makeup
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
              Making Your Special Day More Beautiful
            </p>

            <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
              Book Now
            </button>
          </div>
        </section>

        {/* 💎 Services Section */}
        <section className="py-20 px-6 md:px-20 text-center">
          <h2
            className="text-3xl md:text-4xl mb-14 font-semibold text-pink-600"
            style={{ fontFamily: "Playfair Display" }}
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "Bridal Makeup",
              "Reception Makeup",
              "Mehendi Design",
              "Saree Draping",
              "Hair Styling",
              "Party Makeup",
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
                  alt={service}
                  className="w-full h-48 object-cover rounded-xl mb-5 transition-transform duration-500 group-hover:scale-105"
                />
                <h3 className="text-xl font-medium text-gray-700">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* 📸 Gallery Section */}
        <section className="py-20 bg-white px-6 md:px-20 text-center">
          <h2
            className="text-3xl md:text-4xl mb-14 text-pink-600"
            style={{ fontFamily: "Playfair Display" }}
          >
            Our Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((img) => (
              <div key={img} className="overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                  alt="Gallery"
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

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
