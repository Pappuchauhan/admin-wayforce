import React from "react";
import className from "classnames";

const Button = ({
  primary,
  secondary,
  success,
  warning,
  danger,
  primaryRound,
  warningRound,
  dangerRound,
  successRound,
  children,
}) => {
  const classes = className("px-3 py-1.5 border", {
    "btn btn-primary": primary,
    "btn btn-secondary": secondary,
    "btn btn-success": success,
    "btn btn-danger": danger,
    "btn btn-warning": warning,
    "badge rounded-pill text-bg-primary": primaryRound,
    "badge rounded-pill text-bg-warning": warningRound,
    "badge rounded-pill text-bg-danger": dangerRound,
    "badge rounded-pill text-bg-success": successRound
  });
  return <button className={classes}>{children}</button>;
};

export default Button;
