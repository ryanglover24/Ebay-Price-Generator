import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {



    return ( 
       
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <Link to="/" className="navbar-brand">Ebay Price Gen</Link>

        </nav>
     );
}
 
export default NavBar;
