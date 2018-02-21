import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../Universial.css'
import './Footer.css';
import FacebookIcon from '../../../assets/footer/facebook.png';
import InstagramIcon from '../../../assets/footer/instagram.png';
import LinkedInIcon from '../../../assets/footer/linkedin.png';
import TwitterIcon from '../../../assets/footer/twitter.png';


const footerArray = [
  {
    title:'COMPANY INFO',
    links:[
      {
        title:'About us',
        url:'/'
      },
      {
        title:'Customer Service',
        url:'/'
      },
      {
        title:'Careers',
        url:'/'
      }
    ]
  },
  {
    title:'ADDITIONAL SERVICES',
    links:[
      {
        title:'About us',
        url:'/'
      },
      {
        title:'Customer Service',
        url:'/'
      },
      {
        title:'Careers',
        url:'/'
      }
    ]
  },
  {
    title:'CONNECT WITH US',
    links:[
      {
        title:'About us',
        url:'/'
      },
      {
        title:'Customer Service',
        url:'/'
      },
      {
        title:'Careers',
        url:'/'
      }
    ]
  },
  {
    title:"BROWSE",
    links:[
      {
        title:'About us',
        url:'/'
      },
      {
        title:'Customer Service',
        url:'/'
      },
      {
        title:'Careers',
        url:'/'
      }
    ]
  }
];

const marketingIconArray = [
  {
    img:FacebookIcon,
    url:'https://react.semantic-ui.com/elements/button#button-example-button'
  },
  {
    img:InstagramIcon,
    url:'https://react.semantic-ui.com/elements/button#button-example-button'
  },
  {
    img:LinkedInIcon,
    url:'https://react.semantic-ui.com/elements/button#button-example-button'
  },
  {
    img:TwitterIcon,
    url:'https://react.semantic-ui.com/elements/button#button-example-button'
  }
]

class FOOTER extends Component {

    renderListContent= list => {
      return list.map((value,index) => {
        return(
          <li><Link to={value.url}>{value.title}</Link></li>
        )
      })
    }

    renderFooterContent= () => {
      return footerArray.map((value,index) => {
        return(
          <div>
            <h3>{value.title}</h3>
            <ul>
              {this.renderListContent(value.links)}
            </ul>
          </div>
        )
      })
    }

    renderFooterIcon = () => {
      return marketingIconArray.map((value,index) => {
        return(
          <a href={value.url}><img src={value.img} /></a>
        )
      })
    }

    render() {
        return (
            <div className="BLOCK FOOTER">
              <div className='FOOTER-ROW'>
                {this.renderFooterContent()}
              </div>
              <div className='FOOTER-MARKETING'>
                <div>
                <p>Follow us</p>
                {this.renderFooterIcon()}
                </div>
                <div>
                <p>Download our mobile app</p>
                  <a href='/'><img src={FacebookIcon} /></a>
                  <a href='/'><img src={FacebookIcon} /></a>
                </div>
              </div>
            </div>
        );
    }
}

export default FOOTER;
