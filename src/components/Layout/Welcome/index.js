import React from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown";
import { Grid, Typography, Button, Paper, TextField } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import "./welcome.css";
import { Wave } from "react-animated-text";

import Stepper from "../Stepper";
class WelcomeSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <div className="imageBackground">
          <Grid container>
            <Grid item xs={12} xl={12} lg={12} sm={12}>
              <Wave
                text="Hi I am your IntelliFinance"
                effect="stretch"
                effectChange={2}
              />
            </Grid>
          </Grid>
          <Grid container className="extraPadding">
            {" "}
            <Grid item xs={12} xl={12} lg={12} sm={12}>
              <div className="subContent">
                <Typography variant="h6">
                  I’m good at making forecasts I analyze thousands of trading
                  transactions and reveal patterns using my machine learning
                  algorithms. Then I predict changes in certain points and
                  signal to sell.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <br></br>
        <Grid container className="">
          {" "}
          2
          <Grid item xs={6} xl={4} lg={12} sm={10}>
            <div className="subContent">
              <Typography variant="h6">
                Tell us about yourself, By Filling details our app's first month
                subscription will be on us!
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Stepper />
      </div>
    );
  }
}
export default WelcomeSetup;
