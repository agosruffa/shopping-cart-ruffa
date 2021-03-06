import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

 const Navbar = ()=>{

     
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Home</Link>
                    
                    <ul className="right">
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/products">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    
    )
}

export default Navbar;