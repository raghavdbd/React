import { useState } from "react"
import { restrurentlist } from "../config"
import Card from "./Cards"
// make a filter function 
// This function help us in filtering the searchtxt in this we are passing searchtxt na dlist of resturents
//  after that we are filter function which filter on the basis of searchtxt from restaurents.data.name and then return the filter data 
function filter(searchtxt,restaurants){

const filterdata = restaurants.filter((restaurant) =>
restaurant.data.name.includes(searchtxt)
);
return filterdata;
}
const Body = () =>{
    const [restaurants,setrestaurants]= useState(restrurentlist)
    const [searchtxt,setsearchtxt]=useState();
    //  heare we have create a handle search which chech if search text is empty then it shows no result fount
    const handleSearch = () => {
        if (searchtxt) {
          // If searchtxt is not empty, apply the filter function to get the filtered data
          const data = filter(searchtxt, restrurentlist);
          setrestaurants(data);
        } else {
          // If searchtxt is empty, restore the original data
          setrestaurants(restrurentlist);
        }
      };
    return (
        <>
        <div className="search">
            {/* we have use a on change method so that search tect will change according the input that we have given ans e.target.value is the value that we have type in input box */}
       <input type="text" placeholder="Search" value={searchtxt}
       onChange={(e)=>{
        setsearchtxt(e.target.value);


       }}
       
       />
       <button className="Search-btn"
       onClick={handleSearch}
        //  we need to filter the data
        //  in this what we are doing that we have create a data variable 
        // const data=filter(searchtxt,restaurants);
        // setrestaurants(data)
        
        

       
       >Search



       </button>

        </div>
      
        <div id="Restrurent">
          
            {restaurants.length ===0 ?(
                <p>No Result Found</p>


            ):(
                restaurants.map(restaurant =>{
                    return   <Card {...restaurant.data} key={restaurant.data.id}/>
                    
            
                    })

            )}
            
           
                
            {/* <Card restaurant ={restrurentlist[0].data} />
            <Card restaurant ={restrurentlist[1].data} />
            <Card  restaurant ={restrurentlist[2].data}/>
            <Card  restaurant ={restrurentlist[3].data}/>
            <Card restaurant ={restrurentlist[4].data}/>
            <Card restaurant ={restrurentlist[5].data}/>
             */}
            
        </div>
        </>
    )
    
    }

    export default Body