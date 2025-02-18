import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "./Footer";
const customIcon = L.divIcon({
  html: `<div style="color: red; font-size: 24px;"><i class="fas fa-map-marker-alt"></i></div>`,
  className: "custom-map-icon",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="bg-banner bg-auto bg-no-repeat mb-8 flex flex-col justify-center items-center h-40 w-full text-white">
        <div>
          <h1 className="text-xl font-bold flex justify-center items-center">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="bg-gray-50 xl:w-3/4 md:w-5/6 mx-auto container py-3">
        <div className="font-semibold text-center">We're here to help!</div>
        <p className="text-gray-600 py-3 text-center">
          The TRUE customer care team is available Monday - Friday from 7am -
          7pm UTC +7. Saturday & Sunday we're definitely on the links but we'll
          answer all inquiries as soon as we are back in the office on the next
          business day..
        </p>
        <p className="text-gray-600 text-center py-3">
          We will do our best to respond as soon as possible; typical response
          time is within 24 hours.
        </p>
        <p className="text-gray-600 text-center py-3">
          Please check out our FAQ for quick insights on sizing, features and
          model comparisons
        </p>
        <p className="text-gray-600 text-center py-3">
          Need an exchange/return?{" "}
          <a href="#" className="text-black underline">
            Submit your request here
          </a>
        </p>
        <p className="text-gray-600 text-center py-3">
          Thank you and we look forward to connecting with you soon!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              What's on your mind? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" bg-black text-white py-4 px-2 rounded hover:bg-gray-800 transition duration-300"
          >
            SEND MESSENGER
          </button>
        </form>
      </div>
      <div className="xl:w-3/4 md:w-5/6 mx-auto container py-3 my-4">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-96 w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={customIcon}></Marker>
        </MapContainer>
      </div>
      <div>
        <div className="w-full flex justify-center flex-wrap gap-4 xl:w-3/4 md:w-5/6 mx-auto container">
          <div className="w-full md:w-2/5">
            <h className="text-lg my-4 font-semibold text-primary">
              Digital - New York
            </h>
            <p className="text-black text-sm my-4">
              433 E 13th St, New York, NY 10009, United State of America
            </p>
            <p className="text-black text-sm my-4">
              <span className="text-gray-500">Hotline: </span>888 9344 6000 -
              888 1234 6789
            </p>
            <p className="text-black text-sm my-4">
              <span className="text-gray-500">Email: </span>
              amabook-store@magentech.com
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <h className="text-lg my-4 font-semibold text-primary">
              Digital - Los Angeles
            </h>
            <p className="text-black text-sm my-4">
              433 E 13th St, New York, NY 10009, United State of America
            </p>
            <p className="text-black text-sm my-4">
              <span className="text-gray-500">Hotline: </span>888 9344 6000 -
              888 1234 6789
            </p>
            <p className="text-black text-sm my-4">
              <span className="text-gray-500">Email: </span>
              amabook-store@magentech.com
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <h className="text-lg my-4 font-semibold text-primary">
              Digital - London
            </h>
            <p className="text-black text-sm my-4">
              433 E 13th St, New York, NY 10009, United State of America
            </p>
            <p className="text-black text-sm my-4">
              <span className="text-gray-500">Hotline: </span>888 9344 6000 -
              888 1234 6789
            </p>
            <p className="text-black text-sm my-4">
              <span className="text-gray-500">Email: </span>
              amabook-store@magentech.com
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <h className="text-lg my-4 font-semibold text-primary">
              Digital - cairo EG
            </h>
            <p className="text-black text-sm my-4">
              433 E 13th St, New York, NY 10009, United State of America
            </p>
            <p className="text-black text-sm my-4">
              <span className="text-gray-500">Hotline: </span>888 9344 6000 -
              888 1234 6789
            </p>
            <p className="text-black text-sm my-4">
              <span className="text-gray-500">Email: </span>
              amabook-store@magentech.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
