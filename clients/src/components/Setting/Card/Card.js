import React,{Component} from 'react';
import { Card, Icon, Button } from 'semantic-ui-react'
import './Card.css';

class CARD extends Component {
    render() {
        return (
            <div className="CARD">
            <Card>
                <Card.Content>
                 <Card.Header>
                   {this.props.header}
                 </Card.Header>
                 <Card.Description>
                   {this.props.description}
                 </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button>{this.props.button}</Button>
                </Card.Content>
                </Card>
            </div>
        );
    }
}

export default CARD
