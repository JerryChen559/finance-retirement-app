import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import "./DesiredPurchases.css";

class DesiredPurchases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blah: "",
      bla: "",
      cards: [
        { id: 1, itemname: "camera", price: 10, importance: 3 },
        { id: 2, itemname: "book", price: 23, importance: 9 },
        { id: 4, itemname: "laptop", price: 59, importance: 4 },
        { itemname: "camera", price: 1965, importance: 10 }
      ]
    };
  }

  componentDidMount() {
    this.getAllCards();
  }

  getAllCards() {
    axios
      .get(`/api/cards/${this.props.profile.user.user_id}`)
      .then(response => {
        console.log(response.data);
        // this.setState({cards: response.data})
      });
  }

  delButton() {
    axios.delete("/api/cards").then(response => {
      console.log(response.data);
      // this.setState({cards: response.data})
    });
  }

  // PUT: updating the card.importance should rearrange the cards.

  render() {
    console.log("cardstate", this.state);
    console.log("cardprops", this.props);
    // test. Remove after card components are made.
    // let ccccards = this.state.cards.map((el, i) => (
    //   <div className="card" key={i}>
    //     <span onClick={this.updateButton}>
    //       <span>item: {el.itemname}</span>
    //       <span>price: {el.price}</span>
    //       <span>
    //         <strong style={{ float: "right" }}>#{el.importance}</strong>
    //       </span>
    //     </span>
    //     <span>
    //       <button className="updateButton">Update</button>
    //       <button className="delButton" onClick={this.delButton}>
    //         Delete
    //       </button>
    //     </span>
    //   </div>
    // ));

    // sort and display all cards in order of importance.
    // TODO: sort and map needs to be updated.
    // Post CRUD: get cards to render in order with .sort
    // let orderedCards = [...this.state.cards];
    // orderedCards.sort((a, b) => a.importance - b.importance);
    let orderedCards = this.state.cards.map((card, i) => (
      <div className="card" key={i}>
        {/* real  */}
        <span onClick={() => this.updateButton()}>
          <span>item: {card.itemname}</span>
          <span>price: {card.price}</span>
          <span>
            <strong style={{ float: "right" }}>#{card.importance}</strong>
          </span>
        </span>
        {/* {card.note} */}
        <span>
          <button className="updateButton">Update</button>
          <button
            className="delButton"
            onClick={() => this.delButton(card.purchasecardid)}
          >
            Delete
          </button>
        </span>
      </div>
    ));

    return (
      <div className="desiredpurchases">
        {/* <Sidenav /> */}
        <h2 className="step4">Step 4: Desired Purchanses</h2>
        <div className="instructions">
          <span className="rightside">
            <p>Make a list of all the things you want to purchase.</p>
            <p>Managing your expenses can lead to conscious spending.</p>
          </span>
          <span className="leftside">
            <button className="addcardbtn">add new card</button>
          </span>
        </div>
        <div className="cardcontainer">
          {orderedCards}

          {/* {ccccards} */}
        </div>
        <h3>
          <Link to="/incomestatement">home</Link>.
        </h3>

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
