import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { makeServer } from "./server";
import {
  AuthenticationProvider,
  FilterProvider,
  UserDataProvider,
  ThemeProvider,
} from "./Context";
// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider>
        <AuthenticationProvider>
          <UserDataProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </UserDataProvider>
        </AuthenticationProvider>
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
