import styles from '../styles/sass/components/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.leftSection}>
        <img alt="img" className={styles.logo} />
        <nav>
          <ul>
            <li>Explore</li>
            <li>For Designers</li>
            <li>Hiring Designers?</li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightSection}>
        <img alt="search" />
        <button className={styles.blank}>Sign in</button>
        <button className={styles.accent}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;