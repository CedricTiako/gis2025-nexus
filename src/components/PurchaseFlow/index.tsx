import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CreditCard, Calendar, Mail, Check } from 'lucide-react';

type Step = 'tickets' | 'details' | 'payment' | 'confirmation';

interface Ticket {
  id: string;
  type: string;
  price: number;
  quantity: number;
}

const PurchaseFlow = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<Step>('tickets');
  const [selectedTickets, setSelectedTickets] = useState<Ticket[]>([
    { id: 'fully-funded', type: 'FULLY FUNDED', price: 15.99, quantity: 0 },
    { id: 'invitation', type: 'OFFICIAL INVITATION LETTER', price: 99, quantity: 0 },
    { id: 'access', type: 'SUMMIT ACCESS PASS', price: 399, quantity: 0 },
    { id: 'self-funded', type: 'SELF FUNDED', price: 649, quantity: 0 },
  ]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleQuantityChange = (ticketId: string, change: number) => {
    setSelectedTickets(tickets =>
      tickets.map(ticket =>
        ticket.id === ticketId
          ? { ...ticket, quantity: Math.max(0, ticket.quantity + change) }
          : ticket
      )
    );
  };

  const totalAmount = selectedTickets.reduce(
    (sum, ticket) => sum + ticket.price * ticket.quantity,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    switch (currentStep) {
      case 'tickets':
        if (totalAmount > 0) setCurrentStep('details');
        break;
      case 'details':
        if (formData.firstName && formData.lastName && formData.email) {
          setCurrentStep('payment');
        }
        break;
      case 'payment':
        if (formData.cardNumber && formData.expiryDate && formData.cvv) {
          setCurrentStep('confirmation');
        }
        break;
      default:
        break;
    }
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      {['tickets', 'details', 'payment', 'confirmation'].map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === step
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
          {index < 3 && (
            <div className="w-12 h-1 mx-2 bg-gray-200">
              <div
                className={`h-full bg-blue-600 transition-all ${
                  ['tickets', 'details', 'payment', 'confirmation'].indexOf(currentStep) > index
                    ? 'w-full'
                    : 'w-0'
                }`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderTicketSelection = () => (
    <div className="space-y-4">
      {selectedTickets.map(ticket => (
        <div
          key={ticket.id}
          className="flex items-center justify-between p-4 border rounded-lg"
        >
          <div>
            <h3 className="font-semibold">{ticket.type}</h3>
            <p className="text-gray-600">${ticket.price}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleQuantityChange(ticket.id, -1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              disabled={ticket.quantity === 0}
            >
              -
            </button>
            <span>{ticket.quantity}</span>
            <button
              onClick={() => handleQuantityChange(ticket.id, 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPersonalDetails = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Organization</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <div className="mt-1 relative">
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-10"
            placeholder="1234 5678 9012 3456"
          />
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <div className="mt-1 relative">
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-10"
              placeholder="MM/YY"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="123"
          />
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">Purchase Confirmed!</h3>
      <p className="text-gray-600">
        Thank you for your purchase. You will receive a confirmation email shortly.
      </p>
      <div className="mt-8">
        <h4 className="font-semibold mb-2">Order Summary</h4>
        {selectedTickets
          .filter(ticket => ticket.quantity > 0)
          .map(ticket => (
            <div key={ticket.id} className="flex justify-between text-gray-600">
              <span>{ticket.type} x{ticket.quantity}</span>
              <span>${(ticket.price * ticket.quantity).toFixed(2)}</span>
            </div>
          ))}
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      {renderStepIndicator()}
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        {currentStep === 'tickets' && renderTicketSelection()}
        {currentStep === 'details' && renderPersonalDetails()}
        {currentStep === 'payment' && renderPayment()}
        {currentStep === 'confirmation' && renderConfirmation()}
        
        {currentStep !== 'confirmation' && (
          <div className="mt-8 flex justify-between">
            {currentStep !== 'tickets' && (
              <button
                onClick={() => setCurrentStep(prev => {
                  switch (prev) {
                    case 'details': return 'tickets';
                    case 'payment': return 'details';
                    default: return prev;
                  }
                })}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ml-auto"
            >
              {currentStep === 'payment' ? 'Confirm Purchase' : 'Continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseFlow;