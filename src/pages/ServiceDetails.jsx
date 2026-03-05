import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = {
  bridal: {
    title: "Bridal Makeup",
    description:
      "Professional bridal makeup for your special wedding day. HD, waterproof and long-lasting makeup with premium products.",
  },
  reception: {
    title: "Reception Makeup",
    description:
      "Elegant reception look with glamorous makeup and hairstyle.",
  },
  mehendi: {
    title: "Mehendi Design",
    description:
      "Beautiful bridal mehendi designs for weddings and events.",
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services[id];
  console.log(service,"service____");

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <Navbar />

      <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl mb-6 font-semibold">
          {service.title}
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          {service.description}
        </p>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;