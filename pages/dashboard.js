import React, { useContext, useState } from 'react'
import AuthContext from "../context/AuthContext";
import UserCard from '../components/UserCard';
import { Box, Text } from '@chakra-ui/react';

function dashboard() {
    const { User, Jwt } = useContext(AuthContext);
    const [posts,setPosts] = useState(null);
    if(User && Jwt) {
        if(posts) {
            <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            width="100%"
            height="100%"
            padding="50px"
          >
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
                  return <UserCard key={post.id} post={post} />;
                }
              })}
            </Box>
            </Box>
        } else {
            (async () => {
                const response = await fetch(
                  "https://recruitsys.herokuapp.com/" +
                    new URLSearchParams({ jwt: Jwt }),
                  {
                    method: "GET",
                  }
                );
                let data = await response.json();
                setPosts(data);
              })();
                return (
                    <div>Here comes JSX !</div>
                );
        }
    } else {
        return (
            <div>who are u ???
                <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            width="100%"
            height="100%"
            padding="50px"
          >
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
              <UserCard />
              <UserCard />
            </Box>
            </Box>
            </div>
          )
    }
}

export default dashboard;