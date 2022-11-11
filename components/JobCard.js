import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

async function deleteJob(jwt,id) {
    const response = await fetch(
        "https://recruitsys.herokuapp.com/deleteJob?" +
          new URLSearchParams({
            id: id,
            jwt: jwt,
          }),
        {
          method: "POST",
          headers:{
            'Content-Type' : 'application/json',
        },
        credentials: 'include',
        body:JSON.stringify({'id': id})
        }
      );
      console.log(response);
      if(response.status === 200) {
        console.log('Job Deleted');
      } else {
        console.log('Something went wrong');
      }
}

const JobCard = ({job}) => {
    const router = useRouter();
    function openApp() {
        localStorage.setItem("jobId",job.id);
        router.push({
            pathname: "/applications",
            query: {id: job.id}
        });
    }
    let {User, Jwt, spezs} = useContext(AuthContext);
    let spez = spezs.filter(item => item.id === job.spez_Req);
    if(job) {
        return (
            <Box display="flex"  border="1px solid black" bg="#fff" borderRadius="15px" margin="5px">
                <Text fontWeight="600" fontSize="18" margin="10px"> {job.post} </Text>
                <Text fontWeight="600" fontSize="18" margin="10px"> {spez[0].name} </Text>
                <Button height="25px"  width="10%" bg={"#2cc0f5"} onClick={() => openApp()}> Open 
                </Button>
                <Button height="25px"  width="10%"  bg={"#2cc0f5"} onClick={() => deleteJob(Jwt,job.id)}> Close 
                </Button>
            </Box>
          )
    }
}

export default JobCard