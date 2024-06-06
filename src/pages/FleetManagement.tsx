import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import FleetSummary from "../components/FleetSummary";
import ManageDrivers from "../components/ManageDrivers";
import Trucks from "../components/ManageTrucks";

function FleedManagement() {
  return (
    <>
      <BreadcrumbsItem to="/fleet-management">Fleet Management</BreadcrumbsItem>

      <div>
        <div className="pb-3 flex justify-between">
          <h3 className="text-3xl font-bold">Fleet Management</h3>
        </div>
        <div>
          <button
            className="text-white px-6 py-1 rounded-xl"
            style={{
              background:
                "linear-gradient(256.6deg, #8F00FF 65.7%, #550099 77.48%)",
            }}
          >
            Drivers
          </button>
          <ManageDrivers />
        </div>

        <div className="mt-8">
          <button
            className="text-white px-6 py-1 rounded-xl"
            style={{
              background:
                "linear-gradient(256.6deg, #8F00FF 65.7%, #550099 77.48%)",
            }}
          >
            Trucks
          </button>
          <Trucks />
        </div>

        <div className="mt-8">
          <button
            className="text-white px-6 py-1 rounded-xl"
            style={{
              background:
                "linear-gradient(256.6deg, #8F00FF 65.7%, #550099 77.48%)",
            }}
          >
            Fleet Summary
          </button>
          <FleetSummary />
        </div>
      </div>
    </>
  );
}

export default FleedManagement;
