import axios from "axios"

import { Category, CreateCategories } from "./api-types"

export class APIservice {
  private static client = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })

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
}
