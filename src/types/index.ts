import { z } from 'zod'
import { CategoriesAPIResponseSchema } from '../views/recipe-schema'


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>