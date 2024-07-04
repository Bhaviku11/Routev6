import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LeafletMap from "../components/LeafletMap";

function RouteCreation() {
  return (
    <>
      <BreadcrumbsItem to="/route-creation">Route Creation</BreadcrumbsItem>

      <div className="min-w-full">
        <div className="pb-4 flex justify-between">
          <h3 className="text-3xl font-bold">Route Creation</h3>
          <div>
            <button className="bg-[#04C139] text-white px-6 py-1 rounded-xl">
              ADD
            </button>
            <button className="bg-[#549DCD] text-white px-6 py-1 ml-4 rounded-xl">
              VIEW
            </button>
            <button className="bg-[#F70000] text-white px-6 py-1 ml-4 rounded-xl">
              DELETE
            </button>
          </div>
        </div>
        <div className="min-w-full overflow-auto py-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-center text-nowrap whitespace-nowrap text-xs font-medium text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-3 tracking-wider">Route ID</th>
                <th className="px-6 py-3 tracking-wider">Driver</th>
                <th className="px-6 py-3 tracking-wider">Truck</th>
                <th className="px-6 py-3 tracking-wider">Starting Point</th>
                <th className="px-6 py-3 tracking-wider">Destination</th>
                <th className="px-6 py-3 tracking-wider">Stops</th>
                <th className="px-6 py-3 tracking-wider">Estimated Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">Ryan Jackson</td>
                <td className="px-6 py-4 whitespace-nowrap">Ford F-150</td>
                <td className="px-6 py-4 whitespace-nowrap">Toronto, ON</td>
                <td className="px-6 py-4 whitespace-nowrap">Ottawa, ON</td>
                <td className="px-6 py-4 whitespace-nowrap">Kingston, ON</td>
                <td className="px-6 py-4 whitespace-nowrap">4 Hours</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">Bob Ryan</td>
                <td className="px-6 py-4 whitespace-nowrap">Volvo FH16</td>
                <td className="px-6 py-4 whitespace-nowrap">Vancouver, BC</td>
                <td className="px-6 py-4 whitespace-nowrap">Calgary, AB</td>
                <td className="px-6 py-4 whitespace-nowrap">Kamloops, BC</td>
                <td className="px-6 py-4 whitespace-nowrap">10 Hours</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">3</td>
                <td className="px-6 py-4 whitespace-nowrap">Lee Wong</td>
                <td className="px-6 py-4 whitespace-nowrap">Scania R450</td>
                <td className="px-6 py-4 whitespace-nowrap">Montreal, QC</td>
                <td className="px-6 py-4 whitespace-nowrap">Quebec, QC</td>
                <td className="px-6 py-4 whitespace-nowrap">Trois, QC</td>
                <td className="px-6 py-4 whitespace-nowrap">3 Hours</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap">4</td>
                <td className="px-6 py-4 whitespace-nowrap">Charles Xavier</td>
                <td className="px-6 py-4 whitespace-nowrap">MAN TGX</td>
                <td className="px-6 py-4 whitespace-nowrap">Edmonton, AB</td>
                <td className="px-6 py-4 whitespace-nowrap">Saskatoon, SK</td>
                <td className="px-6 py-4 whitespace-nowrap">Lloyd, SK</td>
                <td className="px-6 py-4 whitespace-nowrap">5 Hours</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">5</td>
                <td className="px-6 py-4 whitespace-nowrap">Peter Edward</td>
                <td className="px-6 py-4 whitespace-nowrap">GMC Sierra</td>
                <td className="px-6 py-4 whitespace-nowrap">Moncton, NB</td>
                <td className="px-6 py-4 whitespace-nowrap">Halifax, NC</td>
                <td className="px-6 py-4 whitespace-nowrap">Bronx, PE</td>
                <td className="px-6 py-4 whitespace-nowrap">6 Hours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-4">
          <div className="rounded-xl overflow-hidden">
            <LeafletMap />
          </div>
        </div>
        <div className="text-[#fff] font-bold text-xl py-4 flex justify-center gap-4">
          <button type="button" className="rounded-2xl px-6 py-4 bg-[#0062A5]">
            Optimize Route
          </button>
          <button
            type="button"
            className="rounded-2xl px-6 py-4 bg-[#00000080]"
          >
            Alternate Route
          </button>
        </div>
      </div>
    </>
  );
}

export default RouteCreation;
