import React from 'react';
import {Form} from 'semantic-ui-react'


const TEXTAREA = ({label,placeholder,onChange}) => {
  return(
    <Form.Field>
      <Form.TextArea
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      />
    </Form.Field>
  );
}


export default TEXTAREA;
