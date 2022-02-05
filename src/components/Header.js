import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul style={{textAlign:'center',fontSize:'30px'}}>
                <li style={{marginBottom:'30px'}}><NavLink  to={'/'}>Main</NavLink></li>
                <li><NavLink  to={'/list'}>List</NavLink></li>

            </ul>
        </div>
    );
};

export default Header;