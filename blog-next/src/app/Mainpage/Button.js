import React from 'react';
import styles from '@/Styles/Button.module.css';

function Button(props) {
  return (
    <button className={styles.btn} type="button">
      <strong className={styles.strng}>{props.text}</strong>
      <div id={styles['container-stars']}>
        <div id={styles.stars}></div>
      </div>

      <div id={styles.glow}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </button>
  );
}

export default Button;