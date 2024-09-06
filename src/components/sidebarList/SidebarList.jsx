import styles from './SidebarList.module.css';
import sprite from '../../assets/sprite.svg';

const SidebarList = ({ isExpended }) => {
  return (
    <ul className={styles['sidebar-list']}>
      <li
        className={`${styles['sidebar-item']} ${isExpended && styles.expanded}`}
      >
        <svg>
          <use href={`${sprite}#icon-dashboard`}></use>
        </svg>
        {isExpended && (
          <>
            <span>Dashboard</span>{' '}
            <svg className={styles['item-arrow']}>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </svg>
          </>
        )}
      </li>
      <li
        className={`${styles['sidebar-item']} ${isExpended && styles.expanded}`}
      >
        <svg>
          <use href={`${sprite}#icon-product`}></use>
        </svg>
        {isExpended && (
          <>
            <svg className={styles['item-arrow']}>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </svg>
            <span>Product</span>
          </>
        )}
      </li>
      <li
        className={`${styles['sidebar-item']} ${isExpended && styles.expanded}`}
      >
        <svg>
          <use href={`${sprite}#icon-customers`}></use>
        </svg>
        {isExpended && (
          <>
            <span>Customers</span>
            <svg className={styles['item-arrow']}>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </svg>
          </>
        )}
      </li>
      <li
        className={`${styles['sidebar-item']} ${isExpended && styles.expanded}`}
      >
        <svg>
          <use href={`${sprite}#icon-income`}></use>
        </svg>
        {isExpended && (
          <>
            <svg className={styles['item-arrow']}>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </svg>
            <span>Income</span>
          </>
        )}
      </li>
      <li
        className={`${styles['sidebar-item']} ${isExpended && styles.expanded}`}
      >
        <svg>
          <use href={`${sprite}#icon-promote`}></use>
        </svg>
        {isExpended && (
          <>
            <svg className={styles['item-arrow']}>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </svg>
            <span>Promote</span>
          </>
        )}
      </li>
      <li
        className={`${styles['sidebar-item']} ${isExpended && styles.expanded}`}
      >
        <svg>
          <use href={`${sprite}#icon-help`}></use>
        </svg>
        {isExpended && (
          <>
            <svg className={styles['item-arrow']}>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </svg>
            <span>Help</span>
          </>
        )}
      </li>
    </ul>
  );
};

export default SidebarList;
