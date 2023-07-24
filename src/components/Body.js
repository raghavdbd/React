import { restrurentlist } from "../config"
import Card from "./Cards"
const Body = () =>{
    return (
      // here we are passing arguments which is props 
        <div id="Restrurent">
          {
            restrurentlist.map(restaurant =>{
            return   <Card {...restaurant.data} key={restaurant.data.id}/>
    
    
            })
          }
            {/* <Card restaurant ={restrurentlist[0].data} />
            <Card restaurant ={restrurentlist[1].data} />
            <Card  restaurant ={restrurentlist[2].data}/>
            <Card  restaurant ={restrurentlist[3].data}/>
            <Card restaurant ={restrurentlist[4].data}/>
            <Card restaurant ={restrurentlist[5].data}/>
             */}
            
        </div>
    )
    
    }

    export default Body