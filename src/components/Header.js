import { Link } from "react-router-dom";
const Title=()=>{
    return (
     <a href="/">
        <img className="h-28 p-2 "  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTiYvL2R6PNlChsx7LeLbHF23-Fn9MXctMg&usqp=CAU" alt="logo" id="logo" />
     </a>
       
    
    )
}

const Header=()=>{
    return (
        <div className="flex justify-between bg-pink-200 shadow-lg">
            <Title />
            <div className="flex">
                <ul className="flex py-10 px-10">
                <li className="px-2" >
                    <Link to = '/'>
                    <li>Home</li>
                    </Link>
                    </li>
                    <li className="px-2">
                    <Link to = '/about'>
                    <li className="px-2">About</li>
                    </Link>
                    </li>
                    <li className="px-2">
                    <Link to = '/contact'>
                    <li className="px-2">Contact</li>
                    </Link>
                    </li>
                    
                    
                    
                    <li className="px-2">Cart</li>
                    <Link to = '/instamart'>
                    <li className="px-2">Instamart</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
    };

export default Header