import { useState } from 'react'

import FlowerBackground from './effect/FlowerBackground'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="bg-pink-50">
    <FlowerBackground/>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="Bridal Makeup"
          className="w-full h-[70vh] md:h-[85vh] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display" }}>
            Elegant Bridal Makeup
          </h1>

          <p className="text-white text-lg md:text-xl mb-6">
            Making Your Special Day More Beautiful
          </p>

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition">
            Book Now
          </button>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl mb-12 font-semibold text-pink-600"
            style={{ fontFamily: "Playfair Display" }}>
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

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
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
                alt={service}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-medium text-gray-700">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>


      {/* Gallery Section */}
      <section className="py-16 bg-white px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl mb-12 text-pink-600"
            style={{ fontFamily: "Playfair Display" }}>
          Our Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((img) => (
            <img
              key={img}
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              alt="Gallery"
              className="rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 bg-pink-100 text-center">
        <h2 className="text-3xl md:text-4xl mb-8 text-pink-600"
            style={{ fontFamily: "Playfair Display" }}>
          Book Your Appointment
        </h2>

        <form className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="date"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full shadow-md transition"
          >
            Send Enquiry
          </button>

        </form>
      </section>

    </div>
  )
}

export default App
