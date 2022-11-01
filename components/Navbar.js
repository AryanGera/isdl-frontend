import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo-LNMIIT.svg'
import navStyles from "../styles/Nav.module.css"

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
        <Image src={logo} width={"auto"}
      height={80} align={"center"} />
    </nav>
  )
}

export default Navbar