import React from "react";
export const Button = ({
  children,
  onClick,
  disabled,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button>
      {" "}
      onCkick = {onClick} 
      disabled = {disabled}
      {children}
      {...restProps}
    </button>
  );
};
