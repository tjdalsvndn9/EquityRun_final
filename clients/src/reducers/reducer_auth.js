import {
  LOGGED_IN
} from '../actions/type';


export default (state = {}, action) => {
  switch(action.type){
    case LOGGED_IN:
    return action.payload;
    default:
    return state;
  }
}
