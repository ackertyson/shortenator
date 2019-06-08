import { combineReducers } from 'redux';
import { reducer as url} from './components/url';

const rootReducer = combineReducers({
  url
  //, otherReducer
});

export default rootReducer;
