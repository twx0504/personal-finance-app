import caretDownIcon from "../../assets/images/icon-caret-down.svg";

// TODO: Add a left element to DesktopTrigger

const DesktopTrigger = ({ label, onClick, leftElement, className = "" }) => (
  <button
    className={`${className} pt-[12px] pb-[12px] pl-250 pr-250 border border-grey-500 rounded-lg cursor-pointer`}
    type="button"
    onClick={onClick}
  >
    {leftElement && leftElement}
    <span className="flex-1 text-left truncate">{label}</span>
    <img
      className="w-200 h-200"
      src={caretDownIcon}
      alt=""
      aria-hidden="true"
      width={16}
      height={16}
    />
  </button>
);

const MobileTrigger = ({ onClick, iconSrc }) => (
  <button
    className="flex items-center justify-center w-250 h-250 cursor-pointer md:hidden "
    onClick={onClick}
  >
    <img src={iconSrc} alt="" aria-hidden="true" />
  </button>
);
export { DesktopTrigger, MobileTrigger };
