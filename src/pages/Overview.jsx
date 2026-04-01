import BalanceSummary from "../components/BalanceSummary";
import BudgetsCard from "../components/BudgetsCard";
import OverviewSection from "../components/OverviewSection";
import PotsCard from "../components/PotsCard";
import RecurringBillsCard from "../components/RecurringBillsCard";
import TransactionList from "../components/TransactionList";

const Overview = () => {
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
            <TransactionList />
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
