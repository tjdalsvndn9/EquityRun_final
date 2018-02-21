import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';
import SettingListReducer from './reducer_setting';


const rootReducer = combineReducers({
auth:AuthReducer,
selectedList:SettingListReducer
});

export default rootReducer;
