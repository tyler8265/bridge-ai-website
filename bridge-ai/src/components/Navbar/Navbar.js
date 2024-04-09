import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import hamburger from './icons/burger-menu.svg';
import info from './icons/2059447.png';
import search from './icons/magnifying-glass.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ idToStructure, structureToID }) => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsDropDownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeMenu = () => {
        setIsDropDownVisible(false);
    }

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const location = useLocation();
    const renderNavbar = location.pathname === '/Main';
    const ourStructures = Object.values(structureToID.CT).map(value => value);

    const matchStructNums = (matchKey, structureNumsList) => {
        return structureNumsList.filter(key => String(key).includes(matchKey));
    }

    const trimResults = (results, maxOut) => {
        return results.slice(0, maxOut);
    }

    const filterKeys = () => {
        const searchNumbers = searchInput.match(/\d+/g);
        if (!searchNumbers) return []; // If no numbers found, return empty array

        const searchString = searchNumbers.join('');
        const matchedResults = matchStructNums(searchString, ourStructures);
        const trimmed = trimResults(matchedResults, 10);

        // Map the trimmed results to include both the ID and the corresponding structure
        return trimmed.map(key => ({
            id: key,
            structure: idToStructure[key]
        }));
    }

    return renderNavbar ? (
        <div className='Navbar'>
            <div className='left-section'>
                <div>
                    <button className='hamburger-button' onClick={toggleMenu}>
                        <img src={hamburger} className='hamburger-icon' alt='hamburger' />
                    </button>
                </div>
                <ul className={`drop-down-menu ${isDropDownVisible ? 'show-drop-down-menu' : 'hide-drop-down-menu'}`}>
                    <li className='how-to-page-link'><Link to='/how-to-page' className='link'>How-To Page</Link></li>
                    <li className='bridge-list-link'><Link to='/About' className='link'>About</Link></li>
                    <li className='bridge-list-link'><Link to='' className='link'>Bridge List</Link></li>
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
                <input ref={searchRef} className='search-box' placeholder='Search Bridge ID Here...' onChange={handleInputChange} />
                <button className='search-button'>
                    <img src={search} className='search-icon' alt='search' />
                </button>
                <ul className={`drop-down-menu2 ${searchInput && filterKeys().length > 0 ? 'show-drop-down-menu2' : 'hide-drop-down-menu2'}`}>
                    {filterKeys().map((item, index) => (
                        <li key={index} className='search-link'>
                            <Link to={`/bridge-details/${item.id}`} className='link'>{item.id}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='right-section'></div>
        </div>
    ) : null;
}

export default Navbar;
