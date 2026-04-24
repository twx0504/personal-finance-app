import { useState } from "react";
import ViewHeader from "./ViewHeader";
import AddButton from "../components/features/shared/AddButton";
import BudgetSummary from "../components/features/budgets/BudgetSummary";
import BudgetDetailsCard from "../components/features/budgets/BudgetDetailsCard";
import useBudgets from "../hooks/useBudgets";
import useFinanceContext from "../hooks/useFinanceContext";
import BudgetModal from "../components/features/budgets/BudgetModal";
import DeleteBudgetModal from "../components/features/budgets/DeleteBudgetModal";
import useModal from "../hooks/useModal";

// TODO: See All Navigation

const Budgets = () => {
  const { transactions, budgets, setBudgets } = useFinanceContext();

  const { totalMax, totalSpent, segmentsData } = useBudgets(
    transactions,
    budgets,
  );

  const usedThemes = budgets.map((budget) => budget.theme);
  const usedCategories = budgets.map((budget) => budget.category);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectedBudget = budgets.find((b) => b.category === selectedCategory);

  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleEditOpen = (category) => {
    setSelectedCategory(category);
    editModal.handleOpen();
  };

  const handleDeleteOpen = (category) => {
    setSelectedCategory(category);
    deleteModal.handleOpen();
  };

  const handleAddCard = (newBudgetItem) => {
    setBudgets([...budgets, newBudgetItem]);
    addModal.handleClose();
  };

  const handleEditCard = (modifiedBudgetItem) => {
    setBudgets(
      budgets.map((budget) => {
        if (budget.category === selectedCategory) {
          return modifiedBudgetItem;
        }
        return budget;
      }),
    );
    editModal.handleClose();
  };

  const handleDeleteCard = () => {
    setBudgets(
      budgets.filter((budget) => budget.category !== selectedCategory),
    );
    deleteModal.handleClose();
  };

  return (
    <>
      <ViewHeader
        title="Budgets"
        actionButton={
          <AddButton
            buttonName="Add New Budget"
            onClick={addModal.handleOpen}
          />
        }
      />
      <div className="xl:flex gap-x-250">
        <BudgetSummary
          totalMax={totalMax}
          totalSpent={totalSpent}
          segmentsData={segmentsData}
          budgets={budgets}
        />
        <div className="mt-300 space-y-300 xl:w-[57.36%] xl:mt-0">
          {segmentsData.map((data) => (
            <BudgetDetailsCard
              key={data.category}
              {...data}
              transactions={transactions}
              handleEditOpen={handleEditOpen}
              handleDeleteOpen={handleDeleteOpen}
            />
          ))}
        </div>
      </div>
      <BudgetModal
        title="Add New Budget"
        description="Choose a category to set a spending budget. These categories can help
          you monitor spending."
        buttonName="Add Budget"
        onSubmit={handleAddCard}
        usedThemes={usedThemes}
        usedCategories={usedCategories}
        {...addModal}
      />
      <BudgetModal
        title="Edit Budget"
        description="As your budgets change, feel free to update your spending limits."
        buttonName="Save Changes"
        onSubmit={handleEditCard}
        /* Excluding own category and theme */
        usedThemes={usedThemes.filter(
          (t) =>
            t !== budgets.find((b) => b.category === selectedCategory)?.theme,
        )}
        usedCategories={usedCategories.filter((c) => c !== selectedCategory)}
        selectedBudget={selectedBudget}
        {...editModal}
      />
      <DeleteBudgetModal
        category={selectedCategory}
        description="Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever."
        onConfirm={handleDeleteCard}
        {...deleteModal}
      />
    </>
  );
};

export default Budgets;
