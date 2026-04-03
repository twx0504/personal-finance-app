import { NavLink } from "react-router";
import {
  IconOverview,
  IconTransactions,
  IconBudgets,
  IconPots,
  IconRecurringBills,
} from "../components/ui/Icons";

const navItemsList = [
  {
    Icon: IconOverview,
    title: "Overview",
    to: "/",
  },
  {
    Icon: IconTransactions,
    title: "Transactions",
    to: "transactions",
  },
  {
    Icon: IconBudgets,
    title: "Budgets",
    to: "budgets",
  },
  {
    Icon: IconPots,
    title: "Pots",
    to: "pots",
  },
  {
    Icon: IconRecurringBills,
    title: "Recurring Bills",
    to: "bills",
  },
];

const NavList = ({
  containerClass,
  listClass,
  itemClass,
  linkClass,
  isCollapsed,
}) => {
  return (
    <nav className={`navlist-container ${containerClass}`}>
      <ul className={listClass}>
        {navItemsList.map(({ Icon, title, to }) => {
          const IconComponent = Icon;
          return (
            <li key={title} className={itemClass}>
              <NavLink className={`navlist-link ${linkClass}`} to={to}>
                <IconComponent className="active-svg" />

                {!isCollapsed && (
                  <span
                    className={`hidden md:inline-block text-preset-5-bold xl:text-preset-3`}
                  >
                    {title}
                  </span>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
