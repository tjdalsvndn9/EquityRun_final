import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signupSubmit} from '../../../actions/auth';
import '../Css/Auth.css'
import './SignUp.css';
import { Card, Button, Image,Form, Input } from 'semantic-ui-react'

export class SIGNUP extends Component {

    state={credential:{
      email:'',
      password:''
    }}

    onChange = (e,text) => {
      switch(text){
        case "email":
        return this.setState({credential:{email:e.target.value, password:this.state.credential.password}})
        case "password":
        return this.setState({credential:{password:e.target.value,email:this.state.credential.email}})
      }
    }

    onClick = () => {
      this.props.signupSubmit(this.state.credential);
    }

    render() {
        return (
            <div className="AUTH-BLOCK SIGNUP">
              <div>
                   <Card>
                     <Card.Content>
                       <Card.Header>
                         Sign Up
                       </Card.Header>
                       <Card.Description>
                         <Form>
                           <Form.Field>
                             <label>Email Address</label>
                             <Input fluid icon='user'
                             onChange={e => this.onChange(e,'email')}
                             value={this.state.credential.email}
                             className='email'
                             placeholder='email address' iconPosition='left' />
                           </Form.Field>
                           <Form.Field>
                             <label>Password</label>
                             <Input fluid icon='lock'
                             placeholder='password'
                             className='password'
                             onChange={e => this.onChange(e,'password')}
                             type='password'
                             iconPosition='left' />
                           </Form.Field>
                         </Form>
                       </Card.Description>
                     </Card.Content>
                     <Card.Content extra>
                       <div className='auth ui two buttons'>
                         <Button basic className='login'><Link to='/login'>Back</Link></Button>
                         <Button basic className='signup' onClick={this.onClick}>Sign Up</Button>
                       </div>
                     </Card.Content>
                   </Card>
              </div>
            </div>
        );
    }
}

export default connect(null,{signupSubmit})(SIGNUP);
