import { useState, useEffect, useRef } from "react";
import caretDownIcon from "../../assets/images/icon-caret-down.svg";

const DropDown = ({
  title,
  optionList,
  iconSrc,
  onSelect,
  isOpen,
  onToggle,
  containerStyle,
}) => {
  const [label, setLabel] = useState(optionList[0].label);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const target = e.target;
      if (isOpen && !dropDownRef.current.contains(target)) {
        onToggle();
      }
    };

    const handleKeyDown = (e) => {
      const key = e.key;
      if (key === "Escape" && isOpen) {
        onToggle();
      }
    };

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onToggle]);

  return (
    <div className="flex gap-100 items-center ">
      {title && (
        <span className="hidden md:inline text-preset-4 text-grey-500">
          {title}
        </span>
      )}
      <div ref={dropDownRef} className="relative">
        <button
          className={`hidden md:flex md:justify-between md:items-center gap-200 pt-[12px] pb-[12px] pl-250 pr-250 border border-grey-500 rounded-lg cursor-pointer ${containerStyle}`}
          type="button"
          onClick={onToggle}
        >
          <span className="flex-1 text-left truncate">{label}</span>
          <img
            className="w-200 h-200 "
            src={caretDownIcon}
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
          />
        </button>
        <button
          className="md:hidden flex items-center justify-center w-250 h-250 cursor-pointer"
          onClick={onToggle}
        >
          <img src={iconSrc} alt="" aria-hidden="true" />
        </button>
        {optionList && (
          <ul
            className={`${isOpen ? "" : "hidden"} w-fit shadow-md absolute top-full right-0 z-999  text-nowrap rounded-lg mt-[12px] bg-white md:w-full`}
          >
            {optionList.map((option, index) => (
              <li key={index}>
                <button
                  className="w-full pt-[12px] pb-[12px] pl-250 pr-250 first:mt-0 last:border-b-0 border-b border-b-grey-100 hover:bg-grey-900 hover:text-white first:hover:hover:rounded-t-lg last:hover:rounded-b-lg cursor-pointer"
                  onClick={() => {
                    onSelect(option.value);
                    setLabel(option.label);
                    onToggle();
                  }}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
