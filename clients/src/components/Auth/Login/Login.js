import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {submitUser} from '../../../actions/auth'
import AUTHFORM from '../Common/Form';
import '../Css/Auth.css'
import './Login.css';
import { Card, Button, Image,Form, Input,Icon } from 'semantic-ui-react'

export class LOGIN extends Component {

    state = {
      credential:{
        email:'',
        password:''
      }
    }

    onChange = (e,text) => {
      switch(text){
        case 'email':
        return this.setState({credential:{email:e.target.value,password:this.state.credential.password}})
        case 'password':
        return this.setState({credential:{password:e.target.value,email:this.state.credential.email}})
      }
    }

    onClick = text => {
      switch(text){
        case 'signin':
        this.props.submitUser(this.state.credential)
        return this.setState({credential:{email:'',password:''}})
      }
    }


    render() {
        const {email,password} = this.state.credential;
        return (
            <div className="AUTH-BLOCK LOGIN">
              <div>
                   <Card>
                     <Card.Content>
                       <Card.Header>
                         Log in and get to work
                       </Card.Header>
                       <Card.Description>
                          <AUTHFORM
                          onChangeEmail={e => this.onChange(e,'email')}
                          onChangePassword={e => this.onChange(e,'password')}
                          password={password}
                          email={email}
                          />
                       </Card.Description>
                     </Card.Content>
                     <Card.Content extra>
                       <div className='auth ui two buttons'>
                         <Button basic className='signup'><Link to='/signup'>Sign Up</Link></Button>
                         <Button basic className='signin' onClick={() => this.onClick('signin')}>Sign In</Button>
                       </div>
                       <div>
                         <a href='/auth/facebook'><Button color='facebook' className='facebook'>
                          <Icon name='facebook'/> Login with Facebook
                        </Button></a>
                       </div>
                     </Card.Content>
                   </Card>
              </div>
            </div>
        );
    }
}

export default connect(null,{submitUser})(LOGIN);
