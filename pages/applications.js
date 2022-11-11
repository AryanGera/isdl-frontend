import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext';
import SmallCard from '../components/SmallCard';
import { useRouter } from 'next/router';
import { Box, Text } from '@chakra-ui/react';

const applications = () => {
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
            console.log(apps);
            return (
              <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            width="100%"
            height="100%"
            padding="50px"
          >
             <Text fontWeight="600" fontSize="22" margin="10px"> Name: {User.name}  </Text>
            <Box
              display="flex"
              height="55%"
              minHeight="200px"
              width="100%"
              justifyContent="space-evenly"
              bg="#70717220"
              borderRadius="20px"
              marginBottom="50px"
            >
                console.log(apps);
              {apps.map((app) => {
                {
                  return <SmallCard key={app.id} name={User.name} app={app}/>;
                }
              })}
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

export default applications