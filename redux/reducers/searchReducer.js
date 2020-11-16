import { CHANGE_SEARCH_QUERY, SET_SEARCH_CATEGORY_FILTER } from "../actions";

const INITIAL_STATE = {
  query: '',
  cateogryId: -1,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_SEARCH_QUERY: {
      console.log(Object.assign({}, state, {query: action.query}));
      return Object.assign({}, state, {query: action.query});
    }
    case SET_SEARCH_CATEGORY_FILTER: {
      return Object.assign({}, state, {cateogryId: action.filter});
    }
    default: return state
  }
}

export default searchReducer;