import TabBar from "./TabBar";
import Sidebar from "./SideBar";
import { useState } from "react";

const DashboardContent = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`flex flex-col min-h-screen pt-300 pb-19 pl-200 pr-200 md:pb-26.5 md:pl-500 md:pr-500 md:pt-400 xl:pb-400  ${isCollapsed ? "xl:ml-21.75" : "xl:ml-75"}`}
    >
      <header className="mb-400">
        <h1 className="text-preset-1">{title}</h1>
      </header>
      <main className="flex-1">{children}</main>
      <Sidebar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      <TabBar />
    </div>
  );
};

export default DashboardContent;
