import { milliSecondToDay } from "./date";
const DUE_SOON = 7;

const checkDueSoon = (date) => {
  const now = new Date();
  const d = new Date(date);
  const diff = milliSecondToDay(d - now);
  return diff >= 0 && diff <= DUE_SOON;
};

const checkHasPaid = (due) => {
  const today = new Date();
  const diff = new Date(due) - today;
  return diff < 0;
};

const getNextRecurringDate = (date) => {
  const d = new Date(date);
  // Store original month days
  const days = d.getDate();

  // Set date to 1 to make sure the date calculation is correct
  d.setDate(1);
  // Set next month
  d.setMonth(d.getMonth() + 1);

  // Calculate how many days in next month
  const daysInNextMonth = new Date(
    d.getFullYear(),
    d.getMonth() + 1,
    0,
  ).getDate();

  // Make sure the days doesn't exceed the days in the next month
  // E.g., 31 Jan -> 28 Feb
  d.setDate(Math.min(days, daysInNextMonth));
  return d.toISOString();
};

export { checkDueSoon, checkHasPaid, getNextRecurringDate };
