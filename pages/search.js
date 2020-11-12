import Header from '../components/Header';
import SearchFilter from '../components/search/SearchFilter';
import styles from '../styles/sass/Search.module.scss';

const Search = () => {
  return (
    <div className={styles.Search}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.outerSearchWrapper}>
          <div className={styles.halfBackground}></div>
          <div className={styles.searchWrapper}>
            <div className={styles.mainWrapperSearchFilter}>
              <SearchFilter className={styles.SearchFilter} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;