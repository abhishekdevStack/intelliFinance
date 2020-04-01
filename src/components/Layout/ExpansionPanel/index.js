import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    margin: "24px 80px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>About us</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Intellimind® is a world-wide leader in B2B Credit Management
            solutions. We believe better information leads to better business
            decisions. Our cloud-based platform delivers a suite of products and
            services that enable companies to make important credit decisions
            quickly, and manage credit risk appropriately. We manage a portfolio
            of more than 4 million companies for our customers in 145 countries.
            We work with over 40 Credit Agencies and Credit Insurers managing
            more than 4,000 insurance policies for our customers worldwide. At
            Intellimind® we strive to create products that transform business
            processes, providing strategic insight into organizations. The
            Intellimind® suite of products enables businesses to automate
            manually intensive tasks, improve communications, create operational
            efficiencies, and standardize processes to drive best practices,
            master credit governance, and risk management. Our products are easy
            to implement, easy to use, and adaptable to many different country
            and industry standards. Our ISAE 3402 certification, delivered by
            KPMG, assures clients of the reliability and security of our
            processes and IT infrastructure.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Our History</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            In 1996 Alain Mathieu, Founder of Intellimind®, who had worked for
            more than 10 years for American and European banks, observed that
            there were no professional tools on the market to help banks analyze
            companies creditworthiness. Thus Credit Voyager® was born, which
            allowed banks to easily analyze companies worldwide. In 2000, Credit
            Voyager® underwent an evolution to make it suitable for companies to
            manage their short-term B2B lines of credit. Credit Voyager® allows
            companies to manage their internal credit limits, accounts
            receivables, deductions, and collections. In 2008, the OneGate®
            authorization platform was created as a single source for real time
            credit information and automation of authorization workflows.
            Recognizing businesses need relevant, actionable information in the
            era of "Big Data", Intellimind Analytics® was established in 2015,
            to transform our rich data warehouse into meaningful information and
            business opportunities for our customers. Headquartered in Paris,
            France, Intellimind® expanded operations in Bucharest, Romania in
            2007 and Las Vegas, Nevada in the U.S. in 2016 to better serve our
            customers with 'follow the sun' support and services.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
