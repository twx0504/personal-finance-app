import Logo from "../components/ui/Logo";
import { Link } from "react-router";
import NavList from "./NavList";
import MinimizedButton from "./MinimizedButton";

import bigLogo from "../assets/images/logo-large.svg";
import smallLogo from "../assets/images/logo-small.svg";

const SideBar = ({ setCollapse, collapse }) => {
  return (
    <aside className="sidebar-container">
      <Link to="/" className="sidebar-logo-wrapper">
        <Logo logo={collapse ? smallLogo : bigLogo} />
      </Link>
      <NavList
        containerClass={`sidebar ${collapse ? "sidebar-minimize" : "sidebar-expand"}`}
        listClass="sidebar-list"
        itemClass={`sidebar-item ${collapse ? "sidebar-item-minimize" : ""}`}
        linkClass={`sidebar-link ${collapse ? "sidebar-link-minimize" : ""}`}
        collapse={collapse}
      />
      <MinimizedButton setCollapse={setCollapse} collapse={collapse} />
    </aside>
  );
};

export default SideBar;
