import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import routes from "./routes";
// import store from "../src/redux/store";

// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import "./components/Navbar.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Provider store={store}> */}
        <BrowserRouter>
          <div className="App">
            {/* <div className="navbar">
              <Navbar />
            </div> */}
            {routes}
          </div>
        </BrowserRouter>

        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
