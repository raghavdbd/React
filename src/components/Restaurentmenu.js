import { useParams } from "react-router-dom"

const menu =() =>{
    // how to read a dynamic url params
 const params=useParams();
 const {id}=params
    return (
<h1>Namanste:{id}</h1>


        
    )
}
export default menu