import Sidebar from '../sidebar/Sidebar';
import CustomerTable from '../customerTable/CustomerTable';
import DashboardStats from '../dashboardStats/DashboardStats';
import Header from '../header/Header';
import LoremIpsum from '../loremIpsum/LoremIpsum';
import styles from './Layout.module.css';
import { useState } from 'react';

const Layout = () => {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  const handleSelect = item => {
    setSelectedItem(item);
  };

  return (
    <div className={styles['app-wrapper']}>
      <Sidebar onSelect={handleSelect} />
      <div className={styles['info-wrapper']}>
        <Header />
        <DashboardStats />
        {selectedItem === 'dashboard' && <></>}
        {selectedItem === 'customers' && <CustomerTable />}
        {selectedItem === 'product' && <LoremIpsum />}
        {selectedItem === 'income' && <LoremIpsum />}
        {selectedItem === 'promote' && <LoremIpsum />}
        {selectedItem === 'help' && <LoremIpsum />}
      </div>
    </div>
  );
};

export default Layout;
