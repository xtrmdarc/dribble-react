import { useEffect, useRef, useState } from "react";
import backendApi from "../../lib/backendApi";
import styles from '../../styles/sass/components/search/CategoriesFilter.module.scss';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CategoriesFilter = props => {
  const [categories, setCategories] = useState([]);
  const categoriesFilter = useRef(null);
  const filterWrapperRef = useRef(null);


  const {setCategoryFilter, filterCategoryId} = props;

  useEffect(() => {
    handleArrowsVisibility();
    backendApi.getCategories()
      .then(p => setCategories([{id: -1, name:'All'},...p]));
  }, []);

  const handleArrowsVisibility = () => {
    filterWrapperRef.current.children[1].style.display = 'block';
    if(categoriesFilter.current.scrollLeft <= 0 ) {
      filterWrapperRef.current.children[1].style.display = 'none';
    }
    else if(categoriesFilter.current.scrollLeft <= 0) {
      
    }
  }

  const scrollRight = () => {
    categoriesFilter.current.scrollLeft += 100;
    handleArrowsVisibility();
  }

  const scrollLeft = () => {
    categoriesFilter.current.scrollLeft -= 100;
    handleArrowsVisibility();
  }

  return (
    <div ref={filterWrapperRef} className={styles.filterWrapper}>
      <AiOutlineRight onClick={scrollRight} className={styles.rightScroll} />
      <AiOutlineLeft onClick={scrollLeft} className={styles.leftScroll} />
      <ul ref={categoriesFilter} className={styles.CategoriesFilter} >
        {categories.map(category => (
          <li 
            key={category.id}
            className={`${styles.categoryItem} ${filterCategoryId === category.id ? styles.selected : ''}`}
            onClick={() => setCategoryFilter(category.id)}
            >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesFilter;
