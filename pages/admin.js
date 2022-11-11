import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import JobCard from "../components/JobCard";
import AuthContext from "../context/AuthContext";

const admin = () => {
  const router = useRouter();
  const [dep, setDep] = useState(null);
  const {User, Jwt, jobs, spezs, createJob } = useContext(AuthContext);
  let options = null;

  if(dep) {
    options = spezs.filter(p => p.dept === parseInt(dep))
            .map((p) => <option value={p.id}>{p.name}</option>)
            console.log(options);
  }
  
  if(User && Jwt) {
    return (
      <Box display="flex" padding="10px">
        <Box
          bg="#ddd"
          width="50%"
          height="600px"
          borderRadius="20px"
          margin="10px"
          border="2px solid black"
        >
          <Box width="100%" height="60px" bg="#2cc0f5" borderRadius="20px 20px 0px 0px" padding="10px 260px 5px 260px">
        <Text fontWeight="600" fontSize="22">Job Openings</Text>
    </Box>
    {User.isCse===true && <Box padding="10px">
    <Text fontWeight="600" fontSize="22">CSE Department</Text>
    {jobs
            .filter(item => item.dept === 1)
            .map(job => (
              <JobCard key={job.id} job={job} />
            ))}
    </Box>}
    {User.isCce===true && <Box padding="10px">
    <Text fontWeight="600" fontSize="22">CCE Department</Text>
    {jobs
            .filter(item => item.dept === 2)
            .map(job => (
              <JobCard key={job.id} job={job} />
            ))}
    </Box>}
    {User.isEse===true && <Box padding="10px">
    <Text fontWeight="600" fontSize="22">ECE Department</Text>
    {jobs
            .filter(item => item.dept === 3)
            .map(job => (
              <JobCard key={job.id} job={job} />
            ))}
    </Box>}
    {User.isMec===true && <Box padding="10px">
    <Text fontWeight="600" fontSize="22">MEC Department</Text>
    {jobs
            .filter(item => item.dept === 1)
            .map(job => (
              <JobCard key={job.id} job={job} />
            ))}
    </Box>}
        </Box>
        <Box
          bg="#ddd"
          width="50%"
          height="600px"
          borderRadius="20px"
          margin="10px"
          border="2px solid black"
        >
          <Box width="100%" height="60px" bg="#2cc0f5" borderRadius="20px 20px 0px 0px" padding="10px 260px 5px 260px">
          <Text fontWeight="600" fontSize="22">
            Create Job{" "}
          </Text>
          </Box>
          <form onSubmit={createJob}>
          <Flex> Department
          <Select placeholder="Please Select" name="dept" onChange={(e) => setDep(e.target.value)} required>
            <option value="1" key="title1" name="cse">Computer Science and Engineering</option>
            <option value="3" key="title2" name="ece">Electronics and Communication Engineering</option>
            <option value="4" key="title3" name="me">Mechatronics and Mechanical Engineering</option>
            <option value="2" key="title4" name="cce">Communication and Computer Engineering</option>
          </Select>
          </Flex>
          <Flex> Post
          <Select placeholder="Please Select" name="post" required>
            <option value="Assisant Professor" name="cse">Assisant Professor</option>
            <option value="Associate Professor" name="ece">Associate Professor</option>
            <option value="Professor" name="me">Professor</option>
          </Select>
          </Flex>
          <Flex>Specialization
          <Select placeholder="Please Select" name="spez_Req" required>
            {options}
          </Select>
          </Flex>
          <Flex> Is PhD is Required?
          <Select placeholder="Please Select" name="phd_Req" required>
          <option value="true" name="true">Yes</option>
            <option value="false" name="no">No</option>
          </Select>
          </Flex>
          <Flex>  Min. CGPA Required
          <Input type="number" name="cgpa_Req" required></Input>
          </Flex>
          <Button border="2px solid black"  width="100%" marginTop="70px" bg={"#2cc0f5"} type="submit"> Create 
          </Button>
          </form>
        </Box>
      </Box>
    );
  } else {
    return <div> Who are You?</div>
  }
};

export default admin;
