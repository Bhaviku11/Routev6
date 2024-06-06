import { ReactComponent as ArrowLeftIcon } from "../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";

const ManageDrivers = () => {
  return (
    <div className="w-full mt-4 flex justify-between">
      <div className="w-2/3 bg-white shadow-md rounded-lg">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Manage Drivers
          </h2>
          <div className="overflow-scroll">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="text-[#00000080]">
                <tr>
                  <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Driver ID
                  </th>
                  <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    License Number
                  </th>
                  <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="font-bold bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-1.5 whitespace-nowrap">1</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Ryan Jackson</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">ABCD1234</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">555-1234</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Active</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">
                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded-xl mr-2">
                      EDIT
                    </button>
                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded-xl">
                      DELETE
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-1.5 whitespace-nowrap">1</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Ryan Jackson</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">ABCD1234</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">555-1234</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Active</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">
                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded-xl mr-2">
                      EDIT
                    </button>
                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded-xl">
                      DELETE
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-1.5 whitespace-nowrap">1</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Ryan Jackson</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">ABCD1234</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">555-1234</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Active</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">
                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded-xl mr-2">
                      EDIT
                    </button>
                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded-xl">
                      DELETE
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-1.5 whitespace-nowrap">2</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Bob Ryan</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">EFGH5678</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">555-5678</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">On Leave</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">
                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded-xl mr-2">
                      EDIT
                    </button>
                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded-xl">
                      DELETE
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-1.5 whitespace-nowrap">2</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Bob Ryan</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">EFGH5678</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">555-5678</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">On Leave</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">
                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded-xl mr-2">
                      EDIT
                    </button>
                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded-xl">
                      DELETE
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-1.5 whitespace-nowrap">2</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">Bob Ryan</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">EFGH5678</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">555-5678</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">On Leave</td>
                  <td className="px-4 py-1.5 whitespace-nowrap">
                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded-xl mr-2">
                      EDIT
                    </button>
                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded-xl">
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end items-center gap-8 mt-4">
            <span className="text-sm text-gray-600">06 of 20</span>
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-gray-900 mx-1">
                <ArrowLeftIcon fill="#171717" fillOpacity={0.75} />
              </button>
              <button className="text-gray-600 hover:text-gray-900 mx-1">
                <ArrowRightIcon fill="#171717" fillOpacity={0.75} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <form className="w-1/3 bg-white shadow-md rounded-lg overflow-hidden p-6 ml-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          New Driver
        </h2>
        <div className="flex flex-col gap-3 text-[#000]">
          <div className="flex flex-col px-3 py-1 rounded-lg bg-[#BAA7ED33] border-[2px] border-[#B3B5BF] font-bold">
            <label
              htmlFor="route_name"
              className="text-[#0062A5] text-sm drop-shadow-[0px_4px_4px_0px_#00000040]"
            >
              Name
            </label>
            <input
              type="text"
              className="bg-transparent outline-none text-lg"
              name="route_name"
              placeholder="John Jaynen"
              id="route_name"
            />
          </div>
          <div className="flex flex-col px-3 py-1 rounded-lg bg-[#BAA7ED33] border-[2px] border-[#B3B5BF] font-bold">
            <label
              htmlFor="license"
              className="text-[#0062A5] text-sm drop-shadow-[0px_4px_4px_0px_#00000040]"
            >
              License Number
            </label>
            <input
              type="text"
              className="bg-transparent outline-none text-lg"
              name="license"
              placeholder="YZAB9876"
              id="license"
            />
          </div>
          <div className="flex flex-col px-3 py-1 rounded-lg bg-[#BAA7ED33] border-[2px] border-[#B3B5BF] font-bold">
            <label
              htmlFor="phone"
              className="text-[#0062A5] text-sm drop-shadow-[0px_4px_4px_0px_#00000040]"
            >
              Phone Number
            </label>
            <input
              type="text"
              className="bg-transparent outline-none text-lg"
              name="phone"
              placeholder="555-9848"
              id="phone"
            />
          </div>
          <div className="flex flex-col px-3 py-1 rounded-lg bg-[#BAA7ED33] border-[2px] border-[#B3B5BF] font-bold">
            <label
              htmlFor="status"
              className="text-[#0062A5] text-sm drop-shadow-[0px_4px_4px_0px_#00000040]"
            >
              Status
            </label>
            <input
              type="text"
              className="bg-transparent outline-none text-lg"
              name="status"
              placeholder="In Training"
              id="status"
            />
          </div>
        </div>
        <div className="text-center pt-4">
          <button className="bg-[#04C139] text-white font-bold py-1.5 px-6 rounded-xl focus:outline-none focus:shadow-outline">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageDrivers;
