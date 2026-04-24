import BudgetDetailsHeader from "./BudgetDetailsHeader";
import BudgetProgressSection from "./BudgetProgressSection";
import BudgetSpendingList from "./BudgetSpendingList";

const BudgetDetailsCard = ({
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
      <BudgetDetailsHeader
        theme={theme}
        category={category}
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
