import React, {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import { Icon } from 'semantic-ui-react'
import '../../../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';
import './Accordian.css';


class ACCORDIAN extends Component {
      render() {
        return (
            <div className="ACCORDIAN">
            <Accordion>
             <AccordionItem>
                 <AccordionItemTitle>
                     <h3>{this.props.title}  <Icon name='arrow down' /></h3>
                 </AccordionItemTitle>
                 <AccordionItemBody>
                    {this.props.children}
                 </AccordionItemBody>
             </AccordionItem>
          </Accordion>
            </div>
        );
    }
}

export default ACCORDIAN
