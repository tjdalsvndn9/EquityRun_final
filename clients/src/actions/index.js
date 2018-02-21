import {push} from 'react-router-redux';



export const navigation = text => dispatch => {
  dispatch(push(text))
}


export const advancedNavigation = (text,nextRoute) => dispatch => {
  dispatch(push({
    pathname:text,
    state:{nextRoute}
  }))
}
