import React from 'react';
import {Form, Select} from 'semantic-ui-react'
const SELECT = ({options,label,onChange,placeholder}) => {
  return(
    <Form.Field
    control={Select}
    label={label}
    options={options}
    onChange={onChange}
    placeholder={placeholder}/>
  )
}

export default SELECT;
