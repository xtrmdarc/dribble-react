import { CHANGE_SEARCH_QUERY, SET_SEARCH_CATEGORY_FILTER } from "../actions";

const INITIAL_STATE = {
  query: '',
  categoryId: -1,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_SEARCH_QUERY: {
      return Object.assign({}, state, {query: action.query});
    }
    case SET_SEARCH_CATEGORY_FILTER: {
      return Object.assign({}, state, {categoryId: action.filter});
    }
    default: return state
  }
}

export default searchReducer;