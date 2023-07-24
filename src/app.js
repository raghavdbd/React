import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from"./components/Body"
import Footer1 from "./components/Footer"




 




const applayout =()=>{
    return(
        <>
        <Header />
        <Body />
        <Footer1 />

        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(applayout())


