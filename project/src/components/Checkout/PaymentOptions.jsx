import React from 'react';
import { CreditCard, Wallet, Building2 } from 'lucide-react';

const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: CreditCard,
    description: 'Pay securely with your card'
  },
  {
    id: 'upi',
    name: 'UPI',
    icon: Wallet,
    description: 'Pay using UPI'
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    icon: Building2,
    description: 'Pay using your bank account'
  }
];

export function PaymentOptions({ selectedMethod, onSelect }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-gray-900 mb-4">Payment Method</h2>
      {paymentMethods.map((method) => (
        <label
          key={method.id}
          className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
            selectedMethod === method.id
              ? 'border-orange-500 bg-orange-50'
              : 'hover:border-gray-300'
          }`}
        >
          <input
            type="radio"
            name="payment"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={() => onSelect(method.id)}
            className="hidden"
          />
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${
              selectedMethod === method.id ? 'bg-orange-100' : 'bg-gray-100'
            }`}>
              <method.icon className={`w-6 h-6 ${
                selectedMethod === method.id ? 'text-orange-600' : 'text-gray-500'
              }`} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{method.name}</h3>
              <p className="text-sm text-gray-500">{method.description}</p>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}