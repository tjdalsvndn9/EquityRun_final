import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';
import SettingListReducer from './reducer_setting';
import PostJobReducer from './reducer_postjob';
import FindJobReducer from './reducer_findJob';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
auth:AuthReducer,
selectedList:SettingListReducer,
tags:PostJobReducer,
jobList:FindJobReducer,
form: formReducer
});

export default rootReducer;
