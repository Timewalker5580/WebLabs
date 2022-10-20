import React from 'react';

import './header.css'
import {Link} from "react-router-dom";

const Header = ({arr, setArr}) => {

    function findCatalogItem () {
        let findCatalogItemInputValue = document.getElementById('findCatalogItemInput').value
        console.log(findCatalogItemInputValue)
        console.log(arr)
    }

    return (
        <div className='header'>
            <div className='logo-img'>
                <img src="https://www.hoteldiamondchico.com/wp-content/uploads/2020/07/logo-black.png" alt="logo"/>
            </div>

            <div className='btn-group'>
                <Link to='/' className='btn-group-link'>Home</Link>
                <Link to='/catalog' className='btn-group-link'>Catalog</Link>
                <Link to='/cart' className='btn-group-link'>Cart</Link>
            </div>

            <div className='header-search-container'>
                <input id='findCatalogItemInput' type="search"/>
                <button onClick={findCatalogItem}>Search</button>
            </div>
        </div>
    );
};

export default Header;