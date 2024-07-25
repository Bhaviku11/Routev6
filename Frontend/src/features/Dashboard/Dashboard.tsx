import React from 'react';
import { FaBox, FaUsers, FaMapMarkedAlt, FaHeart } from 'react-icons/fa'; // Import Font Awesome icons

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Onboarding Section */}
      <div className="text-left mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Routemaster V6</h1>
        <p className="text-gray-600">
          Routemaster V6 is your all-in-one solution for managing orders, suppliers, and routes efficiently and effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Orders Card */}
        <div className="card border rounded-lg shadow-lg p-6 flex items-center">
          <FaBox className="text-4xl text-indigo-600 mb-4" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold mb-2">Orders</h2>
            <p className="text-gray-600">
              Manage all your orders in one place, track statuses, and ensure timely delivery.
            </p>
          </div>
        </div>

        {/* Suppliers Card */}
        <div className="card border rounded-lg shadow-lg p-6 flex items-center">
          <FaUsers className="text-4xl text-indigo-600 mb-4" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold mb-2">Suppliers</h2>
            <p className="text-gray-600">
              Keep track of all your suppliers, manage contracts, and maintain strong relationships.
            </p>
          </div>
        </div>

        {/* Routes Card */}
        <div className="card border rounded-lg shadow-lg p-6 flex items-center">
          <FaMapMarkedAlt className="text-4xl text-indigo-600 mb-4" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold mb-2">Routes</h2>
            <p className="text-gray-600">
              Optimize routes for deliveries, reduce travel time, and increase efficiency.
            </p>
          </div>
        </div>

        {/* Donate Card */}
        <div className="card border rounded-lg shadow-lg p-6 flex items-center">
          <FaHeart className="text-4xl text-red-600 mb-4" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold mb-2">Donate</h2>
            <p className="text-gray-600">
              Support our cause and make a difference. Your donations help us grow and make an impact.
            </p>
            <a
              href="C:\Users\Dell\Desktop\routemasterv6\OtherPages\donation.html" target='_blank'
              className="mt-4 inline-block rounded-md bg-red-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-red-500"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
