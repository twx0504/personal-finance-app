import { useState } from "react";
import ellipsisIcon from "../../../assets/images/icon-ellipsis.svg";
import DropDown from "../../ui/DropDown";
import useDropDown from "../../../hooks/useDropDown";
import { BUDGET_ACTION_OPTIONS } from "../../../constants/dropdownOptions";
import { ActionOptionList } from "../../ui/DropDownOptionLists";

const BudgetDetailsHeader = ({
  theme,
  category,
  handleEditOpen,
  handleDeleteOpen,
}) => {
  const action = useDropDown(BUDGET_ACTION_OPTIONS[0].label);

  return (
    <header className="flex items-center mb-250">
      <div className="flex flex-1 items-center">
        <span
          className="w-200 h-200 rounded-full mr-200"
          style={{
            backgroundColor: theme,
          }}
        ></span>
        <h2 className="text-preset-2">{category}</h2>
      </div>
      <DropDown
        trigger={
          <button
            className="w-200 h-200 cursor-pointer"
            onClick={action.toggle}
          >
            <img src={ellipsisIcon} alt="" />
          </button>
        }
        optionList={
          <ActionOptionList
            data={BUDGET_ACTION_OPTIONS}
            onSelect={(option) => {
              if (option === "edit") handleEditOpen(category);
              if (option === "delete") handleDeleteOpen(category);
              action.toggle();
            }}
          />
        }
        listClassName="right-0"
        {...action}
      />
    </header>
  );
};

export default BudgetDetailsHeader;
