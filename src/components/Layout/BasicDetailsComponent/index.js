import React from "react";
import styled from "styled-components";
import { Grid, Typography, Button, Paper, TextField } from "@material-ui/core";
import "./basic.css";
class BasicComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
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
        <Grid item xs={6} xl={4} lg={4} sm={10}>
          <TextField
            className="textWidth"
            required
            id="standard-required"
            label="Name"
            value={this.state.name}
            onChange={ev => this.textFiledChange(ev, "name")}
          />
        </Grid>
        <Grid item xs={6} xl={4} lg={4} sm={10}>
          <TextField
            className="textWidth"
            required
            id="standard-required"
            label="AGE"
            value={this.state.age}
            onChange={ev => this.textFiledChange(ev, "age")}
          />
        </Grid>

        <Grid item xs={6} xl={4} lg={4} sm={10}>
          <TextField
            className="textWidth"
            required
            id="standard-required"
            label="EMAIL"
            value={this.state.mail}
            onChange={ev => this.textFiledChange(ev, "email")}
          />
        </Grid>
      </Grid>
    );
  }
}
export default BasicComponent;
