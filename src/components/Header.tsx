import React from 'react';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.appBar}>
      <div className={styles.toolbar}>
        <h1 className={styles.title}>Bug Bounty</h1>
        <h1 className={styles.centeredTitle}>Информационные системы</h1>
        <h1 className={styles.menuItem}>Язык</h1>
        <h1 className={styles.menuItem}>Вести</h1>
      </div>
    </div>
  );
};

export default Header;
