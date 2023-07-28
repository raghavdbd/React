import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from"./components/Body"
import Footer1 from "./components/Footer"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js"
import Error from "./components/Error"
import Contact from "./components/Contacts"



 




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
        }
    ]

}


]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
// root.render(<about />);


