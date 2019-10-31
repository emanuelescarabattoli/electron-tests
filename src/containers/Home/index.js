import React from "react";

import style from "./style.scss";

const Home = () => {
  return (
    <div className="drag">
      <span className={style.tagTitle}>Explore</span>
      <span className={style.title}>Your favorite items</span>
      <div className={style.layout}>
        <div>
          <div className={style.card}>
            <div className={style.cardHeader}>
              Hello
            </div>
            <div className={style.cardBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={style.cardFooter}>
              <button className={style.button}>find out more</button>
            </div>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <div className={style.cardHeader}>
              Hello
            </div>
            <div className={style.cardBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className={style.cardFooter}>
              <button className={style.button}>foo</button>
              <button className={style.button}>bar</button>
            </div>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <div className={style.cardHeader}>
              Hello
            </div>
            <div className={style.cardBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={style.cardFooter}>
              <button className={style.button}>find out more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
