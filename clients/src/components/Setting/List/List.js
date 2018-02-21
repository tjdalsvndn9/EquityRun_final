import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeBackGroundColor} from '../../../actions/setting';
import './List.css';
import {ListArray} from './ListArray';


 class LIST extends Component {

   state = {
     clickedBackgroundColor:{backgroundColor:'#5193DD'},
     clickedColor:{color:'white'},
   }


   componentDidMount() {
     ListArray.map((value,index) => {
       if(value.url){
         if(window.location.pathname.includes(value.url)){
           this.props.changeBackGroundColor(index);
         }
       }
     })
   }

   onClick = index => {
     this.props.changeBackGroundColor(index);
   }

   renderList = () => {
     return ListArray.map((value,index) => {
         if(!value.url){
           return(
             <li key={index} className='LIST-TITLE'>
              {value.title}
             </li>
           )
         }
         else{
           return (
             <Link to={'/setting' + value.url}
             key={index}
             style={this.props.selectedList === index ? this.state.clickedColor : {}}
             ><li
             className='LIST-DETAIL'
             key={index}
             onClick={() => this.onClick(index)}
             style={this.props.selectedList === index ? this.state.clickedBackgroundColor : {}}
             >
              {value.title}
             </li></Link>
           )
         }
     })
   }

    render() {
        return (
            <div className="LIST">
              <div>
              <ul>
                {this.renderList()}
              </ul>
              </div>
            </div>
        );
    }
}

LIST.propTypes = {
  selectedList:PropTypes.number
}


function mapStateToProps({selectedList}) {
  return{
    selectedList
  }
}

export default connect(mapStateToProps,{changeBackGroundColor})(LIST)
