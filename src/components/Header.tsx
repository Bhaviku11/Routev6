import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings.svg";
import { ReactComponent as UserAccountIcon } from "../assets/icons/user-account.svg";

function Header() {
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
      <header className="flex justify-between items-center px-8 py-4">
        <Breadcrumbs
          item={NavLink}
          finalItem={"b"}
          separator={<b> / </b>}
          containerProps={{
            className:
              "text-[#7B809A] inline-flex gap-2 leading-none items-center text-sm",
          }}
        />
        <div className="flex items-center gap-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Here"
            className="text-sm px-4 py-2.5 bg-transparent rounded-lg outline-none border border-[#7B809A]"
          />
          <UserAccountIcon
            preserveAspectRatio="xMidYMid meet"
            height="16"
            width="16"
            fill="#7B809A"
          />
          <SettingsIcon
            preserveAspectRatio="xMidYMid meet"
            height="16"
            width="16"
            fill="#7B809A"
          />
          <NotificationIcon
            preserveAspectRatio="xMidYMid meet"
            height="16"
            width="16"
            fill="#7B809A"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
