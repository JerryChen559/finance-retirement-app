import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateRent,
  updateMortgage,
  updateCar,
  updateGas,
  updateWater
} from "../redux/reducers/statementReducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard2 extends Component {
  render() {
    console.log(this.props);
    const {
      updateRent,
      updateMortgage,
      updateCar,
      updateGas,
      updateWater
    } = this.props;

    return (
      <div className="parent-div">
        {/* rent, mortgage, car, gas, water */}
        <div className="vert-align">
          <p>Cost of rent</p>
          <input
            type="number"
            placeholder="rent"
            onChange={e => updateRent(e.target.value)}
          />
          <br />
          <p>Monthly mortgage / HOA / Home Insurance </p>
          <input
            type="number"
            placeholder="mortgage"
            onChange={e => updateMortgage(e.target.value)}
          />
          <br />
          <p>Car Payment / Car Insurance</p>
          <input
            type="number"
            placeholder="car payment"
            onChange={e => updateCar(e.target.value)}
          />
          <br />
          <p>Gasoline / Subway Pass</p>
          <input
            type="number"
            placeholder="commute"
            onChange={e => updateGas(e.target.value)}
          />
          <br />
          <p>Water / Electricity / Heating / Internet / Cable</p>
          <input
            type="number"
            placeholder="bills"
            onChange={e => updateWater(e.target.value)}
          />
          <div>
            <span>Form is 50% complete! </span>
            <Link to="/wizardthree">
              <button className="margin-btn"> Next </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { rent, mortgage, car, gas, water } = state;

  return {
    rent,
    mortgage,
    car,
    gas,
    water
  };
};

export default connect(
  mapStateToProps,
  {
    updateRent,
    updateMortgage,
    updateCar,
    updateGas,
    updateWater
  }
)(Wizard2);
