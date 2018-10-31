import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IncomeStatement.css";

import Navbar from "./Navbar";
import "./Navbar.css";
import Sidenav from "./Sidenav";
import "./Sidenav.css";

class IncomeStatement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // pass to RetirementPlan
      monthlyincome: 0,
      // pass to RetirementPlan
      monthlyexpenses: 0
    };
  }

  componentDidMount() {
    // TODO: this.state.monthlyincome = (sum up income)
    // TODO: this.state.monthlyexpenses = (sum up expenses)
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="incomestatement">
          <Sidenav />

          <div className="statement-header">
            <h1>Welcome to Step 1!</h1>
            <h5>(calculate net income by updating your info)</h5>
          </div>

          <div className="statement-body">
            <h3>
              Monthly Income Statement
              <span className="update">
                <Link to="/wizardone">Update Info</Link>
              </span>
            </h3>

            {/* this link should take user to the first wizard */}

            <div className="spreadsheet">
              <div style={{ fontSize: 18, marginLeft: 100 }}>INCOME</div>
              <div>
                Salary:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Federal Income Tax:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                State Income Tax:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Federal Insurance Contributions Act (FICA):{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Side Income / Secondary Income:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                <strong>
                  Net Income:
                  <p>{this.state.monthlyincome}</p>
                </strong>
              </div>
              <br />
              <div style={{ fontSize: 18, marginLeft: 100 }}>EXPENSES</div>

              <div>
                Rent:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Mortgage / HOA / Home Insurance:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Car Payment / Car Insurance:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Gasoline / Subway pass:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Water / Electricity / Heating / Internet / Cable:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Healthcare:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                School:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Food (groceries):{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Restaurants:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Entertainment:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Clothes:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Gym Membership:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                Travel:{" "}
                <p>
                  state
                  {}
                </p>
              </div>
              <div>
                <strong>
                  Total Expenses:
                  <p>{this.state.monthlyexpenses}</p>
                </strong>
              </div>
              <br />
              <div style={{ fontSize: 18, marginLeft: 100 }}>
                MONTHLY NET:
                <p>
                  state
                  {}
                </p>
              </div>
            </div>

            <span>
              Summary: With all expenses paid, you are left with
              (monthlynet/netincome)% of your net income.
            </span>
            <span>
              Next step: set up your <Link to="/nestegg"> nest egg. </Link>
            </span>
            <span>**add nodemailer**</span>
          </div>
          <div className="graph-body">
            <h1>charts js - pi graph provide breakdown of expenses </h1>
            <div>{/* Breakdown of expenses */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default IncomeStatement;
