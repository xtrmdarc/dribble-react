
import useVisible from '../../lib/customHooks/useVisible';
import styles from '../../styles/sass/components/search/SortDropDownButton.module.scss';
import FloatingDropDown from '../util/FloatingDropDownList';
import { AiOutlineDown } from "react-icons/ai";
import { useState } from 'react';

const SortDropDownButton = props => {
  const {ref, isVisible, setIsVisible} = useVisible(false);
  const [title, setTitle] = useState('Popular');

  const handleDropDownItemClick = (e) => {
    setIsVisible(false);
    setTitle(e.target.textContent);
  }

  const dropDownList = (
    <ul className={styles.dropDownList} ref={ref} >
      <li onClick={handleDropDownItemClick} >Popular</li>
      <li onClick={handleDropDownItemClick} >Most Viewed</li>
    </ul>
  );

  return (
    <div className={styles.sortButtonWrapper}>
      <button className={styles.SortDropDownButton} onClick={() => setIsVisible(true)} >
        <span>{title}</span>
        <AiOutlineDown style={{height: '12px', transform: isVisible ? 'rotate(0.5turn)' :  ''}} />
      </button>
      <FloatingDropDown render={dropDownList} opened={isVisible} />
    </div>
  );
};

export default SortDropDownButton;