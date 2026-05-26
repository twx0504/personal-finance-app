import { useMemo } from "react";

const useBudgets = (transactions, budgets) => {
  const segmentsData = useMemo(
    () =>
      budgets.map(({ id, category, maximum, theme }) => ({
        id,
        category,
        maximum,
        theme,
        spent: transactions
          .filter(
            (transaction) =>
              transaction.amount < 0 && transaction.category === category,
          )
          .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0),
      })),
    [transactions, budgets],
  );

  const totalSpent = useMemo(
    () => segmentsData.reduce((acc, b) => acc + b.spent, 0),
    [segmentsData],
  );

  const totalMax = useMemo(
    () => segmentsData.reduce((acc, b) => acc + b.maximum, 0),
    [segmentsData],
  );
  return { totalSpent, totalMax, segmentsData };
};

export default useBudgets;
