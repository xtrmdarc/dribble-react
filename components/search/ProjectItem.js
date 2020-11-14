import styles from '../../styles/sass/components/search/ProjectItem.module.scss';

const ProjectItem = props => {
  const {className, project} = props;

  return (
    <article className={`${styles.ProjectItem} ${className}`}>
      <a href="#" className={styles.portrait}>
        <img className={styles.mainImage} alt="Project image" src={project.image} />
        <div className={styles.hoverActions}>
          <h2 className={styles.description}>{project.description}</h2>
          <ul className={styles.actions}>
            <li>
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
              </button>
            </li>
            <li>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>
              </button>
            </li>
          </ul>
        </div>
      </a>
      <div className={styles.info}>
        <div className={styles.leftSection}>
          <h3 className={styles.nameUser}>{project.title}</h3>
          <span className={styles.tag}>PRO</span>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.userActions}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 15" fill="none" role="img" >
                <path d="M8.75 0.5H5.25C2.35025 0.5 0 2.85025 0 5.75C0 8.24783 1.74592 10.3344 4.08333 10.8652V14.5L8.16667 11H8.75C11.6497 11 14 8.64975 14 5.75C14 2.85025 11.6497 0.5 8.75 0.5Z"></path>
              </svg> 
              {project.view_count}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon fill-current shot-tools-icon"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>
              {project.vote_count}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
