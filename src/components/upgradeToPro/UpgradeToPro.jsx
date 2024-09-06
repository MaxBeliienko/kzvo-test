import styles from './UpgradeToPro.module.css';

const UpgradeToPro = () => {
  return (
    <div className={styles['upgrade-wrapper']}>
      <h2 className={styles['upgrade-title']}>
        Upgrade to PRO to get access all Features!
      </h2>
      <button className={styles['upgrade-button']}>Get Pro Now!</button>
    </div>
  );
};

export default UpgradeToPro;
