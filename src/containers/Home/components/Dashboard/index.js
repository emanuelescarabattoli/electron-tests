import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "../../../../components/Card";
import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import style from "./style.scss";

const Dashboard = () => {
  return (
    <>
      <Title tag="Dashboard" title="Your favorite items" />
      <div className={style.layout}>
        <div>
          <Card>
            <CardHeader>
              Hello
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardBody>
            <CardFooter>
              <Button>Find out more</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              Hello
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardBody>
            <CardFooter>
              <Button>Find out more</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              Hello
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardBody>
            <CardFooter>
              <Button>Foo</Button>
              <Button>Bar</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              Hello
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardBody>
            <CardFooter>
              <Button>Foo</Button>
              <Button>Bar</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              Hello
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardBody>
            <CardFooter>
              <Button>Find out more</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
