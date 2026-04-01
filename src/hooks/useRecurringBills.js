import { useMemo } from "react";
import { getPrevMonth, getMonth } from "../utils/date";
import {
  getNextRecurringDate,
  checkDueSoon,
  checkHasPaid,
} from "../utils/bills";

const useRecurringBills = (transactions) => {
  // recurringBills
  const recurringBills = useMemo(
    () =>
      transactions
        .filter(({ recurring, date }) => {
          return recurring === true && getMonth(date) === getPrevMonth();
        })
        .map(({ date, ...rest }) => {
          const dueDate = getNextRecurringDate(date);
          const isDue = checkDueSoon(dueDate);
          const isPaid = checkHasPaid(dueDate);
          return {
            dueDate,
            isDue,
            isPaid,
            ...rest,
          };
        }),
    [transactions],
  );

  const stats = useMemo(
    () =>
      recurringBills.reduce(
        (acc, t) => {
          const { isDue, isPaid, amount } = t;

          // Total
          acc.total.amount += Math.abs(amount);

          // Paid
          if (isPaid) {
            acc.paid.amount += Math.abs(amount);
            acc.paid.count++;
          } else if (isDue) {
            // Due Soon
            acc.dueSoon.amount += Math.abs(amount);
            acc.dueSoon.count++;
          } else {
            // Upcoming
            acc.unpaid.amount += Math.abs(amount);
            acc.unpaid.count++;
          }

          return acc;
        },
        {
          total: { amount: 0, count: recurringBills.length },
          paid: { amount: 0, count: 0 },
          unpaid: { amount: 0, count: 0 },
          dueSoon: { amount: 0, count: 0 },
        },
      ),
    [recurringBills],
  );

  return {
    recurringBills,
    ...stats,
  };
};

export default useRecurringBills;
