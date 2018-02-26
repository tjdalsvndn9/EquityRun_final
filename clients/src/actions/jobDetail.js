import {
  FETCH_JOB_DETAIL
} from './type';
import axios from 'axios';




//Resume after I complete node js restful API
 export const fetchJobDetail = id => async(dispatch) =>  {
  try{
    const result = await axios.get(`https://jobs.github.com/positions/${id}.json?markdown=true`)
    console.log(result)
  }
  catch(err){
    console.log(err);
  }
 }
