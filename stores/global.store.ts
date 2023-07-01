import { create } from "zustand";

export type Category = {
  id?: string;
  icon: string;
  name: string;
  type: "Income" | "Expense";
};

export type Budget = {
  id?: string;
  category: Category;
  month: string;
  year: string;
  total: string;
  spent: string;
  currency: string;
};

type GlobalState = {
  categories: Category[];
  budgets: Budget[];
  addCategory: (category: Category) => void;
  addBudget: (budget: Budget) => void;
};

export let useGlobalStore = create<GlobalState>((set) => ({
  categories: [],
  budgets: [
    {
      category: {
        icon: "🌲",
        name: "Festivals",
        type: "Expense",
      },
      month: "6",
      year: "2023",
      total: "500",
      spent: "250",
      currency: "USD",
    },
  ],
  addCategory: (category: Category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
  addBudget: (budget: Budget) =>
    set((state) => ({
      budgets: [...state.budgets, budget],
    })),
}));
