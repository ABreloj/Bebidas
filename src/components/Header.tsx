import { ChangeEvent, useEffect, useMemo, useState, FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../sotres/useAppStore";

export default function Header() {

       



        const categories = useAppStore((state) => state.categories)

        const searchRecipes = useAppStore((state) => state.searchRecipes)
        
        const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
            e.preventDefault()

            if(Object.values(searchFilter).includes('')){
                console.log('Campos obligatorios cabeza de tabla')
                return

            }
            
            searchRecipes(searchFilter)

        }    
    
        const fetchCategories = useAppStore((state) => state.fetchCategories)

        useEffect(() => {
            fetchCategories()
        }, []) 

    const { pathname } = useLocation()

    const isHome = useMemo(() => pathname === '/' , [pathname])

    const [searchFilter, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })

    function handleChange(e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>){
        setSearchFilters({
            ...searchFilter, [e.target.name]: e.target.value
        })
    
    }



  return (
    <header className={ isHome ? 'bg-header  bg-center bg-cover' : ' bg-purple-800 bg-state-801' }>
        <div className="mx-auto container px-5 py-12 ">
            <div className="flex justify-between items-center ">
                <div>
                    <img className="w-32 " src="/logo.svg" alt="logotipo" />
                </div>


                <nav className="flex gap-7">
                    <NavLink 
                    to="/"
                    className={({isActive})=> isActive? 'text-purple-500 uppercase font-bold':'text-white uppercase font-bold'}
                    >Inicio</NavLink>
                    <NavLink 
                    to="/favoritos"
                    className={({isActive})=> isActive? 'text-purple-500 uppercase font-bold':'text-white uppercase font-bold'}
                    >Favoritos</NavLink>
                </nav>

            </div>

            { isHome && (
                <form className="md:w-1/2 2x1:w-1/3 bg-purple-500 my-32 p-11 round" onSubmit={handleSubmit}>

                    <div className="space-y-4">
                        <label htmlFor="ingredient"  className="block text-white uppercase font-extrabold text-lg">
                            Name o Ingredients 
                        </label>

                        <input id="ingredient" onChange={handleChange} value={searchFilter.ingredient}  type="text" name="ingredient" className='p-3 w-full rounded-lg focus:outline-none' placeholder='Nombre o Ingredientes. Ej. La Cocacola'/>

                    </div>
                    <div className="space-y-4">
                        <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">
                            La categoria 
                        </label>

                        <select id="category" name="category" onChange={handleChange} value={searchFilter.category} className='p-3 w-full rounded-lg focus:outline-none'>
                            <option value="">Seleccionar </option>
                            {  
                                  categories.drinks.map(category => (
                                    <option
                                    value={category.strCategory}
                                    key={category.strCategory}>
                                        {category.strCategory}
                                </option>
                                 ))
                                }
                        </select>
                                     
                    </div>

                    <input type='submit' value='Buscar Recetas' className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" />   

                </form>
            )}

        </div>
    </header>
  )
}