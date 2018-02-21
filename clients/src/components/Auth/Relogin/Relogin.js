import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../Css/Auth.css'
import '../Login/Login.css';
import { Card, Button, Image,Form, Input } from 'semantic-ui-react'

class LOGIN extends Component {

    componentDidMount() {
      console.log(this.props.location.state)
    }

    render() {
        return (
            <div className="AUTH-BLOCK LOGIN">
              <div>
                   <Card>
                     <Card.Content>
                       <Card.Header>
                         Re Login
                       </Card.Header>
                       <Card.Description>
                         <Form>
                           <Form.Field>
                             <label>Email Address</label>
                             <Input fluid icon='user' placeholder='email address' iconPosition='left' />
                           </Form.Field>
                           <Form.Field>
                             <label>Password</label>
                             <Input fluid icon='lock' placeholder='password' type='password' iconPosition='left' />
                           </Form.Field>
                         </Form>
                       </Card.Description>
                     </Card.Content>
                     <Card.Content extra>
                       <div className='auth ui two buttons'>
                         <Button basic>Authenticate</Button>
                       </div>
                     </Card.Content>
                   </Card>
              </div>
            </div>
        );
    }
}

export default LOGIN;
