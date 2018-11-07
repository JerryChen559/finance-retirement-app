import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateHealthCare,
  updateSchool,
  updateFood,
  updateRestaurants
} from "../redux/reducers/statementReducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard3 extends Component {
  render() {
    const {
      updateHealthCare,
      updateSchool,
      updateFood,
      updateRestaurants
    } = this.props;

    return (
      <div className="parent-div">
        {/* healthcare, school, food, restaurants */}
        <div className="vert-align">
          <p>Amounth per month you spend on healthcare.</p>
          <input
            type="number"
            placeholder="healthcare"
            onChange={e => updateHealthCare(e.target.value)}
          />
          <br />
          <p>School Fees / Student Debt Payment </p>
          <input
            type="number"
            placeholder="school fees"
            onChange={e => updateSchool(e.target.value)}
          />
          <br />
          <p>Monthly spending on groceries</p>
          <input
            type="number"
            placeholder="groceries"
            onChange={e => updateFood(e.target.value)}
          />
          <br />
          <p>Monthly amount spent on restaurants</p>
          <input
            type="number"
            placeholder="restaurants"
            onChange={e => updateRestaurants(e.target.value)}
          />
          <br />
          <div>
            <span>Form is 75% complete! </span>
            <Link to="/wizardfour">
              <button className="margin-btn"> Next </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { healthcare, school, food, restaurants } = state;

  return {
    healthcare,
    school,
    food,
    restaurants
  };
};

export default connect(
  mapStateToProps,
  { updateHealthCare, updateSchool, updateFood, updateRestaurants }
)(Wizard3);
