"use client";
import React, { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";
import { jobDetails } from "./jobData";

// Helper function to parse experience string into min/max
const parseExperience = (exp) => {
  if (exp.includes("+")) {
    const min = parseInt(exp, 10);
    return { min, max: Infinity };
  }
  const [min, max] = exp.split("-").map((s) => parseInt(s.trim(), 10));
  return { min, max };
};

const JobSearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExp, setSelectedExp] = useState([]);

  // Define fixed experience ranges
  const experienceRanges = [
    { range: "0-2 years", min: 0, max: 2 },
    { range: "3-5 years", min: 3, max: 5 },
    { range: "5+ years", min: 6, max: Infinity },
  ];

  // Build counts for each experience range
  const experiences = useMemo(() => {
    return experienceRanges.map(({ range, min: filterMin, max: filterMax }) => {
      const count = jobDetails.reduce((acc, job) => {
        const { min: jobMin, max: jobMax } = parseExperience(job.experience);
        // Check if job range intersects with filter range
        const intersects = jobMin <= filterMax && jobMax >= filterMin;
        return acc + (intersects ? 1 : 0);
      }, 0);
      return { range, count };
    });
  }, []);

  // Filter logic
  const filteredJobs = useMemo(() => {
    return jobDetails.filter((job) => {
      const matchesSearch =
        job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.jobSummary.toLowerCase().includes(searchQuery.toLowerCase());
      const { min: jobMin, max: jobMax } = parseExperience(job.experience);
      const matchesExp =
        selectedExp.length === 0 ||
        selectedExp.some((expRange) => {
          const { min: filterMin, max: filterMax } = experienceRanges.find(
            (r) => r.range === expRange
          );
          return jobMin <= filterMax && jobMax >= filterMin;
        });
      return matchesSearch && matchesExp;
    });
  }, [searchQuery, selectedExp]);

  const toggleExp = (range) => {
    setSelectedExp((prev) =>
      prev.includes(range) ? prev.filter((e) => e !== range) : [...prev, range]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Search Bar */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-14 px-4 shadow-lg relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-white text-3xl font-bold mb-2">
              Find Your Perfect Role
            </h1>
            <p className="text-blue-200 text-lg">
              Discover opportunities that match your skills and experience
            </p>
          </div>
          <div className="flex rounded-lg overflow-hidden shadow-lg">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Job Title or Keywords"
                className="w-full h-14 pl-12 pr-4 text-gray-500 caret-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                className="absolute left-4 top-4 text-slate-400"
                size={24}
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-4 transition-colors duration-200">
              Find Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Listings & Filter */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Experience Filter */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-slate-800 font-bold mb-4 text-lg">
                FILTER BY EXPERIENCE
              </h3>
              <div className="space-y-3">
                {experiences.map(({ range, count }) => (
                  <label
                    key={range}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedExp.includes(range)}
                        onChange={() => toggleExp(range)}
                        className="rounded text-blue-500 mr-3 focus:ring-blue-500"
                      />
                      <span className="text-slate-600">{range}</span>
                    </div>
                    <span className="text-slate-400 text-sm">{count}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="w-full md:w-3/4">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              {filteredJobs.length} Jobs Found
            </h2>
            <div className="space-y-6">
              {filteredJobs.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-blue-500"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-xl font-bold text-slate-800">
                            {job.role}
                          </h3>
                          <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {job.experience}
                          </span>
                        </div>
                        <div className="mt-2 text-slate-500">
                          <MapPin size={16} className="inline mr-1" />
                          <span>{job.location}</span>
                          <span className="mx-2">•</span>
                          <Briefcase size={16} className="inline mr-1" />
                          <span>{job.employment}</span>
                        </div>
                      </div>
                      <Link
                        href={`/career/opportunities/${idx}`}
                        className="mt-4 md:mt-0"
                      >
                        <button className="flex items-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors">
                          I'm interested
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                      </Link>
                    </div>
                    <p className="text-slate-600">{job.jobSummary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchComponent;