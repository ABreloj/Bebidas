import { StateCreator } from 'zustand'
import { getCategories, getRecipes } from '../service/RecipeService'
import type { Categories, Recipes, SearchFilter } from "../types"



export type RecipesSliceType = {
    categories: Categories 
    recipes: Recipes
    fetchCategories: () => Promise<void> 
    searchRecipes: (searchFlters: SearchFilter) => Promise<void>
    
 }

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) =>  ({
    categories: {
        drinks: []
    },
    recipes: {
        drinks: []
    },

    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },

    searchRecipes: async (filters) =>{
        const recipes = await getRecipes(filters)
        set({
            recipes
        })

    }

    


})