import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Button } from "react-bootstrap";
import { AuthContext } from "./context/auth";

const App = (props) => {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  const logOut = () => {
    setAuthTokens();
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
            {
              authTokens ? (
                <li>
                  <Button onClick={logOut}>Log Out</Button>
                </li>
              ) : null
            }
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <PrivateRoute path="/admin" component={Admin} />
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;