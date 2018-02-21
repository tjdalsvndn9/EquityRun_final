import React,{Component} from 'react';
import './Banner.css';
import FACEBOOK from '../../../assets/facebook.png';
import AIRBNB from '../../../assets/airbnb.png';
import GOOGLE from '../../../assets/google.png';
import LINKEDIN from '../../../assets/linkedin.png';
import TWITTER from '../../../assets/twitter.png';

const imageArray = [FACEBOOK,AIRBNB,GOOGLE,LINKEDIN,TWITTER]

class BANNER extends Component {
    renderImage = () => {
      return imageArray.map((value,index) => {
        return(
          <img key={index}
          src={value}
          alt='logo'
          />
        )
      })
    }
    render() {
        return (
            <div className="BANNER">
                <h3>Trusted by 3M+ business</h3>
                <div className='Flex-Row'>
                    {this.renderImage()}
                </div>
            </div>
        );
    }
}

export default BANNER;
