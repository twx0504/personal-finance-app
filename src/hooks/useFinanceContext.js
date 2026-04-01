import { useContext } from "react";
import { FinanceContext } from "../context/financeContext";

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
