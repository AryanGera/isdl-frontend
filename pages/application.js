import { Box, Button, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext';

const application = () => {
  const {spezs} = useContext(AuthContext);
  let [app,setApp] = useState(null);
    useEffect(() => {
        if(localStorage && localStorage.getItem('app')){
            setApp(JSON.parse(localStorage.getItem('app')))
        }
      }, []);
  if(app) {
    const spez = spezs.filter(item => item.id === parseInt(app.spez));
    return (
        <Box width="90%" height="100%" bg="#fff" border="1px solid black" borderRadius="20px" m='20px' padding="30px 10px">
                    <Text fontWeight="600" fontSize="22" margin="10px"> Name: </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Qualifications: {app.qualifications} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Specialization: {spez[0].name} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> CPI: {app.cgpa} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Hireability Score: {app.hireScore} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> No. of Publications: {app.publications} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> No. of Citations: {app.citations} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Years of Experience: {app.experiance} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Round Num: {app.roundNum} </Text>
                    <Box display="flex">
                    <Button border="2px solid black"  width="80%" margin="50px 70px" bg={"#2cc0f5"}> Next Round 
                    </Button>
                    <Button border="2px solid black"  width="80%" margin="50px 70px" bg={"#2cc0f5"}> Reject
                    </Button>
                    </Box>
                </Box>
      )
  } else {
    <div>Loading...</div>
  }
}

export default application