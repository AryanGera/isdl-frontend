import React, { useContext, useEffect, useState } from "react";
import { Select, Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import regStyles from "../styles/Form.module.css";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext";

const reg = () => {
  const {sendForm, jobs, spezs} = useContext(AuthContext);
  const router = useRouter();
  const v = [...new Set(jobs.filter(k => (k.dept === parseInt(router.query.dep) && k.post === router.query.post)).map(item => item.spez_Req))];
  console.log(v);

  const arr = [
    { id: "option1", dep: "Computer Science and Engineering" },
    { id: "option2", dep: "Electronics and Communication Engineering" },
    { id: "option3", dep: "Mechatronics and Mechanical Engineering" },
    { id: "option4", dep: "Communication and Computer Engineering" },
  ];

  const obj = arr.find((o) => o.id === router.query.dep);
  return (
    <div>
      <Box pl="350px" pr="400px">
      <h3> Name of the Post : {router.query.post} </h3>
      {/* <h3> Department: {obj.dep} </h3> */}
      <Box width="700px" bg="#f2f2f2" pl="50px" pr="50px">
      <form onSubmit={sendForm}  className={regStyles.form}>
        <Text fontSize={25}>Personal Details</Text>
        <Flex>Specialization</Flex>
        <Select placeholder="Please Select" name="spez" required>
          {v
            .map(p => (
              spezs.filter(item => item.id === p).map(val => <option key={val.id}>{val.name}</option>)
            ))}
        </Select>
        <Flex>Title
        <Select placeholder="Please Select"  name="title" required>
          <option value="2" key="title1" name="mr">Mr.</option>
          <option value="1" key="title2" name="mrs">Mrs.</option>
          <option value="4" key="title3" name="ms">Ms.</option>
          <option value="3" key="title4" name="dr">Dr.</option>
        </Select>
        </Flex>
        <Flex>Name
        <Input type="text" id="name" name="name" required></Input>
        </Flex>
        <Flex> Date of Birth 
        <Input type="date" name="dob" required></Input>
        </Flex>
        <Flex>Age
        <Input type="text" name="age" required></Input>
        </Flex>
        <Flex>Gender
        <Select placeholder="Please Select" name="gender">
          <option value="M">Male</option>
          <option value="F">Female</option>
        </Select>
        </Flex>
        <Flex>Father's Name
        <Input type="text" name="father" required></Input> 
        </Flex>
        <Flex>Mother's Name
        <Input type="text" name="mother" required></Input> 
        </Flex>
        <Flex>Category
        <Input type="radio" id="st" value="3" name="category" />
        <Flex>ST</Flex>
        <Input type="radio" id="sc" value="2" name="category" />
        <Flex>SC</Flex>
        <Input type="radio" id="obc" value="4" name="category"></Input>
        <Flex>OBC</Flex>
        <Input type="radio" id="gen" value="1" name="category"></Input>
        <Flex>GEN</Flex> 
        </Flex>
        <Flex>Nationality
        <Input type="text" name="nationality" required></Input> 
        </Flex>
        <Text fontSize={25}>QUALIFICATION AS PER ELIGIBILITY CRITERIA</Text>
        <Flex>Educational Qualification</Flex> 
        <Flex> Qualifications
        <Input text="number" name="qualifications" required /> 
        </Flex>
        <Flex> CGPA
        <Input text="number" name="cgpa" required />
        </Flex>
        <Flex> No. of Citations
        <Input text="number" name="citations" />
        </Flex>
        <Flex> No. of Publications
        <Input text="number" name="publications" />
        </Flex>
        <Flex> Experience
        <Input text="number" name="experiance" required />
        </Flex>
        <Text fontSize={25}>COMMUNICATION</Text>
        <Flex>Postal Address 
        <Input type="textarea" name="postal" required />
        </Flex>
        <Flex>Country
        <Input type="text" name="country" required /> 
        </Flex>
        <Flex>State 
        <Input type="text" name="state" required /> 
        </Flex>
        <Flex>City
        <Input type="text" name="city" required />
        </Flex>
        <Flex>District
        <Input type="text" name="district" required />
        </Flex>
        <Flex>Pincode
        <Input type="number" name="pincode" required />
        </Flex>
        <Flex>Email
        <Input type="email" name="email" required /> 
        </Flex>
        <Flex>Mobile No
        <Input type="text" name="mob_num" pattern="[1-9]{1}[0-9]{9}" required /> 
        </Flex>
        <Flex>Password
        <Input type="password" name="password" required />
        </Flex>
        <Flex>Re-type Password
        <Input type="password" name="password" required />
        </Flex>
        <Button border="2px solid black"  width="100%" marginTop="70px" bg={"#2cc0f5"} type="submit"> Submit 
        </Button>
      </form>
      </Box>
      </Box>
    </div>
  );
};

export default reg;
