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

// TODO: Render these options
export const BUDGET_CATEGORY_OPTIONS = [
  { label: "Entertainment", value: CATEGORY_TYPES.ENTERTAINMENT },
  { label: "Bills", value: CATEGORY_TYPES.BILLS },
  { label: "Groceries", value: CATEGORY_TYPES.GROCERIES },
  { label: "Dining Out", value: CATEGORY_TYPES.DINING_OUT },
  { label: "Transportation", value: CATEGORY_TYPES.TRANSPORTATION },
  { label: "Personal Care", value: CATEGORY_TYPES.PERSONAL_CARE },
  { label: "Education", value: CATEGORY_TYPES.EDUCATION },
  { label: "Lifestyle", value: CATEGORY_TYPES.LIFESTYLE },
  { label: "Shopping", value: CATEGORY_TYPES.SHOPPING },
  { label: "General", value: CATEGORY_TYPES.GENERAL },
];

export const THEME_OPTIONS = [
  { label: "Green", value: "#277C78" },
  { label: "Yellow", value: "#F2CDAC" },
  { label: "Cyan", value: "#82C9D7" },
  { label: "Navy", value: "#626070" },
  { label: "Red", value: "#C94736" },
  { label: "Purple", value: "#826CB0" },
  { label: "Turquoise", value: "#597C7C" },
  { label: "Brown", value: "#93674F" },
  { label: "Magenta", value: "#934F6F" },
  { label: "Blue", value: "#3F82B2" },
  { label: "Grey", value: "#97A0AC" },
  { label: "Army Green", value: "#7F9161" },
  { label: "Gold", value: "#CAB361" },
  { label: "Orange", value: "#BE6C49" },
];
export const BUDGET_ACTION_OPTIONS = [
  { label: "Edit Budget", value: "edit", isDangerous: false },
  { label: "Delete Budget", value: "delete", isDangerous: true },
];
