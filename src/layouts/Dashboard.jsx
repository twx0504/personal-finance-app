import { Navigate, Outlet } from "react-router";

const Dashboard = ({ user }) => {
  if (!user) return <Navigate to="/login" />;
  return (
    <div>
      <p>Dashboard</p>
      <Outlet />
    </div>
  );
};

export default Dashboard;
