import { create } from "zustand";
import { categories } from "./mock.data";

export type Budget = {
  id?: string;
  total: string;
  spent: string;
  currency: string;
  month?: string;
  year?: string;
};

export type Category = {
  id?: string;
  icon: string;
  name: string;
  type: "Income" | "Expense";
  budgets?: Budget[]; // one per month
};

type GlobalState = {
  categories: Category[];
  addCategory: (category: Category) => void;
};

export let useGlobalStore = create<GlobalState>((set) => ({
  categories: [...categories],
  addCategory: (category: Category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
}));
