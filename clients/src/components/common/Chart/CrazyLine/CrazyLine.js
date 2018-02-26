import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import color from 'rcolor';


class CRAZY extends Component {
    state = {
      data:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
      },
      intervalId:''
    }
    componentDidMount(){


    const changeColor =   setInterval(() => {
        const {datasets,labels} = this.state.data;

        var oldDataSet = datasets[0];
        var newData = [];

        for(var x=0; x< labels.length; x++){
          newData.push(Math.floor(Math.random() * 100));
        }

        var newDataSet = {
          ...oldDataSet
        };

        newDataSet.data = newData;
        newDataSet.backgroundColor = color();
        newDataSet.borderColor = color();
        newDataSet.hoverBackgroundColor = color();
        newDataSet.hoverBorderColor = color();

        var newState = {
          ...this.state,
          data:{
            labels:this.state.data.labels,
            datasets: [newDataSet]
          }
        };

        this.setState(newState);
      }, 5000);


      this.setState({intervalId:changeColor})
    }

    componentWillUnmount(){
      clearInterval(this.state.intervalId)
    }
    render() {
        return (
            <div className="CRAZY">
              <h2>{this.props.title}</h2>
                <Bar data={this.state.data} />
            </div>
        );
    }
}

export default CRAZY
