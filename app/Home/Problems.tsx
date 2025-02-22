"use client";

import { FaEyeSlash, FaClock, FaStar, FaWrench, FaCommentAlt, FaDollarSign } from "react-icons/fa";

type Problem = {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
};

const problems: Problem[] = [
  {
    icon: FaEyeSlash,
    color: "from-blue-500 to-indigo-500",
    title: "Struggling to find skilled editors for your projects?",
    description: "Access to Professional Editors",
  },
  {
    icon: FaClock,
    color: "from-purple-500 to-pink-500",
    title: "Spending too much time editing instead of focusing on core tasks?",
    description: "Proficient Editing Process",
  },
  {
    icon: FaStar,
    color: "from-pink-500 to-rose-500",
    title: "Uncertain about the quality and consistency of your edits?",
    description: "Consistent Quality and Reliability",
  },
  {
    icon: FaWrench,
    color: "from-orange-500 to-red-500",
    title: "Lacking the necessary tools and expertise for professional editing?",
    description: "Best Tools and Expertise",
  },
  {
    icon: FaCommentAlt,
    color: "from-amber-500 to-orange-500",
    title: "Wasting time managing content across multiple platforms?",
    description: "Organized Social Media Management",
  },
  {
    icon: FaDollarSign,
    color: "from-emerald-500 to-teal-500",
    title: "Finding professional media services too expensive?",
    description: "Budget-friendly media services.",
  },
];

const Problems: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-800 to-transparent py-20 px-4">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          How we help?
        </span>
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>
            <div className="relative h-full flex flex-col bg-zinc-900 px-8 py-10 rounded-2xl transition-all duration-300 hover:translate-y-1">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} p-4 mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                <problem.icon className="w-full h-full text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-400 group-hover:text-transparent group-hover:bg-gradient-to-r bg-clip-text transition-all duration-300 ease-out">
                  {problem.title}
                </h3>
                <p className="text-xl text-white font-medium group-hover:text-white transition-all duration-300">
                  {problem.description}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${problem.color}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;