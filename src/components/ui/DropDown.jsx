import { DesktopTrigger } from "./DropDownTriggers";
import { useState } from "react";

const DropDown = ({
  dropDownRef,
  isOpen,
  trigger,
  optionList,
  listClassName,
}) => {
  return (
    <div className="relative" ref={dropDownRef}>
      {trigger}
      <div className={`absolute z-888 ${listClassName}`}>{isOpen && optionList}</div>
    </div>
  );
};

export default DropDown;
