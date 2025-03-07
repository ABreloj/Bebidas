import { useMemo } from "react"
import { useAppStore } from "../sotres/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function HomePAGE(){
    const recipes = useAppStore((state) => state.recipes)

    const hasRecipes = useMemo(() =>recipes.drinks.length > 0 , [recipes])

    return(
        <>
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center border-4 border-purple-900 py-10 shadow-lg rounded-lg ">Pagina Principal</h1>
        {
        hasRecipes ? (
            <div className="grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-4 my-10 gap-10 p-5 bg-gray-300 rounded-lg shadow-md">
                {
                    recipes.drinks.map(drink => (
                        <DrinkCard drink={drink} key={drink.idDrink}/>   
                    ))
                }
            </div>
        ): (
            <p className="my-10 text-center text-2xl text-gray-700 italic">No bebidas, ¡fuera!</p>
        )
        }
         </>
    )
}
