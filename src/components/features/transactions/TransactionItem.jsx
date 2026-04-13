import AmountLabel from "../shared/AmountLabel";
import { formatDate } from "../../../utils/date";

const TransactionItemOverview = ({ avatar, name, amount, date }) => (
  <div className="flex md:gap-x-400 pb-250">
    {/* Recipient / Sender */}
    <div className="flex items-center grow">
      <img className="rounded-full w-400" src={avatar} alt="" />
      <span className="ml-200 text-preset-4-bold">{name}</span>
    </div>
    <div className="flex flex-col text-right">
      {/* Amount */}
      <AmountLabel className="text-preset-4-bold mb-100" amount={amount} />
      {/* Date */}
      <span className="text-preset-5 text-grey-500">{formatDate(date)}</span>
    </div>
  </div>
);

const TransactionItemFull = ({ avatar, name, category, amount, date }) => (
  <div className="flex pb-250 md:grid md:grid-cols-[10.7fr_3fr_3fr_5fr] md:gap-400">
    <div className="flex items-center grow md:grow-0">
      <img className="rounded-full w-400" src={avatar} alt="" />
      <div className="flex flex-col ml-200">
        <span className="text-preset-4-bold">{name}</span>
        <span className="md:hidden text-preset-5 text-grey-500">
          {category}
        </span>
      </div>
    </div>
    <span className="text-preset-5 text-grey-500 hidden md:inline">
      {category}
    </span>
    <div className="flex flex-col-reverse text-right md:hidden">
      <span className="text-preset-5 text-grey-500">{formatDate(date)}</span>
      <AmountLabel className="text-preset-4-bold" amount={amount} />
    </div>
    <span className="hidden text-preset-5 text-grey-500 md:inline">
      {formatDate(date)}
    </span>
    <AmountLabel
      className="hidden text-preset-4-bold md:inline text-right"
      amount={amount}
    />
  </div>
);

const TransactionItem = ({ variant = "full", ...props }) => {
  const isOverview = variant === "overview";

  return (
    <li className={`border-b border-b-grey-100 last:border-b-0`}>
      {isOverview ? (
        <TransactionItemOverview {...props} />
      ) : (
        <TransactionItemFull {...props} />
      )}
    </li>
  );
};

export default TransactionItem;
