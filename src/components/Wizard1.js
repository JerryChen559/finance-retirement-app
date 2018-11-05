import React, { Component } from "react";
// import { connect } from "react-redux";
// import { updateBlah, ___, updateCost, updateDownPayment } from "../../redux/_blah_reducer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salary: "",
      federaltax: "",
      statetax: "",
      sideincome: ""
    };
  }

  componentDidMount() {
    this.getIncomeStatement();
  }

  getIncomeStatement = () => {
    console.log(this.props);
    axios
      .get(
        `http://localhost:4000/api/incomestatement/${
          this.props.match.params.id
        }`
      )
      // should also work!
      // .get(`http://localhost:4000/api/house/${this.props.location.state.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          auth_id: response.data[0].id,
          salary: response.data[0].salary,
          federaltax: response.data[0].federaltax,
          statetax: response.data[0].statetax,
          sideincome: response.data[0].sideincome
        });
      });
  };

  handleSubmit() {
    console.log(this.state.id);
    axios
      .put(`http://localhost:4000/api/incomestatement/${this.state.id}`, {
        salary: this.state.salary,
        federaltax: this.state.federaltax,
        statetax: this.state.statetax,
        sideincome: this.state.sideincome
      })
      .then(response => {
        console.log(response);
        this.setState({
          salary: this.state.salary,
          federaltax: this.state.federaltax,
          statetax: this.state.statetax,
          sideincome: this.state.sideincome
          // redirect: !this.state.redirect
        });
      });
  }

  handleInput(key, val) {
    this.setState({ [key]: val });
  }

  render() {
    console.log(this.state);

    return (
      <div className="parent-div">
        {/*A place for user to input salary, fed, state, FICA, secondary income */}
        <div className="vert-align">
          <p>Monthly salary before taxes.</p>
          <input
            type="number"
            placeholder="salary"
            value={this.state.salary}
            onChange={e => this.handleInput("salary", e.target.value)}
          />
          <br />
          <p>
            {/* Todo: make this a dropdown.  */}
            Federal Income Tax (10%, 15%, 25%, 28%, 33%, 35%, 39.6%)
          </p>
          <input
            type="number"
            placeholder="federal income tax (in %)"
            value={this.state.federaltax}
            onChange={e => this.handleInput("federaltax", e.target.value)}
          />
          <br />
          <p>
            {/* Todo: make this a dropdown. tax rate autofills when a state is selected */}
            State Income Tax
          </p>
          <input
            type="number"
            placeholder="percentage as decimal {props.user.statetax}"
            value={this.state.statetax}
            onChange={e => this.handleInput("statetax", e.target.value)}
          />
          <br />
          <p>
            Federal Insurance Contributions Act (FICA) (6.2% Social Security tax
            + 1.45% Medicare tax)
          </p>
          <input
            // no edit = no onchange
            value="7.65"
          />
          <br />
          <p>Side Income / Secondary Income </p>
          <input
            type="number"
            placeholder="side income"
            value={this.state.sideincome}
            onChange={e => this.handleInput("sideincome", e.target.value)}
          />
          <div>
            <span>Form is 25% complete! </span>
            <Link to="/wizardtwo">
              <button
                className="margin-btn"
                onClick={() => this.handleSubmit()}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard1;
