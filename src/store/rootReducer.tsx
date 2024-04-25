import {combineReducers} from '@reduxjs/toolkit';
import main from './reducer/main';

const mainReducer = combineReducers({
  mainReducer: main,
});

export default mainReducer;
