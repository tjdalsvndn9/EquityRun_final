import React,{Component} from 'react';
import { Card, Button, Image,Form, Input,Icon } from 'semantic-ui-react'




class AUTHFORM extends Component {

    render() {
        return (
            <Form>
              <Form.Field>
                <label>Email Address</label>
                <Input
                fluid
                onChange={this.props.onChangeEmail}
                icon='user'
                value={this.props.email}
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
                onChange={this.props.onChangePassword}
                iconPosition='left'
                value={this.props.password}
                className='password'/>
              </Form.Field>
            </Form>
        );
    }
}

export default AUTHFORM
