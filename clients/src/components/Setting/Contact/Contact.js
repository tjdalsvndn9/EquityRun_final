import React,{Component} from 'react';
import './Contact.css';
import LIST from '../List/List';
import CARD from '../Card/Card';


class CONTACT extends Component {
    render() {
        return (
          <div className="SETTING CONTACT">
            <div>
              <LIST/>
              <div className='SETTING-RIGHT'>
                <h2 className='SETTING-TITLE'>Contact Info</h2>
                <CARD
                header='Billing Methods'
                description='PayPal tjdalsvndn9@naver.com  (Primary)'
                button='Add Billing Method'
                />
              </div>
            </div>
          </div>
        );
    }
}

export default CONTACT;
