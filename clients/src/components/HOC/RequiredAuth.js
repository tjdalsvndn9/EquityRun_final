import React,{Component} from 'react';
import {connect} from 'react-redux';
import {navigation} from '../../actions';
import {authenticate} from '../../actions/auth';
import LOADER from '../Util/Loader';

export default (ComposedComponent) => {
    class REQUIREDAUTH extends Component {
      async componentDidMount() {
        await this.props.authenticate();
        if(this.props.auth.facebookId === ''){
          this.props.navigation('/')
        }
      }

      componentWillUpdate(nextProps, nextState) {
        if(!nextProps.auth){
          this.props.navigation('/')
        }
      }

      render() {
          return (
            <LOADER loaderReason={this.props.auth.facebookId === undefined}>
              <ComposedComponent {...this.props}/>
            </LOADER>
          );
      }
  }

  function mapStateToProps({auth}) {
    return{auth}
  }
  return connect(mapStateToProps,{navigation,authenticate})(REQUIREDAUTH)
}
