import React from "react";

import style from "./style.scss";

const Title = ({ tag, title }) => {
  return (
    <>
      <span className={style.tagTitle}>{tag}</span>
      <span className={style.title}>{title}</span>
    </>
  );
};

export default Title;
