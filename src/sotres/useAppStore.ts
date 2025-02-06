import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from  './recipeSlice'
                                              
export const usepAppStore = create<RecipesSliceType>()( devtools((...a) => ({
                                        
    ...createRecipesSlice(...a)
    
})))