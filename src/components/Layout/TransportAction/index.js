import React from "react";
import styled from "styled-components";
import { Grid, Typography, Button, Paper, TextField } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { KeyboardBackspace } from "@material-ui/icons";
import Addride from "./ar";
import PickRide from "./pr";
// import { TextField } from "@material-ui/pickers";
const TKeyboardBackspace = styled(KeyboardBackspace)`
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: -5px;
`;
const ButtonFloatingDiv = styled(Paper)`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  width: 100%;
  position: absolute;
  background-color: #fff;
  bottom: 0;
  z-index: 3;
  left: 0;
`;
const StyledButton = styled(Button)`
  margin: 20px 0px 20px 20px;
`;
class TransportAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownData: [
        { key: "ar", value: "ADD A RIDE" },
        { key: "pr", value: "PICK A RIDE" }
      ],
      transportOptionSelected: props.location.state.option,
      history: props.history
    };
    console.log(this.state.transportOptionSelected);
    this.gotoSection = this.gotoSection.bind(this);
  }
  handlepreTransportsChange = data => {
    console.log(data);
    this.setState({
      [data.name]: data.selected
    });
  };
  gotoSection = () => {};
  render() {
    return (
      <div>
        <Typography variant="h6">Welcome</Typography>
        <Divider />
        <Typography variant="h6">Welcome</Typography>
        <Divider />

        <Typography variant="h6">
          <TKeyboardBackspace
            onClick={() => {
              this.state.history.push(`/`);
            }}
          />
          As an Indian Citizen, What comes to your mind when you think about the
          Republic Day? Is it all about watching the parade by the Indian Army
          or watching some movies to evoke patriotism in you? But have you ever
          thought about how actively you are trying to contribute to making
          India a better place…
        </Typography>
        <Divider />
        {this.state.transportOptionSelected.key == "ar" ? (
          <Addride />
        ) : (
          <PickRide />
        )}

        <Divider />
      </div>
    );
  }
}
export default TransportAction;
