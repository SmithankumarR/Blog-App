import React from "react";
import "./styles/style.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import SingleArticle from "./components/SingleArticle";

import { localStorageKey, userVerifyURL } from "./utils/constant";
import NewArticle from "./components/Authenticated/NewArticle";
import Settings from "./components/Authenticated/Settings";
import Profile from "./components/Authenticated/Profile"

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: "",
    isVerifying: true,
  };

  componentDidMount() {
    let storageKey = localStorage[localStorageKey];
    if (storageKey) {
      fetch(userVerifyURL, {
        method: "GET",
        headers: {
          authorization: `Token ${storageKey}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        })
        .then(({ user }) => this.updateUser(user))
        .catch((errors) => console.log(errors));
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isVerifying: false });
    }
  }

  updateUser = (user) => {
    console.log(user);
    this.setState({ isLoggedIn: true, user:user, isVerifying: false });
    localStorage.setItem(localStorageKey, user.token);
  };
  render() {
    return (
      <div className="container mx-auto">
        <Navbar isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        {this.state.isLoggedIn ? (
          <AuthenticatedApp user={this.state.user} />
        ) : (
          <UnAuthenticatedApp updateUser={this.updateUser} user={this.state.user} />
        )}
      </div>
    );
  }
}
function AuthenticatedApp(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/new-article" >
        <NewArticle user={props.user} />
      </Route>
      <Route path="/settings" >
        <Settings
          user={props.user}
          updateUser={props.updateUser}
        />
      </Route>
      <Route path="/profile" >
        <Profile user={props.user} />
      </Route>
      <Route path="/article/:slug">
        <SingleArticle user={props.user} />
      </Route>
    </Switch>
  );
}
function UnAuthenticatedApp(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/sign-in">
        <SignIn updateUser={props.updateUser} />
      </Route>
      <Route path="/sign-up">
        <SignUp updateUser={props.updateUser} />
      </Route>
      <Route path="/article/:slug" >
        <SingleArticle user={props.user} />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
export default App;
