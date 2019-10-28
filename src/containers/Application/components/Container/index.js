import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";

const Container = ({ children }) => (
  <>
    <div className={style.drag}>
      Title
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
