import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/imgs/Logo.svg'
import IconEmail from '../../assets/imgs/IconEmail.svg'
import IconPhone from '../../assets/imgs/IconTelefone.svg'
import './Navbar.scss'

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {openMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className={openMenu ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <div className="nav-container-icon">
              <a href="/">
                <img src={IconEmail} alt="logo" className="icons" />
                E-mail
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-container-icon">
              <a href="/">
                <img src={IconPhone} alt="logo" className="icons" />
                Telefone
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
