import {
  FETCH_BITCOIN,
  FETCH_LITECOIN
} from '../actions/type';
import BitcoinReducer from './reducer_bitcoin';

const initial_state = {
  bitcoin:{},
  litecoin:{}
}



describe('bitcoin reducer', () => {
  const bitcoinData = {bitcoin:'bpi'};
  const action = {type:FETCH_BITCOIN, payload:bitcoinData}

  it('fetches and set', () => {
    expect(BitcoinReducer(initial_state, action)).toEqual({...initial_state, bitcoin:bitcoinData})
  })
})


describe('litecoin reducer', () => {
    const litecoinData = {litecoin:'bpi'};
    const action = {type:FETCH_LITECOIN, payload:litecoinData}
    it('fetche success', () => {
      expect(BitcoinReducer(initial_state,action)).toEqual({...initial_state, litecoin:litecoinData})
    })
})
