import useTransaction from "../hooks/useTransaction";
import useFinanceContext from "../hooks/useFinanceContext";
import TransactionToolbar from "../components/features/transactions/TransactionToolbar";
import Pagination from "../components/ui/Pagination";
import TransactionListHeader from "../components/features/transactions/TransactionListHeader";
import TransactionList from "../components/features/transactions/TransactionList";
import { TRANSACTION_HEADER_CONFIG } from "../constants/transactions";
import { ITEMS_PER_PAGE } from "../constants/pagination";

const Transaction = () => {
  const { transactions } = useFinanceContext();

  const {
    page,
    searchTerm,
    setPage,
    handleSetSearchTerm,
    handleSetCategory,
    handleSetSortType,
    data,
    paginatedData,
  } = useTransaction(transactions);

  return (
    <div className="bg-white p-400 rounded-lg space-y-300">
      <TransactionToolbar
        handleSetSearchTerm={handleSetSearchTerm}
        handleSetCategory={handleSetCategory}
        handleSetSortType={handleSetSortType}
        searchTerm={searchTerm}
      />
      <div>
        <TransactionListHeader headerConfig={TRANSACTION_HEADER_CONFIG} />
        <TransactionList data={paginatedData} />
      </div>
      {data.length > ITEMS_PER_PAGE && (
        <Pagination dataLength={data.length} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default Transaction;
