import { useMemo } from "react"
import { useAppStore } from "../sotres/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function FavoritePage(){

    const favorites = useAppStore(state => state.favorites)
    const hasFavorites = useMemo(()=> favorites.length > 0, [favorites])

    return(
            <>
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center py-10 shadow-xl rounded-lg border-4 border-purple-900 tracking-wide">Favoritas:</h1>
            {
            hasFavorites ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 p-10 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl shadow-lg border-2 border-gray-300">
                    {
                        favorites.map(drink => (
                            <DrinkCard drink={drink} key={drink.idDrink}/>   
                        ))
                    }
                </div>
            ): (
                <p className="my-10 text-center text-3xl text-gray-700 italic animate-pulse">No bebidas, ¡fuera!</p>
            )
            }
            </>
        )
}