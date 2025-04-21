import React from "react";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaGraduationCap,
  FaUsers,
  FaFlask,
  FaUmbrellaBeach,
} from "react-icons/fa";

const InterviewTips = () => {
  const iconColor = "#1f2937"; // Tailwind's text-gray-800
  const tips = [
    {
      title: "Competitive Salaries",
      icon: <FaMoneyBillWave size={40} color={iconColor} />,
      description:
        "We offer industry-leading compensation packages to attract and retain top talent.",
    },
    {
      title: "Annual Increment",
      icon: <FaChartLine size={40} color={iconColor} />,
      description:
        "Regular salary increases that recognize your growing contributions and expertise.",
    },
    {
      title: "Individual Training and Development",
      icon: <FaGraduationCap size={40} color={iconColor} />,
      description:
        "Personalized learning opportunities to help you expand your skills and advance your career.",
    },
    {
      title: "Cross-Team Project Opportunities",
      icon: <FaUsers size={40} color={iconColor} />,
      description:
        "Collaborate across departments to broaden your experience and build company-wide relationships.",
    },
    {
      title: "Experimental Project Funding",
      icon: <FaFlask size={40} color={iconColor} />,
      description:
        "Resources to explore innovative ideas that could shape our future direction.",
    },
    {
      title: "Generous Paid Time Off",
      icon: <FaUmbrellaBeach size={40} color={iconColor} />,
      description:
        "Ample vacation time to rest, recharge, and maintain a healthy work-life balance.",
    },
  ];

  return (
    <div className="w-full py-12 md:py-20 px-4 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-gray-800 text-4xl font-medium">
            More Than{" "}
            <span className="underline decoration-gray-800 decoration-2 underline-offset-8">
              Just Work
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flip-card h-64 w-full perspective-1000 rounded-sm"
            >
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full bg-gray-100 border border-gray-200 rounded p-8 flex flex-col items-center justify-center text-center backface-hidden">
                  <p className="text-gray-800 mb-6 text-lg font-medium">
                    {tip.title}
                  </p>
                  <div className="flex items-center justify-center">
                    {tip.icon}
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full bg-gray-100 border border-gray-200 rounded p-8 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180">
                  <p className="text-gray-800 text-lg">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for the flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default InterviewTips;
