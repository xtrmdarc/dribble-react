
import styles from '../../styles/sass/components/compound/ProjectListFilter.module.scss';
import CategoriesFilter from '../search/CategoriesFilter';
import ProjectsList from '../search/ProjectsList';
import SortDropDownButton from '../search/SortDropDownButton';

const ProjectListFilter = props => {

  const {filterCategoryId, setCategoryFilter, projects} = props;

  return (
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
  );
};

export default ProjectListFilter;
