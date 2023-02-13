import React from "react";
import MuiButton from "@mui/material/Button";
import styled from "@emotion/styled";

const Button = ({ variant, children, onClick }) => {
  return (
    <div>
      <StyledButton variant={variant} onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled(MuiButton)`
  text-transform: none;
  border-radius: 3px;
  background: ${(props) =>
    props.variant === "contained" ? "#E50914" : "outlined" ? "" : ""};
  color: ${(props) =>
    props.variant === "contained" ? "#FFFFFF" : "outlined" ? "#FFFFFF" : ""};
  border: ${(props) =>
    props.variant === "contained"
      ? "1px solid #E50914"
      : "outlined"
      ? "1px solid #FFFFFF"
      : ""};
  &:hover {
    background: ${(props) =>
    props.variant === "contained" ? "#E50914" : "outlined" ? "" : ""};
  color: ${(props) =>
    props.variant === "contained" ? "#FFFFFF" : "outlined" ? "#E50914" : ""};
    border: ${(props) =>
    props.variant === "contained"
      ? "1px solid #FFFFFF"
      : "outlined"
      ? "1px solid #E50914"
      : ""};
  }
`;
