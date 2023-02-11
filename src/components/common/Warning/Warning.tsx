import React from "react";

const Warning: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div style={{ color: "red" }} {...props}>
      <i>
        <b>!!! {children}</b>
      </i>
    </div>
  );
};

export default Warning;
