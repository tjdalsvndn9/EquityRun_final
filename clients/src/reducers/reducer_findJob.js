import {
  FUFILLED_FIND_JOB,
  ERROR_FIND_JOB,
  FIND_JOB,
  DONE_JOB
} from '../actions/type';



const INITIAL_STATE = {
  lists:[],
  error:'',
  loading:false,
}


 export default (state = INITIAL_STATE,action) => {
  switch(action.type){
    case FIND_JOB:
    return {...state, lists:[], error:'',loading:true};
    case DONE_JOB:
    return {...state, lists:[], error:'',loading:false};
    case FUFILLED_FIND_JOB:
    return {...state, lists:action.payload, error:'', loading:false};
    case ERROR_FIND_JOB:
    return {...state, error: action.payload, lists:[], loading:false};
    default:
    return state
  }
}
