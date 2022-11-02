import React from "react";
import { Select } from "@chakra-ui/react";
import regStyles from "../styles/Form.module.css";

const reg = () => {
  return (
    <div>
      <h3>Personal Details</h3>
      <form className={regStyles.form}>
        <label>Specialization</label>
        <Select placeholder="Please Select">
          <option value="option1">Computer Science and Engineering</option>
          <option value="option2">
            Electronics and Communication Engineering
          </option>
          <option value="option3">
            Mechatronics and Mechanical Engineering
          </option>
          <option value="option4">
            Communication and Computer Engineering
          </option>
        </Select>
        <label>Title</label>
        <Select placeholder="Please Select">
          <option value="option1">Mr.</option>
          <option value="option2">Mrs.</option>
          <option value="option3">Ms.</option>
          <option value="option4">Dr.</option>
        </Select>
        <label>Name</label>
        <input type="text" id="name"></input> <br />
        <label> Date of Birth </label>
        <input type="date"></input> <br />
        <label>Age</label>
        <input type="text"></input> <br />
        <label>Gender</label>
        <Select placeholder="Please Select">
          <option value="option1">Male</option>
          <option value="option2">Female</option>
        </Select>
        <label>Father's Name</label>
        <input type="text"></input> <br />
        <label>Category</label>
        <input type="radio" id="st" value="ST" />
        <label for="st">ST</label>
        <input type="radio" id="sc" value="SC" />
        <label for="sc">SC</label>
        <input type="radio" id="obc" value="OBC"></input>
        <label for="obc">OBC</label>
        <input type="radio" id="gen" value="GEN"></input>
        <label for="gen">GEN</label> <br />
        <label>Nationality</label>
        <input type="text"></input> <br />
      </form>

      <h3>QUALIFICATION AS PER ELIGIBILITY CRITERIA</h3>
      <form className={regStyles.form}>
        <label>Educational Qualification</label> <br />
        <label> Percentage </label>
        <input text="numer"/> <br />
        <label> CGPA </label>
        <input text="numer"/> <br />
        <label> Experience </label>
        <input text="numer"/> <br />
      </form>

      <h3>COMMUNICATION</h3>
      <form className={regStyles.form}>
        <label>Postal Address</label>
        <input type="textarea" /> <br/>
        <label>Country</label>
        <input type="text"/> <br/>
        <label>State</label>
        <input type="text"/> <br/>
        <label>City</label>
        <input type="text"/> <br/>
        <label>District</label>
        <input type="text"/> <br/>
        <label>Pincode</label>
        <input type="number"/> <br/>
        <label>Email</label>
        <input type="email"/> <br/>
      </form>
    </div>
  );
};

export default reg;
