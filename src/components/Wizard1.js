import React, { Component } from "react";
// import { connect } from "react-redux";
// import { updateBlah, ___, updateCost, updateDownPayment } from "../../redux/_blah_reducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard1 extends Component {
  render() {
    return (
      <div className="parent-div">
        {/*A place for user to input salary, fed, state, FICA, secondary income */}
        <div className="vert-align">
          <p>Monthly salary before taxes.</p>
          <input
            type="number"
            placeholder="salary"
            // onChange={e => updateCost(e.target.value)}
          />
          <br />
          <p>
            Todo: make this a dropdown. Federal Income Tax (10%, 15%, 25%, 28%,
            33%, 35%, 39.6%)
          </p>
          <input
            type="number"
            placeholder="amount - this will be a dropdown"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>State Income Tax propsdotuser.statetax</p>
          <input
            type="number"
            placeholder="percentage as decimal {props.user.statetax}"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>
            Federal Insurance Contributions Act (FICA) (6.2% Social Security tax
            + 1.45% Medicare tax)
          </p>
          <input
            // no edit = no onchange
            // type="number"
            // placeholder="7.65"
            value="7.65"
          />
          <br />
          <p>Side Income / Secondary Income </p>
          <input
            type="number"
            placeholder="side income"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <div>
            <span>Form is 25% complete! </span>
            <Link to="/wizardtwo">
              <button className="margin-btn"> Next </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard1;
