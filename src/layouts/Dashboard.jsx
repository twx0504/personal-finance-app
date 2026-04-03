import { Navigate, Outlet, useLocation } from "react-router";
import DashboardContent from "./DashboardContent";

const titleMap = {
  "": "Overview",
  transactions: "Transactions",
  budgets: "Budgets",
  pots: "Pots",
  bills: "Recurring Bills",
};

const Dashboard = ({ isLoggedIn }) => {
  const { pathname } = useLocation();
  const routeKey = pathname.split("/")[1] || "";
  const pageTitle = titleMap[routeKey] || "Overview";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardContent title={pageTitle}>
      <Outlet />
    </DashboardContent>
  );
};

export default Dashboard;
