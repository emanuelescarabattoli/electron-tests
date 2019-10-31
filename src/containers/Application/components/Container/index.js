import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

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
    <div className={style.window}>
      <div className={style.wrapper}>
        <div className={style.sidebarWrapper}>
          <div className={style.sidebar}>
            <div>
              <ul className={style.list}>
                <li>
                  <Link to="/">
                    <i className="material-icons">explore</i>
                  </Link>
                </li>
                <li>
                  <Link to="/showcase">
                    <i className="material-icons">favorite</i>
                  </Link>
                </li>
                <li>
                  <i className="material-icons">drafts</i>
                </li>
              </ul>
              <ul className={style.list}>
                <li>
                  <i className="material-icons">account_circle</i>
                </li>
                <li>
                  <i className="material-icons">settings</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.content}>
          {children}
        </div>
      </div>
    </div>
  </>
);

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default withRouter(Container);
