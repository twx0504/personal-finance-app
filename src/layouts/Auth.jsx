import Logo from "../components/Logo";
import Hero from "../components/Hero";
import { Navigate, Outlet } from "react-router";

const Auth = ({ user }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-screen xl:flex xl:items-center max-w-360 m-auto">
      <header className="xl:hidden bg-grey-900 m-auto h-17.5 flex justify-center items-center rounded-b-lg">
        <div>
          <Logo />
        </div>
      </header>
      <aside className="hidden xl:block m-250">
        <Hero />
      </aside>
      <main className="h-[calc(100vh-4.375rem)] pt-300 flex justify-center items-center xl:grow xl:h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
