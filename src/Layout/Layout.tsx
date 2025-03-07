import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../sotres/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notification";

export default function Layout(){
    
    const loadSFavorites = useAppStore(state => state.loadFavorites)
 
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
        <Notification />
    </>
    )
}