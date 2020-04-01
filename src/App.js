import React, { Component, Suspense } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { ThemeProvider, StylesProvider, jssPreset } from "@material-ui/styles";
import { create } from "jss";
import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import AppNav from "./components/Layout/AppNav";
import AboutUs from "./components/Layout/AboutUs";
import theme from "./theme";
import ErrorBoundary from "./ErrorBoundary";
import WelcomeSetup from "./components/Layout/Welcome";
import TransportAction from "./components/Layout/TransportAction";
import PickRide from "./components/Layout/TransportAction/pr";
import SLProgressBar from "./components/Layout/SLProgressBar";
import Benefits from "./components/Layout/Benefits";
const jss = create({
  ...jssPreset(),
  // Define a custom insertion for injecting the JSS styles in the DOM
  insertionPoint: document.getElementById("jss-insertion-point")
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestInProgress: true
    };
  }

  componentDidMount() {
    this.setState({ requestInProgress: false });
  }

  render() {
    return (
      <div>
        <div className="App">
          {/* <GlobalStyle /> */}
          <React.Fragment>
            <StylesProvider jss={jss}>
              <ThemeProvider theme={theme}>
                <CssBaseline>
                  <SLProgressBar showLoader={this.state.requestInProgress} />
                  <Route
                    path={["*"]}
                    render={renderProps => (
                      <ErrorBoundary key="ErrorBoundary_AppBar">
                        <AppNav />
                      </ErrorBoundary>
                    )}
                  />
                  <Switch>
                    <Route
                      exact
                      path={["/intelliFinance"]}
                      render={renderProps => (
                        <ErrorBoundary key="ErrorBoundary_welcome">
                          <WelcomeSetup {...renderProps} />
                        </ErrorBoundary>
                      )}
                    />
                    <Route
                      exact
                      path={["/home"]}
                      render={renderProps => (
                        <ErrorBoundary key="ErrorBoundary_welcome">
                          <WelcomeSetup {...renderProps} />
                        </ErrorBoundary>
                      )}
                    />
                    <Route
                      exact
                      path={["/about"]}
                      render={renderProps => (
                        <ErrorBoundary key="ErrorBoundary_welcome">
                          <AboutUs {...renderProps} />
                        </ErrorBoundary>
                      )}
                    />
                    <Route
                      exact
                      path={["/benefits"]}
                      render={renderProps => (
                        <ErrorBoundary key="ErrorBoundary_welcome">
                          <Benefits {...renderProps} />
                        </ErrorBoundary>
                      )}
                    />
                  </Switch>
                </CssBaseline>
              </ThemeProvider>
            </StylesProvider>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
