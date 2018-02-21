import React,{Component} from 'react';
import '../../Css/index.css'
import './Billing.css'
import LIST from '../List/List';
import CARD from '../Card/Card'

class SETTING extends Component {

    render() {
        return (
            <div className="SETTING">
              <div>
                <LIST/>
                <div className='SETTING-RIGHT'>
                  <h2 className='SETTING-TITLE'>Billing Methods</h2>
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

export default SETTING;
