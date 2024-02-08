import React from 'react'
import './Navbar.css'
import hamburger from './icons/burger-menu.svg'
import info from './icons/information-icon.svg'
import search from './icons/magnifying-glass.svg'

const Navbar = () => {
    return (
      <div className='Navbar'>
          <div className='left-section'>
            <div>
                <button className='hamburger-button'>
                    <img src={hamburger} className='hamburger-icon'/>
                </button>
            </div>
              <img src={info} className='info-icon'/>
          </div>
          <div className='middle-section'>
              <input className='search-box' placeholder='Search Here...'/>
              <button className='search-button'>
                  <img src={search} className='search-icon'/>
              </button>
          </div>
          <div className='right-section'>

          </div>
      </div>
    )
   }

 export default Navbar
