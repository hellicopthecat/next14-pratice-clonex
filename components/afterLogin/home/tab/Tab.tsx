"use client";
import styles from "./Tab.module.css";
const Tab = () => {
  return (
    <div className={styles.tab_container}>
      <div className={styles.tab_title}>
        <h2>홈</h2>
      </div>
      <div className={styles.tab_selectorCont}>
        <div className={styles.tab_selector}>
          <h3>추천</h3>
          <div className={styles.tab_isSelected}></div>
        </div>
        <div className={styles.tab_selector}>
          <h3>팔로우중</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Tab;
