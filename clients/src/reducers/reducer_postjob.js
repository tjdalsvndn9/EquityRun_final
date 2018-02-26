import {
  FUFILLED_ACTION,
  FETCH_ACTION
} from '../actions/type';

const INITIAL_STATE = {
  loading:false,
  suggestions:[]
}



export default (state = INITIAL_STATE,action) => {
  switch(action.type){
    case FETCH_ACTION:
    return {...state, loading:true}
    case FUFILLED_ACTION:
    return {...state, suggestions:action.payload, loading:false};
    default:
    return state
  }
}
