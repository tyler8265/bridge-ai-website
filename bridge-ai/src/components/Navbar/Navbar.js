import React, { useState, useRef } from 'react';
import './Navbar.css';
import hamburger from './icons/burger-menu.svg';
import info from './icons/information-icon.svg';
import search from './icons/magnifying-glass.svg';
import './HowTo.css'

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

    return (
        <div className='Navbar'>
            <div className='left-section'>
                <div>
                    <button className='hamburger-button' onClick={toggleMenu}>
                        <img src={hamburger} className='hamburger-icon' alt='hamburger' />
                    </button>
                </div>
                <ul className={`drop-down-menu ${isDropDownVisible ? 'show-drop-down-menu' : 'hide-drop-down-menu'}`} ref={dropDownMenuRef}>
                    <li className='how-to-page'><a>How-To-Page</a></li>
                    <li className='bridge-list'><a >Bridge List</a></li>
                    <li className='log-out'><a href='/LoginPage' className='links'>Log Out</a></li>
                </ul>
                <div>
                    <button className='info-button'>
                        <img src={info} className='info-icon' alt='info' onClick={closeMenu} />
                        <div className='tool-tip'>About Page</div>
                    </button>
                </div>
            </div>
            <div className='middle-section'>
                <input className='search-box' placeholder='Search Here...' />
                <button className='search-button'>
                    <img src={search} className='search-icon' alt='search' />
                </button>
            </div>
            <div className='right-section'></div>
        </div>
    );
}
export default Navbar

