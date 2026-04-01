import { useMemo } from "react";

import useFinanceContext from "../../../hooks/useFinanceContext";
import DonutChart from "../../chart/DonutChart";
import DonutContent from "../../chart/DonutContent";
import BarLabel from "../shared/BarLabel";
import { formatMoney } from "../../../utils/money";

const BudgetsCard = () => {
  const { transactions, budgets } = useFinanceContext();

  const segmentsData = useMemo(
    () =>
      budgets.map(({ category, maximum, theme }) => ({
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

  return (
    <div className="flex flex-col space-y-200 md:flex-row md:space-y-0">
      <DonutChart
        totalMax={totalMax}
        totalSpent={totalSpent}
        segmentsData={segmentsData}
        containerClassName="md:grow"
        canvasClassName="w-60 h-60"
      >
        <DonutContent totalSpent={totalSpent} totalMax={totalMax} />
      </DonutChart>
      <div className="flex flex-wrap gap-200 md:gap-0 md:flex-col md:gap-y-200">
        {budgets.map(({ category, maximum, theme }) => {
          return (
            <BarLabel
              key={category}
              className="bar-label budget-bar-label"
              name={category}
              theme={theme}
              total={formatMoney(maximum)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BudgetsCard;
