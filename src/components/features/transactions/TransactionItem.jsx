import AmountLabel from "../shared/AmountLabel";
import { formatDate } from "../../../utils/date";
const TransactionItem = ({ amount, avatar, date, name }) => {
  return (
    <li className="border-b border-b-grey-100 last:border-b-0">
      <div className="flex pb-250 last:pb-0">
        <div className="flex items-center grow pb-250">
          <img className="rounded-full w-400" src={avatar} alt="" />
          <span className="ml-200 text-preset-4-bold">{name}</span>
        </div>
        <div className="flex flex-col w-fit h-11.75">
          <AmountLabel className="text-preset-4-bold mb-100" amount={amount} />
          <span className="text-preset-5 text-grey-500">
            {formatDate(date)}
          </span>
        </div>
      </div>
    </li>
  );
};

export default TransactionItem;
