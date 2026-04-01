import TransactionItem from "./TransactionItem";
import useFinanceContext from "../../../hooks/useFinanceContext";
const MAX_SHOWN_TRANSACTIONS = 5;

const TransactionList = () => {
  const { transactions } = useFinanceContext();
  return (
    <ul className="space-y-250">
      {transactions
        .slice(0, MAX_SHOWN_TRANSACTIONS)
        .map((transactionItem, index) => (
          <TransactionItem key={index} {...transactionItem} />
        ))}
    </ul>
  );
};

export default TransactionList;
