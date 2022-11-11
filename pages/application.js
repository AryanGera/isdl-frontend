import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const application = () => {
    let [app,setApp] = useState(null);
    useEffect(() => {
        if(localStorage && localStorage.getItem('app')){
            setApp(JSON.parse(localStorage.getItem('app')))
        }
      }, []);
  if(app) {
    return (
        <Box width="100%" height="100%" bg="#2cc0f5" borderRadius="20px" padding="30px 10px">
                    <Text fontWeight="600" fontSize="22" margin="10px"> Name: </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Qualifications: {app.qualifications} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> CPI: {app.cgpa} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> No. of Publications: {app.publications} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> No. of Citations: {app.citations} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Years of Experience: {app.experiance} </Text>
                </Box>
      )
  } else {
    <div>Loading...</div>
  }
}

export default application