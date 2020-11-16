import styles from '../../styles/sass/components/search/SearchFilter.module.scss';

const SearchFilter = (props) => {
  const {className, query, filterProjects, setQuery} = props;

  const onQueryProjects = (e) => {
    e.preventDefault();
    filterProjects();
  }

  return (
    <div className={`${styles.SearchFilter} ${className}`}>
      <form className={styles.leftSection} onSubmit={onQueryProjects}>
        <img src="/images/searchIcon.svg" className={styles.searchIcon} alt="search" width="20" />
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </form>
      <hr />
      <div className={styles.rigthSection}>
        Shots
      </div>
    </div>
  );
}

export default SearchFilter;