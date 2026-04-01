import minimizeMenuLogo from "../assets/images/icon-minimize-menu.svg";

const MinimizedButton = () => {
  return (
    <button
      type="button"
      className="absolute bottom-[145.24px] flex items-center w-fit h-14 pl-300 pr-300 cursor-pointer"
    >
      <img
        className="w-[24px] h-[24px] mr-200"
        src={minimizeMenuLogo}
        alt="Minimize menu"
      />
      <span className="text-preset-3 text-grey-300">Minimize Menu</span>
    </button>
  );
};

export default MinimizedButton;
