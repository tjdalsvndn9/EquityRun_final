import {LOGGED_IN,LOCAL_LOGGED_IN} from './type';
import {authenticate,submitUser} from './auth';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';


const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  logged:{}
}
const store = mockStore(initialState);
const mockResponse = {profile:{id:'dsafasdfasfadsfads'}};
const mockPost = {email:'ssuyi@ucdavis.edu',password:'adsgadsgads'};
const mock = new MockAdapter(axios);
const clearData = () => {
  mock.restore();
  store.clearActions();
}


describe('auth action', () => {
  it('isLogged {} or {profile:dsfads}', () => {
      mock.onGet('/api/current_user').reply(200, mockResponse);
      const expectedAction = [{payload:mockResponse,type:LOGGED_IN}];
      return store.dispatch(authenticate())
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction)
      })
  });
  afterEach(() => {
    clearData();
  })
});


describe('userSubmit', () => {
  mock.onPost('/api/login').reply(500,mockPost);
  const expectedAction = [{payload:true, type:LOCAL_LOGGED_IN}]
  return store.dispatch(submitUser())
  .then(() => {
    expect(store.getActions()).toEqual(expectedAction)
  })
  afterEach(() => {
    clearData();
  })
})
