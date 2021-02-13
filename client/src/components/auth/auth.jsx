import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  InputGroup,
  Input,
  InputRightElement,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import "./auth.css";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Login</Tab>
        <Tab>Register</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div>
            <div className="container">
              <div className="form">
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter password"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <InputGroup size="md">
                    <Input
                      id="password"
                      pr="4.5rem"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </div>
                <div className="action">
                  <Link to="/forgot-password">forgot your password?</Link>
                  <Button colorScheme="teal" variant="solid">
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="container">
              <div className="form">
                <div className="input-field">
                  <label htmlFor="name">Name</label>
                  <Input id="name" pr="4.5rem" type="text" placeholder="Name" />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    pr="4.5rem"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <InputGroup size="md">
                    <Input
                      id="password"
                      pr="4.5rem"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </div>
                <div className="input-field">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Input
                    id="phoneNumber"
                    pr="4.5rem"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="address">Full Address</label>
                  <Input
                    id="address"
                    pr="4.5rem"
                    type="text"
                    placeholder="Full Address"
                  />
                </div>
                <div className="action">
                  <Button colorScheme="teal" variant="solid">
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Auth;
