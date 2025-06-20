import React from 'react';
import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Terms and Conditions - Saraswate</title>
        <meta name="description" content="Terms and Conditions for Saraswate" />
      </Head>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing and using this website, you agree to be bound by these Terms and Conditions. 
            If you do not agree with these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. User Data Collection and Use
          </h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              2.1 Personal Information Collection
            </h3>
            <p className="text-gray-600">
              We collect the following personal information when you interact with our website:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>User Message</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              2.2 Purpose of Data Collection
            </h3>
            <p className="text-gray-600">
              The information you provide will be used solely for:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Responding to your inquiries</li>
              <li>Providing customer support</li>
              <li>Communicating important updates about our services</li>
              <li>Improving our user experience</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Data Protection and Privacy
          </h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              3.1 Data Security
            </h3>
            <p className="text-gray-600">
              We are committed to protecting your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>All collected data is stored securely with industry-standard encryption</li>
              <li>Access to user data is restricted to authorized personnel only</li>
              <li>We implement robust security measures to prevent unauthorized access</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              3.2 Data Retention
            </h3>
            <p className="text-gray-600">
              Personal information will be permanently retained for our records and future communication.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Communication Consent
          </h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              4.1 Communication Channels
            </h3>
            <p className="text-gray-600">
              By providing your contact information, you consent to being contacted via:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Email</li>
              <li>Phone Number</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              4.2 Communication Preferences
            </h3>
            <p className="text-gray-600">
              We will not share your contact information with third parties without your explicit consent.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. User Rights
          </h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              5.1 Right to Access
            </h3>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Request access to your personal information</li>
              <li>Request correction of any inaccurate data</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              5.2 How to Exercise Your Rights
            </h3>
            <p className="text-gray-600">
              To exercise your rights, please contact us at the details provided below.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Limitations of Liability
          </h2>
          <p className="text-gray-600">
            While we strive to maintain accurate information, we cannot guarantee the absolute accuracy of user-submitted data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Modifications to Terms
          </h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms and Conditions at any time. 
            Changes will be effective immediately upon posting on the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Contact Information
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              Saraswate
            </h3>
            <p className="text-gray-600">
              <strong>Email:</strong> contact@saraswate.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 95889 43248
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms and Conditions are governed by the laws of India, 
            without regard to its conflict of law principles.
          </p>
        </section>

        <p className="text-center text-gray-500 mt-8">
          <strong>Last Updated:</strong> November 2024
        </p>
      </div>
    </div>
  );
}