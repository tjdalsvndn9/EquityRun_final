import React from 'react'
import {Form} from 'semantic-ui-react';
import ReactTags from 'react-tag-autocomplete';
import './Tag.css';

const TAG = ({label,tags,suggestions,handleDelete,handleAddition}) => {
  return(
    <div className='TAG'>
    <Form.Field>
      <label>{label}</label>
      <ReactTags
     tags={tags}
     suggestions={suggestions}
     handleDelete={handleDelete}
     handleAddition={handleAddition} />
    </Form.Field>
    </div>
  );
}


export default TAG;
