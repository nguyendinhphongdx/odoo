import {combineReducers} from 'redux';
import projectReducer from '../reducers/ProjectReducer';
import userReducer from '../reducers/userReducer';
const myReducers = combineReducers({
  User:userReducer,
  Project:projectReducer
  });
  export default myReducers;