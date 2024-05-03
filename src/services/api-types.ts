export type CreateCategories = {
  title: string
  color: string
}

export type Category = {
  _id: string
  title: string
  color: string
}

export type CreateTransaction = {
  categoryId: string
  title: string
  amount: number
  date: string
  type: "expense" | "income"
}

export type TransactionFilter = {
  title?: string
  categoryId?: string
  beginDate: string
  endDate: string
}

export type Transaction = {
  _id: string
  title: string
  amount: number
  date: Date
  type: "expense" | "income"
  category: Category
}

export type Balance = {
  _id: string | null
  incomes: number
  expenses: number
  balance: number
}

export type Expense = {
  _id: string
  title: string
  amount: number
  color: string
}

export type DashBoard = {
  balance: Balance
  expenses: Expense[]
}

export type DashboardFilters = {
  beginDate: string
  endDate: string
}

export type FinancialEvolutionFilters = {
  year: string
}

export type FinancialEvoluiton = {
  _id: [number, number]
  incomes: number
  expenses: number
  balance: number
}
