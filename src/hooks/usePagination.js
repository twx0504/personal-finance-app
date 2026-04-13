import { useMemo } from "react";
import { ITEMS_PER_PAGE } from "../constants/pagination";

const usePagination = (dataLength, page, setPage) => {
  const totalPages = useMemo(
    () => Math.ceil(dataLength / ITEMS_PER_PAGE),
    [dataLength],
  );

  const isPrevDisabled = page === 1;
  const isNextDisabled = page === totalPages;

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleNumberButton = (pageNumber) => {
    setPage(pageNumber);
  };

  const pageButtons = useMemo(() => {
    return Array.from({ length: totalPages }).map((_, index) => {
      const isActive = page === index + 1;
      return {
        isActive,
        index,
      };
    });
  }, [page, totalPages]);

  return {
    totalPages,
    isPrevDisabled,
    isNextDisabled,
    handlePrev,
    handleNext,
    handleNumberButton,
    pageButtons,
  };
};

export default usePagination;
