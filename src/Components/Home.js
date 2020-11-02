import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const user = props.user;
  const history = useHistory();

  const pathing = (e) => {
    const path = e.target.value;
    history.push(path);
  };

  const control = (u) => {
    if (!u) {
      return (
        <div>
          <button onClick={pathing} value="/login">
            Login
          </button>
          <button onClick={pathing} value="/signup">
            Sign Up
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>User</h1>
          <p>user is logged in</p>
        </div>
      );
    }
  };

  return <div>{control(user)}</div>;
};

export default Home;
