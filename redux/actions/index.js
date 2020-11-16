export const SET_SEARCH_CATEGORY_FILTER = 'SET_SEARCH_CATEGORY_FILTER';
export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';

export const setSearchCategoryFilter = (filter) => {
  return {
    type: SET_SEARCH_CATEGORY_FILTER,
    filter
  }
}

export const changeSearchQuery = (query) => {
  return {
    type: CHANGE_SEARCH_QUERY,
    query
  }
}


