import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>More to Learn</h1>
      <h1>Work on this page if I have extra time.</h1>
      <h3>Learn More Page. Add Links for user to visit.</h3>
      <h3>
        <Link to="/">Back to the app.</Link>.
      </h3>
    </div>
  );
}

export default Login;
