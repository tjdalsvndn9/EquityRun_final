import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signupSubmit} from '../../../actions/auth';
import AUTHFORM from '../Common/Form';
import '../Css/Auth.css'
import './SignUp.css';
import { Card, Button, Image,Form, Input } from 'semantic-ui-react'

export class SIGNUP extends Component {

    state={credential:{
      email:'',
      password:'',
      componentToggled:false,
      persona:null
    }}

    onChange = (e,text) => {
      switch(text){
        case "email":
        return this.setState({credential:{email:e.target.value, password:this.state.credential.password}})
        case "password":
        return this.setState({credential:{password:e.target.value,email:this.state.credential.email}})
      }
    }

    onClickPersonaChoice = persona => {
      this.setState({componentToggled:!this.state.componentToggled, persona})
    }

    choosePersona = () => {
      const {componentToggled} = this.state;
      if(!componentToggled){
        return(
          <Card>
            <Card.Content>
              <Card.Header>
                Sign Up
              </Card.Header>
              <Card.Description className={!componentToggled ? 'BUTTON-DESCRIPTION' : ''}>
                <Button onClick={() => this.onClickPersonaChoice('entreprener')}>Entrepreneur</Button>
                <Button onClick={() => this.onClickPersonaChoice('freelancer')}>Freelancer</Button>
              </Card.Description>
            </Card.Content>
          </Card>
        )
      }else{
        return (
          <Card>
            <Card.Content>
              <Card.Header>
                Sign Up
              </Card.Header>
              <Card.Description className={!componentToggled ? 'BUTTON-DESCRIPTION' : ''}>
               <AUTHFORM
               onChangeEmail={e => this.onChange(e,'email')}
               onChangePassword={e => this.onChange(e,'password')}
               email={this.state.credential.email}
               password={this.state.credential.password}
               />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='auth ui two buttons'>
                <Button basic className='login'><Link to='/login'>Back</Link></Button>
                <Button basic className='signup' onClick={this.onClick}>Sign Up</Button>
              </div>
            </Card.Content>
          </Card>
        )
      }
    }

    onClick = () => {
      const {persona} = this.state;
      persona === 'entreprener' ?  this.props.signupSubmit({...this.state.credential, role:'entreprener'}):
      this.props.signupSubmit({...this.state.credential, role:'freelancer'});
    }

    render() {
        return (
            <div className="AUTH-BLOCK SIGNUP">
              <div>
                {this.choosePersona()}
              </div>
            </div>
        );
    }
}

export default connect(null,{signupSubmit})(SIGNUP);
