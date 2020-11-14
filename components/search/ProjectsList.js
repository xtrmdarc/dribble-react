import styles from '../../styles/sass/components/search/ProjectsList.module.scss';
import ProjectItem from './ProjectItem';

const ProjectsList = (props) => {
  const {projects} = props;

  return (
    <section className={styles.ProjectsList}>
      {
        projects.map(project => (
          <ProjectItem className={styles.ProjectItem} project={project} />
        ))
      }
    </section>
  )
}

export default ProjectsList;
