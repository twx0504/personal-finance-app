import ProgressBar from "../../ui/ProgressBar";
import BudgetSpendingStats from "./BudgetSpendingStats";
import { formatMoney } from "../../../utils/money";

const BudgetProgressSection = ({ maximum, progress, spent, free, theme }) => {
  return (
    <section className="mb-250">
      <p className="text-preset-4 text-grey-500 mb-200">
        Maximum of <span>{formatMoney(maximum)}</span>
      </p>
      <ProgressBar
        progress={progress}
        theme={theme}
        trackClassName="bg-beige-100 p-50 rounded-md mb-200"
        barClassName="h-[24px] rounded-xs"
      />
      <BudgetSpendingStats spent={spent} free={free} theme={theme} />
    </section>
  );
};

export default BudgetProgressSection;
