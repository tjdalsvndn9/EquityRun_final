import React,{Component} from 'react';
import BUTTON from '../../common/Button/Button';
import './Hero.css'

const buttonStyle = {
  backgroundColor:'#4E92DF',
  color:'white',
  margin:'0 10px'
}

class HERO extends Component {

    render() {
        return (
            <div className="HERO">
              <h2>Get it done with a freelancer</h2>
              <div className='Flex-Column'>
                <BUTTON
                text='Entrepreneur'
                style={buttonStyle}
                />
                <BUTTON
                text='Freelancer'
                style={buttonStyle}
                />
              </div>
            </div>
        );
    }
}

export default HERO;
