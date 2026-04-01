import BillRow from "./BillRow";
import useFinanceContext from "../hooks/useFinanceContext";
import useRecurringBills from "../hooks/useRecurringBills";
import { formatMoney } from "../utils/money";
const RecurringBillsCard = () => {
  const { transactions } = useFinanceContext();
  const { paid, unpaid, dueSoon } = useRecurringBills(transactions);

  return (
    <div className="space-y-[12px]">
      <BillRow
        billRowClassName="border-l-green"
        title="Paid Bills"
        amount={formatMoney(paid.amount)}
      />
      <BillRow
        billRowClassName="border-l-yellow"
        title="Total Upcoming"
        amount={formatMoney(unpaid.amount)}
      />
      <BillRow
        billRowClassName="border-l-cyan"
        title="Due Soon"
        amount={formatMoney(dueSoon.amount)}
      />
    </div>
  );
};

export default RecurringBillsCard;
