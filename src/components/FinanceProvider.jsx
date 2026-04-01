import { useState, useEffect } from "react";
import { FinanceContext } from "../context/financeContext";
import useFetch from "../hooks/useFetch";

const FinanceProvider = ({ children }) => {
  const [isLoading, isError, fetchData] = useFetch("/data.json");
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [pots, setPots] = useState([]);

  useEffect(() => {
    const handleFetch = (data) => {
      setBalance(data.balance);
      setTransactions(data.transactions);
      setBudgets(data.budgets);
      setPots(data.pots);
    };
    fetchData(handleFetch);
  }, []);

  return (
    <FinanceContext.Provider
      value={{
        balance,
        transactions,
        budgets,
        pots,
        setBalance,
        setTransactions,
        setBudgets,
        setPots,
        isLoading,
        isError,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;
