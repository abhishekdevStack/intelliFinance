import React from "react";
import styled from "styled-components";
import { Grid, Typography, Button, Paper, TextField } from "@material-ui/core";
import ControlledExpansionPanels from "../Accordian";
class Benefits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ControlledExpansionPanels />
      </div>
    );
  }
}
export default Benefits;
