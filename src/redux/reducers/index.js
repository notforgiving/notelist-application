import { combineReducers } from "redux";
import auth from './auth'
import setnotes from './setnotes'

const rootReducer = combineReducers({
  auth,
  "notes":setnotes
});

export default rootReducer;
