import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <div>
        <div>
            <img src={drink.strDrinkThumb} alt={'Imagen de '+ drink.strDrink} />
        </div>
        <p>{drink.strDrink}</p>
    </div>
  )
}
