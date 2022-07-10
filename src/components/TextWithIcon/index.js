import React from "react";

const TextWithIcon = ({ styleClass, icon, text }) => {
  return (
    <div className={styleClass}>
      <i class={icon} aria-hidden="true"></i>
      <h4>{text}</h4>
    </div>
  );
};

export default TextWithIcon;
