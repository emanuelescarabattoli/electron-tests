import React from "react";

import style from "./style.scss";

export const Card = ({ children }) => {
  return (
    <div className={style.card}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return (
    <div className={style.header}>
      {children}
    </div>
  );
};

export const CardBody = ({ children }) => {
  return (
    <div className={style.body}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children }) => {
  return (
    <div className={style.footer}>
      {children}
    </div>
  );
};
