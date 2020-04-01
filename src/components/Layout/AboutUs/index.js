import React from "react";
import styled from "styled-components";
import { Grid, Typography, Button, Paper, TextField } from "@material-ui/core";
import SimpleExpansionPanel from "../ExpansionPanel";
import ReactImageAppear from "react-image-appear";
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SimpleExpansionPanel />
        <Grid container>
          <Grid item xs={6} xl={4} lg={12} sm={10}>
            <Typography variant="h2">
              {" "}
              We have empowered many app, one among that is AER Pay
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} xl={4} lg={12} sm={10}>
            <ReactImageAppear
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_938,h_726/https://creative-sofa.com/wp-content/uploads/2018/07/Free-Finance-App-UI-KIT.png"
              animation="bounceIn"
              animationDuration="1s"
              placeholder
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default AboutUs;
