import { Account, Category, Transaction } from "./global.store";

export let accounts: Account[] = [
  {
    name: "Cash",
    amount: 850,
    currency: "USD",
  },
  {
    name: "Debit Card",
    amount: 12000,
    currency: "USD",
  },
];

export let categories: Category[] = [
  {
    icon: "🍉",
    name: "Grocceries",
    type: "Expense",
    budgets: [
      {
        total: 500,
        spent: 30,
        currency: "USD",
        month: "6",
        year: "2023",
      },
      {
        total: 500,
        spent: 410,
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
        total: 500,
        spent: 90,
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
    amount: 19,
    datetime: new Date(),
    account: accounts[0],
    category: categories[2],
    currency: "USD",
  },
  {
    description: "",
    amount: 19,
    datetime: new Date(),
    account: accounts[0],
    category: categories[1],
    currency: "USD",
  },
];
