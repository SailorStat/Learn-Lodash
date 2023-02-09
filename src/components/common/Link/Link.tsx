import React from "react";

const Link: React.FC<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a style={{ color: "darkmagenta", textDecoration: "none" }} {...props}>
      <b>{children}</b>
    </a>
  );
};

export default Link;
