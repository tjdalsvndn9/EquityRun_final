import React,{Component} from 'react';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import './PriceModel.css'
import CHECKED from '../../../../assets/checked.png';





const planArray = [
  {
    title:'EquityRun',
    description:'Professional freelancers and the essentials to find them.',
    button:'Sign up for free'
  },
  {
    title:'EquityRun Pro',
    description:'Dedicated support and handpicked talent for your job.',
    button:'Learn More'
  },
  {
    title:'EquityRun Enterprise',
    description:"Technology and services customized to fit a company's needs.",
    button:'Learn More'
  }
]

const planDetailArray = [
  {
    detail:'Verified freelancer work history, feedback, and more',
    regular:true,
    pro:true,
    enterprise:true
  },
  {
    detail:'Instant match with the right freelancers',
    regular:true,
    pro:true,
    enterprise:true
  },
  {
    detail:'Built-in collaboration features and easy payment',
    regular:true,
    pro:true,
    enterprise:true
  },
  {
    detail:"EquityRun Payment Protection Plan",
    regular:true,
    pro:true,
    enterprise:true
  },
  {
    detail:"Premium freelancers curated by EquityRun",
    regular:false,
    pro:true,
    enterprise:true
  },
  {
    detail:'Ability to pre-fund account',
    regular:false,
    pro:true,
    enterprise:true
  },
  {
    detail:'Consolidated invoicing and billing',
    regular:false,
    pro:false,
    enterprise:true
  },
  {
    detail:'Custom portal and contract management',
    regular:false,
    pro:false,
    enterprise:true
  },
  {
    detail:'Worker classification compliance services',
    regular:false,
    pro:false,
    enterprise:true
  },
  {
    detail:'Custom reporting',
    regular:false,
    pro:false,
    enterprise:true
  },
  {
    detail:'Dedicated account management',
    regular:false,
    pro:false,
    enterprise:true
  }
]


class PRICEMODEL extends Component {


    renderHeaderCell = () => {
    return  planArray.map((value,index) => {
        return(
            <Table.HeaderCell key={index}>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
              <Button>{value.button}</Button>
            </Table.HeaderCell>
        )
      })
    }

    renderTableRow = () => {
      return planDetailArray.map((value,index) => {
        return(
          <Table.Row>
            <Table.Cell className='LEFT-COLUMN'>
              <p>{value.detail}</p>
            </Table.Cell>
            <Table.Cell className='CUSTOM-CELL'><div>{value.regular ? <img src={CHECKED}/> : ''}</div></Table.Cell>
            <Table.Cell className='CUSTOM-CELL'><div>{value.pro ? <img src={CHECKED}/> : ''}</div></Table.Cell>
            <Table.Cell className='CUSTOM-CELL'><div>{value.enterprise ? <img src={CHECKED}/> : ''}</div></Table.Cell>
          </Table.Row>
        )
      })
    }


    render() {
        return (
            <div className="PRICEMODEL">
              <Table compact celled definition fixed>
              <Table.Header>
                <Table.Row>
                 <Table.HeaderCell />
                  {this.renderHeaderCell()}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.renderTableRow()}
              </Table.Body>

            </Table>
            </div>
        );
    }
}

export default PRICEMODEL
