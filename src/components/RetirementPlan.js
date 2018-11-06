import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RetirementPlan.css";

import Navbar from "./Navbar";
import "./Navbar.css";
import Sidenav from "./Sidenav";
import "./Sidenav.css";

class RetirementPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      asset: "",
      // fire: 0,
      // monthcount: 0,
      // yearcount: 0,
      // pass in using redux or tables: monthlyexpenses.
      monthlyexpenses: 5,
      // pass in using redux or tables: monthlyincome.
      monthlyincome: 100,
      // pass in using redux or tables: monthlynetincome.
      monthlynetincome: 10
    };
  }

  changeAge(val) {
    this.setState({ age: val });
  }
  changeAsset(v) {
    this.setState({ asset: v });
  }

  render() {
    console.log(this.state);
    let yearsleft = 78 - this.state.age;
    // Math for fire: (Monthly expenses * 12 * ({yearsleft})) * (1.02**({yearsleft}))
    // let mathfire =
    // Math for assets:
    // let mathassets =
    let monthlynetpercent =
      this.state.monthlynetincome / this.state.monthlyincome;

    let fire = this.state.monthlyexpenses * 12 * yearsleft * 1.02 ** yearsleft;
    let monthcount = Math.floor(
      (fire - this.state.asset) /
        (this.state.monthlynetincome / this.state.monthlyincome)
    );
    let yearcount = Math.floor(monthcount / 12);

    return (
      <div className="retire">
        <Navbar />
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
              <h4>Your number to be financially free is: ({fire})</h4>
              <h6>
                *Math: ({this.state.monthlyexpenses} * 12 * ({yearsleft}
                )) * (1.02**(
                {yearsleft}
                ))
              </h6>

              {/* <h4>years left = 78 - current age</h4>
              <h4>maybe: FV = PV (1 + r)^n</h4> */}
            </div>

            <div className="asset">
              <h3>Current Assets</h3>

              <h4>
                Please input your current total assets (cash, stocks, bank
                valuation of home)
                <input
                  value={this.state.asset}
                  placeholder="total assets"
                  onChange={e => this.changeAsset(e.target.value)}
                />
              </h4>

              {/* <h4>current cash amount in banks </h4>
              <h4>current amount in invested </h4>
              <h4>valuation of current home</h4> */}
              <h4>Your current savings percent: ({monthlynetpercent}) </h4>
              <h4>
                Number of working MONTHS until you are financially free: (
                {monthcount}){" "}
              </h4>
              <h4>
                Number of working YEARS until you are financially free: (
                {yearcount}){" "}
              </h4>
              <h6>
                *Math: ({fire} - {this.state.asset}) / (
                {this.state.monthlynetincome}/{this.state.monthlyincome}){" "}
              </h6>
            </div>
          </div>
          <div className="retire-right">
            <div className="chartjs">
              chartsjs here.
              <span>goal vs savings bar chart</span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <div className="range-field">
                <input type="range" name="slider" min="3" max="7" />
                <span className="slider-left">savings at 30%</span>
                <span className="slider-right">savings at 70%</span>
              </div>
              <span>x</span>
              <span>x</span>
              <span>line graph displaying: monthly savings vs time </span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <span>slider that updates the numbers in real time</span>
              <span>
                slider shows percentage 30%-70%. start (30% of netincome) and
                end (70% of netincome)
              </span>
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
