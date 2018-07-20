import {combineReducers} from 'redux';
import {
  SEARCH_RESULTS,
} from "../actions";

function results(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  results,
});

export default rootReducer;