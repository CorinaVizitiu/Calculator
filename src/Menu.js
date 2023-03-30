import React from "react";
import { NavLink } from "react-router-dom";


const Menu = (props) => {
    return (
        <div>
            <ul class='navbar'>
                {/* <img src={logo} className="logo" alt=""/> */}
                <NavLink to='/calculator' className="items"><li>Calculator</li></NavLink>
     
               
            </ul>
        </div>
    );
};

export default Menu;