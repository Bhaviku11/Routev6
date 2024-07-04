import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

function LoadingSheet() {
  return (
    <>
      <BreadcrumbsItem to="/loading-sheets">Loading Sheets</BreadcrumbsItem>

      <div className="grow">
        <div className="pb-3 flex justify-between">
          <h3 className="text-3xl font-bold">Loading Sheets</h3>
          <div>
            <button className="bg-[#04C139] text-white px-6 py-1 rounded-xl">
              ADD
            </button>
            <button className="bg-[#549DCD] text-white px-6 py-1 ml-4 rounded-xl">
              VIEW
            </button>
          </div>
        </div>
        <div className="min-w-full">
          <button
            className="text-white px-6 py-1 rounded-xl"
            style={{
              background:
                "linear-gradient(256.6deg, #8F00FF 65.7%, #550099 77.48%)",
            }}
          >
            Order Details
          </button>
          <div className="overflow-auto min-w-full rounded-xl mt-4">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/12 px-4 py-2 text-start">ID</th>
                  <th className="w-2/12 px-4 py-2 text-start">Customer Name</th>
                  <th className="w-3/12 px-4 py-2 text-start">
                    Delivery Address
                  </th>
                  <th className="w-1/12 px-4 py-2 text-start">Quantity</th>
                  <th className="w-1/12 px-4 py-2 text-start">Priority</th>
                  <th className="w-2/12 px-4 py-2 text-start">Delivery Date</th>
                  <th className="w-2/12 px-4 py-2 text-start">Instructions</th>
                  <th className="w-1/12 px-4 py-2 text-start">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 border-b">
                  <td className="px-4 py-2">12345</td>
                  <td className="px-4 py-2">Jaynen Reibling</td>
                  <td className="px-4 py-2">123 King St, Toronto, ON</td>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">High</td>
                  <td className="px-4 py-2">2024-06-05</td>
                  <td className="px-4 py-2">Handle with care</td>
                  <td className="px-4 py-2 text-yellow-500 font-semibold">
                    Pending
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-4 py-2">67890</td>
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">456 Queen St, Vancouver, BC</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">Medium</td>
                  <td className="px-4 py-2">2024-06-06</td>
                  <td className="px-4 py-2">Leave at front door</td>
                  <td className="px-4 py-2 text-blue-500 font-semibold">
                    Scheduled
                  </td>
                </tr>
                <tr className="bg-gray-100 border-b">
                  <td className="px-4 py-2">89067</td>
                  <td className="px-4 py-2">Sachin Shah</td>
                  <td className="px-4 py-2">789 Bloor St, Ottawa, ON</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">High</td>
                  <td className="px-4 py-2">2024-06-07</td>
                  <td className="px-4 py-2">Assemble on delivery</td>
                  <td className="px-4 py-2 text-orange-500 font-semibold">
                    In Progress
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2">81256</td>
                  <td className="px-4 py-2">Shiva Shankar</td>
                  <td className="px-4 py-2">101 Main St, Calgary, AB</td>
                  <td className="px-4 py-2">20</td>
                  <td className="px-4 py-2">Low</td>
                  <td className="px-4 py-2">2024-06-08</td>
                  <td className="px-4 py-2">Ring bell once</td>
                  <td className="px-4 py-2 text-green-500 font-semibold">
                    Delivered
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="my-8">
          <button
            className="text-white px-6 py-1 rounded-xl"
            style={{
              background:
                "linear-gradient(256.6deg, #8F00FF 65.7%, #550099 77.48%)",
            }}
          >
            Truck Assignments
          </button>
          <div className="my-4">
            <div className="px-10">
              <select
                className="px-6 py-2 rounded-lg "
                style={{
                  background:
                    "linear-gradient(90deg, rgba(138, 187, 221, 0.144) 0%, rgba(74, 101, 119, 0.288) 100%)",
                }}
              >
                <option>Select Truck</option>
                <option>Select AA</option>
                <option>Select BB</option>
              </select>

              <select
                className="px-6 py-2 rounded-lg mx-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(138, 187, 221, 0.144) 0%, rgba(74, 101, 119, 0.288) 100%)",
                }}
              >
                <option>Select Driver</option>
                <option>Select AA</option>
                <option>Select BB</option>
              </select>

              <button className="bg-[#4500FF] text-white px-6 py-1 rounded-xl">
                Assign
              </button>
            </div>

            <div className="px-10 flex items-center">
              <div className="mr-4 flex flex-col items-center">
                <div className="mt-8 w-full">Special instructions</div>
                <textarea rows={6} cols={50} className="mt-2"></textarea>

                <button className="bg-[#4500FF] text-white px-6 py-1 rounded-xl mt-4">
                  Submit
                </button>
              </div>

              <div className="mr-4 mt-6 ">or</div>

              <div className="mr-4 flex flex-col items-center">
                <p className="mt-8 w-full">Upload Files</p>
                <div className="mt-2 flex flex-col border-[3px] border-dashed border-[#00000080] justify-center items-center px-16 py-4 rounded-lg bg-[#fff]">
                  <div className="rounded-full border-[3px] w-[80px] h-[80px] flex justify-center items-center border-dashed border-[#00000080]">
                    +
                  </div>
                  <div>Drop files here</div>
                </div>
                <button className="bg-[#4500FF] text-white px-6 py-1 rounded-xl mt-4">
                  Upload
                </button>
              </div>
            </div>

            <div className="px-10 mt-10 flex ">
              <input type="radio" className="mx-2" name="radio1" />
              <label className="mr-8">Fragile</label>

              <input type="radio" className="mx-2" name="radio1" />
              <label className="mr-8">Perishable</label>
            </div>
          </div>
        </div>

        <div>
          <button
            className="text-white px-6 py-1 rounded-xl"
            style={{
              background:
                "linear-gradient(256.6deg, #8F00FF 65.7%, #550099 77.48%)",
            }}
          >
            Summary
          </button>

          <div className="mt-8 flex items-center justify-center max-w-[800px]">
            <div className="w-full  bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <div className="flex justify-between py-4 border-b">
                  <div className="text-gray-700 font-semibold">
                    Total Orders
                  </div>
                  <div className="text-gray-700 font-semibold">20</div>
                </div>
                <div className="flex justify-between py-4 border-b bg-gray-50">
                  <div className="text-gray-700 font-semibold">Total Items</div>
                  <div className="text-gray-700 font-semibold">100</div>
                </div>
                <div className="flex justify-between py-4 border-b">
                  <div className="text-gray-700 font-semibold">
                    Total Quantity
                  </div>
                  <div className="text-gray-700 font-semibold">150</div>
                </div>
                <div className="flex justify-between py-4 border-b bg-gray-50">
                  <div className="text-gray-700 font-semibold">
                    High Priority
                  </div>
                  <div className="text-gray-700 font-semibold">45</div>
                </div>
                <div className="flex justify-between py-4">
                  <div className="text-gray-700 font-semibold">
                    Pending Orders
                  </div>
                  <div className="text-gray-700 font-semibold">68</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingSheet;
