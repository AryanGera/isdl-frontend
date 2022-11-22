import { Box, Button, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext';

const qual = [
  { id: "1", name: "B.A."},
  { id: "2", name: "B.Arch."},
  { id: "3", name: "BSc"},
  { id: "4", name: "MSc"},
  { id: "5", name: "B.Tech"},
  { id: "6", name: "M.Tech"},
  { id: "7", name: "PhD"}
]

const Application = () => {
  const {spezs, Jwt} = useContext(AuthContext);
  let [app,setApp] = useState(null);
  const [cnt, setCnt] = useState(null);
  const [flag, setFlag] = useState(true);
  const [sch, setSch] = useState(null);
  async function nextRound(jwt,id) {
    const response = await fetch(
        "https://recruitsys.herokuapp.com/nextRound?" +
          new URLSearchParams({
            jwt: jwt
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
        console.log('Next Round');
        setCnt(cnt+1);
      } else {
        console.log('Something went wrong');
      }
  }

  async function Schedule(jwt,id, datetime) {
    console.log(datetime);
    const response = await fetch(
        "https://recruitsys.herokuapp.com/schedule?" +
          new URLSearchParams({
            jwt: jwt
          }),
        {
          method: "POST",
          headers:{
            'Content-Type' : 'application/json',
        },
        credentials: 'include',
        body:JSON.stringify({'id': id, 'datetime': datetime})
        }
      );
      console.log(response);
      if(response.status === 200) {
        alert('Scheduled');
        console.log('Scheduled');
      } else {
        console.log('Something went wrong');
      }
  }
    useEffect(() => {
        if(localStorage && localStorage.getItem('app')){
            setApp(JSON.parse(localStorage.getItem('app')))
        }
      }, []);
      useEffect(() => {
        if(app) {
          setCnt(app.roundNum);
        }
      }, [app]);
  if(app) {
    console.log(app);
    let d = null;
    if(sch) {
      d = sch.split('T')[0].split('-');
    }

    const spez = spezs.filter(item => item.id === parseInt(app.spez));
    const q = qual.filter(k => k.id === app.qualifications);
    return (
      <Box width="80%" height="90%" display="flex" border="1px solid black" borderRadius="20px" m='1rem 10rem' padding="30px">
        <Box width="50%" border="1px solid black"  borderRadius="20px" mr="25px" p="10px">
                    <Text fontWeight="600" fontSize="22" margin="10px"> Name: {app.name} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Qualifications: {q[0].name} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Specialization: {spez[0].name} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> CPI: {app.cgpa} </Text>
                    <Text fontWeight="bold" color='red' fontSize="22" margin="10px"> Hireability Score: {app.hireScore} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> No. of Publications: {app.publications} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> No. of Citations: {app.citations} </Text>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Years of Experience: {app.experiance} </Text>
                    {cnt <= 4 && <Box>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Round Num: {cnt} </Text>
                    {sch && <Text fontWeight="600" fontSize="22" margin="10px"> Schedule: Date: {d[2]+'/'+d[1]+'/'+d[0]} </Text>}
                    <Button border="2px solid black"  width="60%" margin="50px 100px" bg={"#2cc0f5"} onClick={() => nextRound(Jwt,app.id)}> Next Round 
                    </Button>
                    </Box>}
                    {cnt > 4 && <Box>
                    <Text fontWeight="600" fontSize="22" margin="10px"> Approved! </Text>
                    </Box>}
                </Box>
          <Box>
          <Box border="1px solid black"  borderRadius="20px" m="10px" h="45%" w='100%' p="20px">
          <form>
          <Text fontWeight="600" fontSize="22" margin="10px"> Schedule Date/Time</Text>
          <input type="datetime-local" name='datetime' id='epic' />
          <Button border="2px solid black"  width="80%" margin="50px 45px" bg={"#2cc0f5"} onClick={() => Schedule(Jwt,app.id,document.getElementById('epic').value)}> Schedule </Button>
          </form>
          </Box>
          <Box border="1px solid black"  borderRadius="20px" m="30px 10px 0px 10px" h="45%" w="100%" p="20px">
          <form>
          <Text fontWeight="600" fontSize="22" margin="10px" > Meet Link </Text>
          <Box display="flex">
          <input type="text" placeholder='meet.google.com/scy-onxx-kye' m="10px" id="meet" readOnly={flag}/>
          <Button border="2px solid black"  width="30%" margin="10px 40px" bg={"#2cc0f5"} onClick={() => setFlag(false)}> Edit </Button>
          </Box>
          <Button border="2px solid black"  width="80%" margin="40px 45px" bg={"#2cc0f5"} type="submit"> Send Email </Button>
          </form>
          </Box>
          </Box>
        </Box>
      )
  } else {
    <div>Loading...</div>
  }
}

export default Application