import React from "react";

import style from "./style.scss";

const Button = ({ children }) => {
  return (
    <div className={style.button}>
      {children}
    </div>
  );
};

export default Button;
