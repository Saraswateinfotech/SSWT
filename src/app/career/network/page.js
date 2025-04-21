// pages/profile-form.js
"use client";
import { useState } from 'react';
import Head from 'next/head';
import PersonalInfoSection from '@/components/Career/Network/profile/PersonalInfoSection';
import LocationSection from '@/components/Career/Network/profile/LocationSection';
import ProfessionalInterestsSection from '@/components/Career/Network/profile/ProfessionalInterestsSection';
import PortfolioSection from '@/components/Career/Network/profile/PortfolioSection';
import Button from '@/components/Career/Network/ui/Button';


export default function ProfileForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    
    // Location
    addressLine1: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    
    // Professional Interests
    areaOfInterest: '',
    preferredRoles: '',
    yearsOfExperience: '',
    availability: '',
    shortBio: '',
    
    // Portfolio & Experience
    linkedinProfile: '',
    portfolioWebsite: '',
    githubProfile: '',
    resume: null,
    currentEmployer: '',
    currentRole: '',
    totalYearsOfExperience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (file) => {
    setFormData(prevData => ({
      ...prevData,
      resume: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Profile information submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Professional Profile | Create Your Profile</title>
        <meta name="description" content="Submit your professional information to create your profile" />
      </Head>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Professional Profile
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Complete your professional profile to connect with opportunities that match your expertise.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-10">
              <PersonalInfoSection 
                formData={formData} 
                handleChange={handleChange} 
              />
              
              <LocationSection 
                formData={formData} 
                handleChange={handleChange} 
              />
              
              <ProfessionalInterestsSection 
                formData={formData} 
                handleChange={handleChange} 
              />
              
              <PortfolioSection 
                formData={formData} 
                handleChange={handleChange}
                handleFileChange={handleFileChange}
              />
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  className="sm:ml-4"
                >
                  Submit Profile
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}