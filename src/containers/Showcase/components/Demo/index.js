import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "../../../../components/Card";
import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import style from "./style.scss";

const Demo = () => {
  return (
    <div className={style.layout}>
      <div>
        <div className={style.items}>
          <div className={style.item}>
            <div className={style.itemAvatar}>
              <i className="material-icons">account_circle</i>
            </div>
            <div className={style.itemWrapper}>
              <span className={style.itemTitle}>Foo Bar</span>
              <div className={style.tags}>
                <div className={style.tagWrapper}>
                  <div className={style.tagContent}>tag</div>
                </div>
                <div className={style.tagWrapper}>
                  <div className={style.tagContent}>tag</div>
                </div>
              </div>
            </div>
            <div className={style.itemArrow}>
              <i className="material-icons">keyboard_arrow_right</i>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemAvatar}>
              <i className="material-icons">account_circle</i>
            </div>
            <div className={style.itemWrapper}>
              <span className={style.itemTitle}>Foo Bar</span>
              <div className={style.tags}>
                <div className={style.tagWrapper}>
                  <div className={style.tagContent}>tag</div>
                </div>
              </div>
            </div>
            <div className={style.itemArrow}>
              <i className="material-icons">keyboard_arrow_right</i>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemAvatar}>
              <i className="material-icons">account_circle</i>
            </div>
            <div className={style.itemWrapper}>
              <span className={style.itemTitle}>Foo Bar</span>
              <div className={style.tags}>
                <div className={style.tagWrapper}>
                  <div className={style.tagContent}>tag</div>
                </div>
              </div>
            </div>
            <div className={style.itemArrow}>
              <i className="material-icons">keyboard_arrow_right</i>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Demo;
