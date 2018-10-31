import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RetirementPlan.css";

import Sidenav from "./Sidenav";
import "./Sidenav.css";

class RetirementPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // props drill monthlyexpenses.
      // props drill monthlyincome.
      age: "",
      fire: 0,
      asset: ""
    };
  }

  changeAge(val) {
    this.setState({ age: val });
  }

  render() {
    console.log(this.state);
    let yearsleft = 78 - this.state.age;
    // Math for fire: (Monthly expenses * 12 * ({yearsleft})) * (1.02**({yearsleft}))
    // let mathfire =
    // Math for assets:
    // let mathassets =

    return (
      <div className="retire">
        <Sidenav />
        <div className="retire-header">
          <h1>Welcome to Step 3:</h1>
          <h5>(Move the slider! Increase savings for early retirement.)</h5>
        </div>

        <div className="retire-body">
          <div className="retire-left">
            <div className="fire">
              <h3>Calculation for Financial Independence</h3>

              <h4>
                Please input your age
                <input
                  value={this.state.age}
                  placeholder="age"
                  onChange={e => this.changeAge(e.target.value)}
                />
              </h4>
              <h4>
                Your number to be financially free is: ({this.state.fire}){" "}
              </h4>
              <h6>
                *Math: (Monthly expenses * 12 * ({yearsleft}
                )) * (1.02**(
                {yearsleft}
                ))
              </h6>

              {/* <h4>years left = 78 - current age</h4>
              <h4>maybe: FV = PV (1 + r)^n</h4> */}
            </div>

            <div className="asset">
              <h3>Current Assets</h3>

              <h4>current cash amount in banks </h4>
              <h4>current amount in invested </h4>
              <h4>valuation of current home</h4>
              <h4> (fire-current total) / monthlynetincome </h4>
              <h4> (fire-current total) / monthlynetincome </h4>
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
            <span>**add nodemailer**</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RetirementPlan;
