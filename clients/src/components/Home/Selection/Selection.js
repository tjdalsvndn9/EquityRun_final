import React,{Component} from 'react';
import './Selection.css';
import PRESENTATION from '../../../assets/presentation.png'
import MONITOR from '../../../assets/monitor.png';
import EDIT from '../../../assets/edit.png';
import CONNECTIONS from '../../../assets/connections.png';

const JobListArray = [
  {
    img:PRESENTATION,
    text:'UX/UI DESIGN'
  },
  {
    img:MONITOR,
    text:'WEB DEV'
  },
  {
    img:EDIT,
    text:'WRITER'
  },
  {
    img:CONNECTIONS,
    text:"MARKETING"
  },
  {
    img:PRESENTATION,
    text:'UX/UI DESIGN'
  },
  {
    img:MONITOR,
    text:'WEB DEV'
  },
  {
    img:EDIT,
    text:'WRITER'
  },
  {
    img:CONNECTIONS,
    text:"MARKETING"
  }
]

class SELECTION extends Component {
    renderImg = () => {
      return JobListArray.map((value,index) => {
        return(
          <div className='JOB-LIST' key={index}>
            <img src={value.img} alt='img'/>
            <p>{value.text}</p>
          </div>
        )
      })
    }
    render() {
        return (
            <div className="SELECTION">
                <h2>Work with someone perfect for your team</h2>
                <div className='FLEX-ROW'>
                  {this.renderImg()}
                </div>
            </div>
        );
    }
}

export default SELECTION;
