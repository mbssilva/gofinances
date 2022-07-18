export interface Category {
  key: string;
  name: string;
  icon?: string;
  color?: string;
}

export interface TransactionBackend {
  type: "positive" | "negative";
  recurrence?: "Fixo" | "Variável" | null;
  title: string;
  subtitle: string;
  description: string;
  label: string;
  category: string;
  date: string;
  value: number;
  createdAt: string;
  id: string;
  amount: string;
}

export interface RevenueBackend {
  _id: string;
  user: string;
  date: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  value: number;
  label: "";
  createdAt: string;
  updatedAt: string;
  recurrence: "Fixo" | "Variável" | null;
  id: string;
}

export interface ExpenseBackend {
  _id: string;
  user: string;
  date: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  value: number;
  label: "";
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface TransactionCard {
  type: "positive" | "negative";
  recurrence?: "Fixo" | "Variável" | null;
  title: string;
  subtitle: string;
  description: string;
  label: string;
  amount: string;
  category: string;
  id: string;
  date: Date;
  createdAt: Date;
}

export interface Revenue {
  user: string | null;
  date: Date;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  value: number;
  label: "";
  createdAt: Date;
  recurrence: "Fixo" | "Variável" | null;
  id: string;
}

export interface Expense {
  user: string | null;
  date: Date;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  value: number;
  label: "";
  createdAt: Date;
  id: string;
}
