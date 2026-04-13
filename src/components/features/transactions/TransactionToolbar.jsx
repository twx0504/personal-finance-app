import { useState } from "react";
import {
  CATEGORY_OPTIONS,
  SORT_OPTIONS,
} from "../../../constants/dropdownOptions";
import { DROPDOWNS } from "../../../constants/dropdown";
import SearchBar from "../../ui/SearchBar";
import DropDown from "../../ui/DropDown";
import sortIcon from "../../../assets/images/icon-sort-mobile.svg";
import filterIcon from "../../../assets/images/icon-filter-mobile.svg";

const TransactionToolbar = ({
  searchTerm,
  handleSetSearchTerm,
  handleSetCategory,
  handleSetSortType,
}) => {
  const [openDropDown, setOpenDropDown] = useState(null);
  const toggleDropDown = (type) =>
    setOpenDropDown((prev) => (prev === type ? null : type));

  return (
    <div className="flex justify-between">
      <div className="flex-1 md:max-w-[320px]">
        <SearchBar onSearch={handleSetSearchTerm} searchTerm={searchTerm} />
      </div>
      <div className="ml-300 flex md:grid md:grid-cols-[200px_265px] gap-x-300 text-preset-4">
        <DropDown
          title="Sort by"
          optionList={SORT_OPTIONS}
          iconSrc={sortIcon}
          onSelect={handleSetSortType}
          isOpen={openDropDown === DROPDOWNS.SORT}
          onToggle={() => toggleDropDown(DROPDOWNS.SORT)}
          containerStyle="md:w-32.5"
        />
        <DropDown
          title="Category"
          optionList={CATEGORY_OPTIONS}
          iconSrc={filterIcon}
          onSelect={handleSetCategory}
          isOpen={openDropDown === DROPDOWNS.CATEGORY}
          onToggle={() => toggleDropDown(DROPDOWNS.CATEGORY)}
          containerStyle="md:w-45"
        />
      </div>
    </div>
  );
};

export default TransactionToolbar;
