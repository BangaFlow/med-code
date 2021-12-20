import React from "react";
import { StyledBadge } from "./Badge.styles";

const Badge = (props) => {
  return <StyledBadge>{props.children}</StyledBadge>;
};

export default Badge;
