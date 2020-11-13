import styles from '../../styles/sass/components/search/ProjectsList.module.scss';
import ProjectItem from './ProjectItem';

const ProjectsList = () => {

  return (
    <section className={styles.ProjectsList}>
      <ProjectItem className={styles.ProjectItem} />            
    </section>
  )
}

export default ProjectsList;
