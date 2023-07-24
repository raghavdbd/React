
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
    };

export default Header