import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nestegg.css";

import Sidenav from "./Sidenav";
import "./Sidenav.css";

class NestEgg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emergencyfund: [],
      retirementfund: []
    };
  }

  render() {
    return (
      <div className="nestegg">
        <Sidenav />
        <div className="nestegg-header">
          <h1>Welcome to Step 2:</h1>
          <h5>
            (Take the net income amount and distribute it across emergency funds
            and retirement)
          </h5>
        </div>
        {/* <h3>
          A nest egg is a sum of money that has been collected over time with a
          purpose of using spending it at a later date. Let's build a couple of
          nest eggs!{" "}
        </h3>
        <h3>
          We can take the net income amount from the income statement and
          distribute it across emergency funds and retirement.
        </h3> */}

        <div className="nestegg-body">
          <div className="nestegg-left">
            <div className="emergencyfund">
              <h3>Emergency Fund</h3>
              <input type="number" placeholder="amount" />
              <button>Add on click</button>
              <button>Delete map thru</button>
              <h4>date(time stamp) should update </h4>
              <h4>deposit amount</h4>
            </div>

            <div className="retirementfund">
              <h3>Retirement Fund</h3>
              <input type="number" placeholder="amount" />
              <button>Add on click</button>
              <button>Delete map thru</button>
              <h4>date(time stamp) should update </h4>
              <h4>deposit amount</h4>
            </div>
          </div>
          <div className="nestegg-right">
            <div className="garden">
              garden makes a call to the asset garden folder. map thru number of
              flowers should equal number of deposits. removing a deposit should
              remove a flower.
              <span>x</span>
              <span>x</span>
              <span>x</span>
              <span>x</span>
            </div>
            <h3>
              Onto step 3. Plan your{" "}
              <Link to="/retirementplan"> retirement!</Link>.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default NestEgg;
