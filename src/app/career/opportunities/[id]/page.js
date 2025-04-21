// components/JobDetailPage.jsx
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Send } from 'lucide-react';
import { jobDetails } from '../jobData';
import Link from 'next/link';

export default function JobDetailPage() {
  const { id } = useParams();
  const idx = parseInt(id || '', 10);
  const job = jobDetails[idx];

  if (!job) {
    return (
      <div className="py-20 text-center text-gray-500">
        Job not found
      </div>
    );
  }

  const leftOverview = [
    ['Job Type', job.employment],
    ['Job Industry', 'Software & Web Development'],
    ['Qualification', job.qualification],
    ['Expiry Date', '24 Oct, 24'],
    ['Marital Status', 'No Preference'],
    ['Nationality', job.nationality || ''],
  ];

  const rightOverview = [
    ['Experience', job.experience],
    ['Posted Date', '29 Sep, 24'],
    ['Functional Area', 'Project Management'],
    ['Driving License', 'Not Required'],
    ['Residency', 'India'],
    ['Gender', 'No Preference'],
  ];

  const renderItem = (label, value) => (
    <div className="flex items-start gap-2">
      <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mt-1" />
      <div>
        <p className="text-gray-900 font-medium">{label}</p>
        <p className="text-gray-700">{value}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Full-width banner */}
      <div className="w-full bg-blue-900 text-white mt-12">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-8 px-6">
          <h1 className="text-3xl font-semibold">{job.role}</h1>
          <Link href={`/career/opportunities/${idx}/apply`} className="bg-white text-blue-900 py-3 px-5 rounded-lg flex items-center gap-2 shadow hover:bg-gray-100 transition">
            <Send size={18} /> Apply to this Job
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Job Description (60%) on lg+, full width on smaller */}
          <div className="lg:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-4 border-b pb-2">
                ℹ️ <span>Job Description</span>
              </h2>

              <h3 className="text-xl font-bold text-gray-800 mb-2">Job Summary:</h3>
              <p className="text-gray-700 mb-4">{job.jobSummary}</p>

              <h3 className="text-xl font-bold text-gray-800 mb-2">Key Responsibilities:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                {job.keyResponsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-2">Qualifications:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.qualifications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job Overview (40%) on lg+, full width on smaller */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-4 border-b pb-2">
                🗂️ <span>Job Overview</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-3">
                  {leftOverview.map(([label, value], i) => (
                    <React.Fragment key={i}>
                      {renderItem(label, value)}
                    </React.Fragment>
                  ))}
                </div>
                <div className="space-y-3">
                  {rightOverview.map(([label, value], i) => (
                    <React.Fragment key={i}>
                      {renderItem(label, value)}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
