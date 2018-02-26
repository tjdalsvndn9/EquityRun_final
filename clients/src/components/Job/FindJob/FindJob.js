import React, {Component} from 'react';
import {Button, Checkbox, Form, Select, Radio,Input,Loader} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {fetchAction,stopAction} from '../../../actions/findJob'
import {advancedNavigation} from '../../../actions';
import './FindJob.css';
import LOADER from '../../Util/Loader';
import InfiniteScroll from 'react-infinite-scroller';
import {conditionalStyle,createErrorField} from '../../Util/UtilFunction';
import BGCARD from '../../common/Bg-Card/Bg-Card'
import Waypoint from 'react-waypoint';
import {renderWhenDataArrive} from '../../Util/UtilFunction'



class FINDJOB extends Component {
   state = {
     location:null,
     locationChoice:'anywhere',
     value:'',
     lists:[],
     backSpacing:false
   }
   componentDidMount(){
     const success =   (position)  => {
       const latitude  =  position.coords.latitude;
       const longitude =   position.coords.longitude;
       const location = {
         latitude,
         longitude
       }
       this.setState({location})
     }
      navigator.geolocation.getCurrentPosition(success);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.lists !== this.state.lists){
      this.setState({lists:nextProps.lists})
    }
  }

  onChange = ({target:{value}}) => {
    this.setState({value})
    if(!this.state.backSpacing){
      const {location,locationChoice} = this.state
      if(locationChoice === 'aroundme'){
          return this.props.fetchAction({value,location})
      }
      this.props.fetchAction({value});
    }
  };

  keyPress = async ({keyCode}) => {
    if(keyCode === 8){
      await this.setState({backSpacing:true})
      this.props.stopAction();
    }
    else{
        this.setState({backSpacing:false})
    }
  }




  handleChange = async (e,{value}) => {
    await this.setState({locationChoice:value})
    if(this.state.value !== ''){
      const m = {
        target:{
          value:this.state.value
        }
      }
      this.onChange(m)
    }
  };

  onClick = (value) => this.props.advancedNavigation(`/job-detail/${value.id}`,value);



  renderJobList =  () => {
    const {lists} = this.state;
    const createAJSX = () => {
      return lists.map((value,index) => {
        return(
          <BGCARD key={index} onClick={() => this.onClick(value)}>
            <h3>{value.title}</h3>
            <p>{value.location}</p>
            <p>{value.type}</p>
            <p className='EQUITY'>Equity  2%</p>
          </BGCARD>
        )
      })
    }
    return renderWhenDataArrive(lists.length === 0,createAJSX)
  }


  renderSearchInput = () => {
    const {loading} = this.props;
    const createAJSX =() => {
      return (
        <div className='loader-container'>
          <Loader active inline='centered'  />
        </div>
      )
    }
    return renderWhenDataArrive(!loading,createAJSX)
  }



  render() {
    return (
      <LOADER loaderReason={this.state.location === null}>
      <div className="FINDJOB"
        style={conditionalStyle(this.state.lists.length < 3,{height:'100vh'},{height:'100%'})}
        >
          <Form>
            <Form.Group inline="inline">
              <label>Location</label>
              <Form.Radio label='around me' value='aroundme' checked={this.state.locationChoice === 'aroundme'} onChange={this.handleChange}/>
              <Form.Radio label='Anywhere' value='anywhere' checked={this.state.locationChoice === 'anywhere'} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Field>
              <input placeholder='Search'
                onChange={this.onChange}
                onKeyDown={this.keyPress}
                />
              {this.renderSearchInput()}
            </Form.Field>
          </Form>
          {this.renderJobList()}
          {createErrorField(this.props.error,'do it again')}
      </div>
      </LOADER>
    );
  }
}

function mapStateToProps(jobList){
  const {lists,error,loading} = jobList.jobList
  return {lists,error,loading}
}

export default connect(mapStateToProps,{advancedNavigation,fetchAction,stopAction})(FINDJOB);
