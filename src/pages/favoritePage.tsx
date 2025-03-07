import { useMemo } from "react"
import { useAppStore } from "../sotres/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function FavoritePage(){

    const favorites = useAppStore(state => state.favorites)
    const hasFavorites = useMemo(()=> favorites.length > 0, [favorites])

    return(
            <>
                <h1 className="text-6xl font-extrabold bg-purple-600 ">Pagina Home
            
            {
            hasFavorites ? (
                <div className="grid grid-cols-4 md:grid-cols-4 2xl:grid-cols-4 my-10 gap-10 ">
                
                    {
                        favorites.map(drink => (
                            <DrinkCard drink={drink} key={drink.idDrink}/>   
                        ))
                    }
                </div>
                
            ): (
                <p className="my-10 text-center text-2x1">No bebidas,fuera!</p>
            )
               
            }
            </h1>
             </>
        )
    
}