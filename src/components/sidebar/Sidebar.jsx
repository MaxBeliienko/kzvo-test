import { useState } from 'react';
import styles from './Sidebar.module.css';
import sprite from '../../assets/sprite.svg';
import SidebarList from '../sidebarList/SidebarList';
import UpgradeToPo from '../upgradeToPro/UpgradeToPro';
import UserPanel from '../userPanel/UserPanel';

const Sidebar = ({ onSelect }) => {
  // Стан і функція зміни стану toggleSidebar для розширення і стискання Sidebar. Слухач подій доданий на h1
  const [isExpended, setIsExpended] = useState(false);
  const toggleSidebar = () => {
    setIsExpended(!isExpended);
  };

  // Реалізація зміни активного пункту списку
  const [activeItem, setActiveItem] = useState('dashboard');
  const handleSelect = item => {
    setActiveItem(item);
    if (onSelect) onSelect(item);
  };

  return (
    <div
      className={`${styles.sidebar} ${
        isExpended ? styles.expanded : styles.collapsed
      }`}
    >
      <div className={styles['sidebar-up-wrapp']}>
        <h1 className={styles['sidebar-title']} onClick={toggleSidebar}>
          <svg width={37} height={37}>
            <use href={`${sprite}#icon-setting`}></use>
          </svg>
          {isExpended && (
            <div>
              <span className={styles['dashboard-title-span']}>Dashboard </span>
              <span className={styles['version-title-span']}>v.01</span>
            </div>
          )}
        </h1>
        <SidebarList
          isExpended={isExpended}
          onSelect={handleSelect}
          activeItem={activeItem}
        />
      </div>
      <div className={styles['sidebar-down-wrapper']}>
        {isExpended && <UpgradeToPo />}
        <UserPanel isExpended={isExpended} />
      </div>
    </div>
  );
};

export default Sidebar;
