import Logo from "../components/ui/Logo";
import { Link } from "react-router";
import NavList from "./NavList";
import MinimizedButton from "./MinimizedButton";
import bigLogo from "../assets/images/logo-large.svg";
import smallLogo from "../assets/images/logo-small.svg";

const SideBar = ({ setIsCollapsed, isCollapsed }) => {
  return (
    <aside className="sidebar-container">
      <Link to="/" className="sidebar-logo-wrapper">
        <Logo logo={isCollapsed ? smallLogo : bigLogo} />
      </Link>
      <NavList
        containerClass={`sidebar ${isCollapsed ? "sidebar-minimize" : "sidebar-expand"}`}
        listClass="sidebar-list"
        itemClass={`sidebar-item ${isCollapsed ? "sidebar-item-minimize" : ""}`}
        linkClass={`sidebar-link ${isCollapsed ? "sidebar-link-minimize" : ""}`}
        isCollapsed={isCollapsed}
      />
      <MinimizedButton setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
    </aside>
  );
};

export default SideBar;
