import react from "react";
import {
  Select,
  Box,
  Input,
  Button,
  Text,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import AuthContext from "../context/AuthContext";
import Router from "next/router";

const Login = () => {
  const { Jwt} = useContext(AuthContext);
  const router = Router();

  let editForm = async (e) => {
    console.log("Form Submitted");
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    Object.assign(data, { id: router.query.appid });
    console.log(data);
    let response = await fetch(
      "https://recruitsys.herokuapp.com/updateApp?" +
        new URLSearchParams({ jwt: Jwt }),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    // let data = await response.json()
    console.log(response);
    if (response.status === 200) {
      alert("Registered Successfully");
      router.push("/dashboard");
    } else {
      console.log("404");
      alert("Something went wrong !");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      margin="auto"
      width="100%"
    >
        <form onSubmit={editForm}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        Experience
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter Years of Experience"
            size="sm"
            id="experiance"
            name="experiance"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        Citations
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter Number of Citations"
            size="sm"
            id="citations"
            name="citations"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        Publications
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter Number of Publications"
            size="sm"
            id="publications"
            name="publications"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        Country
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter Country"
            size="sm"
            id="country"
            name="country"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        City
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter City"
            size="sm"
            id="city"
            name="city"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        State
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter State"
            size="sm"
            id="state"
            name="state"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        District
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter District"
            size="sm"
            id="district"
            name="district"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        Postal Code
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter Postal Code"
            size="sm"
            id="postal"
            name="postal"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        Pincode
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter Postal Code"
            size="sm"
            id="pincode"
            name="pincode"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        marginTop="2vh"
      >
        Mobile
        <Box w="60%">
          <Input
            type="text"
            placeholder="Enter Mobile"
            size="sm"
            id="mob_num"
            name="mob_num"
            width="auto"
            required
          ></Input>
        </Box>
      </Box>
      <Button colorScheme="teal" variant="solid" type='submit' sm>
        Submit
      </Button>
      </form>
    </Box>
  );
};

export default Login;
