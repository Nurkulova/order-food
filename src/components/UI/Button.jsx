import React from "react";
import { styled } from "styled-components";

export const Button = ({
  children,
  onClick,
  disabled,
  variant,
  size,
  bgColor = "normal",
  ...restProps
}) => {
  return (
    <ReusableButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      bgColor={bgColor}
      {...restProps}
    >
      {children}
    </ReusableButton>
  );
};
const COLOR_VARIANTS = {
  primary: "rgba(255, 255, 255, 1)",
  secondary: "rgba(138, 43, 6, 1)",
};

const BACKGROUND_VARIANTS = {
  contained: {
    hover: "rgba(126, 42, 10, 1)",
    normal: "rgba(138, 43, 6, 1)",
    active: "rgba(153, 49, 8, 1)",
  },
  outlined:{
    hover: "rgba(138, 43, 6, 1)",
    normal: "rgba(255, 255, 255, 1)",
    active: "rgba(153, 49, 8, 1)",
  },
};
const FONT_SIZES = {
  small: "14px",
  medium: "16px",
};

const ReusableButton = styled("button")`
  background-color: ${(props) =>
    props.variant === "contained"
      ? BACKGROUND_VARIANTS.contained.normal
      : "rgba(138, 43, 6, 1)"};
  color: ${COLOR_VARIANTS.primary};
  border: 2px solid ${COLOR_VARIANTS.secondary};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: ${(props) => FONT_SIZES[props.size || "medium"]};
  font-weight:600;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.variant === "contained"
        ? BACKGROUND_VARIANTS.contained.hover
        : BACKGROUND_VARIANTS.outlined.hover};
  }

  &:active {
    background-color: ${(props) =>
      props.variant === "contained"
        ? BACKGROUND_VARIANTS.contained.active
        : BACKGROUND_VARIANTS.outlined.active};
  }
  &:disabled{
        background-color:rgba(201, 201, 201, 1);
    }
`;
