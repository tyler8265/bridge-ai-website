import React, { useState, useRef } from 'react';
import './Navbar.css';
import hamburger from './icons/burger-menu.svg';
import info from './icons/2059447.png';
import search from './icons/magnifying-glass.svg';
import './HowTo.css'
import { Link, useLocation } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const Navbar = ({idToStructure}) => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [isDropDown2Visible, setIsDropDown2Visible] = useState(false); // State for drop-down-menu2
    const dropDownMenuRef = useRef(null);
    const [searchInput, setSearchInput] = useState('');

    const toggleMenu = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const toggleDropDown2 = (value) => { 
        setIsDropDown2Visible(value);
    }

    const closeMenu = () => {
        setIsDropDownVisible(false);
    }

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        setIsDropDown2Visible(event.target.value.trim().length > 0);
    }

    const Modal = ({isOpen, onClose}) => {
        if (!isOpen) return null;
    }

    const location = useLocation();

    const renderNavbar = location.pathname ==='/Main'

    const filterKeys = () => {
        return Object.keys(idToStructure).filter(key => key.includes(searchInput)).slice(0, 10);
    };

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
                <input className='search-box' placeholder='Search Bridge ID Here...' onChange={handleInputChange} />
                <button className='search-button'>
                    <img src={search} className='search-icon' alt='search' />
                </button>
                <ul className={`drop-down-menu2 ${isDropDown2Visible ? 'show-drop-down-menu2' : 'hide-drop-down-menu2'}`} ref={dropDownMenuRef}>
                    {filterKeys().map((key, index) => (
                        <li key={index} className='search-link'>
                            <Link to={`/details/${key}`} className='link'>{idToStructure[key]}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='right-section'></div>
        </div>
    ): null;
}
export default Navbar;
