import Logo from "../components/ui/Logo";
import { Link } from "react-router";
import NavList from "./NavList";
import MinimizedButton from "./MinimizedButton";
const SideBar = () => {
  return (
    <aside className="sidebar-container">
      <Link to="/" className="sidebar-logo-wrapper">
        <Logo />
      </Link>
      <NavList
        containerClass="sidebar"
        listClass="sidebar-list"
        itemClass="sidebar-item"
        linkClass="sidebar-link"
      />
      <MinimizedButton />
    </aside>
  );
};

export default SideBar;
