import {
  CHANGE_LIST_BACKGROUND_COLOR
} from '../actions/type';


export default (state = 1, action) => {
  switch(action.type){
    case CHANGE_LIST_BACKGROUND_COLOR:
    return action.payload;
    default:
    return state;
  }
}
