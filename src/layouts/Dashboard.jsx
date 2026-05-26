import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import TabBar from "../components/ui/TabBar";
import Sidebar from "../components/ui/SideBar";
import { titleMap } from "../constants/dashboard";

const Dashboard = ({ isLoggedIn }) => {
  const { pathname } = useLocation();
  const routeKey = pathname.split("/")[1] || "";
  const pageTitle = titleMap[routeKey] || "Overview";

  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div
      className={`flex flex-col min-h-screen pt-300 pb-19 pl-200 pr-200 md:pb-26.5 md:pl-500 md:pr-500 md:pt-400 xl:pb-400  ${isCollapsed ? "xl:ml-21.75" : "xl:ml-75"}`}
    >
      <main className="flex-1">
        <Outlet />
      </main>
      <Sidebar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      <TabBar />
    </div>
  );
};

export default Dashboard;
