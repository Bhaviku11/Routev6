import { ReactComponent as ArrowLeftIcon } from "../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";

const Trucks = () => {
  return (
    <>
      <div className="w-full mt-4 flex justify-between">
        <div className="w-2/3 bg-white shadow-md rounded-lg">
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Manage Trucks
            </h2>
            <div className="overflow-scroll">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="text-[#00000080]">
                  <tr>
                    <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Truck ID
                    </th>
                    <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      License Plate
                    </th>
                    <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Model
                    </th>
                    <th className="text-nowrap whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Capacity
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
                    <td className="px-4 py-1.5 whitespace-nowrap">
                      ABC123
                    </td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Ford F-150</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">10 Tons</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Available</td>
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
                    <td className="px-4 py-1.5 whitespace-nowrap">
                      ABC123
                    </td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Ford F-150</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">10 Tons</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Available</td>
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
                    <td className="px-4 py-1.5 whitespace-nowrap">
                      ABC123
                    </td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Ford F-150</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">10 Tons</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Available</td>
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
                    <td className="px-4 py-1.5 whitespace-nowrap">DEF456</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Volvo FH16</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">12 Tons</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">In Use</td>
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
                    <td className="px-4 py-1.5 whitespace-nowrap">DEF456</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Volvo FH16</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">12 Tons</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">In Use</td>
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
                    <td className="px-4 py-1.5 whitespace-nowrap">DEF456</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">Volvo FH16</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">12 Tons</td>
                    <td className="px-4 py-1.5 whitespace-nowrap">In Use</td>
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
          New Truck
          </h2>
          <div className="flex flex-col gap-3 text-[#000]">
            <div className="flex flex-col px-3 py-1 rounded-lg bg-[#BAA7ED33] border-[2px] border-[#B3B5BF] font-bold">
              <label
                htmlFor="license"
                className="text-[#0062A5] text-sm drop-shadow-[0px_4px_4px_0px_#00000040]"
              >
                License Plate
              </label>
              <input
                type="text"
                className="bg-transparent outline-none text-lg"
                name="license"
                placeholder="STUV910"
                id="license"
              />
            </div>
            <div className="flex flex-col px-3 py-1 rounded-lg bg-[#BAA7ED33] border-[2px] border-[#B3B5BF] font-bold">
              <label
                htmlFor="model"
                className="text-[#0062A5] text-sm drop-shadow-[0px_4px_4px_0px_#00000040]"
              >
                Model
              </label>
              <input
                type="text"
                className="bg-transparent outline-none text-lg"
                name="model"
                placeholder="GMC SIERRA"
                id="model"
              />
            </div>
            <div className="flex flex-col px-3 py-1 rounded-lg bg-[#BAA7ED33] border-[2px] border-[#B3B5BF] font-bold">
              <label
                htmlFor="capacity"
                className="text-[#0062A5] text-sm drop-shadow-[0px_4px_4px_0px_#00000040]"
              >
                Capacity
              </label>
              <input
                type="text"
                className="bg-transparent outline-none text-lg"
                name="capacity"
                placeholder="15 Tons"
                id="capacity"
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
                placeholder="Available"
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
    </>
  );
};

export default Trucks;
