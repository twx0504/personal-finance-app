import minimizeMenuLogo from "../assets/images/icon-minimize-menu.svg";
import { IconMinimize } from "../components/ui/Icons";

const MinimizedButton = ({ setCollapse, collapse }) => {
  const handleClick = () => {
    if (collapse) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
  };

  return (
    <button
      type="button"
      className="absolute bottom-[145.24px] flex items-center w-fit h-14 pl-300 pr-300 cursor-pointer text-grey-300 hover:text-grey-100"
      onClick={handleClick}
    >
      {/* <img
        className={`w-[24px] h-[24px] mr-200 ${collapse ? "-scale-x-100" : ""}`}
        src={minimizeMenuLogo}
        alt="Minimize menu"
      /> */}
      <IconMinimize
        className={`w-[24px] h-[24px] mr-200 text-inherit ${collapse ? "-scale-x-100" : ""}`}
      />
      <span
        className={`${collapse ? "hidden" : ""} text-inherit text-preset-3`}
      >
        Minimize Menu
      </span>
    </button>
  );
};

export default MinimizedButton;
