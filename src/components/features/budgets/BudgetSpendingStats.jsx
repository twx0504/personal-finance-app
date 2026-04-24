import { formatMoney } from "../../../utils/money";
const BudgetSpendingStats = ({ spent, free, theme }) => {
  return (
    <dl className="flex text-preset-5 text-grey-500 gap-x-200">
      <div className="relative flex-1 pl-250">
        <dt>Spent</dt>
        <dd className="text-preset-4-bold text-grey-900">
          {formatMoney(spent)}
        </dd>
        <span
          className="absolute top-0 bottom-0 left-0 w-50 rounded-full"
          style={{
            backgroundColor: theme,
          }}
        ></span>
      </div>
      <div className="flex-1 pl-250">
        <dt>Free</dt>
        <dd className="text-preset-4-bold text-grey-900">
          {formatMoney(free)}
        </dd>
      </div>
    </dl>
  );
};

export default BudgetSpendingStats;
