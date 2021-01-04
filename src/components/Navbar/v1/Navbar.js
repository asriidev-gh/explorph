import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              EXPLOR PH
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>Home</NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks 
                    to="destination"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'                    
                >Destinations</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="#">Booking</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;