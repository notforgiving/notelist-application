import { combineReducers } from "redux";
import auth from './auth'
import setnotes from './setnotes'
import setloaded from './loading'

const rootReducer = combineReducers({
  auth,
  "notes":setnotes,
  "loading":setloaded
});

export default rootReducer;
