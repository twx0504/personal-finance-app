import { useNavigate } from "react-router";
import { useEffect } from "react";

import Logo from "../components/ui/Logo";
const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for 1sec to get to the overview page
    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-grey-900 flex flex-col justify-center items-center">
      <Logo />
    </div>
  );
};

export default Loading;
