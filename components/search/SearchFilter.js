import styles from '../../styles/sass/components/search/SearchFilter.module.scss';

const SearchFilter = (props) => {
  const {className} = props;

  return (
    <div className={`${styles.SearchFilter} ${className}`}>
      <div className={styles.leftSection}>
        <img src="/images/searchIcon.svg" className={styles.searchIcon} alt="search" width="20" />
        <input type="text" />
      </div>
      <hr />
      <div className={styles.rigthSection}>
        Shots
      </div>
    </div>
  );
}

export default SearchFilter;