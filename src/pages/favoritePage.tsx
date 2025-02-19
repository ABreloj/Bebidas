import { useMemo } from "react"
import { usepAppStore } from "../sotres/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function FavoritePage(){

    const favorites = usepAppStore(state => state.favorites)
    const hasFavorites = useMemo(()=> favorites.length > 0, [favorites])

    return(
            <>
                <h1 className="text-6xl font-extrabold">Pagina Home</h1>
            
            {
            hasFavorites ? (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
                
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
             </>
        )
    
}