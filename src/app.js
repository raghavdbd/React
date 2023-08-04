import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from"./components/Body"
import Footer1 from "./components/Footer"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js"
import Error from "./components/Error"
import Contact from "./components/Contacts"
import Restaurentmenu from "./components/Restaurentmenu"


//  this is old way of doing import now we do lazy loading so for that
// import Instamart from "./components/instamart"

const Instamart=lazy(()=> import("./components/instamart"))



 




const Applayout =()=>{
    return(
        <>
        <Header />
        {/* {outlet} */}
        <Outlet />
        <Footer1 />

        </>
    )
}
// Creating a router
const approuter=createBrowserRouter([
{
    path:"/",
    element:<Applayout />,
    errorElement:<Error />,
    children:[
        {
            path:"/about",
            element:<About />,
             errorElement:<Error />
        },
        
        {
            path:"/contact",
            element:<Contact />,
             errorElement:<Error />
        },
        {
            path:"/",
            element:<Body />,
             errorElement:<Error />
        },
        {
            path:"/restrurent/:id",
            element:<Restaurentmenu />,
             errorElement:<Error />

        },
        {
            path:"/instamart",
            element:<Suspense><Instamart /></Suspense>,
             errorElement:<Error />

        }
    ]

}


]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
// root.render(<about />);


