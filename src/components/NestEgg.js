import React, { Component } from "react";
import { Link } from "react-router-dom";
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

// const reqSvgs = require.context("../Assets/garden", true, /\.svg$/);
// const paths = reqSvgs.keys();
// const svgs = paths.map(path => reqSvgs(path));

import Sidenav from "./Sidenav";
import "./Sidenav.css";

class NestEgg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emergencyfund: [50, 100, 250],
      retirementfund: [50, 100, 250],
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
  }

  render() {
    // make a for loop which looks through the number of deposits. user randomflower and add delete button.
    // random number from 0 through 12

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
              {/* garden makes a call to the asset garden folder. map thru number of
              flowers should equal number of deposits. removing a deposit should
              remove a flower. */}
              <img
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                width="100px"
                height="100px"
                alt="cherryblossom"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                width="100px"
                height="100px"
                alt="cherryblossom"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                width="100px"
                height="100px"
                alt="cherryblossom"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                width="100px"
                height="100px"
                alt="cherryblossom"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                width="100px"
                height="100px"
                alt="cherryblossom"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                width="100px"
                height="100px"
                alt="cherryblossom"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <img
                width="100px"
                height="100px"
                src={this.state.flowers[Math.floor(Math.random() * 13)]}
                alt="dogrose"
              />
              <span>
                flower count should equal
                this.state.emergencyfund.length+this.state.retirementfund.length
              </span>
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
