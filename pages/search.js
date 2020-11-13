import Header from '../components/Header';
import ProjectsList from '../components/search/ProjectsList';
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
            <h2 className={styles.title}>
              Web ui
            </h2>
            <span className={styles.resultNumber}>
              10,000+ web ui images
            </span>
          </div>
        </section>
        <section className={styles.ProjectListWrapper}>
          <ProjectsList />
        </section>
      </main>
    </div>
  );
};

export default Search;