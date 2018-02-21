//https://api.coindesk.com/v1/bpi/currentprice.json
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {fetchBitcoin,fetchLiteCoin} from './bitcoin';
import {FETCH_BITCOIN,FETCH_LITECOIN} from './type';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  bitcoin:{},
  litcoin:{}
}
const store = mockStore(initialState);
const mockResponse = {body: {bpi: 'bitcoin price index'}};

const clearData = () => {
  fetchMock.restore();
  store.clearActions();
}




describe('bitcoin api action', () => {
  it('creates an async action to fetch the bitcoin value', () => {
    fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json',mockResponse)
    const expectedActions = [{payload:mockResponse.body, type:FETCH_BITCOIN}];
    return store.dispatch(fetchBitcoin())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  afterEach(clearData)
})


describe('litcoin api action', () => {
  it('creates an async action to fetch the litecoin value', () => {
    fetchMock.get('https://api.coinmarketcap.com/v1/ticker/',mockResponse)
    const expectedActions = [{payload:mockResponse.body, type:FETCH_LITECOIN}];
    return store.dispatch(fetchLiteCoin())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  afterEach(clearData)
})
