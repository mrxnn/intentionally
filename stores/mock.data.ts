import { Budget, Category, Transaction } from "./global.store";

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

export let transactions: Transaction[] = [
  {
    description: "",
    amount: "35",
    datetime: new Date(),
    category: categories[0],
  },
  {
    description: "",
    amount: "50",
    datetime: new Date(),
    category: categories[0],
  },
  {
    description: "",
    amount: "19",
    datetime: new Date(),
    category: categories[2],
  },
  {
    description: "",
    amount: "19",
    datetime: new Date(),
    category: categories[1],
  },
];
