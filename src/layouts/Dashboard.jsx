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
  const pageName = pathname.split("/")[1];
  const pageTitle = titleMap[pageName];
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <DashboardContent title={pageTitle}>
      <Outlet />
    </DashboardContent>
  );
};

export default Dashboard;
