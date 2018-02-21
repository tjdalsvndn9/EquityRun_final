import React from 'react';
import { shallow } from 'enzyme';
import {PROFILE} from './Profile';



describe('Profile Component' , () => {
    const mockAuthenticate = jest.fn();
    const prop = {
      auth:{
        profile:{picture:'dsafads',name:'dsafadsfs'}
      }
    };
    const app = shallow(<PROFILE authenticate={mockAuthenticate} {...prop} />);
  describe('html', () => {
    it('image exists', () => {
      expect(app.find('.PROFILE-IMAGE').exists()).toBe(true);
    });
    it('name exists', () => {
      expect(app.find('.PROFILE-NAME').exists()).toBe(true);
    })
  });

});
