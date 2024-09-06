import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles['header-wrapper']}>
      <h2 className={styles['header-title']}>Hello, Evano 👋🏼</h2>
      <input
        className={styles['header-search-input']}
        type="text"
        name="search"
        placeholder="Search"
      />
    </div>
  );
};

export default Header;
