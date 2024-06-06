import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings.svg";
import { ReactComponent as UserAccountIcon } from "../assets/icons/user-account.svg";
import Navbar from '../components/navbar';
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <BreadcrumbsItem to="/">
        <HomeIcon
          preserveAspectRatio="xMidYMid meet"
          height="16"
          width="16"
          fill="#7B809A"
          className="inline-block me-2"
        />
      </BreadcrumbsItem>

      <div className="h-full w-full flex overflow-hidden">
        <Navbar />
        <section className="flex flex-col grow overflow-hidden">
          <Header />

          <div className="overflow-auto flex grow w-full p-8 pt-4">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}

export default Layout;
