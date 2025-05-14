import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import PurchaseFlow from './PurchaseFlow';

const RegistrationCard = ({ 
  title, 
  price, 
  originalPrice, 
  features, 
  isPopular = false,
  onSelect
}: {
  title: string;
  price: number;
  originalPrice?: number;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
    isPopular ? 'border-purple-500' : 'border-gray-100'
  } relative transform transition-all duration-300 hover:-translate-y-2`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    
    <div className="mb-6">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        {originalPrice && (
          <span className="ml-2 text-lg text-gray-500 line-through">
            ${originalPrice}
          </span>
        )}
      </div>
    </div>
    
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    
    <button 
      onClick={onSelect}
      className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200 ${
        isPopular 
          ? 'bg-purple-600 text-white hover:bg-purple-700' 
          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
      }`}
    >
      Select Package
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  </div>
);

const Registration = () => {
  const [showPurchaseFlow, setShowPurchaseFlow] = useState(false);

  const registrationOptions = [
    {
      title: 'FULLY FUNDED',
      price: 15.99,
      features: [
        'Round-trip Trip Airfare',
        'Luxury Accommodation',
        'Meals During Sessions',
        'Visa Support / Assistance',
        'Summit Toolkit & Merchandise',
        'Full Summit Access',
        'Speaking Opportunity',
        'Graduation Certificate',
        'Explore Hungarian Culture'
      ],
      isPopular: true
    },
    {
      title: 'OFFICIAL INVITATION LETTER',
      price: 99,
      originalPrice: 350,
      features: [
        'Exclusive Invitation Letter',
        'Installment Opportunity',
        'Opportunity to Upgrade',
        'Visa Support / Assistance'
      ]
    },
    {
      title: 'SUMMIT ACCESS PASS',
      price: 399,
      originalPrice: 550,
      features: [
        'Official Invitation Letter',
        'Full Summit Access',
        'Visa Support / Assistance',
        'Network with Global Leaders',
        'Summit Toolkit & Merchandise',
        'Speaking Opportunity',
        'Graduation Certificate',
        'Explore Hungarian Culture',
        'Self-Funded Upgrade option available'
      ]
    },
    {
      title: 'SELF FUNDED',
      price: 649,
      originalPrice: 999,
      features: [
        'Luxury Accommodation',
        'Meals During Sessions',
        'Visa Support / Assistance',
        'Summit Toolkit & Merchandise',
        'Full Summit Access',
        'Speaking Opportunity',
        'Graduation Certificate',
        'Explore Hungarian Culture'
      ]
    }
  ];

  if (showPurchaseFlow) {
    return <PurchaseFlow />;
  }

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
            Join Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Registration Categories
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-6"></div>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Choose the registration option that best suits your needs and embark on your leadership journey at GYLS2025.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {registrationOptions.map((option, index) => (
            <RegistrationCard
              key={index}
              title={option.title}
              price={option.price}
              originalPrice={option.originalPrice}
              features={option.features}
              isPopular={option.isPopular}
              onSelect={() => setShowPurchaseFlow(true)}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-purple-100 max-w-4xl mx-auto">
          <p className="text-gray-600 text-sm">
            <strong>Note:</strong> If you prefer to secure your visa in advance without waiting for the selection process, you can obtain an official invitation letter. This document allows you to proceed with your Schengen visa application independently, ensuring a smoother and more efficient process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;