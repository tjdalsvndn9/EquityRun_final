import React,{Component} from 'react';
import {connect} from 'react-redux';
import {navigationBack} from '../../actions';
import {authenticate} from '../../actions/auth';
import LOADER from '../Util/Loader';

export default (ComposedComponent) => (condition) => {
    class DEFFERENCIATEROLE extends Component {
      async componentDidMount() {
        await this.props.authenticate();
        const {profile:{role}} = this.props.auth;
        if(role !== condition){
          this.props.navigationBack()
        }
      }
      render() {
          return (
            <LOADER loaderReason={this.props.auth.profile === undefined}>
              <ComposedComponent {...this.props}/>
            </LOADER>
          );
      }
  }

  function mapStateToProps({auth}) {
    return{auth}
  }
  return connect(mapStateToProps,{navigationBack,authenticate})(DEFFERENCIATEROLE)
}
