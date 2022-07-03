import React from "react";

const Container = ({ children, styleClass }) => {
  return <div className={styleClass}>{children}</div>;
};

export default Container;
