import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.text}>&copy; 2024 Bug Bounty Program</p>
    </div>
  );
};

export default Footer;
