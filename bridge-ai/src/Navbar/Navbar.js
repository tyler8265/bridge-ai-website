import React, { useState, useRef } from 'react';
import './Navbar.css';
import hamburger from './icons/burger-menu.svg';
import info from './icons/information-icon.svg';
import search from './icons/magnifying-glass.svg';

const Navbar = () => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const dropDownMenuRef = useRef(null);

    const toggleMenu = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeMenu = () => {
        setIsDropDownVisible(false);
    }

    return (
        <div className='Navbar'>
            <div className='left-section'>
                <div>
                    <button className='hamburger-button' onClick={toggleMenu}>
                        <img src={hamburger} className='hamburger-icon' alt='hamburger' />
                    </button>
                </div>
                <div className={`drop-down-menu ${isDropDownVisible ? 'show-drop-down-menu' : 'hide-drop-down-menu'}`} ref={dropDownMenuRef}>
                    <div className='how-to-page'><button className='how-to-page-button'>How-To-Page</button></div>
                    <div className='bridge-list'><button className='bridge-list-button'>Bridge List</button></div>
                    <div className='log-out'><button className='log-out-button'>Log Out</button></div>
                </div>
                <div>
                    <button className='info-button'>
                        <img src={info} className='info-icon' alt='info' onClick={closeMenu} />
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

