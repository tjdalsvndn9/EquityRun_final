import React,{Component} from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import './Loader.css';


class LOADER extends Component {
  loaderThis = () => {
    if(this.props.loaderReason){
      return (
        <Segment>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>

        <Image src='/assets/images/wireframe/short-paragraph.png' />
      </Segment>
      )
    }else{
      return(
        <div>
          {this.props.children}
        </div>
      )
    }
  }

    render() {
        return (
            <div className="LOADER">
                {this.loaderThis()}
            </div>
        );
    }
}

export default LOADER
