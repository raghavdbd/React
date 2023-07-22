import React from "react";
import ReactDom from "react-dom/client"

const heading=
(
<h1>
    
    hellow world
</h1>
);
const Title=()=>{
    retrun (
        <>
        
        {heading}
        <h1 id="title">
            React Aapp
        </h1>
        </>
    )
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(Title)


