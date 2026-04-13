import { CATEGORY_TYPES } from "./category";
import { SORT_TYPES } from "./sort";

export const SORT_OPTIONS = [
  { label: "Latest", value: SORT_TYPES.LATEST },
  { label: "Oldest", value: SORT_TYPES.OLDEST },
  { label: "A to Z", value: SORT_TYPES.A_Z },
  { label: "Z to A", value: SORT_TYPES.Z_A },
  { label: "Highest", value: SORT_TYPES.HIGHEST },
  { label: "Lowest", value: SORT_TYPES.LOWEST },
];

export const CATEGORY_OPTIONS = [
  { label: "All Transactions", value: CATEGORY_TYPES.ALL },
  { label: "Entertainment", value: CATEGORY_TYPES.ENTERTAINMENT },
  { label: "Bills", value: CATEGORY_TYPES.BILLS },
  { label: "Groceries", value: CATEGORY_TYPES.GROCERIES },
  { label: "Dining Out", value: CATEGORY_TYPES.DINING_OUT },
  { label: "Transportation", value: CATEGORY_TYPES.TRANSPORTATION },
  { label: "Personal Care", value: CATEGORY_TYPES.PERSONAL_CARE },
  { label: "General", value: CATEGORY_TYPES.GENERAL },
  { label: "Education", value: CATEGORY_TYPES.EDUCATION },
  { label: "Lifestyle", value: CATEGORY_TYPES.LIFESTYLE },
];
