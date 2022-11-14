import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext';
import SmallCard from '../components/SmallCard';
import { useRouter } from 'next/router';
import { Box, Grid, Text } from '@chakra-ui/react';

const Applications = () => {
    const router = useRouter();
    const [apps, setApps] = useState(null);
    const [id, setId] = useState(router.query.id);
    useEffect(() => {
        if(localStorage && localStorage.getItem('jobId')){
            setId(JSON.parse(localStorage.getItem('jobId')))
        }
      }, []);
    let {User, Jwt} = useContext(AuthContext);
    if(User && Jwt) {
        if(apps) {
            return (
              <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            width="100%"
            height="100%"
            padding="50px"
          >
             <Text fontWeight="bold" fontSize="26" margin="10px" textAlign="center"> Applications  </Text>
            <Box
              display="grid"
              height="55%"
              minHeight="200px"
              width="100%"
              justifyContent="space-evenly"
              bg="#70717220"
              borderRadius="20px"
              marginBottom="50px"
            >
            <Grid templateColumns='repeat(3, 1fr)' spacing="10px">
              {apps.map((app) => {
                {
                  return <SmallCard key={app.id} name={User.name} app={app}/>;
                }
              })}
            </Grid>
            {
              apps.length === 0 &&  <Text fontWeight="bold" fontSize="26" margin="10px" textAlign="center"> No Applicants  </Text>
            }
            </Box>
            </Box>
            );
        } else {
          (async () => {
            const resp1 = await fetch(
              "https://recruitsys.herokuapp.com/fetchApp?" +
                new URLSearchParams({ jwt: Jwt, id: id }),
              {
                method: "GET",
              }
            );
            let data1 = await resp1.json();
            console.log(data1);
            setApps(data1);
          })();
            return (
                <div>Here comes JSX !</div>
            );
        }
    } else {
        return (
            <div>who are u ???
                <SmallCard />
                <SmallCard />
            </div>
          )
    }
}

export default Applications