import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../config";
import useResturant from "../utils/useResturant";

const menu =() =>{
 
    // how to read a dynamic url params
 const params=useParams();
 const {id}=params
//   we have create a restaurent  custom hook to fetcth data
 const restaurant=  useResturant(id)

 
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