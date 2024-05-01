import { z } from "zod"

import {
  createCategorySchema,
  createTransactionSchema,
  filterTransactionSchema
} from "./schema"

export type CreateCategoryData = z.infer<typeof createCategorySchema>

export type CreateTransactionData = z.infer<typeof createTransactionSchema>

export type TransctionFilterData = z.infer<typeof filterTransactionSchema>
