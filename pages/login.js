import React, { useContext, useEffect, useState } from 'react'
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

const arr =
  { 1: "Computer Science and Engineering",
  2: "Communication and Computer Engineering",
  3: "Electronics and Communication Engineering",
  4: "Mechatronics and Mechanical Engineering" }

const Login = () => {
  const { loginUser, preReq, jobs, logout} = useContext(AuthContext);
  const [value,setValue] = useState('default');
  const [unique, setUnique] = useState(null);
  useEffect(()=> {
    logout();
    preReq();
  },[]);
  useEffect(()=> {
    if(jobs) {setUnique([...new Set(jobs.map(item => item.dept))]);}
    console.log(unique);
  },[jobs]);
  if(unique) {
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
              <option value='default'>Select Option</option>
              {unique
            .map(item => (
              <option key={item} value={item}>{arr[item]}</option>
            ))}
              </Select>
              {value != 'default' && <Table value={value}/> }
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
}

export default Login