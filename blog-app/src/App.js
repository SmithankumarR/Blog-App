import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import "./styles/style.css"
import SingleArticle from "./components/SingleArticle";
import React from "react";


class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
  }
  updateUser = (user) => {
    this.setState({ isLoggedIn: true, user })
  }
  render() {
    return (
      <div className="container mx-auto">
        <Navbar isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn updateUser={this.updateUser} />
          </Route>
          <Route path="/sign-up">
            <SignUp updateUser={this.updateUser} />
          </Route>
          <Route path="/article/:slug" component={SingleArticle} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    );
  }
};

export default App;
