import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
    return (
        <>
            <Link to ="/signin" className= "nav-link">  
                Sign Out  
            </Link>
            <Link to ="/signup" className= "nav-link">  
                SignUp  
            </Link>
            <Link to ="/signin" className= "nav-link">  
                SignIn  
            </Link>
        </>
    )
}

export default NavItems;