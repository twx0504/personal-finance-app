import { useState } from "react";
import useDropDown from "../../../hooks/useDropDown.js";
import {
  CATEGORY_OPTIONS,
  SORT_OPTIONS,
} from "../../../constants/dropdownOptions";
import { DROPDOWNS } from "../../../constants/dropdown";
import SearchBar from "../../ui/SearchBar";
import FilterDropDown from "../../ui/FilterDropDown";
import sortIcon from "../../../assets/images/icon-sort-mobile.svg";
import filterIcon from "../../../assets/images/icon-filter-mobile.svg";
import { CATEGORY_TYPES } from "../../../constants/category.js";

const TransactionToolbar = ({
  searchTerm,
  handleSetSearchTerm,
  handleSetCategory,
  handleSetSortType,
  initialCategory = CATEGORY_TYPES.ALL,
}) => {
  const [openDropDown, setOpenDropDown] = useState(null);

  const toggleDropDown = (type) =>
    setOpenDropDown((prev) => (prev === type ? null : type));

  const sort = useDropDown("Latest", openDropDown, DROPDOWNS.SORT, () =>
    toggleDropDown(DROPDOWNS.SORT),
  );

  const initialLabel = CATEGORY_OPTIONS.find(
    (o) => o.value === initialCategory,
  )?.label;

  const category = useDropDown(
    initialLabel,
    openDropDown,
    DROPDOWNS.CATEGORY,
    () => toggleDropDown(DROPDOWNS.CATEGORY),
  );

  return (
    <div className="flex justify-between">
      <div className="flex-1 md:max-w-[320px]">
        <SearchBar onSearch={handleSetSearchTerm} searchTerm={searchTerm} />
      </div>
      <div className="ml-300 flex md:grid md:grid-cols-[200px_265px] gap-x-300 text-preset-4">
        <FilterDropDown
          title="Sort by"
          optionList={SORT_OPTIONS}
          iconSrc={sortIcon}
          onSelect={handleSetSortType}
          {...sort}
          dropDownClassName="hidden md:flex md:justify-between md:items-center md:gap-200 md:w-32.5"
        />
        <FilterDropDown
          title="Category"
          optionList={CATEGORY_OPTIONS}
          iconSrc={filterIcon}
          onSelect={handleSetCategory}
          {...category}
          dropDownClassName="hidden md:flex md:justify-between md:items-center md:gap-200 md:w-45"
        />
      </div>
    </div>
  );
};

export default TransactionToolbar;
