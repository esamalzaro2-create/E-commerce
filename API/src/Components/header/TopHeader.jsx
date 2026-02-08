import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import "./Header.css"
import { CartContext } from '../Context/CartContext';
function TopHeader() {


    const {cartItems} = useContext(CartContext)


return (
    <div className='top-header'>
        <div className="container">
            <Link className='logo' to="/"><img src={Logo} alt="Logo" /></Link>
            <form action="" className='search-box'>
                <input type="text" name='Search' id='search' placeholder='Search For Products' />
                <button type='submit'><FaSearch /></button>
            </form>
            <div className="header-icons">
                <div className="icon">
                    <FaRegHeart />
                    <span className='count'>0</span>
                </div>
                <div className="icon">
                    <Link to="/cart" >
                        <BsCart4 />
                        <span className='count'>{cartItems.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default TopHeader
