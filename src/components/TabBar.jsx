import NavLists from "./NavLists";

const TabBar = () => {
  return (
    <footer className="tabbar-container">
      <NavLists
        containerClass="tabbar"
        listClass="tabbar-list"
        itemClass="tabbar-item"
        linkClass="tabbar-link"
      />
    </footer>
  );
};

export default TabBar;
