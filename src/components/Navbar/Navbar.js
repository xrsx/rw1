import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements.js';
 
const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <div>
          <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
               <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon/>
                        Ultra
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}</MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='products'>Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='products'>Products</NavLinks>
                        </NavItem>
                    </NavMenu> 
                </NavbarContainer> 
            </Nav>
          </IconContext.Provider>  
        </div>
    )
}

export default Navbar
