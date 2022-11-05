import React, { useEffect, useState } from "react";
import { Select, Box } from "@chakra-ui/react";
import regStyles from "../styles/Form.module.css";
import { useRouter } from "next/router";

const reg = () => {
  const router = useRouter();

  const arr = [
    { id: "option1", dep: "Computer Science and Engineering" },
    { id: "option2", dep: "Electronics and Communication Engineering" },
    { id: "option3", dep: "Mechatronics and Mechanical Engineering" },
    { id: "option4", dep: "Communication and Computer Engineering" },
  ];

  const fields = [
    { id: "option1", key: "", field: "Artificial Intelligence" },
    { id: "option1", key: "", field: "Algorithms" },
    { id: "option1", key: "", field: "Theoretical Computer Science" },
    { id: "option1", key: "", field: "Systems and Architecture" },
    { id: "option1", key: "", field: "Natural Language Processing" },
    { id: "option1", key: "", field: "Cyber Security" },
    { id: "option2", key: "", field: "Signal Processing" },
    { id: "option2", key: "", field: "Communication" },
    { id: "option2", key: "", field: "Embedded Systems" },
    { id: "option2", key: "", field: "Semiconductor Devices" },
    { id: "option2", key: "", field: "Wireless communication" },
    { id: "option3", key: "", field: "Robotics" },
    { id: "option3", key: "", field: "Automation and Mechatronics" },
    { id: "option3", key: "", field: "Design" },
    { id: "option3", key: "", field: "Material Science and Metallurgy" },
    { id: "option3", key: "", field: "Energy Storage & Energy systems" },
    { id: "option3", key: "", field: "Fuel Cells and Batteries" },
    { id: "option4", key: "", field: "Artificial Intelligence" },
    { id: "option4", key: "", field: "Machine Learning" },
    {
      id: "option4",
      key: "",
      field: "Cyber-Physical Systems/Internet-of-Things",
    },
    { id: "option4", key: "", field: "Signal Processing for Communication" },
  ];
  const obj = arr.find((o) => o.id === router.query.dep);
  return (
    <div>
      <Box pl="400px" pr="400px">
      <h3> Name of the Post : {router.query.post} </h3>
      {/* <h3> Department: {obj.dep} </h3> */}
      <Box width="600px" bg="#f2f2f2" pl="50px" pr="50px">
      <form method="post" className={regStyles.form}>
        <h3>Personal Details</h3>
        <label>Specialization</label>
        <Select placeholder="Please Select" required>
          {fields
            .filter((p) => p.id === router.query.dep)
            .map((p) => (
              <option value={p.key}>{p.field}</option>
            ))}
        </Select>
        <label>Title</label>
        <Select placeholder="Please Select" required>
          <option value="option1">Mr.</option>
          <option value="option2">Mrs.</option>
          <option value="option3">Ms.</option>
          <option value="option4">Dr.</option>
        </Select>
        <label>Name</label>
        <input type="text" id="name" required></input> <br />
        <label> Date of Birth </label>
        <input type="date" required></input> <br />
        <label>Age</label>
        <input type="text" required></input> <br />
        <label>Gender</label>
        <Select placeholder="Please Select">
          <option value="option1">Male</option>
          <option value="option2">Female</option>
        </Select>
        <label>Father's Name</label>
        <input type="text" required></input> <br />
        <label>Category</label>
        <input type="radio" id="st" value="ST" name="cat" />
        <label for="st">ST</label>
        <input type="radio" id="sc" value="SC" name="cat" />
        <label for="sc">SC</label>
        <input type="radio" id="obc" value="OBC" name="cat"></input>
        <label for="obc">OBC</label>
        <input type="radio" id="gen" value="GEN" name="cat"></input>
        <label for="gen">GEN</label> <br />
        <label>Nationality</label>
        <input type="text" required></input> <br />
        <h3>QUALIFICATION AS PER ELIGIBILITY CRITERIA</h3>
        <label>Educational Qualification</label> <br />
        <label> Percentage </label>
        <input text="number" required /> <br />
        <label> CGPA </label>
        <input text="number" required /> <br />
        <label> No. of Citations </label>
        <input text="number" /> <br />
        <label> No. of Publications </label>
        <input text="number" /> <br />
        <label> Experience </label>
        <input text="number" required /> <br />
        <h3>COMMUNICATION</h3>
        <label>Postal Address</label>
        <input type="textarea" required /> <br />
        <label>Country</label>
        <input type="text" required /> <br />
        <label>State</label>
        <input type="text" required /> <br />
        <label>City</label>
        <input type="text" required /> <br />
        <label>District</label>
        <input type="text" required /> <br />
        <label>Pincode</label>
        <input type="number" required /> <br />
        <label>Email</label>
        <input type="email" required /> <br />
        <label>Password</label>
        <input type="password" required /> <br />
        <label>Re-type Password</label>
        <input type="password" required /> <br />
        <input type="submit" name="submit" value="Submit" />
      </form>
      </Box>
      </Box>
    </div>
  );
};

export default reg;
