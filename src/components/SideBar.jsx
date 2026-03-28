import Logo from "./Logo";
import { Link } from "react-router";
import NavLists from "./NavLists";
import MinimizedButton from "./MinimizedButton";
const SideBar = () => {
  return (
    <aside className="sidebar-container">
      <Link to="/" className="sidebar-logo-wrapper">
        <Logo />
      </Link>
      <NavLists
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
