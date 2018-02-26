import React,{Component} from 'react';
import './JobDetail.css';
import {connect} from 'react-redux';
import {authenticate} from '../../../actions/auth';
import {fetchJobDetail} from '../../../actions/jobDetail';
import {navigation} from '../../../actions'
import LOADER from '../../Util/Loader';
import {renderWhenDataArrive} from '../../Util/UtilFunction';
import { Button } from 'semantic-ui-react';
import BGCARD from '../../common/Bg-Card/Bg-Card';
import moment from 'moment';



//onclick Message
// await this.props.authenticate()
// console.log(this.props.auth)

class JOBDETAIL extends Component {
    state ={
      transferredData:null,
      id:window.location.pathname.slice(12)
    };
    async componentDidMount(){
      if(this.props.location.state === undefined){
          return this.props.fetchJobDetail(this.state.id);
      }
      await this.setState({transferredData:this.props.location.state.nextRoute})
    }

    onClick = async (text) => {
      if(text === 'message'){
        console.log(this.state.id)
        this.props.navigation(`/message/${this.state.id}`)
      }
    }


    renderJobDetail = () => {
      const createAJSX = () => {
        const {company,company_logo,company_url,created_at,location,title,type,how_to_apply} = this.state.transferredData;
        const milliseconds = moment.utc({created_at}).valueOf();
        const time = moment(milliseconds).startOf('second').fromNow()
        return(
          <div className='job-container'>
            <div className='job-company-container'>
              <img src={company_logo}/>
            </div>
            <div>
              <p className='job-type'>Job Type: {type}</p>
              <p>Title: <span className='job-title'>{title}</span></p>
              <p className='job-location'>Location: {location}</p>
              <a href={company_url} target="_blank">Vist a company</a>
              <p className='job-time'>Posted: {time}</p>
            </div>
            <Button onClick={() => this.onClick('apply')}>Apply</Button>
            <Button onClick={() => this.onClick('message')}>Send a Message</Button>
          </div>
        )
      }
      return renderWhenDataArrive(this.state.transferredData === null,createAJSX)
    }

    render() {
        return (
            <LOADER loaderReason={this.state.transferredData === null}>
            <div className='JOBDETAIL'>
                <BGCARD cardStyle={{minHeight:'300px'}}>
                  {this.renderJobDetail()}
                </BGCARD>
            </div>
            </LOADER>
        );
    }
}


function mapStateToProps({auth}) {
  return{auth}
}


export default connect(mapStateToProps,{authenticate,fetchJobDetail,navigation})(JOBDETAIL);
