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
      <Box  bg="#2cc0f5"  height = "5rem" padding="0.625rem" display ="flex" flexDirection={"row"} justifyContent={"center"} paddingRight= "3.125rem" paddingLeft = "3.125rem">
        <Box display="flex">
        <Text fontSize="2.5rem" as='b' fontWeight="800">The LNM Institute of Technology </Text>
        </Box>
        <Box>
      <Button  border="2px solid black"  margin="0.625rem" paddingTop = '0.3125rem'colorScheme={"orange"} onClick={logout} >LOGOUT</Button>
      </Box>
    </Box>
    );
  } else {
    return (
      <Box  bg="#2cc0f5"  height = "5rem" padding="0.625rem" display ="flex" flexDirection="row" justifyContent="center" paddingRight= "3.125rem" paddingLeft = "3.125rem">
        <Box display="flex">
        <Text fontSize="2.5rem" as='b' fontWeight="1000" >The LNM Institute of Technology </Text>
        </Box>
      </Box>
    );
  }
}

export default Navbar