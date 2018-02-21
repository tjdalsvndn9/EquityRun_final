import React,{Component} from 'react';
import {connect} from 'react-redux';
import {navigation} from '../../actions';
import {authenticate} from '../../actions/auth';
import LOADER from '../Util/Loader';


export default (BaseComponent)  => (condition) => {
   class REQUIREDAUTHANDROLE extends Component {
      async componentDidMount() {
        await this.props.authenticate();
        if(!this.props.auth){
          this.props.navigation('/')
        }
        if(this.props.auth.profile !== undefined){
          if(this.props.auth.profile.role !== condition){
              this.props.navigation('/')
          }
        }
      }
      componentWillUpdate(nextProps, nextState) {
        if(!nextProps.auth){
          this.props.navigation('/')
        }
      }

      render() {
          return (
            <BaseComponent {...this.props}/>
          );
      }
  }

  function mapStateToProps({auth}) {
    return{auth}
  }

  return connect(mapStateToProps,{authenticate,navigation})(REQUIREDAUTHANDROLE)
}
