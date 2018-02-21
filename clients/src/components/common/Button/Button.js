import React,{Component} from 'react';
import { Button } from 'semantic-ui-react'
import './Button.css';

class BUTTON extends Component {

    render() {
        return (
            <div className="BUTTON">
                  <Button
                  style={this.props.style}
                  onClick={this.props.onClick}>{this.props.text}</Button>
            </div>
        );
    }
}

export default BUTTON
