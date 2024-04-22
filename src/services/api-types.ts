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

export type Transaction = {
  _id: string
  title: string
  amount: number
  date: Date
  type: "expense" | "income"
  category: Category
}
