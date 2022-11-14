import React, { useContext } from 'react'
import Image from 'next/image'
import logo from '../public/Logo-LNMIIT.svg'
import navStyles from "../styles/Nav.module.css"
import {Box, Button, Text} from "@chakra-ui/react"
import AuthContext from "../context/AuthContext";
import { useRouter } from 'next/router'

const Navbar = () => {
  const { User ,logout} = useContext(AuthContext);
  const router = useRouter();
  if (User) {
    return (
      <Box  bg="#2cc0f5"  height = "80px" padding={"10px"} display ="flex" flexDirection={"row"} justifyContent={"center"} paddingRight= "50px" paddingLeft = "50px">
        <Box display="flex">
        <Text fontSize={"40"} as='b' fontWeight="800">The LNM Institute of Technology </Text>
        </Box>
        <Box>
      <Button  border="2px solid black"  margin="10px" paddingTop = '5px'colorScheme={"orange"} onClick={logout} >LOGOUT</Button>
      </Box>
    </Box>
    );
  } else {
    return (
      <Box  bg="#2cc0f5"  height = "80px" padding={"10px"} display ="flex" flexDirection={"row"} justifyContent={"center"} paddingRight= "50px" paddingLeft = "50px">
        <Box display="flex">
        <Text fontSize={"40"} as='b' fontWeight="1000" >The LNM Institute of Technology </Text>
        </Box>
      </Box>
    );
  }
}

export default Navbar