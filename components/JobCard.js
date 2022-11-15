import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'

const JobCard = ({job}) => {
    const router = useRouter();
    function openApp() {
        localStorage.setItem("jobId",job.id);
        router.push({
            pathname: "/applications",
            query: {id: job.id}
        });
    }
    let {Jwt, spezs, preReq} = useContext(AuthContext);
    let spez = spezs.filter(item => item.id === job.spez_Req);
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
          preReq();
          console.log('Job Deleted');
          alert('Job Deleted!');
        } else {
          console.log('Something went wrong');
        }
  }
    if(job) {
        return (
            <Box display="flex"  border="1px solid black" bg="#2cc0f5" borderRadius="0.9375rem" margin="0.3125rem">
                <Text fontWeight="600" fontSize="15" margin="0.625rem" w="30%"> {job.post} </Text>
                <Text fontWeight="600" fontSize="15" margin="0.625rem" w="30%"> {spez[0].name} </Text>
                <Button height="1.375rem"  width="10%" margin="0.625rem" bg={"#4BB543"} onClick={() => openApp()}> Open 
                </Button>
                <Button height="1.375rem"  width="10%" margin="0.625rem"  bg={"#d11a2a"} onClick={() => deleteJob(Jwt,job.id)}> Close 
                </Button>
            </Box>
          )
    }
}

export default JobCard