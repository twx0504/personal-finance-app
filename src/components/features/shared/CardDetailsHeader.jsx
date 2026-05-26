import { useState } from "react";
import ellipsisIcon from "../../../assets/images/icon-ellipsis.svg";
import DropDown from "../../ui/DropDown";
import useDropDown from "../../../hooks/useDropDown";
import { BUDGET_ACTION_OPTIONS } from "../../../constants/dropdownOptions";
import { ActionOptionList } from "../../ui/DropDownOptionLists";

const CardDetailsHeader = ({
  id,
  theme,
  cardTitle,
  actionOption,
  handleEditOpen,
  handleDeleteOpen,
}) => {
  const action = useDropDown(actionOption[0].label);

  return (
    <header className="flex items-center mb-250">
      <div className="flex flex-1 items-center">
        <span
          className="w-200 h-200 rounded-full mr-200"
          style={{
            backgroundColor: theme,
          }}
        ></span>
        <h2 className="text-preset-2">{cardTitle}</h2>
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
            data={actionOption}
            onSelect={(option) => {
              if (option === "edit") handleEditOpen(id);
              if (option === "delete") handleDeleteOpen(id);
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

export default CardDetailsHeader;
