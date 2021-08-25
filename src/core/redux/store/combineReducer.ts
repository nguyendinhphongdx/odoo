import {combineReducers} from 'redux';
import userReducer from '../reducers/userReducer';
const myReducers = combineReducers({
  User:userReducer,
  });
  export default myReducers;