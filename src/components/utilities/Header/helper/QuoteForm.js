import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuoteForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please provide your requirements";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://saraswate-backend-black.vercel.app/api/contactDetails",
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            massage: formData.requirements,
          }
        );

        if (response.status === 200) {
          toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setFormData({
            name: "",
            phone: "",
            email: "",
            requirements: "",
          });
          setTimeout(onClose, 3000);
        } else {
          toast.error("Failed to submit the form");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        toast.error(
          "There was an error submitting the form. Please try again."
        );
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div
        ref={formRef}
        className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-lg mx-auto"
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold text-black">Request a Quote</h2>
          <button
            onClick={onClose}
            className="text-3xl w-7 h-7 flex items-center justify-center hover:bg-red-500 hover:text-white text-red-500 transition-all duration-500 rounded"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-black font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043F9B] ${
                errors.name ? "border-red-500" : "border-gray-400"
              } text-black`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-black font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043F9B] ${
                errors.phone ? "border-red-500" : "border-gray-400"
              } text-black`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-black font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043F9B] ${
                errors.email ? "border-red-500" : "border-gray-400"
              } text-black`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Requirements Field */}
          <div className="mb-4">
            <label className="block text-black font-medium mb-2">
              Your Requirements
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className={`w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043F9B] ${
                errors.requirements ? "border-red-500" : "border-gray-400"
              } text-black`}
              placeholder="Enter your requirements"
            ></textarea>
            {errors.requirements && (
              <span className="text-red-500 text-sm">
                {errors.requirements}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#043F9B] text-white px-4 py-2 rounded-lg hover:bg-[#043F9B] focus:outline-none focus:ring-2 focus:ring-[#043F9B]"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuoteForm;
