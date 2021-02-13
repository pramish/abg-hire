import React from "react";
import "./layout.css";
import { TabList, Tab, Tabs } from "@chakra-ui/react";
const Layout = () => {
  return (
    <div className="container">
      <Tabs isFitted variant="enclosed">
        <TabList mb="10em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};
export default Layout;
