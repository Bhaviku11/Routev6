import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { Outlet } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";

import Header from "../components/Header";
import Navbar from "../components/navbar";

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

                    <div className="flex grow w-full p-8 pt-4 overflow-auto">
                        <Outlet />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Layout;
