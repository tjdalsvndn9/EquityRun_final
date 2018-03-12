import React from 'react';
import {Form,TextArea} from 'semantic-ui-react'


const TEXTAREA = ({label,placeholder,textarea,onChange}) => (
  <Form.Field  control={TextArea} label={label} placeholder={placeholder} onChange={onChange} />
)


export default TEXTAREA;
