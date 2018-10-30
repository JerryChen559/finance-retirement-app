import React from "react";
import { Link } from "react-router-dom";

import Sidenav from "./Sidenav";
import "./Sidenav.css";

function NestEgg() {
  return (
    <div className="nestegg">
      <Sidenav />
      <h1>Welcome to Step 2:</h1>
      <h3>
        Onto step 3. Plan your <Link to="/retirementplan"> retirement!</Link>.
      </h3>
    </div>
  );
}

export default NestEgg;
