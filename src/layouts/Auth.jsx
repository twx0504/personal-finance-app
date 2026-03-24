import { Navigate, Outlet } from "react-router";

const Auth = ({ user }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <p>Auth</p>
      <Outlet />
    </div>
  );
};

export default Auth;
