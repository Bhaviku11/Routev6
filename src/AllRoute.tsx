import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { Route, Routes } from "react-router-dom";
import DeliveryManagement from "./pages/DeliveryManagement";
import FleedManagement from "./pages/FleetManagement";
import Layout from "./pages/Layout";
import LoadingSheet from "./pages/LoadingSheet";
import OrderTracking from "./pages/OrderTracking";
import RouteCreation from "./pages/RouteCreation";
import Dashboard from "./pages/dashboard";

function AllRoute() {
    return (
        <BreadcrumbsProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/loading-sheets" element={<LoadingSheet />} />
                    <Route
                        path="/fleet-management"
                        element={<FleedManagement />}
                    />
                    <Route path="/delivery" element={<DeliveryManagement />} />
                    <Route path="/order-tracking" element={<OrderTracking />} />
                    <Route path="/route-creation" element={<RouteCreation />} />
                </Route>
            </Routes>
        </BreadcrumbsProvider>
    );
}

export default AllRoute;
