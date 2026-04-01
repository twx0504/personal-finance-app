import { formatMoney } from "../../utils/money";

const DonutContent = ({ totalSpent, totalMax }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2">
      <p className="text-center text-preset-1">{formatMoney(totalSpent)}</p>
      <p className="text-center text-preset-5 text-grey-500">
        of {formatMoney(totalMax)} limit
      </p>
    </div>
  );
};

export default DonutContent;
