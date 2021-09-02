import React from "react";

const Button = ({ handleCallBack, children }) => {
  return <button onClick={handleCallBack}>{children}</button>;
};

export default Button;
