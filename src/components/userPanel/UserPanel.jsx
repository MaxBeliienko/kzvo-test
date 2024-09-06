import styles from './UserPanel.module.css';
import avatar from '../../images/avatar.png';
import sprite from '../../assets/sprite.svg';

const UserPanel = ({ isExpended }) => {
  return (
    <div className={styles['user-panel-wrapper']}>
      <img src={avatar} alt="User avatar" width={42} height={42} />
      {isExpended && (
        <div className={styles['user-panel-info']}>
          <h2 className={styles['user-panel-info-title']}>Evano</h2>
          <p className={styles['user-panel-info-text']}>Project Manager</p>
          <svg className={styles['user-panel-arrow']} width={24} height={24}>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </svg>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
