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
        <div className={style.messageWrapper}>
          <div className={style.ribbon}>
            <svg height="100" width="100">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#cd0065" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff5252" stopOpacity="1" />
                </linearGradient>
              </defs>
              <polygon points="0 0, 0 10, 10 10" fill="#ff525277" strokeWidth="0" />
              <polygon points="0 0, 70 70, 70 40, 30 0" fill="url(#gradient)" strokeWidth="0" />
              <polygon points="60 60, 60 70, 70 70" fill="#ff525277" strokeWidth="0" />
            </svg>
            <span className={style.ribbonText}>YO Foo!</span>
          </div>
          <div>
            Foo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
