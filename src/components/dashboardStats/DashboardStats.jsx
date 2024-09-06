import styles from './DashboardStats.module.css';
import sprite from '../../assets/sprite.svg';
import total from '../../images/total-customers.png';
import members from '../../images/members.png';
import active from '../../images/active-now.png';
import avatar from '../../images/avatar.png';

const DasboardStats = () => {
  return (
    <div className={styles['dashboard-stats-wrapper']}>
      <div className={styles['dashboard-stats-container']}>
        <img src={total} alt="total-customers-image" />
        <div className={styles['dashboard-stats-container-info']}>
          <h3 className={styles['dashboard-stats-title']}>Total Customers</h3>
          <p className={styles['dashboard-stats-number']}>5,423</p>
          <p className={styles['dashboard-stats-text']}>
            <svg
              className={styles['icon-arrow-up-thin']}
              width={20}
              height={20}
            >
              <use href={`${sprite}#icon-arrow-up-thin`}></use>
            </svg>
            <span className={styles['dashboard-green-span']}>16%</span>
            this month
          </p>
        </div>
      </div>
      <div className={styles['dashboard-stats-container']}>
        <img src={members} alt="total-customers-image" />
        <div className={styles['dashboard-stats-container-info']}>
          <h3 className={styles['dashboard-stats-title']}>Members</h3>
          <p className={styles['dashboard-stats-number']}>1,893</p>
          <p className={styles['dashboard-stats-text']}>
            <svg
              className={styles['icon-arrow-down-thin']}
              width={20}
              height={20}
            >
              <use href={`${sprite}#icon-arrow-down-thin`}></use>
            </svg>
            <span className={styles['dashboard-red-span']}>1%</span>
            this month
          </p>
        </div>
      </div>
      <div className={styles['dashboard-stats-container']}>
        <img src={active} alt="total-customers-image" />
        <div className={styles['dashboard-stats-container-info']}>
          <h3 className={styles['dashboard-stats-title']}>Active Now</h3>
          <p className={styles['dashboard-stats-number']}>189</p>
          <div className={styles['avatars-group']}>
            <img
              src={avatar}
              alt="User avatar"
              width={26}
              height={26}
              className={styles['dashboard-stats-active-container-avatar']}
            />
            <img
              src={avatar}
              alt="User avatar"
              width={26}
              height={26}
              className={styles['dashboard-stats-active-container-avatar']}
            />
            <img
              src={avatar}
              alt="User avatar"
              width={26}
              height={26}
              className={styles['dashboard-stats-active-container-avatar']}
            />
            <img
              src={avatar}
              alt="User avatar"
              width={26}
              height={26}
              className={styles['dashboard-stats-active-container-avatar']}
            />
            <img
              src={avatar}
              alt="User avatar"
              width={26}
              height={26}
              className={styles['dashboard-stats-active-container-avatar']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasboardStats;
