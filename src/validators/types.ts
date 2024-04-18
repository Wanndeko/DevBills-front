import { z } from "zod"

import { createCategorySchema, createTransactionSchema } from "./schema"

export type CreateCategoryData = z.infer<typeof createCategorySchema>

export type CreateTransactionData = z.infer<typeof createTransactionSchema>
