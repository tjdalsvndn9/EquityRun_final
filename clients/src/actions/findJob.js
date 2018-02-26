import {
  FIND_JOB,
  FUFILLED_FIND_JOB,
  ERROR_FIND_JOB,
  DONE_JOB
} from './type';


export const fetchAction = outputObj => {
    return{
      type:FIND_JOB,
      payload:outputObj
    }
}


export const stopAction = () => {
  return{
    type:DONE_JOB
  }
}




export const fufilledFetchActionFindJob = lists => {
  if(lists.length ===0){
    return findError();
  }else{
    return{
      type:FUFILLED_FIND_JOB,
      payload:lists
    }
  }
}


export const findError = () => {
  return{
    type:ERROR_FIND_JOB,
    payload:'Cannot Search!!!!!'
  }
}
