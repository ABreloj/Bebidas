import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { usepAppStore } from "../sotres/useAppStore";
import { useEffect } from "react";


export default function Layout(){
    
    const loadSFavorites = usepAppStore(state => state.loadFavorites)
 
    useEffect(() => {
        loadSFavorites()
    })

    return(
        <>
        <Header />
        <main className="container mx-auto py-16">
            <Outlet />
        </main>
        
        <Modal/>
    </>
    )
}