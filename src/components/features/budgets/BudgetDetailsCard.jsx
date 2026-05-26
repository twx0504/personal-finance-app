import CardDetailsHeader from "../shared/CardDetailsHeader";
import BudgetProgressSection from "./BudgetProgressSection";
import BudgetSpendingList from "./BudgetSpendingList";
import { BUDGET_ACTION_OPTIONS } from "../../../constants/dropdownOptions";

const BudgetDetailsCard = ({
  id,
  category,
  maximum,
  spent,
  theme,
  transactions,
  handleEditOpen,
  handleDeleteOpen,
}) => {
  const free = maximum - spent;

  const progress = Math.min((spent / maximum) * 100, 100);

  const latestSpendings = transactions
    .filter(
      ({ amount, category: transactionCategory }) =>
        amount < 0 && category === transactionCategory,
    )
    .slice(0, 3);

  return (
    <article className="p-400 bg-white rounded-lg">
      {/* BudgetDetailsHeader */}
      <CardDetailsHeader
        id={id}
        theme={theme}
        cardTitle={category}
        actionOption={BUDGET_ACTION_OPTIONS}
        handleEditOpen={handleEditOpen}
        handleDeleteOpen={handleDeleteOpen}
      />
      {/* ProgressBarContainer */}
      <BudgetProgressSection
        maximum={maximum}
        spent={spent}
        progress={progress}
        free={free}
        theme={theme}
      />
      {/* SpendingList */}
      <BudgetSpendingList
        latestSpendings={latestSpendings}
        category={category}
      />
    </article>
  );
};

export default BudgetDetailsCard;
