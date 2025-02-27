import { Truck, Headphones, CreditCard, Box, Shield } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-4 bg-gray-100">
      <div className="container mx-auto text-center space-y-7">
        <h2 className="text-2xl font-semibold text-gray-900">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 ">
          <div className="flex flex-col items-center">
            <Truck size={40} className="text-green-300" />
            <h3 className="text-1xl font-medium">Delivery within 7 days</h3>
          </div>
          <div className="flex flex-col items-center">
            <Headphones size={40} className="text-blue-300" />
            <h3 className="text-1xl font-medium">24/7 Customer Support</h3>
          </div>
          <div className="flex flex-col items-center">
            <CreditCard size={40} className="text-yellow-300" />
            <h3 className="text-1xl font-medium">EasyPay Options</h3>
          </div>
          <div className="flex flex-col items-center">
            <Box size={40} className="text-orange-300" />
            <h3 className="text-1xl font-medium">Good Packing</h3>
          </div>
          <div className="flex flex-col items-center">
            <Shield size={40} className="text-red-300" />
            <h3 className="text-1xl font-medium">100% Security</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;