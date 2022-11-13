import { Box, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';

function UserCard ({post, name}) {
  let k = null;
  if(post.schedule) k = new Date(post.schedule);
    let {jobs, spezs} = useContext(AuthContext);
    let arr = [
      { id: 1, dep: "Computer Science and Engineering" },
      { id: 2, dep: "Electronics and Communication Engineering" },
      { id: 3, dep: "Mechatronics and Mechanical Engineering" },
      { id: 4, dep: "Communication and Computer Engineering" },
    ];

    jobs = jobs.filter(item => item.id === post.job);
    console.log(jobs);
    spezs = spezs.filter(item => item.id === jobs[0].spez_Req);
    console.log(spezs);
    let randi = arr.filter(item => item.id === jobs[0].dept);
      return (
        <Box bg="#fff" padding="20px" width="450px" height="375px" display="flex"  borderRadius="20px"
        boxShadow={"5px 5px 10px "}
        margin="20px"
        border="2px solid black">
            <Box width="100%" height="100%" bg="#2cc0f5" borderRadius="20px" padding="30px 10px">
                <Text fontWeight="600" fontSize="22" margin="10px">Specialization: {spezs[0].name}  </Text>
                <Text fontWeight="600" fontSize="22" margin="10px">Department: {randi[0].dep} </Text>
                <Text fontWeight="600" fontSize="22" margin="10px">Post: {jobs[0].post} </Text>
                <Text fontWeight="600" fontSize="22" margin="10px">Round No: {post.roundNum}  </Text>
                {k != null && <Box m="10px"><Text fontWeight="600" fontSize="22">Schedule: Date {k.toLocaleDateString()} </Text> 
                <Text fontWeight="600" fontSize="22" ml="6.5rem">Time: {k.toLocaleTimeString()} </Text></Box>}
            </Box>
        </Box>
      )
}

export default UserCard