import styles from '../../styles/sass/components/search/ProjectsList.module.scss';
import ProjectItem from './ProjectItem';

const ProjectsList = (props) => {
  const {projects, filterCategoryId} = props;

  return (
    <section className={styles.ProjectsList}>
      {
        projects
        .filter(project => project.sub_categories.filter(subCat => subCat.id === filterCategoryId).length > 0 || filterCategoryId === -1)
        .map(project => (
          <ProjectItem className={styles.ProjectItem} project={project} />
        ))
      }
    </section>
  )
}

export default ProjectsList;
