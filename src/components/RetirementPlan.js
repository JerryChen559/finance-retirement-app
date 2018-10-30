import React from "react";
import { Link } from "react-router-dom";

import Sidenav from "./Sidenav";
import "./Sidenav.css";

function RetirementPlan() {
  return (
    <div>
      <Sidenav />
      <h1>Welcome to Step 3:</h1>
      <div>
        <h3>
          Adjust your savings percentage and see how retirement is adjusted.{" "}
        </h3>
        <h3>
          Onto step 4. <Link to="/desiredpurchases">Purchase </Link>
          things after meeting your savings requirement. .
        </h3>
      </div>
    </div>
  );
}

export default RetirementPlan;
