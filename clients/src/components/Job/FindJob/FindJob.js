import React, {Component} from 'react';
import {Button, Checkbox, Form, Select} from 'semantic-ui-react'
import './FindJob.css';
import BGCARD from '../../common/Bg-Card/Bg-Card'



class FINDJOB extends Component {
  render() {
    return (
      <div className="FINDJOB">
          <Form>
            <Form.Field>
               <input placeholder='Search' />
            </Form.Field>
          </Form>
          <BGCARD>
            <h3>Title is this</h3>
            <p>Description is this</p>
            <p className='EQUITY'>Equity  2%</p>
          </BGCARD>
      </div>
    );
  }
}

export default FINDJOB;
