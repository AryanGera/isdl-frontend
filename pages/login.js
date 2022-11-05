import React, { useContext, useState } from 'react'
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
import Table from "../components/Table"
import AuthContext from "../context/AuthContext";

const login = () => {
  const { loginUser } = useContext(AuthContext);
  const [value, setValue] = useState("option0");
  return (
    <div className={loginStyles.login}>
        <Box
        bg="#2cc0f5"
        borderRadius={"20px"}
        boxShadow={"15px  10px 10px #555555"}
        border={"2px solid black"} 
        margin = {10} >
        <Box width="600px"
        height="400px" padding="50px">
            <Text fontSize={"40px"} as="b" align="center">
            Faculty Recruitment
          </Text>
            <p>Select Discipline / Broad area :</p>
            <Select value={value} onChange={(e) => {
          setValue(e.target.value);}}>
            <option value='option0'>Select Option</option>
            <option value='option1' selected="selected">Computer Science and Engineering</option>
            <option value='option2'>Electronics and Communication Engineering</option>
            <option value='option3'>Mechatronics and Mechanical Engineering</option>
            <option value='option4'>Communication and Computer Engineering</option>
            </Select>
            {value != "option0" && <Table value={value}/> }
        </Box>
        </Box>
        
        {/* login box */}
        <Box display="flex" justifyContent={"right"} margin = {10}>
        <Box
          display="flex"
          flexDirection={"column"}
          bg="#2cc0f5"
          borderRadius={"20px"}
          boxShadow={"15px  10px 10px #555555"}
          border={"2px solid black"}
          width="600px"
          height="400px"
          padding="50px"
        >   

          <form onSubmit={loginUser} width={"100%"}>
          <Text fontSize={"40px"} as="b" align="center">
            Login
          </Text>
            <FormControl width={"100%"}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" backgroundColor="white" name="email" />
              <FormLabel>Password</FormLabel>
              <Input type="password" backgroundColor="white" name="password" />
            </FormControl>
            <Button border="2px solid black"  width="100%" marginTop="50px" bg={"#ff9800"} type="submit">
                Submit
              </Button>
          </form>
        </Box>
        </Box>
    </div>
  )
}

export default login