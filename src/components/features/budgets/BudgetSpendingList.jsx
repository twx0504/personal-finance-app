import { formatMoney } from "../../../utils/money";
import { formatDate } from "../../../utils//date";
import { Link } from "react-router";

const BudgetSpendingList = ({ latestSpendings, category = "" }) => {
  return (
    <section className="p-200 rounded-lg bg-beige-100">
      <div className="flex justify-between items-center mb-250">
        <h2 className="text-preset-3">Latest Spending</h2>
        <Link
          className="text-preset-4 text-grey-500"
          to={`/transactions${category ? `?category=${encodeURIComponent(category)}&type=spending` : ""}`}
        >
          See All
        </Link>
      </div>
      <ul className="space-y-[12px]">
        {latestSpendings.map(({ id, amount, name, date, avatar }) => {
          return (
            <li
              key={id}
              className="flex items-center text-preset-5-bold pb-[12px] border-b border-b-grey-500/10 last:pb-0 last:border-0"
            >
              <img
                src={avatar}
                className="w-[32px] h-[32px] rounded-full mr-200"
                alt=""
                width={32}
                height={32}
              />
              <h3 className="flex-1">{name}</h3>
              <div className="flex flex-col">
                <span className="mb-50">{formatMoney(amount)}</span>
                <span className="text-preset-5 text-grey-500">
                  {formatDate(date)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BudgetSpendingList;
