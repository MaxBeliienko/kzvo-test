import Sidebar from '../sidebar/Sidebar';
import CustomerTable from '../customerTable/CustomerTable';
import DashboardStats from '../dashboardStats/DashboardStats';
import Header from '../header/Header';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles['app-wrapper']}>
      <Sidebar />
      <div className={styles['info-wrapper']}>
        <Header />
        <DashboardStats />
        <CustomerTable />
      </div>
    </div>
  );
};

export default Layout;
