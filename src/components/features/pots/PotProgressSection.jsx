import ProgressBar from "../../ui/ProgressBar";
import { formatMoney } from "../../../utils/money";
import { ACTIONS } from "../../../constants/action";

const PotProgressSection = ({
  title,
  target,
  total,
  theme,
  amount = undefined,
  type = undefined,
}) => {
  // Make sure the amount is not NaN
  const numAmount = Number(amount) || 0;
  const progress = ((total / target) * 100).toFixed(2);

  const newTotal =
    type === "Withdraw"
      ? Math.max(total - numAmount, 0)
      : Math.min(total + numAmount, target);

  const progressDelta =
    type === undefined
      ? undefined
      : type === ACTIONS.WITHDRAW
        ? -numAmount
        : numAmount;

  return (
    <section className="pt-[12px]">
      <div className="flex justify-between items-center mb-200">
        <span className="text-preset-4 text-grey-500">{title}</span>
        <span className="text-preset-1">{formatMoney(newTotal)}</span>
      </div>
      <ProgressBar
        target={target}
        total={total}
        theme={theme}
        trackClassName="flex gap-x-[2px] w-full h-100 bg-beige-100 rounded-full"
        barClassName="h-100"
        delta={progressDelta}
      />
      <div className="flex justify-between mt-3.25">
        <span className="text-preset-5-bold text-grey-500">{progress}%</span>
        <span className="text-preset-5 text-grey-500">
          Target of {formatMoney(target)}
        </span>
      </div>
    </section>
  );
};

export default PotProgressSection;
