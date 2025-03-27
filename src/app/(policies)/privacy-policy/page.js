import React from 'react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Privacy Policy - Saraswate</title>
        <meta name="description" content="Privacy Policy for Saraswate" />
      </Head>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Last Updated: November 2024
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-600">
            Saraswate ("we", "our", "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Information We Collect
          </h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              2.1 Personal Information
            </h3>
            <p className="text-gray-600">We may collect the following personal information:</p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Message Content</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              2.2 Types of Data Collection
            </h3>
            <p className="text-gray-600">We collect information:</p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Directly from you when you submit forms</li>
              <li>Through communication channels</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Purpose of Data Collection
          </h2>
          <p className="text-gray-600">We collect and use your personal information for:</p>
          <ul className="list-disc list-inside text-gray-600 pl-4">
            <li>Providing customer support</li>
            <li>Responding to inquiries</li>
            <li>Improving our services</li>
            <li>Marketing communications (with consent)</li>
            <li>Operational and administrative purposes</li>
            <li>Developing and enhancing our digital products</li>
            <li>Analyzing website usage and performance</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Data Storage and Security
          </h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              4.1 Data Storage
            </h3>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Information is stored on secure, encrypted servers</li>
              <li>Access is restricted to authorized personnel</li>
              <li>Retained for business purposes and legal compliance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              4.2 Security Measures
            </h3>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Implement industry-standard security protocols</li>
              <li>Use encryption technologies</li>
              <li>Regular security audits</li>
              <li>Protection against unauthorized access</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Data Sharing and Disclosure
          </h2>
          <p className="text-gray-600">We may share your information:</p>
          <ul className="list-disc list-inside text-gray-600 pl-4">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>With service providers who assist our operations</li>
            <li>In case of business transfers or restructuring</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. User Rights
          </h2>
          <p className="text-gray-600">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-600 pl-4">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Inquire about data processing</li>
            <li>Request information about stored data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Contact Information
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              Saraswate
            </h3>
            <p className="text-gray-600">
              <strong>Email:</strong> saraswateinfotech@gmail.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 95889 43248
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Governing Law
          </h2>
          <p className="text-gray-600">
            This privacy policy is governed by the laws of India.
          </p>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
          <p className="text-blue-700">
            <strong>Note:</strong> By using our services, you consent to the terms of this privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}