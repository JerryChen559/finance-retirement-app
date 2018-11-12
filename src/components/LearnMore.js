import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./LearnMore.css";

class LearnMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loggedIn: false
    };
  }

  handleReturnBtn() {
    this.props.history.goBack();
  }

  render() {
    console.log(this.props);

    return (
      <div className="LearnMore-body">
        <span className="LearnMore-title">
          <h1>More to Learn</h1>
        </span>

        <div className="infobox">
          <span className="infosection">
            <h2>Continued Education on Wealth Management</h2>
            <span>
              <p>Assets vs Liabilities:</p>{" "}
              <a
                href="https://www.wallstreetmojo.com/assets-vs-liabilities/"
                // opens the link in a new tab
                target="_blank"
              >
                wallstreetmojo
              </a>
            </span>
            <span>
              <p>Budgeting:</p>{" "}
              <a href="https://www.everydollar.com/blog/budgeting">
                everydollar
              </a>
            </span>
            <span>
              <p>Eliminating Debt:</p> <a href="" />
            </span>
            <span>
              <p>Investing:</p> <a href="" />
            </span>
            <span>
              <p>4% Rule:</p>{" "}
              <a href="https://money.cnn.com/2018/02/07/retirement/4-percent-rule/index.html">
                Do it the right way
              </a>
            </span>
            <span>
              <p>Inflation:</p> <a href="" />
            </span>
          </span>

          <span className="infosection">
            <h2>Community and Motivation</h2>
            <span>
              <p>Podcast:</p> <a href="" />
            </span>
            <span>
              <p>Blogs:</p> <a href="" />
            </span>
            <span>
              <p>Reddit:</p> <a href="" />
            </span>
            <span>
              <p>Youtube:</p> <a href="" />
            </span>
          </span>

          <span className="infosection">
            <h2>Related Topics</h2>
            <span>
              <p>Extra Income:</p> <a href="" />
            </span>
            <span>
              <p>Zero Waste:</p>{" "}
              <a href="https://www.citylab.com/equity/2015/12/let-this-japanese-town-show-you-how-zero-waste-is-done/419706/">
                Kamikatsu, Japan
              </a>
              <a href="http://trashisfortossers.com/">
                Trash is for Tossers | Lauren Singer
              </a>
            </span>
            <span>
              <p>Minimalism:</p> <a href="" />
            </span>
            <span>
              <p>Concious Living:</p> <a href="" />
            </span>
            <span>
              <p>Tiny Homes:</p> <a href="" />
            </span>
          </span>
        </div>

        <h3 className="ReturnToAppBtn">
          <button onClick={() => this.handleReturnBtn()}>
            Back to the App!
          </button>
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loggedIn } = state;

  return { loggedIn };
};

export default connect(mapStateToProps)(LearnMore);
