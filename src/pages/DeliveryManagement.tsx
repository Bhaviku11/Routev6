import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

function DeliveryManagement() {
  return (
    <>
      <BreadcrumbsItem to="/delivery">Delivery</BreadcrumbsItem>

      <div className="grow">
        <div className="pb-3 flex justify-between">
          <h3 className="text-3xl font-bold">Delivery Management</h3>
          <div>
            <button className="bg-[#04C139] text-white px-6 py-1 rounded-xl">
              ADD DELIVERY
            </button>
            <button className="bg-[#549DCD] text-white px-6 py-1 ml-4 rounded-xl">
              EDIT DELIVERY
            </button>
            <button className="bg-[#F70000] text-white px-6 py-1 ml-4 rounded-xl">
              DELETE
            </button>
          </div>
        </div>

        <div className="flex flex-col -m-4">
          <div className="p-4 w-full min-w-full">
            <div className="overflow-auto min-w-full rounded-xl mt-4">
              <table className="min-w-full bg-white whitespace-nowrap">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-start">ID</th>
                    <th className="px-4 py-2 text-start">Customer Name</th>
                    <th className="w-3/12 px-4 py-2 text-start">
                      Delivery Address
                    </th>
                    <th className="px-4 py-2 text-start">Quantity</th>
                    <th className="px-4 py-2 text-start">Priority</th>
                    <th className="px-4 py-2 text-start">Delivery Date</th>
                    <th className="px-4 py-2 text-start">Instructions</th>
                    <th className="px-4 py-2 text-start">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100 border-b">
                    <td className="p-4">12345</td>
                    <td className="p-4">Jaynen Reibling</td>
                    <td className="p-4">123 King St, Toronto, ON</td>
                    <td className="p-4">3</td>
                    <td className="p-4">High</td>
                    <td className="p-4">2024-06-05</td>
                    <td className="p-4">Handle with care</td>
                    <td className="p-4 text-yellow-500 font-semibold">
                      Pending
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="p-4">67890</td>
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">456 Queen St, Vancouver, BC</td>
                    <td className="p-4">10</td>
                    <td className="p-4">Medium</td>
                    <td className="p-4">2024-06-06</td>
                    <td className="p-4">Leave at front door</td>
                    <td className="p-4 text-blue-500 font-semibold">
                      Scheduled
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-b">
                    <td className="p-4">89067</td>
                    <td className="p-4">Sachin Shah</td>
                    <td className="p-4">789 Bloor St, Ottawa, ON</td>
                    <td className="p-4">1</td>
                    <td className="p-4">High</td>
                    <td className="p-4">2024-06-07</td>
                    <td className="p-4">Assemble on delivery</td>
                    <td className="p-4 text-orange-500 font-semibold">
                      In Progress
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4">81256</td>
                    <td className="p-4">Shiva Shankar</td>
                    <td className="p-4">101 Main St, Calgary, AB</td>
                    <td className="p-4">20</td>
                    <td className="p-4">Low</td>
                    <td className="p-4">2024-06-08</td>
                    <td className="p-4">Ring bell once</td>
                    <td className="p-4 text-green-500 font-semibold">
                      Delivered
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center items-center -m-4 p-4">
            {/* Update Delivery Status Form */}
            <div className="w-1/2 h-full p-4">
              <div className="w-full h-full bg-white shadow-md rounded-lg overflow-hidden p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Update Delivery Status
                </h2>
                <div className="overflow-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-center">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Field
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Order ID
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">89067</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Status</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          In Transit
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Priority
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">High</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Comments
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <div className="flex justify-around py-2">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-xl">
                      SAVE
                    </button>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-xl">
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reschedule Delivery Form */}
            <div className="w-1/2 h-full p-4">
              <div className="w-full h-full bg-white shadow-md rounded-lg overflow-hidden p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Reschedule Delivery
                </h2>
                <div className="overflow-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-center">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Field
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                      <tr>
                        <td className="px-6 py-4">Order ID</td>
                        <td className="px-6 py-4">99881</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">New Delivery Date</td>
                        <td className="px-6 py-4">YYYY/MM/DD</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">New Delivery Time</td>
                        <td className="px-6 py-4">2:00 PM - 3:00 PM</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Comments</td>
                        <td className="px-6 py-4"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <div className="flex justify-around py-2">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-xl">
                      SAVE
                    </button>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-xl">
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryManagement;
