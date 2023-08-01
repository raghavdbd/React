import { useState, useEffect } from "react"
import { restrurentlist } from "../config"
import Card from "./Cards"
import { Link } from "react-router-dom";
// make a filter function 
// This function help us in filtering the searchtxt in this we are passing searchtxt na dlist of resturents
//  after that we are filter function which filter on the basis of searchtxt from restaurents.data.name and then return the filter data 
//  with the help of this we are going to make search bar working
function filter(searchtxt,allrestarurent){

const filterdata = allrestarurent.filter((restaurant) =>
restaurant?.info.name.toLowerCase()?.includes(searchtxt.toLowerCase())
);
return filterdata;
}


// now we write code for body
const Body = () =>{

    //  here we kept two copy of restrurent list
    //  one is list of all restrurent an dother one 
    const [allrestarurent,setallrestaurent]=useState([]);
    //  here we are creating state variable 
    const [filterdrestaurants,setFilteredrestaurants]= useState(restrurentlist)
    const [searchtxt,setsearchtxt]=useState([]);

    //  we are using use-effect for fetching api as we want fetch the api only once 
    useEffect(() =>{
        getRestrurent();
 },[])
   
 
 //  below function is for api call as we are using Swiggy public api for fetching data
    async function getRestrurent(){
        let data=await fetch(
        
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
       )

       const json = await data.json();
       console.log(json)
    //    opetional chaining
//   setallrestaurent(json?.data?.cards[0]?.data?.data?.cards);
  
    // setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);
    // Optional Chaining
    setallrestaurent(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredrestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    

//     setFilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);

    }
    console.log(filterdrestaurants)
   
    //  heare we have create a handle search which chech if search text is empty then it shows no result fount
    const handleSearch = () => {
        if (searchtxt) {
          // If searchtxt is not empty, apply the filter function to get the filtered data
          const data = filter(searchtxt, allrestarurent);
          setFilteredrestaurants(data);
        } else {
          // If searchtxt is empty, restore the original data
          setFilteredrestaurants(allrestarurent);
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
          
            {filterdrestaurants.length ===0 ?(
                <p>No Result Found</p>


            ):(
                filterdrestaurants?.map(restaurant =>{
                    
                    return  <Link to={"/restrurent/"+ restaurant?.info?.id} key={restaurant?.info?.id}><Card {...restaurant?.info} /></Link> 
                    
            
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