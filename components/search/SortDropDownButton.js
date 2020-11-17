
import { useEffect, useState } from 'react';
import useVisible from '../../lib/customHooks/useVisible';
import styles from '../../styles/sass/components/search/SortDropDownButton.module.scss';
import FloatingDropDown from '../util/FloatingDropDownList';

const SortDropDownButton = props => {
  const {ref, isVisible, setIsVisible} = useVisible(true);

  const dropDownList = (
    <ul className={styles.dropDownList} ref={ref} >
      <li>Hola</li>
      <li>Soy</li>
      <li>Lista</li>
    </ul>
  );

  return (
    <button className={styles.SortDropDownButton} onClick={() => setIsVisible(true)} >
      Popular
      <FloatingDropDown render={dropDownList} opened={isVisible} />
    </button>
  );
};

export default SortDropDownButton;