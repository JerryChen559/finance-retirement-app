import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import "./DesiredPurchases.css";

class DesiredPurchases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.getAllCards();
  }

  // get all cards by user id
  // set state so that it can be displayed across the page
  getAllCards() {
    axios
      .get(`/api/cards/${this.props.profile.user.user_id}`)
      .then(response => {
        console.log("getAllCards:", response.data);
        this.setState({ cards: response.data });
      });
  }

  // add an empty card
  addCard() {
    axios
      .post(`/api/card/${this.props.profile.user.user_id}`)
      .then(response => {
        console.log(response.data);
        this.setState({ cards: response.data });
      });
  }

  delButton(cardid) {
    axios
      .delete(`/api/card/${this.props.profile.user.user_id}/${cardid}`)
      .then(response => {
        console.log(response.data);
        this.setState({ cards: response.data });
      });
  }

  render() {
    console.log("cardstate", this.state);
    console.log("cardprops", this.props);

    let orderedCards = this.state.cards.map((card, i) => (
      <div className="card" key={i}>
        <span>
          <span>item: {card.itemname}</span>
          <span>price: {card.price}</span>
          <span>
            <strong style={{ float: "right" }}>#{card.importance}</strong>
          </span>
        </span>
        <span>
          <Link
            to={{
              pathname: `/desiredPurchase/${card.purchasecardid}`
              // Only need to pass in a state with the item's id
              // if I need it in the editing page.
              // Should be available on this.props.match.params.purchasecardid
              // state: { purchasecardid: card.purchasecardid }
            }}
          >
            <button className="updateButton">Update</button>
          </Link>
          <button
            className="delButton"
            onClick={() => this.delButton(card.purchasecardid)}
          >
            Delete
          </button>
        </span>
      </div>
    ));
    // .sort((a, b) => a.importance - b.importance);

    return (
      <div className="desiredpurchases">
        <h2 className="step4">Step 4: Desired Purchanses</h2>
        <div className="instructions">
          <span className="rightside">
            <p>Make a list of all the things you want to purchase.</p>
            <p>Managing your expenses can lead to conscious spending.</p>
          </span>
          <span className="leftside">
            <button className="addcardbtn" onClick={() => this.addCard()}>
              add new card
            </button>
          </span>
        </div>
        <div className="cardcontainer">{orderedCards}</div>
        {/* link to navigate home. comment out when dene */}
        {/* <h3>
          <Link to="/incomestatement">home</Link>.
        </h3> */}

        <nav className="bottom-nav">
          <span>
            Step 1 <Link to="/incomestatement"> Income Statement </Link>
          </span>
          <span>
            Step 2 <Link to="/nestegg"> Nest Egg </Link>
          </span>
          <span>
            Step 3 <Link to="/retirementplan"> Retirement Plan </Link>
          </span>
          <span>
            Step 4 <Link to="/desiredpurchases"> Desired Purchases </Link>
          </span>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DesiredPurchases);
