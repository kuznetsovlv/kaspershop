import { combineReducers } from 'redux';
import data from './data';
import goodList from '../components/GoodList/reducer';
import bag from '../forms/Bag/reducer';
import good from '../forms/Good/reducer';

export default combineReducers({
  data,
  goodList,
  bag,
  good
});
