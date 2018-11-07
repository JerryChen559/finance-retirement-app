import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./DesiredPurchaseEdit.css";

class DesiredPurchaseEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchasecardid: "",
      itemname: "",
      price: "",
      importance: "",
      redirect: false
    };
  }

  componentDidMount() {
    this.getCard();
  }

  getCard = () => {
    console.log(this.props);
    axios
      .get
      // `${process.env.REACT_APP_SERVER}/api/card/${
      //   this.props.match.params.purchasecardid
      // }`
      ()
      // also works!
      // .get(`${process.env.REACT_APP_SERVER}/api/card/${this.props.location.state.purchasecardid}`)
      .then(response => {
        console.log(response);
        this.setState({
          purchasecardid: response.data[0].purchasecardid,
          itemname: response.data[0].itemname,
          price: response.data[0].price,
          importance: response.data[0].importance
        });
      });
  };

  handleSubmit() {
    console.log(this.state.id);
    axios
      .put(
        `${process.env.REACT_APP_SERVER}/api/card/${this.state.purchasecardid}`,
        {
          itemname: this.state.itemname,
          price: this.state.price,
          importance: this.state.importance
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          itemname: response.data.itemname,
          price: response.data.price,
          importance: response.data.importance,
          redirect: !this.state.redirect
        });
      });
  }

  handleCancel() {
    this.props.history.push("/desiredpurchases");
  }

  updateTopic(key, val) {
    this.setState({ [key]: val });
  }

  render() {
    console.log(this.state);

    if (this.state.redirect) {
      return <Redirect to="/desiredpurchases" />;
    }

    return (
      <div>
        <div>
          <h3>Purchase Card Edit Page</h3>
          <h4>Editing Card: {this.state.itemname}</h4>
        </div>
        <div>
          <input
            type="text"
            placeholder="{this.state.itemname}"
            value={this.state.itemname}
            onChange={e => this.updateTopic("itemname", e.target.value)}
          />
          <input
            type="float"
            placeholder={this.state.price}
            value={this.state.price}
            onChange={e => this.updateTopic("price", e.target.value)}
          />
          <input
            type="number"
            placeholder={this.state.importance}
            value={this.state.importance}
            onChange={e => this.updateTopic("importance", e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => this.handleCancel()}>Cancel Editing</button>
          <button onClick={() => this.handleSubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default DesiredPurchaseEdit;
