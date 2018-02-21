import React,{Component} from 'react';
import './Background.css';

class BACKGROUND extends Component {

    render() {
        return (
            <div className="BACKGROUND">
                {this.props.children}
            </div>
        );
    }
}

export default BACKGROUND
