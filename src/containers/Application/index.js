import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Container from "./components/Container";
import Home from "../Home";
import Showcase from "../Showcase";

const Application = () => (
  <BrowserRouter>
    <Container>
      <Route exact path="/" component={Home} />
      <Route exact path="/showcase" component={Showcase} />
    </Container>
  </BrowserRouter>
);

export default Application;
