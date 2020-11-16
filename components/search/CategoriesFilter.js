import { useEffect, useRef, useState } from "react";
import backendApi from "../../lib/backendApi";
import styles from '../../styles/sass/components/search/CategoriesFilter.module.scss';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CategoriesFilter = props => {
  const [categories, setCategories] = useState([]);
  const categoriesFilter = useRef(null);

  useEffect(() => {
    backendApi.getCategories()
      .then(p => setCategories(p));
  }, []);

  const scrollRight = () => {
    categoriesFilter.current.scrollLeft += 100;
  }

  const scrollLeft = () => {
    categoriesFilter.current.scrollLeft -= 100;
  }

  return (
    <div className={styles.filterWrapper}>
      <AiOutlineRight onClick={scrollRight} className={styles.rightScroll} />
      <AiOutlineLeft onClick={scrollLeft} className={styles.leftScroll} />
      <ul ref={categoriesFilter} className={styles.CategoriesFilter} >
        {categories.map(category => (
          <li className={styles.categoryItem}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesFilter;
