import React from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown";
import { Grid, Typography, Button, Paper, TextField } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import ride from "../../../constant";
import WelcomeSetup from "../Welcome";
import MaxWidthDialog from "../Dialog";
const DropDownGrid = styled(Grid)`
  margin: -13px -4px;
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
class Addride extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownData: [
        { key: "b", value: "BIKE" },
        { key: "c", value: "CAR" }
      ],
      vehicleTypeSelected: { key: "B", value: "BIKE" },
      vehicleNumer: "",
      name: "",
      seats: "",
      pickup: "",
      destination: "",
      time: "",
      ridesArray: [...ride],
      history: props.history,
      homeComponent: false
    };
    console.log(this.state.history);
    this.addRide = this.addRide.bind(this);
    this.textFiledChange = this.textFiledChange.bind(this);
    this.changeHomeComponent = this.changeHomeComponent.bind(this);
  }
  textFiledChange = (ev, type) => {
    this.setState({
      [type]: ev.target.value
    });
  };
  handlepreTransportsChange = data => {
    console.log(data);
    this.setState({
      [data.name]: data.selected
    });
  };
  addRide = () => {
    console.log(ride);
    let newRides = JSON.parse(JSON.stringify(this.state.ridesArray));
    newRides.push({
      vehicleTypeSelected: this.state.vehicleTypeSelected,
      vehicleNumer: this.state.vehicleNumer,
      name: this.state.name,
      seats: this.state.seats,
      pickup: this.state.pickup,
      destination: this.state.destination,
      time: this.state.time
    });
    this.setState(
      {
        ridesArray: newRides,
        homeComponent: true
      },
      () => {
        console.log(newRides);
      }
    );
  };
  changeHomeComponent() {
    this.setState({ homeComponent: false });
  }
  render() {
    return (
      <div>
        {this.state.homeComponent && (
          <MaxWidthDialog
            open={this.state.homeComponent}
            changeHomeComponent={this.changeHomeComponent}
            data="Your ride is added Successfully"
            title="Notification"
          />
        )}
        <Typography variant="h6">Few steps away!</Typography>
        <Divider />
        <Grid container>
          <Grid item xs={6} xl={4} lg={3} sm={10}>
            <TextField
              required
              id="standard-required"
              label="Name"
              value={this.state.name}
              onChange={ev => this.textFiledChange(ev, "name")}
            />
          </Grid>{" "}
          <Grid item xs={6} xl={4} lg={3} sm={10}>
            <TextField
              required
              id="standard-required"
              label="Vehicle Number"
              value={this.state.vehicleNumber}
              onChange={ev => this.textFiledChange(ev, "vehicleNumber")}
            />
          </Grid>{" "}
          <Grid item xs={6} xl={4} lg={3} sm={10}>
            <TextField
              required
              id="standard-required"
              label="Vacant Seats"
              value={this.state.seats}
              type="number"
              onChange={ev => this.textFiledChange(ev, "seats")}
            />
          </Grid>
          <Grid item xs={6} xl={4} lg={3} sm={10}>
            <TextField
              required
              id="standard-required"
              value={this.state.pickup}
              label="Pickup point"
              onChange={ev => this.textFiledChange(ev, "pickup")}
            />
          </Grid>
          <Grid item xs={6} xl={4} lg={3} sm={10}>
            <TextField
              required
              id="standard-required"
              label="Destination point"
              value={this.state.destination}
              onChange={ev => this.textFiledChange(ev, "destination")}
            />
          </Grid>
          <Grid item xs={6} xl={4} lg={3} sm={10}>
            <TextField
              required
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              value={this.state.time}
              InputLabelProps={{
                shrink: true
              }}
              onChange={ev => this.textFiledChange(ev, "time")}
            />
          </Grid>
          <DropDownGrid item lg={2} sm={10}>
            <Dropdown
              data={this.state.dropDownData}
              name="vehicleTypeSelected"
              title="Vehicle options"
              selectedItem={this.state.vehicleTypeSelected}
              action={this.handlepreTransportsChange}
            />
          </DropDownGrid>
          <Grid item lg={2}>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={() => this.addRide()}
            >
              ADD RIDE
            </StyledButton>
          </Grid>
        </Grid>
        <Grid container></Grid>

        <ButtonFloatingDiv>
          <Link
            to={{
              pathname: "/pick/ride",
              state: { rideOptions: this.state.ridesArray }
            }}
            style={{ textDecoration: "none" }}
          >
            <StyledButton variant="contained" color="primary">
              PICK RIDE
            </StyledButton>
          </Link>
        </ButtonFloatingDiv>
      </div>
    );
  }
}
export default Addride;
