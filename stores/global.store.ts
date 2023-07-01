import { create } from "zustand";
import { categories } from "./mock.data";

export type Budget = {
  total: string;
  spent: string;
  currency: string;
  month?: string;
  year?: string;
};

export type Category = {
  icon: string;
  name: string;
  type: "Income" | "Expense";
  budgets?: Budget[]; // one per month
};

type GlobalState = {
  categories: Category[];
  addCategory: (category: Category) => void;
  addBudget: (categoryName: string, budget: Budget) => void;
};

export let useGlobalStore = create<GlobalState>((set) => ({
  categories: [...categories],

  // Add new category
  addCategory: (category: Category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),

  // Add a budget
  addBudget: (categoryName: string, budget: Budget) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) => {
        if (category.name === categoryName) {
          const existingBudgetIndex = category.budgets?.findIndex(
            (b) => b.month === budget.month && b.year === budget.year
          );

          if (existingBudgetIndex !== undefined && existingBudgetIndex !== -1) {
            // Budget with the same month and year exists, modify it
            const updatedBudgets = [...category.budgets!];
            updatedBudgets[existingBudgetIndex] = {
              ...updatedBudgets[existingBudgetIndex],
              ...budget,
            };

            return {
              ...category,
              budgets: updatedBudgets,
            };
          } else {
            // Budget with the same month and year doesn't exist, create a new budget
            return {
              ...category,
              budgets: [...(category.budgets || []), budget],
            };
          }
        }
        return category;
      });

      return {
        categories: updatedCategories,
      };
    }),
}));
