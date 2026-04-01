import useFinanceContext from "../../../hooks/useFinanceContext";
import { formatMoney } from "../../../utils/money";

const BalanceSummary = () => {
  const { balance } = useFinanceContext();

  if (balance === null) {
    return null;
  }

  return (
    <section className="flex flex-col space-y-[12px] md:flex-row md:justify-between md:p-0 md:space-y-0 md:space-x-[24px]">
      <div className="flex flex-col p-250 bg-grey-900 rounded-lg text-white md:p-300 md:w-1/3">
        <span className="text-preset-4 pb-50">Current Balance</span>
        <span className="text-preset-2 mt-100 truncate">
          {formatMoney(balance.current)}
        </span>
      </div>
      <div className="flex flex-col p-250 bg-white rounded-lg md:p-300 md:w-1/3">
        <span className="text-preset-4 pb-50 text-grey-500">Income</span>
        <span className="text-preset-2 mt-100 truncate">
          {formatMoney(balance.income)}
        </span>
      </div>
      <div className="flex flex-col p-250 bg-white rounded-lg md:p-300 md:w-1/3">
        <span className="text-preset-4 pb-50 text-grey-500">Expenses</span>
        <span className="text-preset-2 mt-100 truncate">
          {formatMoney(balance.expenses)}
        </span>
      </div>
    </section>
  );
};

export default BalanceSummary;
