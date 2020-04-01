import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    try {
      this.setState({
        hasError: true
      });
      // TODO : Record error using MIRA
      console.warn(`Component error ${JSON.stringify(info)}`);
    } catch (err) {}
  }
  render() {
    if (this.state.hasError) {
      return (
        <Typography variant="body1" color="error">
          Do visit us later.
        </Typography>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
