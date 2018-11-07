import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./IncomeStatement.css";

import Navbar from "./Navbar";
import "./Navbar.css";
import Sidenav from "./Sidenav";
import "./Sidenav.css";

//TODO update $ figures. toLocalString()
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
    this.handleSubmit();
    // TODO: get user data after page mounts.
    // after auto0, set up user object to be in redux and session
    // TODO: this.state.monthlyincome = (sum up income)
    // TODO: this.state.monthlyexpenses = (sum up expenses)
  }

  handleSubmit() {
    console.log(this.props.profile);
    axios
      .put(`/api/incomestatement/${this.props.profile.user.auth_id}`, {
        salary: this.props.statement.salary,
        federaltax: this.props.statement.federaltax,
        statetax: this.props.statement.statetax,
        sideincome: this.props.statement.sideincome,
        rent: this.props.statement.rent,
        mortgage: this.props.statement.mortgage,
        car: this.props.statement.car,
        gas: this.props.statement.gas,
        water: this.props.statement.water,
        healthcare: this.props.statement.healthcare,
        school: this.props.statement.school,
        food: this.props.statement.food,
        restaurants: this.props.statement.restaurants,
        clothes: this.props.statement.clothes,
        gym: this.props.statement.gym,
        entertainment: this.props.statement.entertainment,
        travel: this.props.statement.travel,
        monthlyexpenses: +(
          this.props.statement.rent * 1 +
          this.props.statement.mortgage * 1 +
          this.props.statement.car * 1 +
          this.props.statement.gas * 1 +
          this.props.statement.water * 1 +
          this.props.statement.healthcare * 1 +
          this.props.statement.school * 1 +
          this.props.statement.food * 1 +
          this.props.statement.restaurants * 1 +
          this.props.statement.clothes * 1 +
          this.props.statement.gym * 1 +
          this.props.statement.entertainment * 1 +
          this.props.statement.travel * 1
        ),
        monthlyincome: +(
          this.props.statement.salary * 1 -
          this.props.statement.salary *
            (this.props.statement.federaltax / 100) -
          this.props.statement.salary * (this.props.statement.statetax / 100) -
          this.props.statement.salary * 0.0765 +
          this.props.statement.sideincome * 1
        ),
        monthlynetincome:
          +(
            this.props.statement.salary * 1 -
            this.props.statement.salary *
              (this.props.statement.federaltax / 100) -
            this.props.statement.salary *
              (this.props.statement.statetax / 100) -
            this.props.statement.salary * 0.0765 +
            this.props.statement.sideincome * 1
          ) -
          +(
            this.props.statement.rent * 1 +
            this.props.statement.mortgage * 1 +
            this.props.statement.car * 1 +
            this.props.statement.gas * 1 +
            this.props.statement.water * 1 +
            this.props.statement.healthcare * 1 +
            this.props.statement.school * 1 +
            this.props.statement.food * 1 +
            this.props.statement.restaurants * 1 +
            this.props.statement.clothes * 1 +
            this.props.statement.gym * 1 +
            this.props.statement.entertainment * 1 +
            this.props.statement.travel * 1
          )
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          salary: response.data[0].salary,
          federaltax: response.data[0].federaltax,
          statetax: response.data[0].statetax,
          sideincome: response.data[0].sideincome,
          rent: response.data[0].rent,
          mortgage: response.data[0].mortgage,
          car: response.data[0].car,
          gas: response.data[0].gas,
          water: response.data[0].water,
          healthcare: response.data[0].healthcare,
          school: response.data[0].school,
          food: response.data[0].food,
          restaurants: response.data[0].restaurants,
          clothes: response.data[0].clothes,
          gym: response.data[0].gym,
          entertainment: response.data[0].entertainment,
          travel: response.data[0].travel,
          monthlyexpenses: response.data[0].monthlyexpenses,
          monthlyincome: response.data[0].monthlyincome,
          monthlynetincome: response.data[0].monthlynetincome
        });
        // return response.data;
      });
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
                <p>{this.state.salary || this.props.profile.user.salary}</p>
              </div>
              <div>
                Federal Income Tax:
                <p>
                  {this.state.federaltax || this.props.profile.user.federaltax}
                </p>
              </div>
              <div>
                State Income Tax:
                <p>{this.state.statetax || this.props.profile.user.statetax}</p>
              </div>
              <div>
                Federal Insurance Contributions Act (FICA):
                <p>7.65</p>
              </div>
              <div>
                Side Income / Secondary Income:
                <p>
                  {this.state.sideincome || this.props.profile.user.sideincome}
                </p>
              </div>
              <div>
                <strong>
                  Net Income:
                  <p>
                    {this.state.monthlyincome.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }) || this.props.profile.user.monthlyincome}
                  </p>
                </strong>
              </div>
              <br />
              <div style={{ fontSize: 18, marginLeft: 100 }}>EXPENSES</div>

              <div>
                Rent:
                <p>{this.state.rent || this.props.profile.user.rent}</p>
              </div>
              <div>
                Mortgage / HOA / Home Insurance:
                <p>{this.state.mortgage || this.props.profile.user.mortgage}</p>
              </div>
              <div>
                Car Payment / Car Insurance:
                <p>{this.state.car || this.props.profile.user.car}</p>
              </div>
              <div>
                Gasoline / Subway pass:
                <p>{this.state.gas || this.props.profile.user.gas}</p>
              </div>
              <div>
                Water / Electricity / Heating / Internet / Cable:
                <p>{this.state.water || this.props.profile.user.water}</p>
              </div>
              <div>
                Healthcare:
                <p>
                  {this.state.healthcare || this.props.profile.user.healthcare}
                </p>
              </div>
              <div>
                School:
                <p>{this.state.school || this.props.profile.user.school}</p>
              </div>
              <div>
                Food (groceries):
                <p>{this.state.food || this.props.profile.user.food}</p>
              </div>
              <div>
                Restaurants:
                <p>
                  {this.state.restaurants ||
                    this.props.profile.user.restaurants}
                </p>
              </div>
              <div>
                Clothes:
                <p>{this.state.clothes || this.props.profile.user.clothes}</p>
              </div>
              <div>
                Gym Membership:
                <p>{this.state.gym || this.props.profile.user.gym}</p>
              </div>
              <div>
                Entertainment:
                <p>
                  {this.state.entertainment ||
                    this.props.profile.user.entertainment}
                </p>
              </div>
              <div>
                Travel:
                <p>{this.state.travel || this.props.profile.user.travel}</p>
              </div>
              <div>
                <strong>
                  Total Expenses:
                  <p>
                    {this.state.monthlyexpenses ||
                      this.props.profile.user.monthlyexpenses}
                  </p>
                </strong>
              </div>
              <br />
              <div style={{ fontSize: 18, marginLeft: 100 }}>
                MONTHLY NET:
                <p>
                  {this.state.monthlynetincome.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }) || this.props.profile.user.monthlynetincome}
                </p>
              </div>
            </div>

            <span>
              Summary: With all expenses paid, you are left with{" "}
              {(
                (this.state.monthlynetincome / this.state.monthlyincome) *
                100
              ).toFixed(2) ||
                (
                  (this.props.profile.user.monthlynetincome /
                    this.props.profile.user.monthlyincome) *
                  100
                ).toFixed(2)}
              % of your net income.
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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(IncomeStatement);
