import React from 'react'
import { useState,useEffect } from 'react';

const useResturant = (id) => {
  const [restaurant,setrestaurent]=useState("");
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
   return restaurant;

}

export default useResturant
