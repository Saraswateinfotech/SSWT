import { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://saraswate-backend-black.vercel.app/api/contactDetails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setFormData({ name: "", email: "", phone: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section
      id="home-contact"
      className="bg-gradient-to-br from-gray-100 to-gray-200 py-10 md:py-16"
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Heading and Info Boxes */}
          <div className="flex flex-col">
            <span className="text-sm mb-3 font-semibold uppercase text-[#043F9B]">
              Appointment Now
            </span>
            <h1 className="text-3xl md:text-4xl mb-8 font-bold text-gray-800 leading-tight">
              We&apos;re Ready To Talk About Your{" "}
              <span className="text-[#043F9B]">Opportunities</span>
            </h1>
            {/* Info Boxes Stacked Vertically */}
            <div className="space-y-4">
              {/* Call Us Box */}
              <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4 max-w-lg">
                <div className="bg-[#043F9B] w-12 h-12 flex items-center justify-center rounded">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">Call Us:</p>
                  <p className="text-gray-600 font-semibold">+91 9950488637</p>
                </div>
              </div>
              {/* Quick Mail Us Box */}
              <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4 max-w-lg">
                <div className="bg-[#043F9B] w-12 h-12 flex items-center justify-center rounded">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">
                    Quick Mail Us:
                  </p>
                  <p className="text-gray-600 font-semibold">
                    contact@saraswate.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
              Make An Appointment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email in parallel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#043f9b]"
                />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#043f9b]"
              />
              </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#043f9b]"
                />
              {/* Phone field stays below Name and Email */}
              <textarea
                name="message"
                placeholder="Write Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#043f9b] min-h-[120px]"
              />
              <button
                type="submit"
                className="bg-[#043f9b] text-white font-medium py-3 px-6 rounded hover:bg-[#043f9bea] focus:outline-none focus:ring-2 focus:ring-[#043f9b]"
              >
                MAKE AN APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
