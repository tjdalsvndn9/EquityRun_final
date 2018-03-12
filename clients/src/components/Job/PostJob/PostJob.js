import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {fetchAction,postAJob} from '../../../actions/postJob';
import {navigation} from '../../../actions'
import { reduxForm ,Field } from 'redux-form'
import {maybeisNumberValid} from '../../Util/UtilFunction';
import LOADER from '../../Util/Loader';
import RADIO from '../../common/Redux-Form/Radio/Radio'
import INPUT from '../../common/Redux-Form/Input/Input';
import TEXTAREA from '../../common/Redux-Form/TextArea/TextArea';
import SELECT from '../../common/Redux-Form/Select/Select'
import TAG from '../../common/Redux-Form/Tag/Tag';
import './PostJob.css';



const options = [
  {
    key: 'week',
    text: 'a week',
    value: 'a week'
  }, {
    key: 'month',
    text: 'a month',
    value: 'a month'
  }, {
    key: '6 month',
    text: '6 month',
    value: '6 month'
  }, {
    key: 'a year',
    text: 'a year',
    value: 'a year'
  }
]

class POSTJOB extends Component {

  state = {
    category:null,
    title:'',
    description:'',
    deadline:null,
    tags: [],
    suggestions: [],
    equity:null
  }

   async componentDidMount(){
    const url = 'https://raw.githubusercontent.com/scienceai/list-of-programming-languages/master/data/data.json'
    this.props.fetchAction(url)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.suggestions !== this.state.suggestions){
      this.setState({suggestions:nextProps.suggestions})
    }
  }



  handleChange = (e,{value}) =>   this.setState({category:value});

  handleChangeInput = (e,text) =>   this.setState({[text]:e.target.value})

  handleChangeSelect = (e,{value}) => this.setState({deadline:value});

  onSubmit = async() => {
    const {equity} = this.state;
    const numberedEquity = Number(equity);
    const newState = Object.keys(this.state)
    .filter(value => value !== 'suggestions')
    .reduce((acc,val) => {
      acc[val] = this.state[val];
      return acc;
    },{});
    const verifiedEquity = maybeisNumberValid(numberedEquity)[0] === numberedEquity ? Number(numberedEquity.toFixed(2)) : 0;
    await this.props.postAJob({...newState, equity:verifiedEquity, userId:this.props._id })
    this.props.navigation('setting/billing')
  }

  handleDelete =  (i) =>  {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  handleAddition =  (tag)  => {
    const tags = [...this.state.tags, tag];
    this.setState({ tags })
  }



  render() {
    return (
      <LOADER loaderReason={this.props.loading}>
      <div className="POSTJOB">
      <Form onSubmit={this.onSubmit}>
        <RADIO
        label='Category'
        value1='dev'
        value2='des'
        value3='mar'
        state={this.state.category}
        onChange={this.handleChange}
        />
        <Field
        name="title"
        component={INPUT}
        value={this.state.title}
        onChange={e => this.handleChangeInput(e,'title')}
        label='Title'
        placeholder='Looking for a Node js develoepr'
        type="text"/>

        <TEXTAREA
        label='Job Description'
        value={this.state.description}
        onChange={e => this.handleChangeInput(e,'description')}
        placeholder='Tell us more about the job and expectation'
        />


        <SELECT
          label='Deadline'
          options={options}
          onChange={this.handleChangeSelect}
          placeholder='Less Than'
        />

        <Field
        name="equity"
        label='Equity (%)'
        placeholder='1.5'
        component={INPUT}
        value={this.state.equity}
        onChange={e => this.handleChangeInput(e,'equity')}
        type="text"/>
        <TAG
        label="Tag (maximum 3)"
        tags={this.state.tags}
        suggestions={this.state.suggestions}
        handleDelete={this.handleDelete}
        handleAddition={this.handleAddition}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
    </LOADER>
  );
  }
}


const validate = values => {
  const {title} = values;
  const errors = {};
  if(!title || title.trim() === ''){
    errors.title = 'Enter a title';
  }
  return errors;
}

function mapStateToProps(tags){
  const {loading,suggestions} = tags.tags;
  const {_id} = tags.auth;
  return {loading,suggestions,_id}
}


export default reduxForm({
  form:'PostJobForm',
  validate
})(connect(mapStateToProps,{navigation,fetchAction,postAJob})(POSTJOB));
