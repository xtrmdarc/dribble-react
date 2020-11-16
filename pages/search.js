import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProjectsList from '../components/search/ProjectsList';
import SearchFilter from '../components/search/SearchFilter';
import backendApi from '../lib/backendApi';
import styles from '../styles/sass/Search.module.scss';

const Search = props => {
  const { projectsList } = props;
  const [projects, setProjects] = useState(projectsList);
  const [query, setQuery] = useState('');

  const queryProjects = () => {
    backendApi.getProjectsByQuery(query)
      .then(p => setProjects(p));
  }

  return (
    <div className={styles.Search}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.outerSearchWrapper}>
          <div className={styles.halfBackground}></div>
          <div className={styles.searchWrapper}>
            <div className={styles.mainWrapperSearchFilter}>
              <SearchFilter query={query} setQuery={setQuery} filterProjects={queryProjects} className={styles.SearchFilter} />
            </div>
            <h2 className={styles.title}>
              {query}
            </h2>
            <span className={styles.resultNumber}>
              10,000+ images
            </span>
          </div>
        </section>
        <section className={styles.ProjectListWrapper}>
          <ProjectsList projects={projects} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      projectsList: await backendApi.getProjects(),
    }
  }
}

export default Search;