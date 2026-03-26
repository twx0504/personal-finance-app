import { Navigate, Outlet } from "react-router";

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
