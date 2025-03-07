import { useAppStore } from "../sotres/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  
    const selectRecipe = useAppStore((state) => state.selectRecipe)
  
    return (
        <div className="shadow-lg border-8 border-yellow-300 rounded-xl">
        <div className="overflow-hidden">
            <img 
            src={drink.strDrinkThumb} 
            alt={'Imagen de ' + drink.strDrink}
            className="hover:scale-125 transition-transform hover:rotate-2"
             />
        </div>
        <div className="p-5 bg-green-400">
            <h2 className="text-2xl truncate font-black black">
                {drink.strDrink}
            </h2>
            <button
                type="button"
                className="bg-purple-400 purple:bg-orange-500 mt-5 w-full border-4 rounded-full border-purple-800 p-3 font-bold text-white text-lg"
                onClick={() => selectRecipe(drink.idDrink)}
                >Ver Receta</button>
        </div>
    </div>


  )
}
