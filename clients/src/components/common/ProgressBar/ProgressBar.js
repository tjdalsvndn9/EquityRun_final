import React, {Component} from 'react';
import { Progress } from 'reactstrap';
import './ProgressBar.css';


class PROGRESSBAR extends Component {
    render() {
        return (
            <div className="PROGRESSBAR">
                    <h4>{this.props.title}</h4>
                    <Progress animated value={this.props.progress} max={100}>{this.props.progress}% done</Progress>
            </div>
        );
    }
}

export default PROGRESSBAR
