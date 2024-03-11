import React, { useState, useRef } from 'react';
import './Navbar.css';
import hamburger from './icons/burger-menu.svg';
import info from './icons/2059447.png';
import search from './icons/magnifying-glass.svg';
import './HowTo.css'
import { Link, useLocation } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const Navbar = () => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const dropDownMenuRef = useRef(null);

    const toggleMenu = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeMenu = () => {
        setIsDropDownVisible(false);
    }
    const Modal = ({isOpen, onClose}) => {
        if (!isOpen) return null;
    }
    const location = useLocation();

    const renderNavbar = location.pathname ==='/Main'

    return renderNavbar ? (
        <div className='Navbar'>
            <div className='left-section'>
                <div>
                    <button className='hamburger-button' onClick={toggleMenu}>
                        <img src={hamburger} className='hamburger-icon' alt='hamburger' />
                    </button>
                </div>
                <ul className={`drop-down-menu ${isDropDownVisible ? 'show-drop-down-menu' : 'hide-drop-down-menu'}`} ref={dropDownMenuRef}>
                    <li className='how-to-page-link'><Link to ='/how-to-page' className='link'>How-To Page</Link></li>
                    <li className='bridge-list-link'><Link to ='/About' className='link'>About</Link></li>
                    <li className='bridge-list-link'><Link to ='' className='link'>Bridge List</Link></li>
                    <li className='log-out-link'><Link to='/' className='link'>Log Out</Link></li>
                </ul>
                <div>
                    <button className='info-button'>
                        <Link to='/FAQs'><img src={info} className='info-icon' alt='info' onClick={closeMenu} /></Link>
                        <div className='tool-tip'>FAQs</div>
                    </button>
                </div>
            </div>
            <div className='middle-section'>
                <input className='search-box' placeholder='Search Bridge ID Here...' />
                <button className='search-button'>
                    <img src={search} className='search-icon' alt='search' />
                </button>
            </div>
            <div className='right-section'></div>
        </div>
    ): null;
}
export default Navbar

