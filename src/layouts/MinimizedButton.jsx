import { IconMinimize } from "../components/ui/Icons";

const MinimizedButton = ({ setIsCollapsed, isCollapsed }) => {
  return (
    <button
      type="button"
      className="absolute bottom-[145.24px] flex items-center w-fit h-14 pl-300 pr-300 cursor-pointer text-grey-300 hover:text-grey-100"
      onClick={() => {
        setIsCollapsed((prev) => !prev);
      }}
    >
      <IconMinimize
        className={`w-[24px] h-[24px] mr-200 text-inherit ${isCollapsed ? "-scale-x-100" : ""}`}
      />
      {!isCollapsed && (
        <span className="text-inherit text-preset-3">Minimize Menu</span>
      )}
    </button>
  );
};

export default MinimizedButton;
