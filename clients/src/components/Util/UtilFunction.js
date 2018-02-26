import React from 'react';
import {  Message } from 'semantic-ui-react';


const isNumberValid = num => Number.isFinite(num);

const maybe = (predicate) => x => predicate(x) ? [x] : [];

const compose = (...fns) => x => {
  return fns.reduce((acc, fn) => fn(acc), x)
};

export const maybeisNumberValid = x => maybe(isNumberValid)(x);



export const ajaxCall = async (url) => {
    const response = await fetch(url);
    return await response.json();
}


export const conditionalStyle = (condition,fristCSS,lastCSS) => {
     return condition ? fristCSS : lastCSS
}


export const createErrorField = (err,description) => {
  if(err !== ''){
    return (
      <Message
     error
     header={err}
     content={description}
   />
    )
  }
}




export const renderWhenDataArrive = (statement,fn) => {
  if(statement)return ''
  else{
    return fn();
  }
}
