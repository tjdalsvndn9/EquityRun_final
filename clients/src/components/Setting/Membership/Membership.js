import React,{Component} from 'react';
import './Membership.css'
import LIST from '../List/List';
import CARD from '../Card/Card'

class MEMBERSHIP extends Component {

    render() {
        return (
            <div className="SETTING MEMBERSHIP">
              <div>
                <LIST/>
                <div className='SETTING-RIGHT'>
                  <h2 className='SETTING-TITLE'>Membership & Connects</h2>
                  <CARD
                  header='Summary'
                  description='Current Plan: Free'
                  button='Change Plan'
                  />
                </div>
              </div>
            </div>
        );
    }
}

export default MEMBERSHIP;
