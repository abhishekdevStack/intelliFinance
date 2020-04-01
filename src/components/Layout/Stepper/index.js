import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper, TextField } from "@material-ui/core";
import BasicComponent from "../BasicDetailsComponent";
import PurposeComponent from "../Purpose";
import ExpectationsComponent from "../Expectations";
import MaxWidthDialog from "../Dialog";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  steps: {
    margin: "0px 70px"
  },
  buttonsPadding: {
    padding: "32px 0px"
  }
}));

function getSteps() {
  return ["Enter Basic Details", "Purpose", "Expectations"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicComponent />;
    case 1:
      return <PurposeComponent />;
    case 2:
      return <ExpectationsComponent />;
    default:
      return "Unknown step";
  }
}

export default function HorizontalNonLinearStepperWithError() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [showDialog, setShowDialog] = React.useState(false);
  const steps = getSteps();

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepFailed = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(skipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep == 2) {
      setShowDialog(true);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} className={classes.steps}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          //   if (isStepOptional(index)) {
          //     labelProps.optional = (
          //       <Typography variant="caption" color="error">
          //         Alert message
          //       </Typography>
          //     );
          //   }
          //   if (isStepFailed(index)) {
          //     labelProps.error = true;
          //   }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div className={classes.buttonsPadding}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
      {showDialog && (
        <MaxWidthDialog
          open={showDialog}
          close={closeDialog}
          data="You have successfully registered for our app. We will keep updating you offers and releases of our app."
          title="Notification"
        />
      )}
    </div>
  );
}
