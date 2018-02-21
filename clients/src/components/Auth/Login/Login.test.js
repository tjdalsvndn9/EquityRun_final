import React from 'react';
import { shallow } from 'enzyme';
import {LOGIN} from './Login';


describe('Login Component', () => {
  const mockSubmit = jest.fn();
  const app = shallow(<LOGIN  submitUser={mockSubmit}/>);


  describe('html', () => {
    it('signup Link', () => {
        expect(app.find('.signup Link').prop('to')).toEqual('/signup');
    })

    it('facebook login button', () => {
      expect(app.find('.facebook').exists()).toBe(true);
    })
  })

  describe('application logic', () => {

    it('contains a connected login component', () => {
      expect(app.exists()).toBe(true);
    })
    it('initializes the `state` with an empty state of login and password input', () => {
      expect(app.state().credential).toEqual({email:'',password:''});
    });

    describe('button click', () => {
      beforeEach(() => {
        app.find('.signin').simulate('click');
      });

      it('action creator is called', () => {
          const credential = {email:'ss',password:'yess'};
          expect(mockSubmit).toHaveBeenCalled();
      })

      afterEach(() => {
        app.setState({credential:{email:'',password:''}})
      })
    });

    describe('email input onChange', () => {
      const testString = 'abc'
      beforeEach(() => {
        app.find('.email').simulate('change', {target:{value:testString}});
      });

      it('email input onChange', () => {
        expect(app.state().credential.email).toEqual(testString)
      });
    });

    describe('password input onChange', () => {
      const testString = 'cdc';
      beforeEach(() => {
        app.find('.password').simulate('change', {target:{value:testString}});
      });
      it('password input onChange', () => {
         expect(app.state().credential.password).toEqual(testString)
      });
    });

    describe('click a facebook button', () => {
      beforeEach(() => {
        app.find('.facebook').simulate('click');
      });
      
    });
  })
})
