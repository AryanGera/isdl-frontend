import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

function SmallCard ({app}) {
  const router = useRouter();
  const handleSubmit = () => {
    localStorage.setItem('app',JSON.stringify(app));
    router.push('application')
  }

  if(app) {
    return (
      <Box bg="#fff" padding="20px" width="450px" height="375px" display="flex"  borderRadius="20px"
          boxShadow={"5px 5px 10px "}
          margin="50px"
          border="2px solid black">
              <Box width="100%" height="100%" bg="#2cc0f5" borderRadius="20px" padding="30px 10px">
                  <Text fontWeight="600" fontSize="22" margin="10px"> Name: </Text>
                  <Text fontWeight="600" fontSize="22" margin="10px"> Qualifications: {app.qualifications} </Text>
                  <Text fontWeight="600" fontSize="22" margin="10px"> CPI: {app.cgpa} </Text>
                  <Text fontWeight="600" fontSize="22" margin="10px"> No. of Publications: {app.publications} </Text>
                  <Text fontWeight="600" fontSize="22" margin="10px"> No. of Citations: {app.citations} </Text>
                  <Text fontWeight="600" fontSize="22" margin="10px"> Years of Experience: {app.experiance} </Text>
                  <Button height="25px"  width="10%"  bg={"#2cc0f5"} onClick={handleSubmit}> Open 
                  </Button>
              </Box>
          </Box>
    )
  }
}

export default SmallCard