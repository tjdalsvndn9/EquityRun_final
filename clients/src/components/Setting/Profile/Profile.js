import React,{Component} from 'react';
import './Profile.css'
import LIST from '../List/List';
import CARD from '../Card/Card'
import {connect} from 'react-redux';
import {authenticate} from '../../../actions/auth';
import BGCARD from '../../common/Bg-Card/Bg-Card';

export class PROFILE extends Component {
    componentDidMount() {
      this.props.authenticate()
    }

    createProfile = () => {
      if(this.props.auth !== undefined){
        const {name,picture} = this.props.auth.profile;
        return(
          <div>
            <img src={picture} className='PROFILE-IMAGE'/>
            <h3 className='PROFILE-NAME'>{name}</h3>
          </div>
        )
      }
    }

    render() {
        return (
            <div className="SETTING PROFILE">
              <div>
                <LIST/>
                <div className='SETTING-RIGHT'>
                  <h2 className='SETTING-TITLE'>My Profile</h2>
                  <BGCARD>
                    {this.createProfile()}
                  </BGCARD>
                </div>
              </div>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
  return{auth}
}

export default connect(mapStateToProps,{authenticate})(PROFILE);
