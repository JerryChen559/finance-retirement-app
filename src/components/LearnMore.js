import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
      <div>
        <h1>More to Learn</h1>
        <h1>Work on this page if I have extra time.</h1>
        <h3>Learn More Page. Add Links for user to visit.</h3>
        <h3>
          <button onClick={() => this.handleReturnBtn()}>
            Back to the app.
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
