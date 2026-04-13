import { CATEGORY_TYPES } from "../constants/category";

const filterBySearch = (data, search) => {
  if (!search) return data;
  if (search) {
    return data.filter((t) => {
      return t.name.toLowerCase().includes(search.toLowerCase());
    });
  }
};

const filterByCategory = (data, category) => {
  if (category === CATEGORY_TYPES.ALL) return data;

  return data.filter((item) => item.category.toLowerCase() === category);
};

const sortBy = (data, sortType) => {
  const sortHandlers = {
    latest: (a, b) => new Date(b.date) - new Date(a.date),
    oldest: (a, b) => new Date(a.date) - new Date(b.date),
    a_z: (a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
    z_a: (a, b) => b.name.localeCompare(a.name, "en", { sensitivity: "base" }),
    highest: (a, b) => b.amount - a.amount,
    lowest: (a, b) => a.amount - b.amount,
  };
  return data.toSorted(sortHandlers[sortType]);
};

export { filterByCategory, filterBySearch, sortBy };
