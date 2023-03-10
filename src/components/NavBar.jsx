import React, { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="HooBank Logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[1rem] text-white ${index === navLinks.length -1 ? 'mr-5' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggleMenu ? close : menu}
          alt="Mobile Menu"
          className="w-[25px] h-[25px] object-contain"
          onClick={() => setToggleMenu((prev) => (!prev))} //prev => !prev React makes sure that it keep the state up to date
        />

        <div
          className={`${toggleMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium outline-0 mb-3 cursor-pointer text-[1rem] text-white ${index === navLinks.length -1 ? "mb-0" : "mb-4"}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default NavBar