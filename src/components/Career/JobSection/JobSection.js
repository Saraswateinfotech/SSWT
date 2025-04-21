import React, { useState } from 'react';
import { Search, Briefcase, Sparkles, SendHorizontal } from 'lucide-react';
import Link from 'next/link';

const JobPortfolioSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Simplified Job Search Section */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-blue-600 h-6 w-6" />
              <h2 className="text-2xl font-bold text-gray-800">Find Your Dream Job</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Discover opportunities that match your skills and aspirations. We have positions for all experience levels.
            </p>
            <Link href="/career/opportunities">
              <button className="w-48 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Search className="h-5 w-5" />
                Search Jobs
              </button>
            </Link>
          </div>

          {/* Portfolio Section */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            {/* Animated background */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_100%)]"
              style={{
                backgroundSize: isHovered ? '120% 120%' : '100% 100%',
                transition: 'all 0.7s ease-out',
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-yellow-300 h-6 w-6" />
                <h2 className="text-2xl font-bold">Have Something in Mind?</h2>
              </div>
              <p className="text-indigo-100 mb-8 text-lg">
                Share your portfolio with us and let your creativity shine. We're always on the lookout for talented individuals to join our team.
              </p>

              {/* Link wraps an anchor (<a>) automatically */}
              <div
                className="relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link
                  href="/career/network"
                  className="w-full bg-white text-indigo-700 hover:bg-indigo-50 font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group-hover:pl-4 group-hover:pr-8"
                >
                  <SendHorizontal className="h-5 w-5" />
                  Submit Your Portfolio
                </Link>
                <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-300 opacity-30 blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-300 opacity-30 blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortfolioSection;
