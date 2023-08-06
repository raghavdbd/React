import { IMG_CDN_URL } from "../config";
const Card =({name,cuisines,cloudinaryImageId,avgRating})=>{
    // destructuring restrurent list
  
   
      return(
    <div className="w-[200px] h-[300px] p-2 m-2 shadow overflow-hidden  bg hover:bg-gray-100" >
    <img src={IMG_CDN_URL + cloudinaryImageId} alt="restrurnt image" id="img"/>
          <h1 className="text-2xl">{name}</h1>
          <h3>{cuisines?.join(",")}</h3>
          <h4>{avgRating} Stars</h4>
    </div>
         
          
      );
  
  
  };

  export default Card