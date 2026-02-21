import { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  "https://images.unsplash.com/photo-1603570419886-3f8c6f4b1a8d",
  "https://images.unsplash.com/photo-1583391733956-6c78276477e9",
];

export default function PremiumGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow =
      selectedIndex !== null ? "hidden" : "auto";
  }, [selectedIndex]);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-6 bg-[#F8F4EF]">

      {/* Gallery Grid */}
      <div className="columns-2 md:columns-3 gap-5 space-y-5 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer overflow-hidden rounded-2xl group"
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full rounded-2xl transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
  <div
    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
    onClick={() => setSelectedIndex(null)} // click outside closes
  >

    {/* Image Wrapper (prevent close when clicking image) */}
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Close Button */}
      <button
        onClick={() => setSelectedIndex(null)}
        className="
          absolute 
          -top-4 
          -right-4 
          md:top-4 
          md:right-4
          bg-[#C6A75E] 
          text-white 
          p-3 
          rounded-full 
          shadow-xl 
          hover:scale-110 
          transition 
          z-50
        "
      >
        <FaTimes size={18} />
      </button>

      {/* Image */}
      <img
        src={images[selectedIndex]}
        alt="Preview"
        className="
          max-w-[95vw]
          max-h-[80vh]
          object-contain
          rounded-2xl
          shadow-2xl
        "
      />
    </div>

    {/* Left Arrow */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        prevImage();
      }}
      className="absolute left-4 md:left-10 bg-black/40 hover:bg-[#C6A75E] text-white p-3 md:p-4 rounded-full transition"
    >
      <FaChevronLeft size={20} />
    </button>

    {/* Right Arrow */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      className="absolute right-4 md:right-10 bg-black/40 hover:bg-[#C6A75E] text-white p-3 md:p-4 rounded-full transition"
    >
      <FaChevronRight size={20} />
    </button>

  </div>
)}
    </section>
  );
}