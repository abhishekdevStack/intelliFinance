import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Button, Paper, TextField } from "@material-ui/core";
import MaxWidthDialog from "../Dialog";
const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    margin: "20px 80px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  button: {
    margin: "8px 2px"
  }
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Rewards</Typography>
          <Typography className={classes.secondaryHeading}>
            You Shall Receive...
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Do it for your friends, relatives. Refer them and get extra month
            subscription free per user you refer.When you can save in
            subscription,you should do it!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>App Launch</Typography>
          <Typography className={classes.secondaryHeading}>
            We are Launching..
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            We are Launching our finance app in May, which will have extensive
            features which would be easy to learn and would help you in managing
            your daily credits in minutes!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Share Opinions</Typography>
          <Typography className={classes.secondaryHeading}>
            Your opinions matters!
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            While registration on home page please share your expectations from
            app so that we could bring features which are not there in current
            world. We would be happy to help you!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Refer & Earn</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item xs={6} xl={4} lg={4} sm={10}>
              <TextField
                className="textWidth"
                required
                id="standard-required"
                label="Refer Email"
                // value={this.state.name}
                // onChange={ev => this.textFiledChange(ev, "name")}
              />{" "}
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowDialog(true)}
                className={classes.button}
              >
                Refer
              </Button>
            </Grid>
            <Grid item xs={6} xl={4} lg={2} sm={10}></Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {showDialog && (
        <MaxWidthDialog
          open={showDialog}
          close={closeDialog}
          data="You have successfully Refered your friend."
          title="Notification"
        />
      )}
    </div>
  );
}
