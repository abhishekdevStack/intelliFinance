import React from "react";
import styled from "styled-components";
import { Grid, Typography, Button, Paper, TextField } from "@material-ui/core";
import "./purpose.css";
class PurposeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purpose: ""
    };
  }
  textFiledChange = (ev, type) => {
    this.setState({
      [type]: ev.target.value
    });
  };
  render() {
    return (
      <Grid container>
        <Grid item xs={12} xl={12} lg={12} sm={12}>
          <TextField
            className="textMultilineWidth"
            id="outlined-multiline-static"
            label="Purpose"
            multiline
            rows="4"
            defaultValue="Default Value"
            variant="outlined"
            value={this.state.purpose}
            onChange={ev => this.textFiledChange(ev, "purpose")}
          />
        </Grid>
      </Grid>
    );
  }
}
export default PurposeComponent;
