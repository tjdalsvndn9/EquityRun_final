import {
  FETCH_BITCOIN,
  FETCH_LITECOIN
} from '../actions/type';

const INITIAL_STATE = {
  bitcoin:{},
  litecoin:{}
}

export default (state =INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_BITCOIN:
    return {...state, bitcoin:action.payload};
    case FETCH_LITECOIN:
    return {...state, litecoin:action.payload}
  }
}
