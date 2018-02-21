import {
  CHANGE_LIST_BACKGROUND_COLOR
} from './type';



export const changeBackGroundColor = index => dispatch => {
  dispatch({
    type:CHANGE_LIST_BACKGROUND_COLOR,
    payload:index
  })
}
