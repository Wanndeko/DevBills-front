import { z } from "zod"

import { createCategorySchema } from "./schema"

export type CreateCategoryData = z.infer<typeof createCategorySchema>
