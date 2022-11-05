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
      <Box  bg="#2cc0f5"  height = "80px" padding={"10px"} display ="flex" flexDirection={"row"} justifyContent={"space-between"} paddingRight= "50px" paddingLeft = "50px">
        <Box display="flex">
        <Text fontSize={"40"}color="white" fontWeight="800" align={center}>The LNM Institute of Technology </Text>
        </Box>
        <Box>
       
       {User.isAdmin == true && <Button  border="2px solid black"  margin="10px" paddingTop = '5px'colorScheme={"green"} onClick={() => router.push('/admin')} >Admin</Button> }
       <Button  border="2px solid black"  margin="10px" paddingTop = '5px'colorScheme={"yellow"} onClick={() => router.push('/dashboard')}>DashBoard</Button>
      <Button  border="2px solid black"  margin="10px" paddingTop = '5px'colorScheme={"orange"} onClick={logout} >LOGOUT</Button>
      <Button  border="2px solid black"  margin="10px" paddingTop = '5px'colorScheme={"white"} onClick={() => router.push('/feedback  ')}>Feedback</Button>
      </Box>
    </Box>
    );
  } else {
    return (
      <Box  bg="#2cc0f5"  height = "80px" padding={"10px"} display ="flex" flexDirection={"row"} justifyContent={"center"} paddingRight= "50px" paddingLeft = "50px">
        <Box display="flex">
        <Text fontSize={"40"}color="white" fontWeight="1000" >The LNM Institute of Technology </Text>
        </Box>
      </Box>
    );
  }
}

export default Navbar