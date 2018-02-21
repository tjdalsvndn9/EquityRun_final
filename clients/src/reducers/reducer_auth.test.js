import authReducer from './reducer_auth';
import {
  LOGGED_IN,
  SUBMIT_USER_CREDENTIAL
} from '../actions/type';

describe('auth reducer test', () => {
  it('get a isLogged', () => {
    const payload = {profile:{id:'dasfadsfasd'}};
    const action = {type:LOGGED_IN, payload};
    expect(authReducer({},action)).toEqual(payload);
  })
})
