import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './BarChart.css'


class BARCHART extends Component {
    state = {
      data:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
      }
    }
    render() {
        return (
            <div className="BARCHART">
              <h2>{this.props.title}</h2>
              <Bar data={this.state.data}
                width={this.props.width}
                height={this.props.height}
                />
            </div>
        );
    }
}

export default BARCHART
