import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const UserCard = ({post}) => {
  return (
    <Box bg="#fff" padding="20px" width="450px" height="375px" display="flex"  borderRadius="20px"
    boxShadow={"5px 5px 10px "}
    margin="50px"
    border="2px solid black">
        <Box width="100%" height="100%" bg="#2cc0f5" borderRadius="20px" padding="30px 10px">
            <Text fontWeight="600" fontSize="22" margin="10px">Name: </Text>
            <Text fontWeight="600" fontSize="22" margin="10px">Specialization: </Text>
            <Text fontWeight="600" fontSize="22" margin="10px">Department: </Text>
            <Text fontWeight="600" fontSize="22" margin="10px">Post: </Text>
            <Text fontWeight="600" fontSize="22" margin="10px">Round No: </Text>
            <Text fontWeight="600" fontSize="22" margin="10px">Schedule: </Text>
        </Box>
    </Box>
  )
}

export default UserCard