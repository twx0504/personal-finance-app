import { Navigate, Outlet } from "react-router";
import Loading from "../pages/Loading";

const Dashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <p>Dashboard</p>
      <Outlet />
    </div>
  );
};

export default Dashboard;
