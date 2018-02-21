import React,{Component} from 'react';
import '../Universial.css';
import './Ad.css';
import { Button } from 'semantic-ui-react'

class AD extends Component {

    render() {
        return (
            <div className="BLOCK AD">
              <h2 className='title'>Build Your Online Team</h2>
              <Button>Get Started</Button>
            </div>
        );
    }
}

export default AD
