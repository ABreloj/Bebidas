import {  BrowserRouter, Routes, Route  } from "react-router-dom"
import HomePAGE from "./pages/HomePage";
import FavoritePage from "./pages/favoritePage";

export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= { <HomePAGE/> } />
                <Route path="Favoritos/" element= { <FavoritePage/> } />
            </Routes>
        </BrowserRouter>
    )
}