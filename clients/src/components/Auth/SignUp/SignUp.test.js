import React from 'react';
import { shallow } from 'enzyme';
import {SIGNUP} from './SignUp';


describe('Sign up component', () => {
  const mockSubmit = jest.fn();
  const app = shallow(<SIGNUP signupSubmit={mockSubmit}/>)
  describe('html', () => {
    it('link to sign in', () => {
      expect(app.find('.login Link').prop('to')).toEqual('/login')
    })
  });

  describe('application logic', () => {

    describe('state', () => {
      it('empty when it initiates', () => {
        expect(app.state().credential).toEqual({email:'',password:''})
      })
    })

    describe('sign up button', () => {
      const credential = {email:'ssuyi@ucdavis.edu', password:'yess'}
      beforeEach(() => {
        app.setState({credential})
        app.find('.signup').simulate('click');
      })
      it('pass data to redux', () => {
       expect(mockSubmit).toHaveBeenCalledWith(credential);
      })
      afterEach(() => {
        app.setState({credential:{email:'',password:''}})
      })
    })

    describe('email address input', () => {
      //before do something - pre
      const testString='ssuyi@ucdavis.edu'
      beforeEach(() => {
        app.find('.email').simulate('change', {target:{value:testString}})
      });
      it('changes accordingly', () => {
        expect(app.state().credential.email).toEqual(testString)
      });
    });

    describe('password input', () => {
      const testString= 'dasfadsgadsgasd';
      beforeEach(() => {
        app.find('.password').simulate('change',{target:{value:testString}});
      });
      it('change accordingly', () => {
        expect(app.state().credential.password).toEqual(testString)
      })
    })
  })
})
