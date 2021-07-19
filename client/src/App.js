import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchLogin,
  fetchUser,
  dispatchGetUser,
} from "./redux/actions/loginAction";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import "./app.css";
import axios from "axios";

import Container from '@material-ui/core/Container';

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.login);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post("/user/refresh_token", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);

  
  return (
    <Router>
      <React.Fragment>
        {/*<Container maxWidth="lg">  COMMENT pentru width mai mare */}
      <div className="App">
        <Header />
        <Body />
      </div>
      {/* </Container> */}
      </React.Fragment>
    </Router>
  );
}

// export default App;
