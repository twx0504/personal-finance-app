import TransactionItem from "./TransactionItem";

const TransactionList = ({ data, variant = "full" }) => {
  if (data.length === 0) {
    return <div className="mb-300">No transactions found</div>;
  }

  return (
    <ul className={`${variant === "full" ? "min-h-176.75" : ""} space-y-250`}>
      {data.map((transactionItem) => {
        return (
          <TransactionItem
            key={transactionItem.id}
            {...transactionItem}
            variant={variant}
          />
        );
      })}
    </ul>
  );
};

export default TransactionList;
