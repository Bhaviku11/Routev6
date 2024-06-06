import {
  BreadcrumbsItem,
  BreadcrumbsProvider,
} from "react-breadcrumbs-dynamic";
import { Route, Routes } from "react-router-dom";
import FleedManagement from "./pages/FleetManagement";
import Layout from "./pages/Layout";
import LoadingSheet from "./pages/LoadingSheet";
import Dashboard from './pages/dashboard';

function AllRoute() {
  return (
    <BreadcrumbsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loading-sheets" element={<LoadingSheet />} />
          <Route path="/fleet-management" element={<FleedManagement />} />
        </Route>
      </Routes>
    </BreadcrumbsProvider>
  );
}

export default AllRoute;
