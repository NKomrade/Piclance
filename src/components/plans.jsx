import React, { useState } from 'react';

const Plans = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: 'Starter',
      price: isMonthly ? 10 : 100,
      description: 'Perfect for getting started with our basic features.',
      features: [
        'Unlimited Customers',
        'Analytical reports',
        'Chat Support',
        'Unlimited Emails',
        'SEO Support'
      ]
    },
    {
      name: 'Intro',
      price: isMonthly ? 19 : 190,
      description: 'Great for growing teams ready to do more.',
      features: [
        'Unlimited Customers',
        'Analytical reports',
        'Chat Support',
        'Unlimited Emails',
        'SEO Support'
      ]
    },
    {
      name: 'Popular',
      price: isMonthly ? 45 : 450,
      description: 'Advanced features for scaling your business.',
      features: [
        'Unlimited Customers',
        'Analytical reports',
        'Chat Support',
        'Unlimited Emails',
        'SEO Support'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: isMonthly ? 90 : 900,
      description: 'Ultimate features for large-scale operations.',
      features: [
        'Unlimited Customers',
        'Analytical reports',
        'Chat Support',
        'Unlimited Emails',
        'SEO Support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 p-[50px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
            Select Your Perfect Plan
          </h2>
          <p className="text-gray-400 text-lg">
            Unlock your potential with our powerful solutions
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                isMonthly 
                  ? 'bg-gray-800 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                !isMonthly 
                  ? 'bg-gray-800 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] ${
                plan.highlight
                  ? 'bg-gray-800 text-white shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                  : 'bg-gray-800/50 text-gray-100'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ${plan.price}
                </span>
                <span className="text-gray-400">/{isMonthly ? 'month' : 'year'}</span>
              </div>
              <p className="text-gray-400 mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 mr-3 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 
                  ${plan.highlight
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                  }
                  transform hover:scale-105 hover:shadow-lg`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        {/* Savings Note */}
        {!isMonthly && (
          <div className="text-center mt-8">
            <p className="text-blue-400 font-medium text-lg animate-pulse">
              Save up to 20% with yearly billing!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;