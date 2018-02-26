import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';
import './PieChart.css'


class PIECHART extends Component {
    state = {
      data:{
        labels: [
        		'Red',
        		'Green',
        		'Yellow'
        	],
        	datasets: [{
        		data: [300, 50, 100],
        		backgroundColor: [
        		'#FF6384',
        		'#36A2EB',
        		'#FFCE56'
        		],
        		hoverBackgroundColor: [
        		'#FF6384',
        		'#36A2EB',
        		'#FFCE56'
        		]
        	}]
      }
    }
    render() {
        return (
            <div className="PIECHART">
              <h2>{this.props.title}</h2>
                <div className='PIECHART-ROW'>
                <Pie data={this.state.data}
                width={this.props.width}
                height={this.props.height}
                option={this.props.option}
                />
                </div>
            </div>
        );
    }
}

export default PIECHART
