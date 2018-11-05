import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "../src/redux/store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              {/* <div className="navbar">
              <Navbar />
            </div> */}
              {routes}
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
