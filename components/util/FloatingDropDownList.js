import styles from '../../styles/sass/components/util/FloatingDropDown.module.scss';

const FloatingDropDown = props => {
  const {render, opened} = props;

  return (
    <div className={styles.FloatingDropDown} style={{display: opened ? 'flex' : 'none'}}>
      {render}
    </div>
  );
};

export default FloatingDropDown;
