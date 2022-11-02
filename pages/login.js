import React from 'react'
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Text,
  Button,
  Select,
  Image
} from "@chakra-ui/react";
import loginStyles from "../styles/Login.module.css"

const login = () => {
  return (
    <div className={loginStyles.login}>
        <Box
        bg="#2cc0f5"
        borderRadius={"20px"}
        boxShadow={"15px  10px 10px #555555"}
        border={"2px solid black"} 
        margin = {20}>
        <Box width="500px"
        height="400px">
            <h3> Faculty Recruitment </h3>
            <p>Select Discipline / Broad area :</p>
            <Select placeholder='Select option'>
            <option value='option1'>Computer Science and Engineering</option>
            <option value='option2'>Electronics and Communication Engineering</option>
            <option value='option3'>Mechatronics and Mechanical Engineering</option>
            <option value='option4'>Communication and Computer Engineering</option>
            </Select>
        </Box>
        </Box>
        
        <Box display="flex" justifyContent={"right"} margin = {20} width = "500px">
        <Box
          display="flex"
          flexDirection={"column"}
          bg="#2cc0f5"
          borderRadius={"20px"}
          boxShadow={"15px  10px 10px #555555"}
          border={"2px solid black"}
          width="500px"
          height="400px"
        >

          <Text fontSize={"50px"} as="b">
            Login
          </Text>
            <FormControl width={"100%"}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" />
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
            </FormControl>
            <Button border="2px solid black"  width="100%" marginTop="70px" bg={"#ff9800"} type="submit">
                Submit
              </Button>
        </Box>
        </Box>
    </div>
  )
}

export default login