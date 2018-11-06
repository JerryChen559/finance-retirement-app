import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./IncomeStatement.css";

import Navbar from "./Navbar";
import "./Navbar.css";
import Sidenav from "./Sidenav";
import "./Sidenav.css";

class IncomeStatement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salary: 0,
      federaltax: 0,
      statetax: 0,
      sideincome: 0,
      rent: 0,
      mortgage: 0,
      car: 0,
      gas: 0,
      water: 0,
      healthcare: 0,
      school: 0,
      food: 0,
      restaurants: 0,
      clothes: 0,
      gym: 0,
      entertainment: 0,
      travel: 0,
      monthlyincome: 0,
      monthlyexpenses: 0,
      monthlynetincome: 0,
      monthlynetpercent: 0
    };
  }

  componentDidMount() {
    // TODO: get user data after page mounts.
    // after auto0, set up user object to be in redux and session
    // TODO: this.state.monthlyincome = (sum up income)
    // TODO: this.state.monthlyexpenses = (sum up expenses)
  }

  render() {
    console.log("IS state", this.state);
    console.log("IS props", this.props);

    /*
    let myDoughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options
    });

    data = {
      datasets: [
        {
          data: [10, 20, 30]
        }
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Red", "Yellow", "Blue"]
    };
    */

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
                <Link to="/wizardone/1">Update Info</Link>
              </span>
            </h3>

            {/* this link should take user to the first wizard */}

            <div className="spreadsheet">
              <div style={{ fontSize: 18, marginLeft: 100 }}>INCOME</div>
              <div>
                Salary:
                <p>{this.state.salary}</p>
              </div>
              <div>
                Federal Income Tax:
                <p>{this.state.federaltax}</p>
              </div>
              <div>
                State Income Tax:
                <p>{this.state.statetax}</p>
              </div>
              <div>
                Federal Insurance Contributions Act (FICA):
                <p>7.65</p>
              </div>
              <div>
                Side Income / Secondary Income:
                <p>{this.state.sideincome}</p>
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
                Rent:
                <p>{this.state.rent}</p>
              </div>
              <div>
                Mortgage / HOA / Home Insurance:
                <p>{this.state.mortgage}</p>
              </div>
              <div>
                Car Payment / Car Insurance:
                <p>{this.state.car}</p>
              </div>
              <div>
                Gasoline / Subway pass:
                <p>{this.state.gas}</p>
              </div>
              <div>
                Water / Electricity / Heating / Internet / Cable:
                <p>{this.state.water}</p>
              </div>
              <div>
                Healthcare:
                <p>{this.state.healthcare}</p>
              </div>
              <div>
                School:
                <p>{this.state.school}</p>
              </div>
              <div>
                Food (groceries):
                <p>{this.state.food}</p>
              </div>
              <div>
                Restaurants:
                <p>{this.state.restaurants}</p>
              </div>
              <div>
                Clothes:
                <p>{this.state.clothes}</p>
              </div>
              <div>
                Gym Membership:
                <p>{this.state.gym}</p>
              </div>
              <div>
                Entertainment:
                <p>{this.state.entertainment}</p>
              </div>
              <div>
                Travel:
                <p>{this.state.travel}</p>
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
              (monthlynetincome/monthlyincome)% of your net income.
            </span>
            <span>
              Next step: set up your <Link to="/nestegg"> nest egg. </Link>
            </span>
            <span>**add nodemailer**</span>
            <span>**Click here to send an email to yourself**</span>
            <button>Email Income Statement</button>
          </div>
          <div className="graph-body">
            <h1>charts js - donut chart of expenses </h1>
            <div>{/* Breakdown of expenses */}</div>
            <div>{/* doughnut */}</div>
            <div>{/* myDoughnutChart */}</div>

            {/* charts js 2 */}
            {/* import {Doughnut} from 'react-chartjs-2'; */}
            {/* <Doughnut data={...} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default IncomeStatement;
