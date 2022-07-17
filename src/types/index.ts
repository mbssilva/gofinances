export interface TransactionCardProps {
  type: "positive" | "negative";
  recurrence?: "Fixo" | "Variável";
  title: string;
  subtitle: string;
  description: string;
  label: string;
  amount: string;
  category: string;
  date: string;
}

export interface Category {
  key: string;
  name: string;
  icon?: string;
  color?: string;
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
  __v: number;
  recurrence: "Fixo" | "Variável";
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
  __v: number;
  id: string;
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
  recurrence: "Fixo" | "Variável";
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
