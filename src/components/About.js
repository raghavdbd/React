import React from "react";
import Header from "./Header";
import Profile from "./profile"
import Profileclass from "./profileclass"

// const About2 =()=>{
//     return(
//         <>
 
//     <div id="About">
//         <h1>About us Page</h1>
//         <h2>Namaste React Live Course Page</h2>
       
//     </div>
//     <Profile name={"abv"}/>
//         <Profileclass name={"dssd"}/>
//     </>
    
// )}

class About extends React.Component{
    constructor(props){
        super(props);

        //  we initialize state here because whwneve  we class is created constructor called by default
        this.state

    }
    componentDidMount(){
        //  best way to call api is due to it will call after render
        console.log("componentdidmount")
    }

    render(){
        return(
            <>
     
        <div id="About">
            <h1>About us Page</h1>
            <h2>Namaste React Live Course Page</h2>
           
        </div>
        <Profile name={"abv"}/>
            <Profileclass name={"dssd"}/>
        </>
        
    )


    }




}

export default About;