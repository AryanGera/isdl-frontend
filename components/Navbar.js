import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo-LNMIIT.svg'
import navStyles from "../styles/Nav.module.css"
import {Text} from "@chakra-ui/react"

const Navbar = () => {
  return (
      <nav className={navStyles.nav}>
        <Image src={logo} width={"auto"}
      height={80} />
      <Text fontSize={"40"}>The LNM Institute of Technology </Text>
    </nav>
  )
}

export default Navbar