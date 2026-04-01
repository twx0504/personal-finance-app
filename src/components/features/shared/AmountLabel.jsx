import { formatMoney } from "../../../utils/money";

const AmountLabel = ({ className = "", amount = 0 }) => {
  const hasSign = amount.toString().includes("-");
  const formattedAmount = formatMoney(amount);
  return (
    <span className={`${!hasSign ? "text-green" : ""} ${className}`}>
      {!hasSign ? `+${formattedAmount}` : formattedAmount}
    </span>
  );
};

export default AmountLabel;
