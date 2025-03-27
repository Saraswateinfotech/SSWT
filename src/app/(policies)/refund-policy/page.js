import React from 'react';
import Head from 'next/head';

export default function ReturnRefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Return and Refund Policy - Saraswate</title>
        <meta name="description" content="Return and Refund Policy for Saraswate Software Products" />
      </Head>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Return and Refund Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Policy Overview
          </h2>
          <p className="text-gray-600">
            This Return and Refund Policy applies to all software products and services provided by Saraswate. 
            The policy is governed exclusively by the terms of the specific agreement signed between the client and the company.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Nature of Software Products
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              2.1 Intangible Digital Products
            </h3>
            <p className="text-gray-600">
              Our software products are:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Digital in nature</li>
              <li>Intangible intellectual property</li>
              <li>Non-returnable by definition</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Refund Considerations
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              3.1 Contractual Basis
            </h3>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Refunds, if any, will be determined solely by the specific terms outlined in the client agreement</li>
              <li>No standard refund will be automatically applied</li>
              <li>All refund considerations are subject to the explicit terms negotiated in the individual contract</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Client Agreement Primacy
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              4.1 Contractual Terms
            </h3>
            <p className="text-gray-600">
              The signed agreement between Saraswate and the client shall be the sole and definitive document governing:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Service delivery</li>
              <li>Performance expectations</li>
              <li>Compensation terms</li>
              <li>Potential remedies or refunds</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Service Commitment
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              5.1 Quality Assurance
            </h3>
            <p className="text-gray-600">
              Saraswate commits to:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Delivering software products as specified in the client agreement</li>
              <li>Maintaining professional standards of service</li>
              <li>Addressing any potential discrepancies through the mechanisms outlined in the specific contract</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Dispute Resolution
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              6.1 Resolution Process
            </h3>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Any disputes will be addressed exclusively through the dispute resolution mechanisms specified in the client agreement</li>
              <li>Clients must follow the procedural guidelines established in their specific contract</li>
            </ul>
          </div>
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
            This policy is governed by the laws of India, with specific reference to the individual client agreements.
          </p>
        </section>

        <p className="text-center text-gray-500 mt-8">
          <strong>Last Updated:</strong> November 2024
        </p>
      </div>
    </div>
  );
}