import Logo from "../components/Logo";
import Hero from "../components/Hero";
import { Navigate, Outlet } from "react-router";

// TODO: feat/auth
// 1. SuccessModal
// 2. Field Validation Color - untouched (original color), true (green), false (red)
// 3. Error Message - Password must be > 8 characters. Invalid email format. etc.
// 4. Loading State for button submitting

const Auth = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-360 h-screen m-auto flex flex-col xl:flex-row xl:items-center">
      <header className="bg-grey-900 h-17.5 flex justify-center items-center rounded-b-lg xl:hidden">
        <div>
          <Logo />
        </div>
      </header>
      <aside className="hidden xl:flex xl:justify-center xl:m-250 xl:flex-1 ">
        <Hero />
      </aside>
      <main className="flex-1 flex justify-center items-center xl:h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
