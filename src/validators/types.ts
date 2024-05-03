import { z } from "zod"

import {
  createCategorySchema,
  createTransactionSchema,
  filterTransactionSchema,
  financialEvolutionFilterSchema
} from "./schema"

export type CreateCategoryData = z.infer<typeof createCategorySchema>

export type CreateTransactionData = z.infer<typeof createTransactionSchema>

export type TransctionFilterData = z.infer<typeof filterTransactionSchema>

export type FinancialEvolutionFilterData = z.infer<
  typeof financialEvolutionFilterSchema
>
