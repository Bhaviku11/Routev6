import { Fragment, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as AddAccount2Icon } from "../assets/icons/add-account-2.svg";
import { ReactComponent as BagIcon } from "../assets/icons/bag.svg";
import { ReactComponent as CartIcon } from "../assets/icons/cart.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as IdCardIcon } from "../assets/icons/id-card.svg";
import { ReactComponent as KeyIcon } from "../assets/icons/key.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings.svg";
import { ReactComponent as SheetsIcon } from "../assets/icons/sheets.svg";
import { ReactComponent as TruckIcon } from "../assets/icons/truck.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = useMemo(
    () => [
      {
        id: 1,
        label: "Dashboard",
        icon: HomeIcon,
        action: () => {
          console.log(`
        label: "Dashboard",
        `);
        },
        route: "/dashboard",
      },
      {
        id: 2,
        label: "Loading Sheets",
        icon: SheetsIcon,
        action: () => {
          console.log(`
        label: "Loading Sheets",
        `);
        },
        route: "/loading-sheets",
      },
      {
        id: 3,
        label: "Fleet Management",
        icon: IdCardIcon,
        action: () => {
          console.log(`
        label: "Fleet Management",
        `);
        },
        route: "/fleet-management",
      },
      {
        id: 4,
        label: "Route Creation",
        icon: TruckIcon,
        action: () => {
          console.log(`
        label: "Route Creation",
        `);
        },
        route: "/route-creation",
      },
      {
        id: 5,
        label: "Delivery",
        icon: BagIcon,
        action: () => {
          console.log(`
        label: "Delivery",
        `);
        },
        route: "/delivery",
      },
      {
        id: 6,
        label: "Order Tracking",
        icon: CartIcon,
        action: () => {
          console.log(`
        label: "Order Tracking",
        `);
        },
        route: "/order-tracking",
      },
      {
        id: -1,
        label: "Login",
        icon: HomeIcon,
        action: () => {
          console.log(`
        label: "Login",
        `);
        },
        route: "_",
      },
      {
        id: 7,
        label: "Login",
        icon: KeyIcon,
        action: () => {
          console.log(`
        label: "Login",
        `);
        },
        route: "/login",
      },
      {
        id: 8,
        label: "Signup",
        icon: AddAccount2Icon,
        action: () => {
          console.log(`
        label: "Signup",
        `);
        },
        route: "/signup",
      },
      {
        id: 9,
        label: "Settings",
        icon: SettingsIcon,
        action: () => {
          console.log(`
        label: "Settings",
        `);
        },
        route: "/settings",
      },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState(items[0]);

  const handleItemClick = (item: any) => {
    setActiveItem(item);
    if (item.action) {
      item.action();
    }
    if (item.route) {
      navigate(item.route);
    }
  };

  useEffect(() => {
    let path = location.pathname;
    console.log("Path -->", path);
    let item = items.find((item) => path.startsWith(item.route));
    if (item) {
      setActiveItem(item);
    } else {
      setActiveItem(items[0]);
      navigate(items[0].route);
    }
  }, [navigate, location, items]);

  return (
    <aside className="flex flex-col bg-gradient-to-b bg-[#2A4F67] from-[#549DCD] rounded-r-xl pb-8 shadow-[16px_8px_8px_-8px_rgba(0,0,0,0.45)]">
      <div className="p-6">
        <Logo />
      </div>
      <div className="grow flex flex-col text-xl text-[#BABABF] overflow-auto">
        {items.map((item) => (
          <Fragment key={item.id}>
            {item.id > -1 ? (
              <div
                className={`flex ${
                  item.id === activeItem.id ? "text-[#fff]" : "text-[#BABABF]"
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div
                  className={`w-[10px] bg-[#0062A5] rounded-xl me-4 ${
                    item.id === activeItem.id ? "visible" : "invisible"
                  }`}
                />
                <span className="flex items-center gap-3 p-5">
                  <item.icon
                    fill={item.id === activeItem.id ? "#fff" : "#BABABF"}
                  />
                  {item.label}
                </span>
              </div>
            ) : (
              <div className="grow" />
            )}
          </Fragment>
        ))}
      </div>
    </aside>
  );
}

export default Navbar;
