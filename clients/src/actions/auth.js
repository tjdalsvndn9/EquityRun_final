import{
  LOGGED_IN,
  SUBMIT_USER_CREDENTIAL,
  LOCAL_LOGGED_IN
} from './type';
import {push} from 'react-router-redux'

import axios from 'axios'


export const authenticate = () => async(dispatch) => {
  const {data} = await axios.get('/api/current_user');
  dispatch({
    type:LOGGED_IN,
    payload:data
  })
}

export const submitUser = userObj => async (dispatch) => {
  const {data} = await axios({
    method: 'post',
    url: '/api/login',
    headers:{
          'Content-Type': 'application/json'
    },
    data: userObj
  });
  console.log(data)
  await dispatch({
    type:LOGGED_IN,
    payload:data
  })
  dispatch(push('/setting/billing'))
}



export const signupSubmit = userObj => async (dispatch) => {
  const {data} = await axios({
    method: 'post',
    url: '/api/signup',
    headers:{
          'Content-Type': 'application/json'
    },
    data: userObj
  });
  if(data.loggedIn){
    dispatch(push('/login'))
  }
}
