import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {submitUser} from '../../../actions/auth'
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
                         <Form>
                           <Form.Field>
                             <label>Email Address</label>
                             <Input
                             fluid
                             onChange={e => this.onChange(e,'email')}
                             icon='user'
                             value={email}
                             type='text'
                             placeholder='email address'
                             iconPosition='left'
                             className='email' />
                           </Form.Field>
                           <Form.Field>
                             <label>Password</label>
                             <Input
                             fluid
                             icon='lock'
                             placeholder='password'
                             type='password'
                             onChange={e => this.onChange(e,'password')}
                             iconPosition='left'
                             value={password}
                             className='password'/>
                           </Form.Field>
                         </Form>
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
