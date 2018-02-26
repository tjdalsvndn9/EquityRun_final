import React,{Component} from 'react';
import './Entrepreneur_Report.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LOADER from '../../Util/Loader';
import BGCARD from '../../common/Bg-Card/Bg-Card';
import LINECHART from '../../common/Chart/LineChart/LineChart'
import BARCHART from '../../common/Chart/BarChart/BarChart'
import PIECHART from '../../common/Chart/PieChart/PieChart'
import CRAZYLINE from '../../common/Chart/CrazyLine/CrazyLine';
import PROGRESSBAR from '../../common/ProgressBar/ProgressBar';
import ACCORDIAN from '../../common/Accordian/Accordian';
import PDFVIEWER from '../../common/PDFViewer/PDFViewer'
import PDF from '../../../assets/pdf.pdf'



class ENTREPRENEURREPORT extends Component {
    render() {
        return (
            <div className='ENTREPRENEURREPORT'>
                <div className='container'>
                <BGCARD cardStyle={{margin:'1rem 0',minWidth:'900px'}}>
                  <div className='container-inner'>
                    <h3>Project you posted</h3>
                    <h5>Project 1</h5>
                    <PROGRESSBAR
                    title='progress'
                    progress={50}
                    />
                    <Link to='/message/:id'>Talk to my employee</Link>
                    <ACCORDIAN
                    title={'View Contract'}
                    >
                    <PDFVIEWER file={PDF}/>
                    </ACCORDIAN>
                  </div>
                </BGCARD>
                <BGCARD cardStyle={{margin:'1rem 0', minWidth:'900px'}}>
                  <div>
                  <LINECHART
                  title='Developer'
                  width={750}
                  height={300}
                  />
                  <BARCHART
                  title='Hired'
                  width={750}
                  height={300}
                  />
                  <PIECHART
                  title='Expense'
                  width={100}
                	height={50}
                	options={{
                		maintainAspectRatio: false
                	}}
                  />
                  <CRAZYLINE
                  title='Freelancers'
                  width={750}
                  height={300}
                  />
                  </div>
                </BGCARD>
                </div>
            </div>
        );
    }
}


function mapStateToProps({auth}) {
  return{auth}
}


export default ENTREPRENEURREPORT
