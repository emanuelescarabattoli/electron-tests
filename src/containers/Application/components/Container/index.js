import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";

const Container = ({ children }) => (
  <>
    <div className={style.drag}>
      <div>
        <span className={style.title}>Title</span>
      </div>
      <div className={style.actions}>
        <button className={style.action}><i className="material-icons">minimize</i></button>
        <button className={style.action}><i className="material-icons">crop_square</i></button>
        <button className={style.action}><i className="material-icons">close</i></button>
      </div>
    </div >
    <div>
      {children}
    </div>
  </>
);

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
