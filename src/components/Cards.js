import { IMG_CDN_URL } from "../config";
const Card =({name,cuisines,cloudinaryImageId,avgRating})=>{
    // destructuring restrurent list
  
   
      return(
    <div className="cards">
    <img src={IMG_CDN_URL + cloudinaryImageId} alt="restrurnt image" id="img"/>
          <h1>{name}</h1>
          <h3>{cuisines.join(",")}</h3>
          <h4>{avgRating}</h4>
    </div>
         
          
      );
  
  
  };

  export default Card