import { useState, useMemo } from "react";
import { SORT_TYPES } from "../constants/sort";
import { CATEGORY_TYPES } from "../constants/category";
import {
  sortBy,
  filterByCategory,
  filterBySearch,
} from "../utils/transactions";
import { ITEMS_PER_PAGE } from "../constants/pagination";

const useTransaction = (transactions) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(CATEGORY_TYPES.ALL);
  const [sortType, setSortType] = useState(SORT_TYPES.LATEST);

  const data = useMemo(() => {
    let res = transactions;
    res = filterByCategory(res, category);
    res = filterBySearch(res, searchTerm);
    res = sortBy(res, sortType);
    return res;
  }, [transactions, category, searchTerm, sortType]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(page * ITEMS_PER_PAGE, data.length);
    return data.slice(startIndex, endIndex);
  }, [data, page]);

  const recentTransactions = useMemo(
    () => transactions.slice(0, 5),
    [transactions],
  );

  const handleSetCategory = (val) => {
    setPage(1);
    setCategory(val);
  };

  const handleSetSortType = (val) => {
    setPage(1);
    setSortType(val);
  };

  const handleSetSearchTerm = (val) => {
    setPage(1);
    setSearchTerm(val);
  };

  return {
    page,
    searchTerm,
    category,
    sortType,
    setPage,
    handleSetSearchTerm,
    handleSetCategory,
    handleSetSortType,
    data,
    paginatedData,
    recentTransactions,
  };
};

export default useTransaction;
