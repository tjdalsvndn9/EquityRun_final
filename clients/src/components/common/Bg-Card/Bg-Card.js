import React,{Component} from 'react';
import { Card } from 'semantic-ui-react';
import './Bg-Card.css';


class BGCARD extends Component {
    render() {
        return (
            <div className="BGCARD">
            <Card style={this.props.cardStyle}>
              <Card.Content>
                <Card.Description>
                  {this.props.children}
                </Card.Description>
              </Card.Content>
              </Card>
            </div>
        );
    }
}


export default BGCARD;
