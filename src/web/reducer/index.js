import { combineReducers } from 'redux';
import data from './data';
import goodList from '../components/GoodList/reducer';

export default combineReducers({
  data,
  goodList
});
