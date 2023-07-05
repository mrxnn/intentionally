import { create } from "zustand";
import { accounts, categories, transactions } from "./mock.data";

export type Account = {
  name: string;
  amount: number;
  currency: string;
};

export type Budget = {
  total: number;
  spent: number;
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

export type Transaction = {
  description: string;
  amount: number;
  datetime: Date;
  account: Account;
  category: Category;
};

type GlobalState = {
  accounts: Account[];
  categories: Category[];
  transactions: Transaction[];
  addCategory: (category: Category) => void;
  addBudget: (categoryName: string, budget: Budget) => void;
  addTransaction: (transaction: Transaction) => void;
};

export let useGlobalStore = create<GlobalState>((set) => ({
  accounts: [...accounts],
  categories: [...categories],
  transactions: [...transactions],

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

  // Add a new transaction
  addTransaction: (transaction: Transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction],
    })),
}));
