import React from 'react';
import { Form,Message } from 'semantic-ui-react'

const INPUT = ({input, label,placeholder,onChange,type='text',meta: { touched, error }}) => {
  const hasError = touched && error !== undefined;
  const showError = () => {
    if(hasError){
      return (
        <Message
          error
          header='error'
        content={error}
                   />
      )
    }
  }
  return(
    <Form.Field>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} {...input} error={hasError} />
      <div>
      {showError()}
      </div>
    </Form.Field>
  );
};

export default INPUT;
