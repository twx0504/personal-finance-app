import { useContext } from "react";
import { FinanceContext } from "../contexts/FinanceContext";

const useFinanceContext = () => {
  const contextData = useContext(FinanceContext);
  if (contextData === null) {
    throw new Error(
      "useFinanceContext must be used with FinanceContext Provider.",
    );
  }
  return contextData;
};

export default useFinanceContext;
