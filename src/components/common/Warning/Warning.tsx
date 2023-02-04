import React from "react";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  message: string;
}

const Warning: React.FC<Props> = ({ message, ...props }) => {
  return (
    <div style={{ color: "red" }} {...props}>
      <i>
        <b>!!! {message}</b>
      </i>
    </div>
  );
};

export default Warning;
