import React from "react";
import { Link } from "react-router-dom";

export default class MenuItemWrapper extends React.PureComponent {
  render() {
    const { islink, to, onClick, children, ...rest } = this.props;
    if (islink) {
      return (
        <Link to={to} {...rest}>
          {children}
        </Link>
      );
    } else {
      return (
        <span onClick={onClick} {...rest}>
          {children}
        </span>
      );
    }
  }
}
