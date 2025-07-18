import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"
import { ScrollToTop } from "./ScrollToTop"

export const Root = () => {
    return(
        <>
           <ScrollToTop/>
           <Header/>
           <Outlet/>
           <Footer/>
        </>
    )

}