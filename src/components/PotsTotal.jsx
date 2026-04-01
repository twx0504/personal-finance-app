import potIcon from "../assets/images/icon-pot.svg";
const PotsTotal = () => {
  return (
    <div className="flex items-center bg-beige-100 p-200 rounded-xl mb-250 md:w-[39.6%] md:mb-0">
      <div className="flex justify-center items-center w-[40px] h-[40px]">
        <img src={potIcon} alt="Pot Icon" />
      </div>
      <div className="flex flex-col ml-200 w-21.5 h-17.5">
        <span className="text-preset-4 text-grey-500 mb-100">Total Saved</span>
        <span className="text-preset-2 pt-50">$850</span>
      </div>
    </div>
  );
};

export default PotsTotal;
