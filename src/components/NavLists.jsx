import { NavLink } from "react-router";
import {
  IconOverview,
  IconTransactions,
  IconBudgets,
  IconPots,
  IconRecurringBills,
} from "./Icons";

const navItemLists = [
  {
    Icon: <IconOverview className="active-svg" />,
    title: "Overview",
    to: "/",
  },
  {
    Icon: <IconTransactions className="active-svg" />,
    title: "Transactions",
    to: "transactions",
  },
  {
    Icon: <IconBudgets className="active-svg" />,
    title: "Budgets",
    to: "budgets",
  },
  {
    Icon: <IconPots className="active-svg" />,
    title: "Pots",
    to: "pots",
  },
  {
    Icon: <IconRecurringBills className="active-svg" />,
    title: "Recurring Bills",
    to: "bills",
  },
];

const NavLists = ({ containerClass, listClass, itemClass, linkClass }) => {
  return (
    <nav className={`navlist-container ${containerClass}`}>
      <ul className={listClass}>
        {navItemLists.map(({ Icon, title, to }) => {
          return (
            <li key={title} className={itemClass}>
              <NavLink className={`navlist-link ${linkClass}`} to={to}>
                {Icon}
                <span className="hidden md:inline-block text-preset-5-bold">
                  {title}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLists;
