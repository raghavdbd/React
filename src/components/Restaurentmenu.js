import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../config";

const menu =() =>{
    const [restaurant,setrestaurent]=useState("");
    // how to read a dynamic url params
 const params=useParams();
 const {id}=params

 useEffect(() =>{
  getrestaurentinfo();

 },[])
 async function getrestaurentinfo(){
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();
    console.log(json.data)
    console.log(json.data.cards[0].card.card.info)
    setrestaurent(json.data.cards[0].card.card.info)

 }
    return (
        <>

<img src={IMG_CDN_URL+restaurant.cloudinaryImageId}  alt="" />
<h2>{restaurant.name}</h2>
<h3>{restaurant.avgRating}</h3>
<h3>{restaurant.city}</h3>
<h4>{restaurant.costForTwoMessage
}</h4>
<h5>{restaurant.cuisines?.join(",")}</h5>

</>

        
    )
}
export default menu