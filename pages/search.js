import Head from 'next/head';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CategoriesFilter from '../components/search/CategoriesFilter';
import ProjectsList from '../components/search/ProjectsList';
import SearchFilter from '../components/search/SearchFilter';
import SortDropDownButton from '../components/search/SortDropDownButton';
import backendApi from '../lib/backendApi';
import { changeSearchQuery, setSearchCategoryFilter } from '../redux/actions';
import styles from '../styles/sass/Search.module.scss';

const Search = props => {
  const { projectsList, query, setQuery, setCategoryFilter, filterCategoryId } = props;
  const [projects, setProjects] = useState(projectsList);

  const queryProjects = () => {
    backendApi.getProjectsByQuery(query)
      .then(p => setProjects(p));
  }

  return (
    <>
    <Head>
      <title>Dribbble search</title>
    </Head>
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
          <div className={styles.filtersSection}>
            <SortDropDownButton />
            <div className={styles.outerCategoryFilterWrapper}>
              <CategoriesFilter 
                filterCategoryId={filterCategoryId}
                setCategoryFilter={setCategoryFilter} />
            </div>
            
          </div>
          <ProjectsList projects={projects} filterCategoryId={filterCategoryId} />
        </section>
      </main>
    </div>
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      projectsList: await backendApi.getProjects(),
    }
  }
}

const mapStateToProps = (state) => ({
  query: state.search.query,
  filterCategoryId: state.search.categoryId,
});

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(changeSearchQuery(query)),
  setCategoryFilter: (filter) => dispatch(setSearchCategoryFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
