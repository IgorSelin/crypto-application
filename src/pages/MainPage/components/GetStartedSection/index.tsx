import React from "react";
import styles from "./styles.module.scss";

const GetStartedSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Start today. Easly</div>
      <button type="button" className={styles.startBtn}>
        Get started
      </button>
    </div>
  );
};

export default GetStartedSection;
