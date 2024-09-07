import styles from './CustomerTable.module.css';
import { useSelector } from 'react-redux';
import { selectAllCustomers } from '../../redux/customers/selectors';
import { useState } from 'react';

const CustomerTable = () => {
  const customers = useSelector(selectAllCustomers);
  const { id, name, company, phone, email, country, status } = customers;

  // Логіка пошуку
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Логіка сортування
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortKey].localeCompare(b[sortKey]);
    } else {
      return b[sortKey].localeCompare(a[sortKey]);
    }
  });

  // Логіка пагінації
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const paginatedCustomers = sortedCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles['customer-table-wrapper']}>
      <div className={styles['customer-table-info-container']}>
        <div className={styles['customer-table-info-text']}>
          <h2 className={styles['customer-table-title']}>All Customers</h2>
          <p className={styles['customer-table-text']}>Active Members</p>
        </div>
        <input
          className={styles['customer-table-search-input']}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className={styles['customer-table-select']}
          onChange={e => setSortKey(e.target.value)}
          placeholder="Sort by:"
        >
          <option value="name">Name</option>
          <option value="company">Company</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="country">Country</option>
          <option value="status">Status</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <td>Customer Name</td>
            <td>Company</td>
            <td>Phone Number</td>
            <td>Email</td>
            <td>Country</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {paginatedCustomers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.company}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
              <td
                className={
                  customer.status === 'Active'
                    ? styles['customer-active']
                    : styles['customer-inactive']
                }
              >
                {customer.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        {[
          ...Array(Math.ceil(sortedCustomers.length / itemsPerPage)).keys(),
        ].map(n => (
          <button
            key={n}
            onClick={() => setCurrentPage(n + 1)}
            className={currentPage === n + 1 ? styles['active-page'] : ''}
          >
            {n + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomerTable;
