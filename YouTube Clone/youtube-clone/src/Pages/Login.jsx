// Packages
import React, { useContext, useEffect, useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { authenticateUser } from "../API/fetchData";

import { AuthenticationContext } from "../Contexts/AuthenticationContextProvider";

const emailAddress = JSON.parse(localStorage.getItem("email")) || "";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { isAuthorized, updateAuthorizedState } = useContext(
    AuthenticationContext
  );

  const handleChange = (event) => {
    const { type, value } = event.target;
    setCredentials({ ...credentials, [type]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await authenticateUser(credentials);
    if (response.status == 200) {
      updateAuthorizedState(true);
      localStorage.setItem("email", JSON.stringify(credentials.email));
      history.back();
    }
  };

  useEffect(() => {}, [isAuthorized]);

  if (isAuthorized) {
    return (
      <Box className="logout-div">
        <Text>
          Signed In as: <strong>{emailAddress}</strong>
        </Text>
        <Button
          onClick={() => {
            updateAuthorizedState(false);
            localStorage.setItem("email", JSON.stringify(credentials.email));
          }}
          colorScheme="red"
        >
          LOGOUT
        </Button>
      </Box>
    );
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormControl mb={3} isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            onChange={handleChange}
            placeholder="Email Address"
          />
        </FormControl>

        <FormControl mb={3} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </FormControl>

        <Button type="submit" onClick={handleSubmit} colorScheme="green">
          LOGIN
        </Button>
      </form>
    </div>
  );
}
