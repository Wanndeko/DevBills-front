import axios from "axios"

import {
  Category,
  CreateCategories,
  CreateTransaction,
  DashBoard,
  DashboardFilters,
  FinancialEvoluiton,
  FinancialEvolutionFilters,
  Transaction,
  TransactionFilter
} from "./api-types"

export class APIservice {
  private static client = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })

  static async createTransaction(
    CreateTransactionData: CreateTransaction
  ): Promise<Transaction> {
    const { data } = await APIservice.client.post<Transaction>(
      "/transactions",
      CreateTransactionData
    )
    return data
  }

  static async getDashBoard({
    beginDate,
    endDate
  }: DashboardFilters): Promise<DashBoard> {
    const { data } = await APIservice.client.get<DashBoard>(
      "/transactions/dashboard",
      {
        params: {
          beginDate,
          endDate
        }
      }
    )

    return data
  }

  static async getTransaction({
    title,
    categoryId,
    beginDate,
    endDate
  }: TransactionFilter): Promise<Transaction[]> {
    const { data } = await APIservice.client.get<Transaction[]>(
      "/transactions",
      {
        params: {
          ...(title?.length && { title }),
          ...(categoryId?.length && { categoryId }),
          beginDate,
          endDate
        }
      }
    )
    return data
  }
  static async createCategory(
    createCategoryData: CreateCategories
  ): Promise<Category> {
    const { data } = await APIservice.client.post<Category>(
      "/categories",
      createCategoryData
    )
    return data
  }

  static async getCategories(): Promise<Category[]> {
    const { data } = await APIservice.client.get<Category[]>("/categories")

    return data
  }

  static async getFinancialEvolution({
    year
  }: FinancialEvolutionFilters): Promise<FinancialEvoluiton[]> {
    const { data } = await APIservice.client.get<FinancialEvoluiton[]>(
      "/transactions/financial-evolution",
      {
        params: {
          year
        }
      }
    )
    return data
  }
}
