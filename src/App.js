import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { Layout } from "./components";
import { HomePage, Login, Time1, Time5, Time6, Time9 } from "./pages";

import "./assets/css/all.min.scss";
import "./assets/css/default.scss";
import "./assets/css/style.scss";
import "./assets/css/responsive.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const history = useHistory();

  return (
    <>
      {history.location.pathname === "/login" ? (
        <Route path="/login">
          <Login />
        </Route>
      ) : (
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/time1">
              <Time1 />
            </Route>
            <Route path="/time5">
              <Time5 />
            </Route>
            <Route path="/time6">
              <Time6 />
            </Route>
            <Route path="/time9">
              <Time9 />
            </Route>
          </Switch>
        </Layout>
      )}
    </>
  );
}
