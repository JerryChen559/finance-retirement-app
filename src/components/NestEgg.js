import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./Nestegg.css";

import cherryblossom from "../Assets/garden/cherryblossom.svg";
import dogrose from "../Assets/garden/dogrose.svg";
import flowerblue from "../Assets/garden/flowerblue.svg";
import flowerorange from "../Assets/garden/flowerorange.svg";
import flowersix from "../Assets/garden/flowersix.svg";
import flowerthree from "../Assets/garden/flowerthree.svg";
import lotusa from "../Assets/garden/lotusa.svg";
import lotusb from "../Assets/garden/lotusb.svg";
import roseone from "../Assets/garden/roseone.svg";
import sakura from "../Assets/garden/sakura.svg";
import sunflowerone from "../Assets/garden/sunflowerone.svg";
import sunflowertwo from "../Assets/garden/sunflowertwo.svg";
import sunflowerthree from "../Assets/garden/sunflowerthree.svg";

import Navbar from "./Navbar";
import "./Navbar.css";
import Sidenav from "./Sidenav";
import "./Sidenav.css";

class NestEgg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      depositemergency: "",
      depositretirement: "",
      emergencyfund: [],
      retirementfund: [],
      funds: [],
      flowers: [
        cherryblossom,
        dogrose,
        flowerblue,
        flowerorange,
        flowersix,
        flowerthree,
        lotusa,
        lotusb,
        roseone,
        sakura,
        sunflowerone,
        sunflowertwo,
        sunflowerthree
      ]
    };

    this.drill = this.drill.bind(this);
  }

  componentDidMount() {
    this.getUserEDeposits();
    // this.getUserRDeposits();
  }

  // TODO: get users list of deposits and display
  getUserEDeposits() {
    console.log("User", this.props.profile.user.user_id);
    axios
      .get(`/api/useredeposits/${this.props.profile.user.user_id}`)
      .then(response => {
        console.log("response.data", response.data);
        // this.setState({
        //   emergencyfund: response.data
        // });
      });
  }
  // getUserRDeposits() {
  //   console.log("User", this.props.profile.user.user_id);
  //   axios
  //     .get(`/api/useredeposits/${this.props.profile.user.user_id}`)
  //     .then(response => {
  //       console.log("response.data", response.data);
  //       this.setState(
  //         {
  //           retirementfund: response.data
  //         },
  //         () => this.drill()
  //       );
  //     });
  // }

  handleInput(key, val) {
    this.setState({ [key]: val });
  }

  // Add a deposit to the emergency fund.
  submitEmergencyDeposit() {
    const { depositemergency } = this.state;
    axios
      .post("/api/addemergencydeposit", {
        user_id: this.props.profile.user.user_id,
        depositemergency
      })
      .then(response => {
        console.log("efund", response);
        // this.setState({
        //   emergencyfund: response.data
        // });
        this.setState(
          {
            emergencyfund: response.data
          },
          () => this.drill()
        );
        console.log("drilled efund", response);
      });
  }
  // drilling through an array of objects
  // done on the front end for Emergency fund.
  drill() {
    let funds = this.state.emergencyfund.map((e, i) => {
      return e.depositemergency !== typeof null ? e.depositemergency : null;
    });
    this.setState({ funds: funds });
    console.log(this.state.funds);
  }

  // Add a deposit to the retirement fund.
  // Retirement fund drilling through an array of
  // objects done on the backend for practice.
  submitRetirementDeposit() {
    const { depositretirement } = this.state;
    axios
      .post("/api/addretirementdeposit", {
        user_id: this.props.profile.user.user_id,
        depositretirement
      })
      .then(
        response => console.log(response)
        // response =>
        //   {
        //   this.setState({
        //     retirementfund: response.data
        //   });
        // }
      );
  }

  delButton(id) {
    axios
      .delete(`/api/deletedeposit/${id}`)
      // .then(response => {
      // this.setState({
      //   emergencyfund: response.data,
      //   retirementfund: response.data
      // });
      // })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state);

    let efund =
      this.state.emergencyfund.length &&
      this.state.emergencyfund.map((e, i) => {
        console.log(e);
        return (
          <div key={i}>
            {e.datecreated}
            {/* moment().format('LL'); */}
            {e.depositemergency}
            <button
              className="delButton"
              onClick={() => this.delButton(e.datecreated)}
            >
              Delete
            </button>
          </div>
        );
      });
    let rfund =
      this.state.retirementfund.length > 0
        ? this.state.retirementfund.map((e, i) => {
            return (
              <div key={i}>
                {e.datecreated}
                {e.depositretirement}
                <button className="delButton" onClick={this.delButton}>
                  Delete
                </button>
              </div>
            );
          })
        : "";

    // TODO: Come back to this
    // flowers should equal number of deposits.
    // removing a deposit should remove a flower.

    // TODO: (post mvp)
    // Deposits need to be contained within their own containers

    let eflowers =
      this.state.emergencyfund.length &&
      this.state.emergencyfund.map(() => {
        return (
          <img
            // random number from 0 through 12
            src={this.state.flowers[Math.floor(Math.random() * 13)]}
            width="100px"
            height="100px"
            alt=""
          />
        );
      });
    let rflowers =
      this.state.retirementfund.length &&
      this.state.retirementfund.map(() => {
        return (
          <img
            // random number from 0 through 12
            src={this.state.flowers[Math.floor(Math.random() * 13)]}
            width="100px"
            height="100px"
            alt=""
          />
        );
      });

    return (
      <div className="nestegg">
        <Navbar />
        <Sidenav />
        <div className="nestegg-header">
          <h1>Step 2: Build a Nest Egg</h1>
          <h5>
            (Take the net income amount and distribute it across emergency funds
            and retirement)
          </h5>
        </div>

        <div className="nestegg-body">
          <div className="nestegg-left">
            <div className="emergencyfund">
              <h2>Emergency Fund</h2>
              <span>
                <input
                  type="number"
                  placeholder="amount"
                  onChange={e =>
                    this.handleInput("depositemergency", e.target.value)
                  }
                />
                <button
                  className="nestegg-add"
                  onClick={() => this.submitEmergencyDeposit()}
                >
                  Add on click
                </button>
              </span>
              <h4>date(time stamp included with onclick)(post mvp) </h4>
              <h4>deposit amount</h4>
              {efund}
            </div>

            <div className="retirementfund">
              <h2>Retirement Fund</h2>
              <span>
                <input
                  type="number"
                  placeholder="amount"
                  onChange={e =>
                    this.handleInput("depositretirement", e.target.value)
                  }
                />
                <button
                  className="nestegg-add"
                  onClick={() => this.submitRetirementDeposit()}
                >
                  Add on click
                </button>
              </span>
              <h4>date(time stamp included with onclick)(post mvp)</h4>
              <h4>deposit amount</h4>
              {rfund}
            </div>
          </div>
          <div className="nestegg-right">
            <p>
              <strong>Garden of Wealth</strong>
            </p>
            <div className="garden">
              {eflowers}
              {rflowers}
            </div>
            <h3>
              Onto step 3. Plan your{" "}
              <Link to="/retirementplan"> retirement!</Link>.
            </h3>
          </div>
        </div>
        {/* 
        I can add this to the bottom.
        <h3>
          A nest egg is a sum of money that has been collected over time with a
          purpose of using spending it at a later date. Let's build a couple of
          nest eggs!{" "}
        </h3>
        <h3>
          We can take the net income amount from the income statement and
          distribute it across emergency funds and retirement.
        </h3> */}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(NestEgg);
