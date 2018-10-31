import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Sidenav from "./Sidenav";
// import "./Sidenav.css";

import "./DesiredPurchases.css";

export class DesiredPurchases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blah: "",
      bla: "",
      cards: [
        { id: 1, text: "camera" },
        { id: 2, text: "book" },
        { id: 3, text: "phone" },
        { id: 4, text: "laptop" }
      ]
    };
  }

  render() {
    return (
      <div className="desiredpurchases">
        {/* <Sidenav /> */}
        <div>
          <h1>Welcome to Step 4:</h1>
          <h3>Make a list of all the things you want to purchase.</h3>
          <h3>This is feature of the app should help manage spending.</h3>

          <button>add</button>
        </div>
        <div className="cardcontainer">
          <div> cardcomponent1 </div>
          <div>cardcomponent2</div>
          <div>cardcomponent3</div>
          <div>cardcomponent4</div>
        </div>
        <h3>
          <Link to="/">home</Link>.
        </h3>
      </div>
    );
  }
}

export default DesiredPurchases;
