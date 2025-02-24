import React from "react";

import "./styles/button.scss";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  layout?: "full-width" | "content-width";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  layout = "content-width",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button type="button" className={["button", mode, layout].join(" ")} {...props}>
      {label}
    </button>
  );
};
