import React,{Component} from 'react';
import {connect} from 'react-redux';
import {advancedNavigation} from '../../actions';


export default (BaseComponent) => (newRoute) =>   {
  class REASKAUTH extends Component {
      componentDidMount() {
        this.props.advancedNavigation('/authenticate',newRoute)
      }
      render() {
          return (
            <BaseComponent {...this.props}/>
          );
      }
  }
  return connect(null,{advancedNavigation})(REASKAUTH)
}
