import React from 'react';
import Head from 'next/head';

export default function NoShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Service Delivery Policy - Saraswate</title>
        <meta name="description" content="Service Delivery Information" />
      </Head>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Service Delivery Policy
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Important Notice:</strong> Saraswate does not provide physical product shipping.
          </p>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Service Delivery
          </h2>
          <p className="text-gray-600 mb-4">
            We provide our services through:
          </p>
          <ul className="list-disc list-inside text-gray-600 pl-4">
            <li>Direct online consultation</li>
            <li>Remote support</li>
            <li>Digital communication channels</li>
            <li>Software Products and Services</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How We Connect
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-2">
              We offer services through:
            </p>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Email: saraswateinfotech@gmail.com</li>
              <li>Phone: +91 95889 43248</li>
              <li>Online platforms</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Customer Support
          </h2>
          <p className="text-gray-600">
            If you have any questions about our service delivery, please contact us directly.
          </p>
        </section>

        <p className="text-center text-gray-500 mt-8">
          <strong>Last Updated:</strong> November 2024
        </p>
      </div>
    </div>
  );
}