'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Github,
  Calendar,
  Briefcase,
  DollarSign,
  FileText
} from 'lucide-react';

export default function JobApplicationForm({ jobRole = 'This Position' }) {
  const currentYear = new Date().getFullYear().toString();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    linkedin: '',
    portfolio: '',
    github: '',
    experience: '',
    employer: '',
    startDate: '',
    expectedSalary: '',
    institution: '',
    percentage: '',
    passingYear: '',
    ongoing: false,
  });
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'ongoing') {
      setFormData(prev => ({
        ...prev,
        ongoing: checked,
        passingYear: checked ? currentYear : ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleResumeChange = (e) => setResume(e.target.files ? e.target.files[0] : null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, resume);
  };

  return (
    <div className="max-w-screen-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <header className="bg-gray-100 border-b">
        <div className="px-6 py-4 flex items-center space-x-3">
          <FileText size={28} className="text-blue-600" />
          <h2 className="text-3xl font-semibold text-gray-800">Apply for {jobRole}</h2>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
        {/* Personal Details */}
        <section>
          <h3 className="text-xl font-medium text-gray-700 mb-4">Personal Details</h3>

          {/* Contact Information Group */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Contact Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                <User className="text-gray-500 mr-2" />
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                <Phone className="text-gray-500 mr-2" />
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2 sm:col-span-2">
                <Mail className="text-gray-500 mr-2" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Address Group */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Address</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2 sm:col-span-2">
                <MapPin className="text-gray-500 mr-2" />
                <input name="addressLine1"
                  type="text"
                  required
                  placeholder="Address Line 1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                <MapPin className="text-gray-500 mr-2" />
                <input
                  name="city"
                  type="text"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                <MapPin className="text-gray-500 mr-2" />
                <input
                  name="state"
                  type="text"
                  required
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                <Globe className="text-gray-500 mr-2" />
                <input
                  name="country"
                  type="text"
                  required
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                <MapPin className="text-gray-500 mr-2" />
                <input
                  name="pincode"
                  type="text"
                  required
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Details */}
        <section>
          <h3 className="text-xl font-medium text-gray-700 mb-4">Professional Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Linkedin, name: 'linkedin', type: 'url', placeholder: 'LinkedIn Profile', required: false },
              { icon: Globe, name: 'portfolio', type: 'url', placeholder: 'Portfolio Website', required: false },
              { icon: Github, name: 'github', type: 'url', placeholder: 'GitHub Profile', required: false },
              { icon: Calendar, name: 'experience', type: 'number', placeholder: 'Years of Experience', required: true },
              { icon: Briefcase, name: 'employer', type: 'text', placeholder: 'Current Employer', required: false },
              { icon: Calendar, name: 'startDate', type: 'text', placeholder: 'Available Start Date', required: true, isDate: true },
              { icon: DollarSign, name: 'expectedSalary', type: 'text', placeholder: 'Expected Salary', required: false }
            ].map((field) => (
              <div key={field.name} className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                <field.icon className="text-gray-500 mr-2" />
                <input
                  name={field.name}
                  type={field.isDate ? 'text' : field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  onFocus={e => field.isDate && (e.target.type = 'date')}
                  onBlur={e => field.isDate && (e.target.type = 'text')}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Highest Qualification */}
        <section>
          <h3 className="text-xl font-medium text-gray-700 mb-4">Highest Qualification</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
              <input
                name="institution"
                type="text"
                required
                placeholder="School/College Name"
                value={formData.institution}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800"
              />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
              <input
                name="percentage"
                type="text"
                required
                placeholder="Percentage / Percentile"
                value={formData.percentage}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800"
              />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
              <input
                name="passingYear"
                type="text"
                required
                disabled={formData.ongoing}
                placeholder="Year of Passing Out"
                value={formData.passingYear}
                onChange={handleChange}
                className="w-full bg-transparent disabled:bg-gray-200 disabled:cursor-not-allowed outline-none text-gray-800"
              />
            </div>
            <label className="flex items-center space-x-2">
              <input
                name="ongoing"
                type="checkbox"
                checked={formData.ongoing}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-800">Currently Ongoing</span>
            </label>
          </div>
        </section>

        {/* Attachments */}
        <section>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            <FileText className="inline-block mr-2 text-blue-600" /> Attachments
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
            <input
              name="resume"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              className="w-full outline-none text-gray-800"
            />
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
