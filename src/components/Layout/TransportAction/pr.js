import React from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown";
import { Grid, Typography, Button, Paper, TextField } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import EnhancedTable from "../Table";
import MaxWidthDialog from "../Dialog";
import ride from "../../../constant";
const DropDownGrid = styled(Grid)`
  padding: 0px 10px;
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
class PickRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownData: [
        { key: "ar", value: "ADD A RIDE" },
        { key: "pr", value: "PICK A RIDE" }
      ],
      transportOptionSelected: { key: "ar", value: "ADD A RIDE" },
      empId: "",
      rideOptions: props.location ? props.location.state.rideOptions : ride,
      showTables: false,
      showHome: false
    };
    console.log(this.state.rideOptions);
    this.changeHomeComponent = this.changeHomeComponent.bind(this);
    this.showTable = this.showTable.bind(this);
    this.confirmRide = this.confirmRide.bind(this);
  }
  UNSAFE_componentWillMount() {
    let rides = JSON.parse(JSON.stringify(this.state.rideOptions));
  }
  confirmRide() {
    this.setState({ showHome: true });
  }
  showTable() {
    this.setState({ tables: true });
  }
  textFiledChange = (ev, type) => {
    this.setState({
      [type]: ev.target.value
    });
  };
  ShandlepreTransportsChange = data => {
    console.log(data);
    this.setState({
      [data.name]: data.selected
    });
  };
  changeHomeComponent() {
    this.setState({ showHome: false });
  }
  render() {
    return (
      <div>
        {this.state.showHome && (
          <MaxWidthDialog
            open={this.state.showHome}
            changeHomeComponent={this.changeHomeComponent}
            data="Your ride was booked Successfully"
            title="Notification"
          />
        )}
        <Typography variant="h6">Welcome</Typography>
        <Divider />
        <Typography variant="h6">Welcome</Typography>
        <Divider />
        <Typography variant="h6">
          As an Indian Citizen, What comes to your mind when you think about the
          Republic Day? Is it all about watching the parade by the Indian Army
          or watching some movies to evoke patriotism in you? But have you ever
          thought about how actively you are trying to contribute to making
          India a better place…
        </Typography>
        <Divider />
        <Typography variant="h6">
          Lets choose the option and start our Journey!
        </Typography>
        <Divider />
        <Grid container>
          <Grid item xs={6} xl={4} lg={3} sm={10}>
            <TextField
              required
              id="standard-required"
              label="EMPLOYEE ID"
              value={this.state.empId}
              onChange={ev => this.textFiledChange(ev, "empId")}
            />
          </Grid>{" "}
          <Grid item lg={2}>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={this.showTable}
            >
              SHOW RIDES
            </StyledButton>
          </Grid>
        </Grid>
        {this.state.tables == true ? (
          <Grid container>
            <EnhancedTable data={this.state.rideOptions} />
          </Grid>
        ) : null}
        <ButtonFloatingDiv>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={this.confirmRide}
          >
            CONFIRM RIDE
          </StyledButton>
        </ButtonFloatingDiv>
      </div>
    );
  }
}
export default PickRide;
