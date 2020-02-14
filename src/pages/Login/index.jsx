import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// import logoImg from "../img/logo.jpg";
import {
  Card,
  Logo,
  Form,
  // Input,
  Button,
  Error
} from "react-bootstrap";
import { useAuth } from "../../context/auth";
import { isNullOrUndefined } from "util"

const Login = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const referer =
    isNullOrUndefined(props.location.state) ||
    isNullOrUndefined(props.location.state.referer)
      ? "/"
      : props.location.state.referer;

  const postLogin = () => {
    // axios
    //   .post("https://www.somePlace.com/auth/login", {
    //     userName,
    //     password
    //   })
    //   .then(result => {
    //     if (result.status === 200) {
    //       setAuthTokens(result.data);
    //       setLoggedIn(true);
    //     } else {
    //       setIsError(true);
    //     }
    //   })
    //   .catch(e => {
    //     setIsError(true);
    //   });

    setAuthTokens("token");
    setLoggedIn(true);
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      {/* <Logo src={logoImg} /> */}
      <Form>
        {/* <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        /> */}
        <Button onClick={postLogin}>Login</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>

      {/* {isError && (
        <Error>The username or password provided were incorrect!</Error>
      )} */}
    </Card>
  );
}

export default Login;
