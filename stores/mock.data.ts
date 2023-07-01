import { Budget, Category } from "./global.store";

export let categories: Category[] = [
  {
    icon: "🍉",
    name: "Grocceries",
    type: "Expense",
    budgets: [
      {
        total: "500",
        spent: "30",
        currency: "USD",
        month: "6",
        year: "2023",
      },
      {
        total: "500",
        spent: "410",
        currency: "USD",
        month: "6",
        year: "2023",
      },
    ],
  },
  {
    icon: "🚕",
    name: "Transportation",
    type: "Expense",
    budgets: [],
  },
  {
    icon: "🌵",
    name: "Environment",
    type: "Expense",
    budgets: [
      {
        total: "500",
        spent: "90",
        currency: "USD",
        month: "6",
        year: "2023",
      },
    ],
  },
];
