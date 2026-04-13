import useFinanceContext from "../hooks/useFinanceContext";
import BalanceSummary from "../components/features/balances/BalanceSummary";
import BudgetsCard from "../components/features/budgets/BudgetsCard";
import OverviewSection from "../components/features/overview/OverviewSection";
import PotsCard from "../components/features/pots/PotsCard";
import RecurringBillsCard from "../components/features/bills/RecurringBillsCard";
import TransactionList from "../components/features/transactions/TransactionList";
import useTransaction from "../hooks/useTransaction";

const Overview = () => {
  const { transactions } = useFinanceContext();
  const { recentTransactions } = useTransaction(transactions);

  return (
    <div>
      <BalanceSummary />
      <div className="xl:flex xl:gap-300">
        <div className="w-full xl:w-[58.7%]">
          <OverviewSection title="Pots" link="/pots">
            <PotsCard />
          </OverviewSection>
          <OverviewSection
            title="Transactions"
            link="/transactions"
            linkDescription="View All"
            headerClassName="mb-[12px]"
          >
            <TransactionList
              data={recentTransactions}
              startIndex={0}
              endIndex={5}
              variant="overview"
            />
          </OverviewSection>
        </div>
        <div className="w-full xl:w-[41.3%]">
          <OverviewSection title="Budgets" link="/budgets">
            <BudgetsCard />
          </OverviewSection>

          <OverviewSection
            title="Recurring Bills"
            link="/bills"
            headerClassName="mb-[12px]"
          >
            <RecurringBillsCard />
          </OverviewSection>
        </div>
      </div>
    </div>
  );
};

export default Overview;
