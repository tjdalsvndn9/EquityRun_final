import React,{Component} from 'react';
import '../Universial.css';
import './Service.css';
import PRICEMODEL from './PriceModel/PriceModel';

class SERVICE extends Component {
    render() {
        return (
            <div className="BLOCK SERVICE">
                <h2 className='title'>Find the level of service that works for you</h2>
                <PRICEMODEL/>
            </div>
        );
    }
}

export default SERVICE
