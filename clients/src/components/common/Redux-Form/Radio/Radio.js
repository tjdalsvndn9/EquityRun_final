import React from 'react';
import { Form} from 'semantic-ui-react'


const RADIO = ({label,value1,value2,value3,state,onChange}) => {
  return(
    <Form.Group inline="inline">
      <label>{label}</label>
      <Form.Radio label='Development' value={value1} checked={state === value1} onChange={onChange}/>
      <Form.Radio label='Design' value={value2} checked={state === value2} onChange={onChange}/>
      <Form.Radio label='Marketing' value={value3} checked={state === value3} onChange={onChange}/>
    </Form.Group>
  )
}

export default RADIO;
