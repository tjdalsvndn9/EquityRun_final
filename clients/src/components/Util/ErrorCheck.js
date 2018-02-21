import React,{Component} from 'react';

 class ERRORCHECK extends Component {
    state = {hasError:false}
    componentDidCatch(error,info){
      this.setState({...this.state,hasError:true})
    }
    render() {
        const {hasError} = this.state
        if(hasError){
          return <div>Sorry we are messed up</div>
        }else{
          return (
              <div className="ERRORCHECK">
                  {this.props.children}
              </div>
          );
        }
    }
}

export default ERRORCHECK
