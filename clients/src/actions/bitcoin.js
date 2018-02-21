import {
  FETCH_BITCOIN,
  FETCH_LITECOIN
} from './type';


export const fetchBitcoin = () => async (dispatch) => {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  const response = await fetch(url);
  const payload = await response.json();
  dispatch({
    type:FETCH_BITCOIN,
    payload
  })
}


export const fetchLiteCoin = () => async(dispatch) => {
    const url = 'https://api.coinmarketcap.com/v1/ticker/';
    const response = await fetch(url);
    const payload = await response.json();
    dispatch({
      type:FETCH_LITECOIN,
      payload
    })
}
