import { IconCaretLeft } from "./Icons";
import { IconCaretRight } from "./Icons";
import usePagination from "../../hooks/usePagination";

const Pagination = ({ dataLength, page, setPage }) => {
  const {
    isPrevDisabled,
    isNextDisabled,
    handlePrev,
    handleNext,
    handleNumberButton,
    pageButtons,
  } = usePagination(dataLength, page, setPage);

  return (
    <nav aria-label="Pagination" className="relative">
      <ul className="flex gap-x-100 justify-center">
        {pageButtons.map(({ isActive, index }) => (
          <li key={index}>
            <button
              onClick={() => handleNumberButton(index + 1)}
              className={`${isActive ? "text-white bg-grey-900" : ""} w-500 h-500 border border-beige-500 rounded-lg cursor-pointer hover:text-white hover:bg-beige-500 hover:border-beige-500`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        className={`absolute left-0 top-1/2 -translate-y-1/2 flex items-center border border-beige-500 pl-200 pr-200 pt-[12px] pb-[12px] rounded-lg gap-x-200 cursor-pointer ${!isPrevDisabled && "hover:text-white hover:bg-beige-500 hover:border-beige-500"} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <IconCaretLeft />
        <span className="hidden text-preset-4 md:inline">Prev</span>
      </button>
      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className={`absolute right-0 top-1/2 -translate-y-1/2 flex items-center border border-beige-500 pl-200 pr-200 pt-[12px] pb-[12px] rounded-lg gap-x-200 cursor-pointer ${!isNextDisabled && "hover:text-white hover:bg-beige-500 hover:border-beige-500"} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <span className="hidden text-preset-4 md:inline">Next</span>
        <IconCaretRight />
      </button>
    </nav>
  );
};

export default Pagination;
