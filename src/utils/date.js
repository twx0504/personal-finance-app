const getMonth = (date) => new Date(date).getMonth();

const getCurrentMonth = () => new Date().getMonth();

const milliSecondToDay = (sec) => sec / (1000 * 60 * 60 * 24);

const getPrevMonth = (date) => {
  let tempDate;
  if (date === undefined) {
    tempDate = new Date();
  } else {
    tempDate = new Date(date);
  }
  const currentMonth = tempDate.getMonth();
  tempDate.setDate(1);
  tempDate.setMonth(currentMonth - 1);
  return tempDate.getMonth();
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

export {
  formatDate,
  getMonth,
  getCurrentMonth,
  getPrevMonth,
  milliSecondToDay,
};
