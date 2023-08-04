import { Link } from "react-router-dom";
const Title=()=>{
    return (
    
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTiYvL2R6PNlChsx7LeLbHF23-Fn9MXctMg&usqp=CAU" alt="logo" id="logo" />
    
    )
}

const Header=()=>{
    return (
        <div className="header">
            <Title />
            <div id="headercomponents">
                <ul>
                <li>
                    <Link to = '/'>
                    <li>Home</li>
                    </Link>
                    </li>
                    <li>
                    <Link to = '/about'>
                    <li>About</li>
                    </Link>
                    </li>
                    <li>
                    <Link to = '/contact'>
                    <li>Contact</li>
                    </Link>
                    </li>
                    
                    
                    
                    <li>Cart</li>
                    <Link to = '/instamart'>
                    <li>Instamart</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
    };

export default Header