import React from 'react';
import Image from 'next/image';
import styles from '../styles/MainContent.module.scss';

const MainContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.firstSection}`}>
        <h1 className={styles.sectionTitle}>Bug Bounty - это</h1>
        <div className={styles.contentWrapper}>
          <p className={styles.text}>
            Описание программы bug bounty. Здесь вы можете найти информацию о ...
          </p>
          <Image src="/bug.png" alt="Bug Bounty" width={300} height={200} className={styles.image} />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.bgImage} style={{ backgroundImage: "url('/what.png')" }}></div>
        <div className={styles.bgText}>
          <h2 className={styles.sectionTitle}>Что такое Bug Bounty?</h2>
          <p className={styles.text}>Текст о том, что такое Bug Bounty...</p>
        </div>
      </div>
      <div className={`${styles.section} ${styles.hexSection}`}>
        <div className={styles.hexGrid}>

          <div className={styles.hexItem}>
            <div className={styles.hexContent}>
              <Image src="/image.png" alt="Image 1" width={300} height={280} className={styles.hexImage} />
              <h3>Заголовок 1</h3>
              <p>Текст для первого квадрата...</p>
            </div>
          </div>
          <div className={styles.hexItem}>
            <div className={styles.hexContent}>
              <Image src="/image.png" alt="Image 2" width={300} height={280} className={styles.hexImage} />
              <h3>Заголовок 2</h3>
              <p>Текст для второго квадрата...</p>
            </div>
          </div>
          <div className={styles.hexItem}>
            <div className={styles.hexContent}>
              <Image src="/image.png" alt="Image 3" width={300} height={280} className={styles.hexImage} />
              <h3>Заголовок 3</h3>
              <p>Текст для третьего квадрата...</p>
            </div>
          </div>
          <div className={styles.hexItem}>
            <div className={styles.hexContent}>
              <Image src="/image.png" alt="Image 4" width={300} height={280} className={styles.hexImage} />
              <h3>Заголовок 4</h3>
              <p>Текст для четвертого квадрата...</p>
            </div>
          </div>
        </div>
        <h2 className={`${styles.sectionTitle} ${styles.hexSectionTitle}`}>Для баг-хантеров</h2>
      </div>
    </div>
  );
};

export default MainContent;
