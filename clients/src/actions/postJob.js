import {
  POST_JOB,
  FETCH_ACTION,
  FUFILLED_ACTION
} from './type';
import axios from 'axios';


export const fetchAction = (url) => {
  return{
    type:FETCH_ACTION,
    payload:url
  }
}

export const fufilledFetchAction = lists => {
  return{
    type:FUFILLED_ACTION,
    payload:lists
  }
}


export const postAJob = jobObj => async(dispatch) => {
  await axios({
    method:'post',
    url:'/job',
    data:jobObj
  })
}
