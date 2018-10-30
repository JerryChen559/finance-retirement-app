import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RetirementPlan.css";

import Sidenav from "./Sidenav";
import "./Sidenav.css";

class RetirementPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bla: [],
      blah: []
    };
  }

  render() {
    return (
      <div className="retire">
        <Sidenav />
        <div className="retire-header">
          <h1>Welcome to Step 3:</h1>
          <h5>(Move the slider! Increase savings for early retirement.)</h5>
        </div>

        <div className="retire-body">
          <div className="retire-left">
            <div className="emergencyfund">
              <h3>Calculation for Financial Independence</h3>
              <input type="number" placeholder="amount" />

              <h4>burn rate </h4>
              <h4>deposit amount</h4>
              <h4>years left = 83 - current age</h4>
              <h4>your number to reach financial independence</h4>
            </div>

            <div className="retirementfund">
              <h3>Current Assets</h3>
              <input type="number" placeholder="amount" />

              <h4>current cash amount in banks </h4>
              <h4>current amount in invested </h4>
              <h4>valuation of current home</h4>
              <h4> (fire-current total)/monthlynetincome </h4>
            </div>
          </div>
          <div className="retire-right">
            <div className="chartjs">
              chartsjs here.
              <span>savings vs </span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
            </div>
            <h3>Onto step 4, the bonus section.</h3>
            <h3>
              {" "}
              Plan your
              <Link to="/desiredpurchases"> purchases!</Link>.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default RetirementPlan;
