import React, {Component} from 'react';
import {Button, Checkbox, Form, Select} from 'semantic-ui-react'
import ReactTags from 'react-tag-autocomplete';
import './PostJob.css';
import {maybeisNumberValid} from '../../Util/UtilFunction';

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
    suggestions: [
        { name: "Bananas" },
        {  name: "Mangos" },
        { name: "Lemons" },
        { name: "Apricots" }
    ]
  }
  handleChange = (e,{value}) =>   this.setState({category:value});

  handleChangeInput = (e,text) =>   this.setState({[text]:e.target.value});
  handleChangeSelect = (e,{value}) => this.setState({deadline:value});

  onSubmit = () => {
    const {equity} = this.state;
    const numberedEquity = Number(equity);
    const newState = Object.keys(this.state)
    .filter(value => value !== 'suggestions')
    .reduce((acc,val) => {
      acc[val] = this.state[val];
      return acc;
    },{});
    const verifiedEquity = maybeisNumberValid(numberedEquity)[0] === numberedEquity ? Number(numberedEquity.toFixed(2)) : 0;
    console.log({...newState, equity:verifiedEquity })
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
    return (<div className="POSTJOB">
      <Form>
        <Form.Group inline="inline">
          <label>Category</label>
          <Form.Radio label='Development' value='dev' checked={this.state.category === 'dev'} onChange={this.handleChange}/>
          <Form.Radio label='Design' value='des' checked={this.state.category === 'des'} onChange={this.handleChange}/>
          <Form.Radio label='Marketing' value='mar' checked={this.state.category === 'mar'} onChange={this.handleChange}/>
        </Form.Group>

        <Form.Field>
          <label>Job Title</label>
          <input placeholder='Looking for a Node js developer' onChange={e => this.handleChangeInput(e,'title')}/>
        </Form.Field>

        <Form.Field>
          <Form.TextArea
          label='Job Description'
          placeholder='Tell us more about the job and expectation'
          onChange={e => this.handleChangeInput(e,'description')}
          />
        </Form.Field>

        <Form.Field
        control={Select}
        label='Deadline'
        options={options}
        onChange={this.handleChangeSelect}
        placeholder='Less than'/>
          <Form.Field>
            <label>Equity (%)</label>
            <input
            placeholder='1.5'
            onChange={e => this.handleChangeInput(e,'equity')}
            />
          </Form.Field>
        <Form.Field>
          <label>Tag (maximum 3)</label>
        <ReactTags
       tags={this.state.tags}
       suggestions={this.state.suggestions}
       handleDelete={this.handleDelete.bind(this)}
       handleAddition={this.handleAddition.bind(this)} />
      </Form.Field>
        <Button type='submit' onClick={this.onSubmit}>Submit</Button>
      </Form>
    </div>);
  }
}

export default POSTJOB;
