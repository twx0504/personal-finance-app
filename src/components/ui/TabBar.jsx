import NavList from "./NavList";

const TabBar = () => {
  return (
    <footer className="tabbar-container">
      <NavList
        containerClass="tabbar"
        listClass="tabbar-list"
        itemClass="tabbar-item"
        linkClass="tabbar-link"
      />
    </footer>
  );
};

export default TabBar;
