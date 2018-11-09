import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./RetirementPlan.css";

import { Bar, Line } from "react-chartjs-2";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

class RetirementPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      asset: "",
      totalAssetsFiveYears: 12000,
      fire: 250000,
      monthcount: 0,
      yearcount: 0,
      monthlynetpercent: 13,
      // pass in using redux or tables: monthlyexpenses.
      monthlyexpenses: 2250,
      // pass in using redux or tables: monthlyincome.
      monthlyincome: 2753,
      // pass in using redux or tables: monthlynetincome.
      monthlynetincome: 400
    };
  }

  //componentDidMount(){}?
  // I might have to get this.props to store onto local state, so that I can work with the data.
  //componentDidUpdate(){}?

  changeAge(val) {
    this.setState({ age: val });
  }
  changeAsset(val) {
    this.setState({ asset: val });
  }

  render() {
    console.log(this.state);

    // MATH for FIRE: (Monthly expenses * 12 months * ({yearsleft})) * (1.02**({yearsleft}))
    let yearsleft = 78 - this.state.age;
    let fire = this.state.monthlyexpenses * 12 * yearsleft * 1.02 ** yearsleft;

    // monthly net percent
    // monthlynetpercent = monthlynetincome/monthlyincome

    // monthly net income = monthly income - monthly expenses
    // Alternatively written for this page:
    // monthlynetincome = monthlynetpercent * monthlyincome

    // MATH for MONTHS of WORK LEFT:
    // monthcount = (fire - total assets) / monthlynetincome

    // MATH for YEARS of WORK LEFT:
    // yearcount = monthcount / 12

    let monthcount = Math.floor(
      (fire - this.state.asset) /
        (this.state.monthlynetpercent * this.state.monthlyincome)
    );
    let yearcount = Math.floor(monthcount / 12);

    // --- math for Bar Graph ---
    // MATH for TOTAL ASSETS in 5 year plan:
    // totalAssets = assets + monthlynetincome * 60 months * (1.02^5)
    let totalAssetsFiveYears =
      (this.state.assets +
        this.props.monthlynetpercent * this.props.monthlyincome * 60) *
      1.104;

    // --- data for Bar Graph ---
    const data_bar = {
      labels: ["Five Year Projection" /*, "2nd data set"*/],
      datasets: [
        {
          label: "FIRE/Goal",
          backgroundColor: "rgba(255,99,132,0.6)",
          borderColor: "rgba(255, 20, 147,0.9)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.8)",
          hoverBorderColor: "rgba(255, 20, 147,1)",
          data: [this.state.fire /*, this.state.seconddataset*/]
          // data: [{fire}]
        },
        {
          label: "Assets/Savings",
          backgroundColor: "rgba(123, 104, 238,0.6)",
          borderColor: "rgba(0, 0, 205,0.9)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(123, 104, 238,0.8)",
          hoverBorderColor: "rgba(0, 0, 205,1)",
          data: [this.state.totalAssetsFiveYears]
          // data: [{totalAssets}]
        }
      ]
    };

    // --- math for Line Graph ---
    // FV = PV * (1+r)^n
    // interest rate of 2%
    let PV = this.state.assets;
    let FV1 =
      (this.state.assets +
        this.props.monthlynetpercent * this.props.monthlyincome * 12) *
      1.02;
    let FV2 =
      (this.state.assets +
        this.props.monthlynetpercent * this.props.monthlyincome * 24) *
      1.04;
    let FV3 =
      (this.state.assets +
        this.props.monthlynetpercent * this.props.monthlyincome * 36) *
      1.061;
    let FV4 =
      (this.state.assets +
        this.props.monthlynetpercent * this.props.monthlyincome * 48) *
      1.082;
    let FV5 =
      (this.state.assets +
        this.props.monthlynetpercent * this.props.monthlyincome * 60) *
      1.104;

    // -- data for Line Graph --
    const data_line = {
      labels: ["Now", "Year1", "Year2", "Year3", "Year4", "Year5"],
      datasets: [
        {
          label: "Savings Rate vs Time",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [45, 80, 170, 330, 580, 950]
          // data: [{PV}, {FV1}, {FV2}, {FV3}, {FV4}, {FV5}]
        }
      ]
    };

    return (
      <div className="retire">
        <div className="navbar">
          <Navbar />
        </div>

        <Sidenav />
        <div className="retire-header">
          <h1>Welcome to Step 3:</h1>
          <h5>(Move the slider! Increase savings for early retirement.)</h5>
        </div>

        <div className="retire-body">
          <div className="retire-left">
            <div className="fire">
              <h3>
                Calculation for (FIRE) Financial Independence Retire Early
              </h3>

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
              <h4>
                Your current savings percent: (
                {this.props.profile.user.monthlynetpercent}){" "}
              </h4>
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
                {this.state.monthlynetpercent} * {this.state.monthlyincome}){" "}
              </h6>
            </div>
          </div>
          <div className="retire-right">
            <div className="chartjs">
              <span>{/* <BarGraph /> */}</span>
              <div className="bar-chart-container">
                {/* <h2>Bar Example (custom size)</h2> */}
                <h4>Five Year Projection</h4>
                <h6>*Financially free when the bar graphs equal</h6>
                <Bar
                  style={{ display: "block" }}
                  data={data_bar}
                  // width={30}
                  // height={10}
                  // options={{
                  //   maintainAspectRatio: false
                  // }}
                />
              </div>
              <br />
              <div className="range-field">
                <span>
                  <strong>Savings of Net Income:</strong>{" "}
                </span>
                <span>
                  <input
                    type="range"
                    name="slider"
                    min="2"
                    max="7"
                    // need to make slider link up with monthlynetpercent
                    // value={this.state.monthlynetpercent}
                  />
                </span>
                <span className="slider-num">
                  <span>20%</span>
                  <span>30%</span>
                  <span>40%</span>
                  <span>50%</span>
                  <span>60%</span>
                  <span>70%</span>
                </span>
              </div>

              {/* <LineGraph /> */}
              <div className="line-graph-container">
                <h4>Rate of savings to Time until retirement </h4>
                <Line data={data_line} />
              </div>
            </div>
            <h3>Onto step 4, the bonus section:</h3>
            <h3>
              {" "}
              Plan your
              <Link to="/desiredpurchases" style={{ color: "orange" }}>
                {" "}
                purchases!
              </Link>
            </h3>
            <span>**add nodemailer**</span>
            <button>nodemailer</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(RetirementPlan);
