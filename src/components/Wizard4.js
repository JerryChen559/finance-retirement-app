import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateClothes,
  updateGym,
  updateEntertainment,
  updateTravel
} from "../redux/reducers/statementReducer";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./Wizard.css";

class Wizard4 extends Component {
  // handleInput(key, val) {
  //   this.setState({ [key]: val });
  // }

  // handleSubmit() {
  //   console.log(this.props.profile.user.auth_id);
  //   axios.put(`/api/incomestatement/${this.props.profile.user.auth_id}`, {
  //     salary: this.state.salary,
  //     federaltax: this.state.federaltax,
  //     statetax: this.state.statetax,
  //     sideincome: this.state.sideincome,
  //     rent: this.state.rent,
  //     mortgage: this.state.mortgage,
  //     car: this.state.car,
  //     gas: this.state.gas,
  //     water: this.state.water,
  //     healthcare: this.state.healthcare,
  //     school: this.state.school,
  //     food: this.state.food,
  //     restaurants: this.state.restaurants,
  //     clothes: this.state.clothes,
  //     gym: this.state.gym,
  //     entertainment: this.state.entertainment,
  //     travel: this.state.travel,
  //     monthlyexpenses:
  //       this.state.rent +
  //       this.state.mortgage +
  //       this.state.car +
  //       this.state.gas +
  //       this.state.water +
  //       this.state.healthcare +
  //       this.state.school +
  //       this.state.food +
  //       this.state.restaurants +
  //       this.state.clothes +
  //       this.state.gym +
  //       this.state.entertainment +
  //       this.state.travel,
  //     monthlyincome:
  //       this.state.salary -
  //       this.state.salary * (this.state.federaltax / 100) -
  //       this.state.salary * (this.state.statetax / 100) +
  //       this.state.sideincome,
  //     monthlynetincome:
  //       this.state.salary -
  //       this.state.salary * (this.state.federaltax / 100) -
  //       this.state.salary * (this.state.statetax / 100) +
  //       this.state.sideincome -
  //       (this.state.rent +
  //         this.state.mortgage +
  //         this.state.car +
  //         this.state.gas +
  //         this.state.water +
  //         this.state.healthcare +
  //         this.state.school +
  //         this.state.food +
  //         this.state.restaurants +
  //         this.state.clothes +
  //         this.state.gym +
  //         this.state.entertainment +
  //         this.state.travel)
  //   });
  // }

  // handleSubmit() {
  //   console.log(this.props.profile);
  //   axios.put(`/api/incomestatement/${this.props.profile.user.auth_id}`, {
  //     salary: this.props.statement.salary,
  //     federaltax: this.props.statement.federaltax,
  //     statetax: this.props.statement.statetax,
  //     sideincome: this.props.statement.sideincome,
  //     rent: this.props.statement.rent,
  //     mortgage: this.props.statement.mortgage,
  //     car: this.props.statement.car,
  //     gas: this.props.statement.gas,
  //     water: this.props.statement.water,
  //     healthcare: this.props.statement.healthcare,
  //     school: this.props.statement.school,
  //     food: this.props.statement.food,
  //     restaurants: this.props.statement.restaurants,
  //     clothes: this.props.statement.clothes,
  //     gym: this.props.statement.gym,
  //     entertainment: this.props.statement.entertainment,
  //     travel: this.props.statement.travel,
  //     monthlyexpenses: +(
  //       this.props.statement.rent * 1 +
  //       this.props.statement.mortgage * 1 +
  //       this.props.statement.car * 1 +
  //       this.props.statement.gas * 1 +
  //       this.props.statement.water * 1 +
  //       this.props.statement.healthcare * 1 +
  //       this.props.statement.school * 1 +
  //       this.props.statement.food * 1 +
  //       this.props.statement.restaurants * 1 +
  //       this.props.statement.clothes * 1 +
  //       this.props.statement.gym * 1 +
  //       this.props.statement.entertainment * 1 +
  //       this.props.statement.travel * 1
  //     ),
  //     monthlyincome: +(
  //       this.props.statement.salary * 1 -
  //       this.props.statement.salary * (this.props.statement.federaltax / 100) -
  //       this.props.statement.salary * (this.props.statement.statetax / 100) -
  //       this.props.statement.salary * 0.0765 +
  //       this.props.statement.sideincome * 1
  //     ),
  //     monthlynetincome: +(
  //       this.props.statement.salary * 1 -
  //       this.props.statement.salary * (this.props.statement.federaltax / 100) -
  //       this.props.statement.salary * (this.props.statement.statetax / 100) +
  //       this.props.statement.sideincome -
  //       (this.props.statement.rent * 1 +
  //         this.props.statement.mortgage * 1 +
  //         this.props.statement.car * 1 +
  //         this.props.statement.gas * 1 +
  //         this.props.statement.water * 1 +
  //         this.props.statement.healthcare * 1 +
  //         this.props.statement.school * 1 +
  //         this.props.statement.food * 1 +
  //         this.props.statement.restaurants * 1 +
  //         this.props.statement.clothes * 1 +
  //         this.props.statement.gym * 1 +
  //         this.props.statement.entertainment * 1 +
  //         this.props.statement.travel * 1)
  //     )
  //   });
  // }

  render() {
    console.log(this.props);

    const {
      updateClothes,
      updateGym,
      updateEntertainment,
      updateTravel
    } = this.props;

    return (
      <div className="parent-div">
        {/* clothes, gym, entertainment, travel */}
        <div className="vert-align">
          <p>Business clothes / shoes</p>
          <input
            type="number"
            placeholder="clothes"
            onChange={e => updateClothes(e.target.value)}
          />
          <br />
          <p>Gym membership</p>
          <input
            type="number"
            placeholder="gym fee"
            onChange={e => updateGym(e.target.value)}
          />
          <br />
          <p>Entertainment / Movies / Concerts</p>
          <input
            type="number"
            placeholder="entertainment"
            onChange={e => updateEntertainment(e.target.value)}
          />
          <br />
          <p>Travel costs broken up monthly (rough estimate)</p>
          <input
            type="number"
            placeholder="travel"
            onChange={e => updateTravel(e.target.value)}
          />
          <div>
            <span>Form is 100% complete! </span>
            <Link to="/incomestatement">
              <button
                className="margin-btn"
                // onClick={() => this.handleSubmit()}
              >
                Done
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// bringing in auth_id from profile
// bringing in clothes, gym, entertainment, travel from statement
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateClothes, updateGym, updateEntertainment, updateTravel }
)(Wizard4);
