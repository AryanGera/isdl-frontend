import React, { useContext, useState } from 'react'
import AuthContext from "../context/AuthContext";
import UserCard from '../components/UserCard';
import { Box, Text } from '@chakra-ui/react';
import jwt_decode from 'jwt-decode'

function dashboard() {
    const { User, Jwt} = useContext(AuthContext);
    const [posts,setPosts] = useState(null);
    if(User && Jwt) {
        if(posts) {
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
              {posts.map((post) => {
                {
                  return <UserCard key={post.id} name={User.name} post={post}/>;
                }
              })}
            </Box>
            </Box>
            );
        } else {
          (async () => {
            const resp1 = await fetch(
              "https://recruitsys.herokuapp.com/getDetails?" +
                new URLSearchParams({ jwt: Jwt }),
              {
                method: "GET",
              }
            );
            let data1 = await resp1.json();
            setPosts(data1);
          })();
            return (
                <div>Here comes JSX !</div>
            );
        }
    } else {
        return (
            <div>who are u ???</div>
          )
    }
}

export default dashboard;