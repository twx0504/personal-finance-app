import DropDown from "./DropDown";
import { DesktopTrigger, MobileTrigger } from "./DropDownTriggers";
import useBreakpoint from "../../hooks/useBreakpoint";
import { BasicOptionList } from "./DropDownOptionLists";
const FilterDropDown = ({
  title,
  optionList,
  iconSrc,
  isOpen,
  toggle,
  label,
  setLabel,
  dropDownRef,
  dropDownClassName,
  onSelect,
}) => {
  const isMobile = useBreakpoint("md");
  return (
    <div className="flex gap-100 items-center ">
      {title !== undefined && (
        <span className="hidden md:inline text-preset-4 text-grey-500">
          {title}
        </span>
      )}

      <DropDown
        dropDownRef={dropDownRef}
        isOpen={isOpen}
        trigger={
          isMobile ? (
            <MobileTrigger iconSrc={iconSrc} onClick={toggle} />
          ) : (
            <DesktopTrigger
              label={label}
              onClick={toggle}
              className={dropDownClassName}
            />
          )
        }
        optionList={
          <BasicOptionList
            data={optionList}
            onSelect={(value) => {
              onSelect(value);
              const selected = optionList.find((o) => {
                return o.value === value;
              });
              if (selected) setLabel(selected.label);
              toggle();
            }}
          />
        }
        listClassName="w-fit md:w-full right-0"
      />
    </div>
  );
};

export default FilterDropDown;
