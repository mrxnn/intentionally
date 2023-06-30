import { create } from "zustand";

export type Category = {
  id?: string;
  icon: string;
  name: string;
  type: "Income" | "Expense";
};

type CategoryState = {
  categories: Category[];
  addCategory: (category: Category) => void;
};

export let useCategoriesStore = create<CategoryState>((set) => ({
  categories: [],
  addCategory: (category: Category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
}));
