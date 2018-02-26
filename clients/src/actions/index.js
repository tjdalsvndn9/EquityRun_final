import {push,goBack} from 'react-router-redux';



export const navigation = text => dispatch => {
  dispatch(push(text))
}


export const advancedNavigation = (pathname,nextRoute) => dispatch => {
  dispatch(push({
    pathname,
    state:{nextRoute}
  }))
}

export const navigationBack = () => dispatch => dispatch(goBack());
