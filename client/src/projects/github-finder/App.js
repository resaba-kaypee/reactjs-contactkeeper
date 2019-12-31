import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Layout/Navbar";
import Alert from "./Component/Layout/Alert";
import User from "./Component/User/User";
import About from "./Component/Pages/About";
import Home from "./Component/Pages/Home";
// import NotFound from "./Component/Pages/NotFound";
import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";
import "./finder.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/github-finder" component={Home} />
                <Route exact path="/github-finderabout" component={About} />
                <Route exact path="/github-finder/user/:login" component={User} />
                {/* <Route component={NotFound} /> */}
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
