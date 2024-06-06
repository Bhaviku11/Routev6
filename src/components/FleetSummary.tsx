import React from "react";

const FleetSummary = () => {
    return (
        <div className="mt-4 flex  items-center">
            <div className="w-2/3 bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 text-center border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Summary Card
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Metric
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Total Trucks
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">50</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Total number of trucks
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Available Trucks
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">30</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Trucks currently available
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Trucks in Use
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">15</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Trucks currently in use
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Trucks in Maintenance
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">5</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Trucks under maintenance
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Total Drivers
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">60</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Total number of drivers
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Active Drivers
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">45</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                Drivers currently active
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FleetSummary;
